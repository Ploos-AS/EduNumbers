"use strict";
const valueEl=document.querySelector("#value"),widthEl=document.querySelector("#width"),addressEl=document.querySelector("#address"),errorEl=document.querySelector("#error");
function parseHex(s){s=s.trim().replace(/^0x/i,"");if(!/^[0-9a-f]+$/i.test(s))throw new Error("Bruk bare hex-sifre 0–9 og A–F.");return BigInt("0x"+s)}
function bytesOf(n,w){const count=w/8,out=[];for(let i=count-1;i>=0;i--)out.push(Number((n>>BigInt(i*8))&255n));return out}
function formatBytes(a){return a.map(x=>x.toString(16).toUpperCase().padStart(2,"0"))}
function renderMemory(el,bytes,start){el.replaceChildren();bytes.forEach((b,i)=>{const d=document.createElement("div");d.className="byte";d.innerHTML=`<span>0x${(start+BigInt(i)).toString(16).toUpperCase()}</span><strong>${b.toString(16).toUpperCase().padStart(2,"0")}</strong>`;el.appendChild(d)})}
function render(){const w=Number(widthEl.value);let n,start;
 try{n=parseHex(valueEl.value);start=parseHex(addressEl.value);const max=(1n<<BigInt(w))-1n;if(n>max)throw new Error(`Verdien passer ikke i ${w} bit.`);errorEl.textContent=""}catch(e){errorEl.textContent=e.message;return}
 const big=bytesOf(n,w),little=[...big].reverse();document.querySelector("#normalized").textContent="0x"+n.toString(16).toUpperCase().padStart(w/4,"0");
 renderMemory(document.querySelector("#big"),big,start);renderMemory(document.querySelector("#little"),little,start);
}
[valueEl,widthEl,addressEl].forEach(e=>e.addEventListener("input",render));render();
