document.querySelectorAll(".faq__header").forEach(e=>{e.addEventListener("click",function(){let t=this.parentElement;document.querySelectorAll(".faq__item").forEach(e=>{e!==t&&e.classList.remove("active")}),t.classList.toggle("active")})});
//# sourceMappingURL=faqAccordion.js.map
