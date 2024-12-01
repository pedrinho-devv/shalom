const meubnt = document.querySelector(".ham-menu");
const navBar = document.querySelector(".nav-bar");


function handleClick() {
    navBar.classList.toggle("active"); 
}


meubnt.addEventListener("click", handleClick);


const menuLinks = document.querySelectorAll(".menu_links li a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navBar.classList.remove("active");
    });
});


document.addEventListener("click", function(event) {

    if (!navBar.contains(event.target) && !meubnt.contains(event.target)) {
        navBar.classList.remove("active"); 
    }
});


// CARROSEL DA GALERIA

let slideIndex = 0;
showSlides(slideIndex);


function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Função para exibir o slide ativo
function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-item');
    
    
    if (n >= slides.length) { 
        slideIndex = 0;
    }
    
    
    if (n < 0) { 
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

 
    slides[slideIndex].style.display = "block";
}

