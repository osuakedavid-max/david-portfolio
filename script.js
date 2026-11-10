console.log("JavaScript is connected!");

const reveals = document.querySelectorAll(".reveal");

function revealOnscroll() {
    reveals.forEach(function (element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnscroll);

revealOnscroll();

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const typingText = document.getElementById("typing");

const text = "I Build Digital Experiences.";

typingText.textContent = "";

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    } else {
        typingText.classList.add("done");
    }
}

typeEffect();


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector("header nav");

menuToggle.addEventListener("click", function () {
    navMenu.classList.add("show");
});

const menuClose = document.getElementById("menuClose");

menuClose.addEventListener("click", function () {
    navMenu.classList.remove("show");
});

const navLinks = navMenu.querySelectorAll("a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("show");
    });
});
