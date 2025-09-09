module.exports = {
  overrides: [
    {
      files: [
        "**/contexts/**/*.{js,jsx,ts,tsx}",
        "**/components/**/*.{js,jsx,ts,tsx}",
      ],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              pascalCase: true,
            },
          },
        ],
      },
    },
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      excludedFiles: [
        "**/contexts/**/*.{js,jsx,ts,tsx}",
        "**/components/**/*.{js,jsx,ts,tsx}",
      ],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            cases: {
              kebabCase: true,
            },
          },
        ],
      },
    },
  ],
};
