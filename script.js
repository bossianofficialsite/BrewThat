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

window.addEventListener("scroll", function() {
    const boxHeight = window.innerHeight / 5 * 4;

    scrolls.forEach(function(scroll) {
        let boxTop = scroll.getBoundingClientRect().top;

        if(boxTop < boxHeight) {
            scroll.classList.add("show");
        }
    })
})

// Shop Gallery
const buttons = document.querySelectorAll("[data-gallery-button]");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.galleryButton == "next" ? 1 : -1;
        const slides = button.closest("[data-gallery]").querySelector("[data-slides]");

        const activeSlides = document.querySelector("[data-active]");
        let index = [...slides.children].indexOf(activeSlides) + offset;
        if(index < 0) index = slides.children.length - 1;
        if(index >= slides.children.length) index = 0;

        slides.children[index].dataset.active = true;
        delete activeSlides.dataset.active;
    })
})

