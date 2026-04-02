import os
import re

directory = 'src/app/(frontend)'

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Use a more robust return pattern to find the first div
            # Matches 'return (' or 'return' then skip to first '<div'
            pattern = re.compile(r'(return\s*\(?\s*)<div\s+className="([^"]*)"')
            
            def add_padding(match):
                prefix = match.group(1)
                classes = match.group(2)
                # Clear all previous pt- classes (including our previous pt-20)
                classes = re.sub(r'\s*pt-\[?\d+p?x?\]?', '', classes)
                # Apply a standard pt-8 (32px) to ALL pages
                classes = f"pt-8 {classes}"
                return f'{prefix}<div className="{classes}"'

            new_content = pattern.sub(add_padding, content, count=1)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Patched {filepath}")
