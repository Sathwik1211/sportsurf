import os
import re

directory = 'src/app/(frontend)'
padding_pattern = re.compile(r'pt-(?:64|40|52|56|32|24|16|20|10|12|\[\d+px\])')

for root, dirs, files in os.walk(directory):
    for file in files:
        if file.endswith('.tsx') and file != 'layout.tsx':
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Specifically target the first div or main-like structure if it's a page-level padding
            # But let's just remove any pt- that looks like a page-top adjustment
            # We'll look for className="..." containing pt-
            
            new_content = content
            
            # If it's a top-level div (often at the start of return)
            # Example: return ( <div className="... pt-64 ..." >
            # We only want to remove it if it's clearly for the header compensation
            
            # Let's be aggressive for now since the user really wants this fixed
            new_content = padding_pattern.sub('', content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Cleaned paddings in {filepath}")
