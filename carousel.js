const carousel = document.querySelector('.catalog-carousel');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
let currentIndex = 0;

rightBtn.addEventListener('click', () => { // Ahora mueve a la izquierda
    if (currentIndex > 0) {
        currentIndex--;
    }
    carousel.style.transform = `translateX(-${currentIndex * 460}px)`; // Ancho del producto + margen
});

leftBtn.addEventListener('click', () => { // Ahora mueve a la derecha
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
    }
    carousel.style.transform = `translateX(-${currentIndex * 460}px)`;
});
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces de la barra de navegación que apuntan a las secciones
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Previene el comportamiento por defecto del enlace

            // Obtiene el destino del enlace
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Desplaza la página hacia el destino con una transición suave
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) { // Muestra el botón después de desplazarse 200px
            scrollToTopButton.style.opacity = 1;
        } else {
            scrollToTopButton.style.opacity = 0;
        }
    });
});

// Espera a que la ventana se cargue completamente
window.addEventListener('load', () => {
    // Agrega la clase 'loaded' al cuerpo para ocultar la pantalla de carga
    document.body.classList.add('loaded');
});
// Selecciona el elemento del círculo
const cursorFollow = document.getElementById('cursor-follow');

// Función para actualizar la posición del círculo
function updateCursorPosition(event) {
    // Actualiza la posición del círculo
    cursorFollow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
}

// Escucha el movimiento del mouse
document.addEventListener('mousemove', updateCursorPosition);

