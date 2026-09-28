"use strict";
const valueEl=document.querySelector("#value"),maskEl=document.querySelector("#mask"),widthEl=document.querySelector("#width"),errorEl=document.querySelector("#error");
function parseHex(s,w){s=s.trim().replace(/^0x/i,"");if(!/^[0-9a-f]+$/i.test(s))throw new Error("Bruk bare hex-sifre 0–9 og A–F.");const n=BigInt("0x"+s),max=(1n<<BigInt(w))-1n;if(n>max)throw new Error(`Verdien passer ikke i ${w} bit.`);return n}
function allMask(w){return (1n<<BigInt(w))-1n}
function ops(v,m,w){const full=allMask(w);return {AND:v&m,OR:v|m,XOR:v^m,NOT:(~v)&full,SET:v|m,CLEAR:v&((~m)&full),TOGGLE:v^m}}
function bin(n,w){return n.toString(2).padStart(w,"0").replace(/(.{8})(?=.)/g,"$1 ")}
function hex(n,w){return "0x"+n.toString(16).toUpperCase().padStart(w/4,"0")}
function render(){const w=Number(widthEl.value);let v,m;try{v=parseHex(valueEl.value,w);m=parseHex(maskEl.value,w);errorEl.textContent=""}catch(e){errorEl.textContent=e.message;return}
 const out=ops(v,m,w),body=document.querySelector("#results");body.replaceChildren();
 for(const [name,n] of Object.entries(out)){const tr=document.createElement("tr");tr.innerHTML=`<th>${name}</th><td><code>${hex(n,w)}</code></td><td><code>${bin(n,w)}</code></td>`;body.appendChild(tr)}
 const selected=v&m;document.querySelector("#test").innerHTML=`<code>value & mask = ${hex(selected,w)}</code> — ${selected===m?"alle maskerte bits er satt":selected===0n?"ingen maskerte bits er satt":"noen maskerte bits er satt"}.`;
}
[valueEl,maskEl,widthEl].forEach(e=>e.addEventListener("input",render));render();
