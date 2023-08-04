#!/bin/bash

# Function to print usage
print_usage() {
    echo "Usage: $0 <major|minor|patch> [-v custom_version] [-p path/to/package.json]"
}

# Check if argument is provided
if [ $# -lt 1 ]; then
    echo "Error: Missing argument."
    print_usage
    exit 1
fi

# Check if argument is valid
if [ "$1" != "major" ] && [ "$1" != "minor" ] && [ "$1" != "patch" ]; then
    echo "Error: Invalid argument. Must be 'major', 'minor', or 'patch'."
    print_usage
    exit 1
fi

# Set default values for custom_version and package_json_path
custom_version=""
package_json_path="package.json"
first_arg="$1"

# Parse flags using a simple loop and case statement
shift # Skip the first argument
while [ $# -gt 0 ]; do
    case "$1" in
        -v)
            custom_version="$2"
            shift 2 # Skip the flag and its argument
        ;;
        -p)
            package_json_path="$2"
            shift 2 # Skip the flag and its argument
        ;;
        *)
            echo "Error: Invalid option $1" >&2
            print_usage
            exit 1
        ;;
    esac
done

# Check if package.json exists.
if [ ! -f "$package_json_path" ]; then
    echo "Error: package.json not found at $package_json_path."
    exit 1
fi

# Extract current version from package.json.
current_version=$(grep -oE '"version": "([0-9]+\.[0-9]+\.[0-9]+)' "$package_json_path" | cut -d'"' -f4)

# Validate the version using regex (optional).
if ! echo "$current_version" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+$'; then
    echo "Error: Invalid version found in package.json: $current_version"
    exit 1
fi

# Increment the version based on the first argument or set it to the custom version provided as an argument using the -v flag.
if [ -n "$custom_version" ]; then # If custom version is provided, use it.
    new_version=$custom_version
else # Otherwise, increment the version based on the first argument using custom logic.
    major=$(echo $current_version | cut -d. -f1)
    minor=$(echo $current_version | cut -d. -f2)
    patch=$(echo $current_version | cut -d. -f3)
    
    case "$first_arg" in
        major)
            major=$((major + 1))
            minor=0
            patch=0
        ;;
        minor)
            minor=$((minor + 1))
            patch=0
        ;;
        patch)
            patch=$((patch + 1))
        ;;
    esac
    
    new_version="$major.$minor.$patch"
fi

# Replace the old version with the new version in package.json.
sed -i "s/\"version\": \"$current_version\"/\"version\": \"$new_version\"/" "$package_json_path"

echo "Updated version from $current_version to $new_version"
