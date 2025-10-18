// ❌ Violates: no-useless-concat
const a = `some` + `string`;

// these are the same as "10"
const b = '1' + '0';
const c = '1' + `0`;
const d = `1` + '0';
const e = `1` + `0`;
