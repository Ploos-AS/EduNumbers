const fs=require("fs"),vm=require("vm");const s=fs.readFileSync("interactive/bitmask-playground/bitmask.js","utf8");
const a=s.indexOf("function parseHex"),b=s.indexOf("function render"),box={};vm.createContext(box);vm.runInContext(s.slice(a,b),box);
const o=box.ops(0xA5n,0x0Fn,8),eq=(a,b,m)=>{if(a!==b)throw new Error(m+": "+a+" != "+b)};
eq(o.AND,0x05n,"AND");eq(o.OR,0xAFn,"OR");eq(o.XOR,0xAAn,"XOR");eq(o.NOT,0x5An,"NOT");
eq(o.SET,0xAFn,"SET");eq(o.CLEAR,0xA0n,"CLEAR");eq(o.TOGGLE,0xAAn,"TOGGLE");
eq(box.ops(0x1234n,0x00FFn,16).CLEAR,0x1200n,"16-bit clear");eq(box.ops(0n,0n,32).NOT,0xFFFFFFFFn,"32-bit NOT");
let bad=false;try{box.parseHex("100",8)}catch{bad=true}if(!bad)throw new Error("8-bit overflow accepted");
console.log("Bitmask playground tests passed");