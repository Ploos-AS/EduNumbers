"use strict";
const tr=(no,en)=>typeof eduText==="function"?eduText(no,en):no;
const valueEl=document.querySelector("#value"),maskEl=document.querySelector("#mask"),widthEl=document.querySelector("#width"),errorEl=document.querySelector("#error");
function parseHex(s,w){s=s.trim().replace(/^0x/i,"");if(!/^[0-9a-f]+$/i.test(s))throw new Error(tr("Bruk bare hex-sifre 0–9 og A–F.","Use only hex digits 0–9 and A–F."));const n=BigInt("0x"+s),max=(1n<<BigInt(w))-1n;if(n>max)throw new Error(tr(`Verdien passer ikke i ${w} bit.`,`Value does not fit in ${w} bits.`));return n}
function allMask(w){return(1n<<BigInt(w))-1n}
function ops(v,m,w){const full=allMask(w);return{AND:v&m,OR:v|m,XOR:v^m,NOT:(~v)&full,SET:v|m,CLEAR:v&((~m)&full),TOGGLE:v^m}}
function bin(n,w){return n.toString(2).padStart(w,"0").replace(/(.{8})(?=.)/g,"$1 ")}
function hex(n,w){return"0x"+n.toString(16).toUpperCase().padStart(w/4,"0")}
function render(){const w=Number(widthEl.value);let v,m;try{v=parseHex(valueEl.value,w);m=parseHex(maskEl.value,w);errorEl.textContent=""}catch(e){errorEl.textContent=e.message;return}const out=ops(v,m,w),body=document.querySelector("#results");body.replaceChildren();for(const[name,n]of Object.entries(out)){const trEl=document.createElement("tr");trEl.innerHTML=`<th>${name}</th><td><code>${hex(n,w)}</code></td><td><code>${bin(n,w)}</code></td>`;body.appendChild(trEl)}const selected=v&m;const msg=selected===m?tr("alle maskerte bits er satt","all masked bits are set"):selected===0n?tr("ingen maskerte bits er satt","no masked bits are set"):tr("noen maskerte bits er satt","some masked bits are set");document.querySelector("#test").innerHTML=`<code>value & mask = ${hex(selected,w)}</code> — ${msg}.`}
[valueEl,maskEl,widthEl].forEach(e=>e.addEventListener("input",render));render();