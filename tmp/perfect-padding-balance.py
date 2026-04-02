import os
import re

directory = 'src/app/(frontend)'

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Match return (...) <div ...
            pattern = re.compile(r'(return\s*\(?\s*)<div\s+className="([^"]*)"')
            
            def add_padding(match):
                prefix = match.group(1)
                classes = match.group(2)
                # Remove all previous pt-
                classes = re.sub(r'\s*pt-\[?\d+p?x?\]?', '', classes)
                
                # If it's the home page (page.tsx in root), set pt-0
                if file == 'page.tsx' and root == directory:
                    # Home page starts with Hero, needs exactly 220px layout clearance, 0px extra
                    classes = f"pt-0 {classes}"
                else:
                    # Secondary pages need a professional 40px breath
                    classes = f"pt-10 {classes}"
                return f'{prefix}<div className="{classes}"'

            new_content = pattern.sub(add_padding, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Patched {filepath}")

# Also update layout.tsx to 220px
layout_path = os.path.join(directory, 'layout.tsx')
with open(layout_path, 'r', encoding='utf-8') as f:
    l_content = f.read()

l_new = re.sub(r'pt-\[?\d+p?x?\]?', 'pt-[220px]', l_content)
with open(layout_path, 'w', encoding='utf-8') as f:
    f.write(l_new)
print("Updated layout.tsx to 220px")
