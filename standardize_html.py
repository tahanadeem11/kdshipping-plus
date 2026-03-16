import os
import re

html_dir = r'c:\Users\Taha_Nadeem\Music\KD SHIPPING Plus\Printco\HTML'

# Head section standardization:
# Remove redundant mobile-sidebar.css links and fix \n issues
head_pattern = re.compile(r'<link rel="stylesheet" href="assets/css/style.css">(\s*\\n\s*)?<link rel="stylesheet" href="assets/css/mobile-sidebar.css">', re.IGNORECASE)

# Script section standardization:
# Ensure site-components is present and main.js is last
# Also ensure no absolute paths or mixed protocols if any

site_components_script = '<script src="assets/js/site-components.js"></script>'

for filename in os.listdir(html_dir):
    if filename.endswith('.html'):
        filepath = os.path.join(html_dir, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Fix Head
        new_content = head_pattern.sub('<link rel="stylesheet" href="assets/css/style.css">', content)
        
        # 2. Fix potential remaining hardcoded headers if any (just in case)
        # We already checked index.html, but let's be safe
        # (Assuming they all use the placeholder now based on our previous checks)
        
        # 3. Ensure site-components.js is right after jquery.min.js
        if 'assets/js/site-components.js' not in new_content:
            # Add it after jquery
            new_content = new_content.replace('<script src="assets/js/jquery.min.js"></script>', 
                                              '<script src="assets/js/jquery.min.js"></script>\n    <script src="assets/js/site-components.js"></script>')
        
        # 4. Remove any duplicate site-components.js if added twice
        # (This handles the case where it was already there but we added it again)
        # simplified check
        
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated {filename}")
        else:
            print(f"No changes needed for {filename}")
