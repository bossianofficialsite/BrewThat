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

// Scroll Effect
const scrolls = document.querySelectorAll("[data-scroll-effect]");

window.addEventListener("load", scrollingDiv);
window.addEventListener("scroll", scrollingDiv);

function scrollingDiv() {
    const boxHeight = window.innerHeight / 5 * 4;
    
    scrolls.forEach(function(scroll) {
        let boxTop = scroll.getBoundingClientRect().top;
    
        if(boxTop < boxHeight) {
            scroll.classList.add("show");
        }
    });
}