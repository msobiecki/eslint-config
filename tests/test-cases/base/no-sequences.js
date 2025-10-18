// ❌ Violates: no-sequences
const baz = () => ((bar = 123), 10);
