# Linking

## How to Use `npm link`

### In the package you want to develop (the local package)

- Navigate to the package directory
  (the directory containing the `package.json` file).
- Run:

    ```bash
    npm link
    ```

- This will:
  - Create a **folder symlink** `<npm_global_prefix>/lib/node_modules/<package_name>`
    which points to the **package's directory**.
  - Create a symlink for **the package's bin**
    in
    `<npm_global_prefix>/bin/<package_bin_command_or_package_name>`
    which points to
    `<npm_global_prefix>/lib/node_modules/<package_name>/<path_to_executable>`.
  - Register the package as being globally installed.

I can "unlink" by:

```bash
npm uninstall -g package-name
```

### In the project where you want to use the local package

- Navigate to the directory of this project
  (where you want to test or use the package you just linked).
- Run:

    ```bash
    npm link <local-package-name>
    ```

- This will:
  - Create a **folder symlink** `node_modules/<local_package_name>` which
    points to the local package directory with a relative path.
  - Create a symlink `node_modules/.bin/` pointing to
    `node_modules/<local_package_name>/<path_to_executable>`.
  - Allow you to use the locally developed package as if it were installed from npm.

I can "unlink" by:

```bash
npm unlink package-name
```
