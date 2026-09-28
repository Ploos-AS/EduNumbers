"use strict";
const input=document.querySelector("#value"),errorEl=document.querySelector("#error");
function bits32(n){const b=new ArrayBuffer(4),v=new DataView(b);v.setFloat32(0,n,false);return v.getUint32(0,false)}
function decode32(n){const bits=bits32(n),sign=(bits>>>31)&1,exp=(bits>>>23)&255,frac=bits&0x7FFFFF;
 let kind,unbiased=null;if(exp===255)kind=frac===0?"infinity":"NaN";else if(exp===0)kind=frac===0?"zero":"subnormal";else{kind="normal";unbiased=exp-127}
 const b=bits.toString(2).padStart(32,"0");return {bits,sign,exp,frac,kind,unbiased,signBits:b.slice(0,1),expBits:b.slice(1,9),fracBits:b.slice(9)}}
function parseValue(s){s=s.trim();if(/^[-+]?infinity$/i.test(s))return s[0]==="-"?-Infinity:Infinity;if(/^nan$/i.test(s))return NaN;if(s==="")throw new Error("Skriv inn et tall.");const n=Number(s);if(Number.isNaN(n))throw new Error("Ugyldig tall.");return n}
function render(){let n,d;try{n=parseValue(input.value);d=decode32(n);errorEl.textContent=""}catch(e){errorEl.textContent=e.message;return}
 document.querySelector("#sign").textContent=d.signBits;document.querySelector("#exponent").textContent=d.expBits;document.querySelector("#fraction").textContent=d.fracBits;
 document.querySelector("#hex").textContent="0x"+d.bits.toString(16).toUpperCase().padStart(8,"0");document.querySelector("#class").textContent=d.kind;
 const stored=new Float32Array([n])[0];document.querySelector("#stored").textContent=String(stored);document.querySelector("#expvalue").textContent=String(d.exp);
 document.querySelector("#unbiased").textContent=d.unbiased===null?"—":String(d.unbiased);
 document.querySelector("#explain").textContent=Number.isFinite(n)&&stored!==n?`Input ${n} kan ikke representeres eksakt som binary32 og lagres som ${stored}.`:"Bitmønsteret representerer verdien uten ytterligere binary32-avrunding.";
}
input.addEventListener("input",render);render();
