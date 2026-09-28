const fs=require("fs"),vm=require("vm");
const src=fs.readFileSync("interactive/bit-visualizer/bits.js","utf8");
const start=src.indexOf("function maxForWidth"),end=src.indexOf("function render");
const box={};vm.createContext(box);vm.runInContext(src.slice(start,end),box);
const eq=(a,b,m)=>{if(a!==b)throw new Error(m+": "+a+" != "+b)};
eq(box.maxForWidth(8),255n,"8-bit max");eq(box.maxForWidth(16),65535n,"16-bit max");
eq(box.maxForWidth(32),4294967295n,"32-bit max");
eq(box.parseUnsigned("255",8),255n,"parse 255");
eq(box.formatBinary(0x1234n,16),"00010010 00110100","binary grouping");
for(const [v,w] of [["256",8],["-1",8],["12x",16]]){let ok=false;try{box.parseUnsigned(v,w)}catch{ok=true}if(!ok)throw new Error("Expected rejection "+v)}
console.log("Bit visualizer tests passed");
