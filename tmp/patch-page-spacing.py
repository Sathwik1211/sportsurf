import os
import re

files = [
    'src/app/(frontend)/about/page.tsx',
    'src/app/(frontend)/contact/page.tsx',
    'src/app/(frontend)/projects/page.tsx',
    'src/app/(frontend)/products/page.tsx'
]

# Patterns to match and replace
# We want to add pt-16 to the main level div
# We want to remove pt-[some number] that was there before

for fpath in files:
    full_path = os.path.join('c:/Users/raika/SPORTSURF', fpath)
    if not os.path.exists(full_path):
        continue
        
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Use re.sub to handle flexible whitespace
    # Find the first div after 'return ('
    pattern = re.compile(r'(return\s*\(\s*)<div\s+className="([^"]*)"')
    
    def add_padding(match):
        prefix = match.group(1)
        classes = match.group(2)
        # Remove any existing pt- classes first
        classes = re.sub(r'\s*pt-\[?\d+p?x?\]?', '', classes)
        # Add pt-24 (96px) to be absolutely sure we clear the 160-200px header comfortably
        # Total offset will be Layout (218px) + Page (96px) = 314px?
        # No, wait. 218px layout is plenty.
        # Maybe 16px is enough? 218 + 64 = 282.
        if 'pt-' not in classes:
            classes = f"pt-16 {classes}"
        
        # Increase pb to 32 as well for better bottom spacing
        classes = re.sub(r'pb-20', 'pb-32', classes)
        
        return f'{prefix}<div className="{classes}"'

    new_content = pattern.sub(add_padding, content, count=1)
    
    # Also remove noPadding from first Section in About
    if 'about/page.tsx' in fpath:
        new_content = re.sub(r'Section\s+noPadding', 'Section', new_content)
        new_content = re.sub(r'mb-20', 'mb-32', new_content)

    if new_content != content:
        with open(full_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Patched {fpath}")
