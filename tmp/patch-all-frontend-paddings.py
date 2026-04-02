import os
import re

directory = 'src/app/(frontend)'

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find the first div after 'return ('
            # We'll use a more flexible regex for the return/div structure
            pattern = re.compile(r'(return\s*\(\s*)<div\s+className="([^"]*)"')
            
            def add_padding(match):
                prefix = match.group(1)
                classes = match.group(2)
                # Remove any existing pt- classes
                classes = re.sub(r'\s*pt-\[?\d+p?x?\]?', '', classes)
                # Add pt-24 (96px) to give generous spacing after the ~220px header
                if 'pt-' not in classes:
                    classes = f"pt-20 {classes}"
                
                # Increase pb as well
                classes = re.sub(r'pb-20', 'pb-32', classes)
                return f'{prefix}<div className="{classes}"'

            new_content = pattern.sub(add_padding, content, count=1)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Patched {filepath}")
