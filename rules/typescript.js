const typescriptRules = {
   // Enforce consistent usage of type imports
  '@typescript-eslint/consistent-type-imports': [
    'warn',
    {
      fixStyle: 'inline-type-imports',
    },
  ],

  // Enforce consistent usage of type exports
  '@typescript-eslint/consistent-type-exports': [
    'warn',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
};

export default typescriptRules;
