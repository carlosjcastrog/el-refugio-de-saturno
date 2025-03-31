// Permite obtener o llamar al botón del menú
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Se llama u obtiene el formulario para solicitar una reserva
const reservasForm = document.getElementById("reservasForm");
const successModal = document.getElementById("successModal");

// Esto permite verificar que los elementos existan antes de agregar eventos
if (menuToggle && mobileMenu) {
  // Permite mostrar u ocultar el menú
  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Permite verificar que el formulario exista antes de intentar agregar eventos
  if (reservasForm && successModal) {
    // Simula capturar la información del formulario y muestra el modal de reserva confirmada
    reservasForm.addEventListener("submit", function (event) {
      event.preventDefault();
      successModal.classList.remove("hidden");
    });

    // Permite cerrar el modal una vez confirmada la reserva con exito
    function closeModal() {
      successModal.classList.add("hidden");
    }

    // Permite verificar que el botón de cerrar modal exista antes de agregar el evento
    const closeButton = document.querySelector("#successModal button");
    if (closeButton) {
      closeButton.addEventListener("click", closeModal);
    }
  }

  // Animación para carga de elementos en las distintas páginas del restaurante
  const sections = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => observer.observe(section));
});

// Animación general para aparición secuencial
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".fade-in");
  items.forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("show");
    }, index * 300);
  });
});

// Animación para los productos y precios en la página de Inicio y Precios
document.addEventListener("DOMContentLoaded", () => {
  const prices = document.querySelectorAll(".fadePrice-in");

  prices.forEach((price, index) => {
    setTimeout(() => {
      price.classList.add("showPrice");
    }, index * 400);
  });
});
