// ❌ Violates: consistent-return
const getValue = (flag) => {
  if (flag) return 42;
};
