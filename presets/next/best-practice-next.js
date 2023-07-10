module.exports = {
  rules: {
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        allowList: {
          getServerSideProps: true,
        },
      },
    ],
  },
};
