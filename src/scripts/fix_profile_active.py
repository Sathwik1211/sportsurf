import sys

path = r"c:\Users\raika\SPORTSURF\src\app\(frontend)\profile\page.tsx"

with open(path, "r", encoding="utf-8") as f:
    content = f.read()

# Fix Duplicate useEffect Import
content = content.replace('import { useState, useEffect } from "react";\nimport { User', 'import { useState, useEffect } from "react";\nimport { User') # Just in case

if "import { UseSession, signOut }" in content:
    pass # Already there

# Replace item.active with activeTab comparison
content = content.replace("${item.active ? ", "${activeTab === item.label ? ")
content = content.replace("${item.active ?", "${activeTab === item.label ?")

with open(path, "w", encoding="utf-8") as f:
    f.write(content)

print("✅ File fixed successfully!")
