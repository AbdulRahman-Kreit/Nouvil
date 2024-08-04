// Start Nav Bar
// Add "active" Class When Clicking On The Links
const navLinks = document.querySelectorAll(".header nav .links li a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.querySelector(".active")?.classList.remove("active");
        link.classList.add("active");
    });
});
// Add "active" Class When Scrolling
const sections = document.querySelectorAll(".section");

let currentSection = "home";
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 2) {
            currentSection = section.id;
        }
    });
    navLinks.forEach((link) => {
        if (link.href.includes(currentSection)) {
            document.querySelector(".active")?.classList.remove("active");
            link.classList.add("active");
        }
    });
});
// End Nav Bar
// Start Landing & Home Sections
// Get The Required Elements
let starts = document.getElementById("starts");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");

let nouvil = document.querySelector(".nouvil");

window.onscroll = function() {
    // Move Elemens When Scrolling
    let scrollValue = scrollY;
    starts.style.left = scrollValue + "px";
    moon.style.top = scrollValue * 4 + "px";
    mountains3.style.top = scrollValue * 2 + "px";
    mountains4.style.top = scrollValue * 1.5 + "px";
    river.style.top = scrollValue + "px";
    boat.style.top = scrollValue + "px";
    boat.style.left = scrollValue * 3 + "px";

    // Make The Font Bigger When Scrolling
    nouvil.style.fontSize = scrollValue + "px";
    if (scrollValue >= 67) {
        nouvil.style.fontSize = 67 + "px";
        nouvil.style.position ="fixed";
        if (scrollValue >= 478) {
            nouvil.style.display ="none";
        }
        else {
            nouvil.style.display ="block";
        }
    }

    // Change Between Day And Night
    if (scrollValue >= 127) {
        document.querySelector(".landing").style.background = "linear-gradient(#376281,#10001f)";
    }
    else {
        document.querySelector(".landing").style.background = "linear-gradient(#200016,#10001f)";
    }
}
// End Landing & Home Sections