module.exports = {
  rules: {
    "unicorn/prevent-abbreviations": [
      "error",
      {
        allowList: {
          generateStaticParams: true,
        },
      },
    ],
  },
};
