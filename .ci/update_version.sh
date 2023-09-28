#!/bin/bash

# Function to print usage
print_usage() {
    echo "Usage: $0 <major|minor|patch|version_number> [--force] [-p path/to/package.json]"
}

# Function to validate version format
validate_version_format() {
    local version="$1"
    if ! echo "$version" | grep -qE '^[0-9]+\.[0-9]+\.[0-9]+$'; then
        echo "Error: Invalid version format. Expected format: major.minor.patch"
        exit 1
    fi
}

# Function to update version in package.json
update_version() {
    local old_version="$1"
    local new_version="$2"
    local package_json="$3"
    sed -i "s/\"version\": \"$old_version\"/\"version\": \"$new_version\"/" "$package_json"
    echo "Updated version from $old_version to $new_version"
}

# Set default values
package_json_path="package.json"
force_flag=false

# Parse flags using a loop and case statement
while [ $# -gt 0 ]; do
    case $1 in
        -p)
            package_json_path="$2"
            shift 2 # Skip the flag and its argument
        ;;
        --force)
            force_flag=true
            shift 1 # Skip the flag
        ;;
        *)
            first_arg="$1"
            shift 1 # Skip the argument
        ;;
    esac
done

# Check if an argument is provided
if [ -z "$first_arg" ]; then
    echo "Error: Missing argument."
    print_usage
    exit 1
fi

# Check if package.json exists
if [ ! -f "$package_json_path" ]; then
    echo "Error: package.json not found at $package_json_path."
    exit 1
fi

# Determine the new version based on the provided argument
if [[ "$first_arg" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    new_version="$first_arg"
    if [ "$force_flag" = false ]; then
        validate_version_format "$new_version"
    fi
else
    if [ "$force_flag" = true ]; then
        echo "Error: The --force flag can only be used with a version number."
        exit 1
    fi
    
    if [[ ! "$first_arg" =~ ^(major|minor|patch)$ ]]; then
        echo "Error: Invalid argument. Expected values: major, minor, patch or version_number"
        print_usage
        exit 1
    fi
    
    current_version=$(grep -oE '"version": "([0-9]+\.[0-9]+\.[0-9]+)' "$package_json_path" | cut -d'"' -f4)
    
    major=$(echo "$current_version" | cut -d. -f1)
    minor=$(echo "$current_version" | cut -d. -f2)
    patch=$(echo "$current_version" | cut -d. -f3)
    
    case "$first_arg" in
        major)
            major=$((major + 1))
        ;;
        minor)
            minor=$((minor + 1))
        ;;
        patch)
            patch=$((patch + 1))
        ;;
    esac
    
    new_version="$major.$minor.$patch"
fi

# Replace the old version with the new version in package.json
current_version=$(grep -oE '"version": "([0-9]+\.[0-9]+\.[0-9]+)' "$package_json_path" | cut -d'"' -f4)
update_version "$current_version" "$new_version" "$package_json_path"
