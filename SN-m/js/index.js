const mask_body = document.querySelector("#mask_body");

mask_body.addEventListener("click", function () {
    this.parentElement.style.display = "none";
});

const mask = document.querySelector(".mask");
const h = document.documentElement.clientHeight;
mask.style.height = h + "px";
mask.children[0].style.marginTop = (h / 2) + "px";
