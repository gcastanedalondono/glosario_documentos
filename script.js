const menuHamIcon = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu () {
    mobileMenu.classList.toggle ('inactive');
}

document.addEventListener('DOMContentLoaded', function() {
    var whatsappButtons = document.querySelectorAll('.whatsapp-btn');
    whatsappButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open('https://wa.me/573046780036', '_blank'); // Reemplaza con tu número de WhatsApp
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var youtubeButtons = document.querySelectorAll('.youtube-btn');
    var youtubeChannelUrl = 'https://www.youtube.com/@asociacionbreslevcolombia24/videos'; // Reemplaza con la URL de tu canal de YouTube

    youtubeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open(youtubeChannelUrl, '_blank');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var facebookButtons = document.querySelectorAll('.facebook-btn');
    var facebookProfileUrl = 'https://www.facebook.com/search/top?q=asociacion%20breslev%20colombia'; // Reemplaza con la URL de tu perfil de Facebook

    facebookButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open(facebookProfileUrl, '_blank');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var soundcloudButtons = document.querySelectorAll('.soundcloud-btn');
    var soundcloudProfileUrl = 'https://soundcloud.com/asociacion-breslev-colombia'; // Reemplaza con la URL de tu perfil de SoundCloud

    soundcloudButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.open(soundcloudProfileUrl, '_blank');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, title: 'Jardin de la Fe', imgSrc: 'jardin.png', description:"$90.000" },
        { id: 2, title: 'En las puertas de la gratitud', imgSrc: 'puertas_gratitud.png' },
        { id: 3, title: 'En los campos del bosque', imgSrc: 'campos_del_bosque.png' },
        { id: 4, title: '7 principios de Noah', imgSrc: '7_preceptos_noe.png' },
        { id: 5, title: 'Sintesís del Likutey Moharan', imgSrc: 'likutey.png' },
        { id: 6, title: 'Cruzando el puente angosto', imgSrc: 'puente_angosto.png' },
        { id: 7, title: 'Consejo', imgSrc: 'consejo.png' },
        { id: 8, title: 'A través del fuego', imgSrc: 'fuego.png' },
        { id: 9, title: 'Cuatro lecciones', imgSrc: 'cuatro.png' },
        { id: 10, title: 'Anatomia del alma', imgSrc: 'alma.png' },
        { id: 11, title: 'En el jardin de la paz', imgSrc: 'jardin_paz.png' },
        { id: 12, title: 'En el jardin de la Riqueza', imgSrc: 'jardin_riqueza.png' },
    ];

    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const buyButton = document.getElementById('buy-button');
    const closeButton = document.querySelector('.close');

    let currentItem = null;

    // Generar los elementos de la tienda
    items.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.title}">
            <div class="item-title">${item.title}</div>
        `;
        div.addEventListener('click', () => {
            openModal(item);
        });
        gallery.appendChild(div);
    });

    function openModal(item) {
        modal.style.display = 'block';
        modalImage.src = item.imgSrc;
        modalDescription.textContent = item.description;
        currentItem = item;
    }

    function closeModal() {
        modal.style.display = 'none';
        currentItem = null;
    }

    closeButton.addEventListener('click', closeModal);

    buyButton.addEventListener('click', () => {
        if (currentItem) {
            const phoneNumber = '573046780036'; // Reemplaza con el número de WhatsApp
            const whatsappMessage = encodeURIComponent(`Hola, quiero comprar el ${currentItem.title}.`);
            const url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
            window.open(url, '_blank');
            closeModal();
        }
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
});