"use strict";
const valueEl=document.querySelector("#value"), widthEl=document.querySelector("#width");
const bitsEl=document.querySelector("#bits"), errorEl=document.querySelector("#error");
function maxForWidth(w){return (1n<<BigInt(w))-1n}
function parseUnsigned(text,w){
 if(!/^\d+$/.test(text.trim())) throw new Error("Skriv inn et usignert heltall.");
 const n=BigInt(text.trim()), max=maxForWidth(w);
 if(n>max) throw new Error(`Verdien må være mellom 0 og ${max} for ${w} bit.`);
 return n;
}
function formatBinary(n,w){return n.toString(2).padStart(w,"0").replace(/(.{8})(?=.)/g,"$1 ")}
function render(){
 const w=Number(widthEl.value); let n;
 try{n=parseUnsigned(valueEl.value,w);errorEl.textContent=""}catch(e){errorEl.textContent=e.message;bitsEl.replaceChildren();return}
 document.querySelector("#decimal").textContent=n.toString(10);
 document.querySelector("#hex").textContent="0x"+n.toString(16).toUpperCase().padStart(w/4,"0");
 document.querySelector("#binary").textContent=formatBinary(n,w);
 bitsEl.replaceChildren();
 for(let pos=w-1;pos>=0;pos--){
   const mask=1n<<BigInt(pos), on=(n&mask)!==0n;
   const b=document.createElement("button");
   b.type="button"; b.className="bit"+(pos%8===7&&pos!==w-1?" byte-start":"");
   b.setAttribute("aria-pressed",String(on));
   b.innerHTML=`<span class="pos">bit ${pos}</span><strong>${on?1:0}</strong><span>2<sup>${pos}</sup></span><span class="contrib">${on?mask:0n}</span>`;
   b.addEventListener("click",()=>{valueEl.value=(n^mask).toString();render()});
   bitsEl.appendChild(b);
 }
}
valueEl.addEventListener("input",render);widthEl.addEventListener("change",render);render();
