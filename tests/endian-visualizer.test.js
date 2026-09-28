const fs=require("fs"),vm=require("vm");const s=fs.readFileSync("interactive/endian-visualizer/endian.js","utf8");
const a=s.indexOf("function parseHex"),b=s.indexOf("function renderMemory"),box={};vm.createContext(box);vm.runInContext(s.slice(a,b),box);
const eq=(a,b,m)=>{if(JSON.stringify(a)!==JSON.stringify(b))throw new Error(m+": "+JSON.stringify(a)+" != "+JSON.stringify(b))};
eq(box.bytesOf(0x12345678n,32),[0x12,0x34,0x56,0x78],"32-bit BE");
eq([...box.bytesOf(0x12345678n,32)].reverse(),[0x78,0x56,0x34,0x12],"32-bit LE");
eq(box.bytesOf(0x1234n,16),[0x12,0x34],"16-bit");eq(box.bytesOf(0x0102030405060708n,64),[1,2,3,4,5,6,7,8],"64-bit");
if(box.parseHex("0xFF")!==255n)throw new Error("0x prefix");let rejected=false;try{box.parseHex("12XZ")}catch{rejected=true}if(!rejected)throw new Error("invalid hex accepted");
console.log("Endian visualizer tests passed");