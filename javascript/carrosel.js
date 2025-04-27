const images = document.querySelectorAll('.carrosel img'); 
const buttonPrev = document.querySelector('.left');
const buttonNext = document.querySelector('.right');

let currentIndex = 0; 


function updateCarrosel() {
    images.forEach((img, index) => {
        if (index === currentIndex) {
            img.style.opacity = '1'; // Torna a imagem atual visível
            img.style.zIndex = '1'; // Garante que a imagem atual fique acima
        } else {
            img.style.opacity = '0'; // Esconde as outras imagens
            img.style.zIndex = '0'; // Garante que as outras imagens fiquem abaixo
        }
    });
}
// Evento para o botão "Próximo"
buttonNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Vai para a próxima imagem (volta ao início se for a última)
    updateCarrosel();
});

// Evento para o botão "Anterior"
buttonPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Vai para a imagem anterior (volta ao final se for a primeira)
    updateCarrosel();
});

// Inicializa o carrossel
updateCarrosel();