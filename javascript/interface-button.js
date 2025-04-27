const heartButton = document.querySelector('.heart-button');
const carrosel = document.querySelector('.carrosel');
const text = document.querySelector ('.for-her')

heartButton.addEventListener('click', () => {
    // Faz o botão desaparecer
    heartButton.style.opacity = '0';
    heartButton.style.transition = 'opacity 0.5s ease-in-out';



   


    // Exibe o carrossel suavemente
    setTimeout(() => {
        carrosel.style.visibility = 'visible'; // Torna o carrossel visível
        carrosel.style.opacity = '1'; // Ajusta a opacidade para 1
        carrosel.style.transition = 'opacity 0.5s ease-in-out';


        text.style.visibility = 'visible'; // Torna o carrossel visível
        text.style.opacity = '1'; // Ajusta a opacidade para 1
        text.style.transition = 'opacity 0.5s ease-in-out';

        
    }, 500); // Aguarda a transição do botão antes de exibir o carrossel
});

