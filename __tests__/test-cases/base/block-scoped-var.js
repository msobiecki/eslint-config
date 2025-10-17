// ❌ Violates: block-scoped-var
const doIf = () => {
  if (true) {
    var build = true;
  }

  console.log(build);
};
