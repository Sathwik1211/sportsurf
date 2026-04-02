const fs = require('fs');

const data = JSON.parse(fs.readFileSync('database_content_dump.json', 'utf8'));

// Map keys from JSON to Prisma Table Names
const tableMappings = {
  siteSettings: 'SiteSettings',
  users: 'User',
  categories: 'Category',
  subCategories: 'SubCategory',
  products: 'Product',
  projects: 'Project',
  testimonials: 'Testimonial',
  heroSections: 'HeroSection',
  homepageGridItems: 'HomepageGridItem',
  navigationItems: 'NavigationItem',
  tickerUpdates: 'TickerUpdate'
};

function escapeValue(val) {
  if (val === null) return 'NULL';
  if (typeof val === 'boolean') return val ? 'true' : 'false';
  if (typeof val === 'number') return val;
  if (typeof val === 'string') {
    // Escape single quotes for SQL
    return "'" + val.replace(/'/g, "''") + "'";
  }
  // Fallback for objects/arrays if any snuck in (though JSON usually has strings for jsonb in Prisma)
  return "'" + JSON.stringify(val).replace(/'/g, "''") + "'";
}

let sqlOut = '-- PostgreSQL Database Dump from database_content_dump.json\n\n';

for (const [key, rows] of Object.entries(data)) {
  const tableName = tableMappings[key];
  if (!tableName) {
    console.warn(`Warning: No table mapping found for key '${key}', skipping.`);
    continue;
  }

  if (rows.length === 0) {
    sqlOut += `-- No data for table "${tableName}"\n\n`;
    continue;
  }

  sqlOut += `-- Data for Name: ${tableName}\n`;
  
  for (const row of rows) {
    // Assuming the JSON has standard keys matching Prisma column names
    const columns = Object.keys(row);
    const values = columns.map(col => escapeValue(row[col]));
    
    // Quote table and column names with double quotes to match Prisma's exact casing
    const colsStr = columns.map(c => `"${c}"`).join(', ');
    const valsStr = values.join(', ');
    
    sqlOut += `INSERT INTO "${tableName}" (${colsStr}) VALUES (${valsStr});\n`;
  }
  sqlOut += `\n`;
}

fs.writeFileSync('database_content_dump.sql', sqlOut, 'utf8');
console.log('Successfully generated database_content_dump.sql');
