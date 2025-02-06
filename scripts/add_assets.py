import os

# Path to the HTML files
html_dir = './_build/html'
assets_dir = './assets'  # This is where your JS and CSS files are located

def inject_assets():
    # Loop through all files in the assets folder
    for asset_filename in os.listdir(assets_dir):
        asset_path = os.path.join(assets_dir, asset_filename)

        if os.path.isdir(asset_path):
            continue  # Skip directories

        # Determine whether the file is a CSS or JS file
        if asset_filename.endswith('.css'):
            file_tag = f'<link rel="stylesheet" href="./assets/{asset_filename}">'
        elif asset_filename.endswith('.js'):
            file_tag = f'<script src="./assets/{asset_filename}"></script>'
        else:
            continue  # Skip non-JS/CSS files

        # Loop through all HTML files in the build directory
        for root, dirs, files in os.walk(html_dir):
            for file_name in files:
                if file_name.endswith('.html'):
                    file_path = os.path.join(root, file_name)

                    with open(file_path, 'r') as file:
                        content = file.read()

                    # Insert the file tag just before the closing </head> tag
                    head_close_index = content.find('</head>')

                    if head_close_index == -1:
                        print(f"Error: </head> tag not found in {file_name}.")
                        continue

                    # Inject the asset tag
                    new_content = content[:head_close_index] + f"\n{file_tag}\n" + content[head_close_index:]

                    with open(file_path, 'w') as file:
                        print("adding", file_tag)
                        file.write(new_content)

                    print(f"Injected {file_tag} into {file_name}.")

def main():
    inject_assets()

if __name__ == '__main__':
    main()
