const meubnt = document.querySelector(".ham-menu");
const navBar = document.querySelector(".nav-bar");

function handleClick() {
    navBar.classList.toggle("active"); // Adiciona ou remove a classe "active" ao menu
}

// Adiciona o evento de clique no botão do menu
meubnt.addEventListener("click", handleClick);

// Fecha o menu quando um link é clicado
const menuLinks = document.querySelectorAll(".menu_links li a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navBar.classList.remove("active");
    });
});

// Fecha o menu se o usuário clicar fora dele
document.addEventListener("click", function(event) {
    // Verifica se o clique foi fora do menu e do botão
    if (!navBar.contains(event.target) && !meubnt.contains(event.target)) {
        navBar.classList.remove("active"); // Remove a classe "active"
    }
});


// CARROSEL DA GALERIA

let slideIndex = 0;
showSlides(slideIndex);

// Função para avançar ou retroceder slides
function moveSlide(n) {
    showSlides(slideIndex += n);
}

// Função para exibir o slide ativo
function showSlides(n) {
    const slides = document.querySelectorAll('.carousel-item');
    
    // Volta ao primeiro slide se o índice exceder o número de slides
    if (n >= slides.length) { 
        slideIndex = 0;
    }
    
    // Vai ao último slide se o índice for menor que 0
    if (n < 0) { 
        slideIndex = slides.length - 1;
    }

    // Esconde todos os slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // Exibe o slide ativo
    slides[slideIndex].style.display = "block";
}
