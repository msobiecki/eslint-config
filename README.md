# eslint-config

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/msobiecki/eslint-config/blob/master/LICENSE)

> Custom ESLint configuration for projects. It extends popular Airbnb ESLint config and other popular configs in one place.

## Installation

```bash
npm install --save-dev @msobiecki/eslint-config
```

## Usage

To use this ESLint configuration, you need to extend it in your project's `.eslintrc` file:

### base javascript/typescript configuration

```json
{
  "extends": "@msobiecki/eslint-config"
}
```

### react javascript/typescript configuration

```json
{
  "extends": [
    "@msobiecki/eslint-config/react",
    "@msobiecki/eslint-config/react-jsx"
  ]
}
```

### next configuration

```json
{
  "extends": ["@msobiecki/eslint-config/next"]
}
```

### jest configuration

#### base

```json
{
  "extends": ["@msobiecki/eslint-config/jest"]
}
```

#### dom

```json
{
  "extends": [
    "@msobiecki/eslint-config/jest",
    "@msobiecki/eslint-config/jest-dom"
  ]
}
```

#### react

```json
{
  "extends": [
    "@msobiecki/eslint-config/jest",
    "@msobiecki/eslint-config/jest-react"
  ]
}
```

### best practice configuration

```json
{
  "extends": ["@msobiecki/eslint-config/best-practice"]
}
```

If you have an existing ESLint configuration, you can merge it with this configuration using the `extends` property:

```json
{
  "extends": ["@msobiecki/eslint-config", "your-existing-config"]
}
```

Make sure to install the necessary peer dependencies as well:

- `eslint`
- `prettier`

## Contributing

Contributions are welcome! If you find any issues or have suggestions, please open an issue or submit a pull request.

Before submitting a pull request, please make sure to:

1. Run `lintstage` to ensure your changes adhere to the ESLint rules.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
