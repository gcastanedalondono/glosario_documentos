document.addEventListener("DOMContentLoaded", function() {
  const menuHamIcon = document.querySelector(".menu");
  const mobileMenu = document.querySelector(".mobile-menu");

  menuHamIcon.addEventListener("click", toggleMobileMenu);

  function toggleMobileMenu() {
      mobileMenu.classList.toggle("inactive");
  }

  // Función para ocultar el menú
  function hideMobileMenu() {
      if (!mobileMenu.classList.contains("inactive")) {
          mobileMenu.classList.add("inactive");
      }
  }

  // Ocultar el menú al hacer scroll
  window.addEventListener("scroll", hideMobileMenu);

  // Ocultar el menú al hacer clic fuera de él
  document.addEventListener("click", function(event) {
      if (!mobileMenu.contains(event.target) && !menuHamIcon.contains(event.target)) {
          hideMobileMenu();
      }
  });
});


const podcast=document.querySelector("icon-bnt cloud");
podcast.addEventListener("mouseover", () =>{
    podcast.backgroundColor="blue";
});

container.addEventListener("mouseout", () =>{
    container.style.backgroundColor="red";
});

document.getElementById('blog_item1').addEventListener('click', function() {
    // Redirigimos al usuario a 'otraPagina.html' al hacer clic
    window.location.href = 'dicen_nuestros_sabios.html';  // Cambia 'otraPagina.html' por la página de destino
  });


