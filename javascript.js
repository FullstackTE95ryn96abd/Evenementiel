const menu = document.getElementById("Logo");
const fermer_menu = document.getElementById("croix");
const header1 = document.getElementById("header1");
const header2 = document.getElementById("header2");

menu.addEventListener("click", function() {
    header1.classList.toggle("alternative_header");
    header2.classList.toggle("alternative_header");
    menu.classList.toggle("active");
});

fermer_menu.addEventListener("click", function(){
    header1.classList.toggle("alternative_header");
    header2.classList.toggle("alternative_header");
    fermer_menu.classList.toggle("active");
})

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
