// Ouvrir la modal lorsque l'utilisateur clique sur une image
const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('.modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = item.querySelector('img').src;
    });
});

// Fermer la modal lorsque l'utilisateur clique sur le bouton de fermeture
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

