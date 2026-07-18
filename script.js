// Contact Form Validation

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const inputs = form.querySelectorAll("input, textarea");

    let valid = true;

    inputs.forEach(input => {
        if(input.value.trim() === ""){
            valid = false;
        }
    });

    if(valid){
        alert("✅ Your message has been sent successfully!");
        form.reset();
    }else{
        alert("⚠ Please fill in all fields.");
    }

});
// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// Scroll Animation

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

sections.forEach(section=>{

    section.classList.add("hidden");
    observer.observe(section);

});
// Typing Effect

const words = [
    "Front-End Developer",
    "Web Designer",
    "JavaScript Developer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.getElementById("typing");

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!isDeleting){
        typingElement.textContent = currentWord.substring(0, charIndex++);
    }else{
        typingElement.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = isDeleting ? 70 : 120;

    if(!isDeleting && charIndex > currentWord.length){
        isDeleting = true;
        speed = 1500;
    }

    if(isDeleting && charIndex < 0){
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
// Active Navbar

const sectionsNav = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sectionsNav.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});