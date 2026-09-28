"use strict";
const signedEl=document.querySelector("#signed"),widthEl=document.querySelector("#width"),errorEl=document.querySelector("#error");
function limits(w){const half=1n<<BigInt(w-1);return {min:-half,max:half-1n,mod:1n<<BigInt(w)}}
function encodeSigned(n,w){const l=limits(w);if(n<l.min||n>l.max)throw new Error(`Verdien må være mellom ${l.min} og ${l.max}.`);return n<0n?l.mod+n:n}
function decodeSigned(bits,w){const l=limits(w);return bits>l.max?bits-l.mod:bits}
function groupedBinary(bits,w){return bits.toString(2).padStart(w,"0").replace(/(.{8})(?=.)/g,"$1 ")}
function render(){
 const w=Number(widthEl.value),l=limits(w);let n,bits;
 try{if(!/^[+-]?\d+$/.test(signedEl.value.trim()))throw new Error("Skriv inn et signed heltall.");n=BigInt(signedEl.value.trim());bits=encodeSigned(n,w);errorEl.textContent=""}
 catch(e){errorEl.textContent=e.message;return}
 document.querySelector("#binary").textContent=groupedBinary(bits,w);
 document.querySelector("#hex").textContent="0x"+bits.toString(16).toUpperCase().padStart(w/4,"0");
 document.querySelector("#unsigned").textContent=bits.toString();
 document.querySelector("#signedOut").textContent=decodeSigned(bits,w).toString();
 document.querySelector("#range").textContent=`${l.min} … ${l.max}`;
 document.querySelector("#explain").textContent=n<0n
 ? `Negativ verdi: 2^${w} + (${n}) = ${bits}. Det er det lagrede unsigned bitmønsteret.`
 : `Positiv verdi: signed og unsigned har samme numeriske verdi så lenge signbiten er 0.`;
}
signedEl.addEventListener("input",render);widthEl.addEventListener("change",render);render();
