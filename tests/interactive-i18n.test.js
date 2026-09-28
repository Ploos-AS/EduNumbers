"use strict";
const fs=require("fs");
const assert=require("assert");
const tools=["base-converter","bit-visualizer","twos-complement","endian-visualizer","bitmask-playground","ieee754-explorer"];
const shared=fs.readFileSync("interactive/i18n.js","utf8");
assert.match(shared,/\["no","en"\]/);
assert.match(shared,/data-no/);
assert.match(shared,/data-en/);
for(const tool of tools){
 const html=fs.readFileSync(`interactive/${tool}/index.html`,"utf8");
 const jsFiles=html.match(/<script src="([^"]+\.js)"/g)||[];
 assert.match(html,/src="\.\.\/i18n\.js"/,`${tool}: shared i18n missing`);
 assert.match(html,/data-lang="no"/,`${tool}: NO selector missing`);
 assert.match(html,/data-lang="en"/,`${tool}: EN selector missing`);
 assert.match(html,/data-no=/,`${tool}: Norwegian UI missing`);
 assert.match(html,/data-en=/,`${tool}: English UI missing`);
 const own=jsFiles.map(x=>x.match(/src="([^"]+)"/)[1]).filter(x=>!x.includes("i18n"))[0];
 const js=fs.readFileSync(`interactive/${tool}/${own}`,"utf8");
 assert.match(js,/eduText/,`${tool}: runtime localization missing`);
}
console.log("Interactive i18n parity passed for 6 tools.");