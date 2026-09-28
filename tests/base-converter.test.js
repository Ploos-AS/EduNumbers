const fs = require("fs");
const vm = require("vm");
const source = fs.readFileSync("interactive/base-converter/converter.js", "utf8");
const start = source.indexOf("function digitValue");
const end = source.indexOf("function update");
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(source.slice(start, end), sandbox);

const cases = [
  ["101010", 2, 42n],
  ["52", 8, 42n],
  ["42", 10, 42n],
  ["2A", 16, 42n],
  ["-2A", 16, -42n],
  ["ZZ", 36, 1295n],
  ["FFFFFFFFFFFFFFFF", 16, 18446744073709551615n],
];
for (const [text, base, expected] of cases) {
  const actual = sandbox.parseInBase(text, base);
  if (actual !== expected) throw new Error(`${text}/${base}: ${actual} != ${expected}`);
}
for (const [text, base] of [["2",2],["G",16],["",10]]) {
  let failed = false;
  try { sandbox.parseInBase(text, base); } catch { failed = true; }
  if (!failed) throw new Error(`Expected rejection: ${text}/${base}`);
}
console.log("Base converter tests passed");
