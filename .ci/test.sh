first_arg="invalid_value"

if [[ "$first_arg" == "custom_version" ]]; then
    echo "First argument is custom_version"
    elif ! [[ "$first_arg" =~ ^(custom_version|major|minor|patch)$ ]]; then
    echo "First argument is not one of the expected values"
else
    echo "First argument is one of the expected values"
fi
