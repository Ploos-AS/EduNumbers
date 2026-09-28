const fs=require("fs"),vm=require("vm");const s=fs.readFileSync("interactive/twos-complement/twos.js","utf8");
const a=s.indexOf("function limits"),b=s.indexOf("function render"),box={};vm.createContext(box);vm.runInContext(s.slice(a,b),box);
const eq=(a,b,m)=>{if(a!==b)throw new Error(m+": "+a+" != "+b)};
eq(box.encodeSigned(-1n,8),255n,"-1/8");eq(box.decodeSigned(255n,8),-1n,"FF/8");
eq(box.encodeSigned(-128n,8),128n,"-128/8");eq(box.encodeSigned(127n,8),127n,"127/8");
eq(box.encodeSigned(-32768n,16),32768n,"-32768/16");eq(box.decodeSigned(65535n,16),-1n,"FFFF/16");
eq(box.encodeSigned(-2147483648n,32),2147483648n,"INT32_MIN");
eq(box.groupedBinary(0xFF00n,16),"11111111 00000000","grouping");
for(const [n,w] of [[-129n,8],[128n,8],[32768n,16]]){let ok=false;try{box.encodeSigned(n,w)}catch{ok=true}if(!ok)throw new Error("Expected range rejection "+n)}
console.log("Two's-complement tests passed");