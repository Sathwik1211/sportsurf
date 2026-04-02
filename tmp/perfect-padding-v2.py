import os
import re

directory = 'src/app/(frontend)'

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            pattern = re.compile(r'(return\s*\(?\s*)<div\s+className="([^"]*)"')
            
            def add_padding(match):
                prefix = match.group(1)
                classes = match.group(2)
                classes = re.sub(r'\s*pt-\[?\d+p?x?\]?', '', classes)
                
                if file == 'page.tsx' and root == directory:
                    classes = f"pt-0 {classes}"
                else:
                    # Using pt-12 (48px) for 220 (layout) + 48 = 268px total.
                    # This clears the ~210 header with 58px gap, which is perfect.
                    classes = f"pt-12 {classes}"
                return f'{prefix}<div className="{classes}"'

            new_content = pattern.sub(add_padding, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Patched {filepath}")

# Update layout.tsx
layout_path = os.path.join(directory, 'layout.tsx')
with open(layout_path, 'r', encoding='utf-8') as f:
    l_content = f.read()

l_new = re.sub(r'pt-\[?\d+p?x?\]?', 'pt-[220px]', l_content)
with open(layout_path, 'w', encoding='utf-8') as f:
    f.write(l_new)
print("Updated layout.tsx to 220px")
