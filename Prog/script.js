const grid = document.querySelector(".grid-layer");

window.addEventListener("scroll", () => {

    let scroll = window.scrollY;

    let speed = scroll * 0.3;

    grid.style.transform = `translateY(${speed}px)`;

});

const popup = document.getElementById("popup");
const sound = document.getElementById("secretSound");
const closeBtn = document.getElementById("closePopup");

let clicks = 0;

const logo = document.getElementById("logo");

logo.addEventListener("click", () => {

    clicks++;

    logo.classList.remove("bounce");
    void logo.offsetWidth;
    logo.classList.add("bounce");

    if(clicks === 10){

        popup.classList.add("show");

        sound.currentTime = 0;
        sound.play();

        clicks = 0;
    }

});

closeBtn.addEventListener("click", () => {

    popup.classList.remove("show");

    sound.pause();
    sound.currentTime = 0;

});

const buttons = document.querySelectorAll(".copy-btn");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        const code = btn
            .closest(".code-card")
            .querySelector("code")
            .innerText;

        navigator.clipboard.writeText(code);

        /* feedback visual */
        btn.innerText = "✔";

        setTimeout(() => {
            btn.innerText = "📋";
        }, 1500);

    });

});

const elements = document.querySelectorAll(".fade-left");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.2

});

elements.forEach(el => observer.observe(el));