!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=null;t.addEventListener("click",(function(){r=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled","true"),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(r),e.setAttribute("disabled","true"),t.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.85162ea4.js.map
