// Toggle (Small Screen)
const toggle = document.querySelector(".toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    nav.classList.toggle("open");
})

document.addEventListener("click", (e) => {
    const target = e.target.classList[0];
    if(target !== "toggle" && target !== "nav") {
        toggle.classList.remove("open");
        nav.classList.remove("open");
    }
})