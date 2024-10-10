document.querySelectorAll(".footer__menu-title").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();let t=this.parentElement;document.querySelectorAll(".footer__menu-item").forEach(function(e){e!==t&&e.classList.remove("active")}),t.classList.toggle("active")})});
//# sourceMappingURL=footerDropdown.js.map
