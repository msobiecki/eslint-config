// ❌ Violates: no-return-assign
const f = () => {
  return (x = 1);
};
