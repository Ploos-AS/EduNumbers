"use strict";
(function(){
  const supported=["no","en"];
  const params=new URLSearchParams(location.search);
  let lang=params.get("lang");
  const preferred=(navigator.languages&&navigator.languages.length?navigator.languages:[navigator.language||""]);
  const isNorwegian=tag=>/^(no|nb|nn)(-|$)/i.test(tag||"");
  if(!supported.includes(lang)) lang=preferred.some(isNorwegian)?"no":"en";
  window.EDU_LANG=lang;
  window.eduText=(no,en)=>lang==="no"?no:en;
  document.documentElement.lang=lang;
  window.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll("[data-no][data-en]").forEach(el=>{el.textContent=lang==="no"?el.dataset.no:el.dataset.en});
    document.querySelectorAll("[data-href-no][data-href-en]").forEach(el=>{el.href=lang==="no"?el.dataset.hrefNo:el.dataset.hrefEn});
    document.querySelectorAll("[data-lang]").forEach(el=>{
      const target=el.dataset.lang;
      const u=new URL(location.href);u.searchParams.set("lang",target);el.href=u.pathname+u.search;
      if(target===lang)el.setAttribute("aria-current","page");
    });
  });
})();