#!/bin/bash

# Function to print usage
print_usage() {
  echo "Usage: $0 <major|minor|patch> [path/to/package.json]"
}

# Check if argument is provided
if [ $# -lt 1 ]; then
  echo "Error: Missing argument."
  print_usage
  exit 1
fi

# Check if argument is valid
if ! [[ "$1" =~ ^(major|minor|patch)$ ]]; then
  echo "Error: Invalid argument. Must be 'major', 'minor', or 'patch'."
  print_usage
  exit 1
fi

# Set the path to package.json
package_json_path=${2:-"package.json"}

# Check if package.json exists
if [ ! -f "$package_json_path" ]; then
  echo "Error: package.json not found at $package_json_path."
  exit 1
fi

# Extract current version from package.json
current_version=$(grep -oE '"version": "([0-9]+\.[0-9]+\.[0-9]+)' "$package_json_path" | cut -d'"' -f4)

# Validate the version using regex (optional)
if ! [[ "$current_version" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "Error: Invalid version found in package.json: $current_version"
  exit 1
fi

# Increment the version based on the argument
case "$1" in
  major)
    new_version=$(echo "$current_version" | awk -F. -v OFS=. '{$1++; $2=0; $3=0} 1')
    ;;
  minor)
    new_version=$(echo "$current_version" | awk -F. -v OFS=. '{$2++; $3=0} 1')
    ;;
  patch)
    new_version=$(echo "$current_version" | awk -F. -v OFS=. '{$3++} 1')
    ;;
esac

# Replace the old version with the new version in package.json
sed -i "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" "$package_json_path"

echo "Updated package.json version from $current_version to $new_version"
