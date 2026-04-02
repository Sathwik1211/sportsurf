import os
import re

directory = 'src/app/(frontend)'

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Match ANY return (...) <div ...
            # Removed count=1 to patch all instances (loading states AND main content)
            pattern = re.compile(r'(return\s*\(?\s*)<div\s+className="([^"]*)"')
            
            def add_padding(match):
                prefix = match.group(1)
                classes = match.group(2)
                # Remove all previous pt-
                classes = re.sub(r'\s*pt-\[?\d+p?x?\]?', '', classes)
                # Apply pt-12 (48px) to all pages for double-protection
                classes = f"pt-12 {classes}"
                return f'{prefix}<div className="{classes}"'

            new_content = pattern.sub(add_padding, content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Patched {filepath}")
