// Permite obtener o llamar al boton del menú
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Se llama u obtiene el formulario para solicitar una reserva
const reservasForm = document.getElementById("reservasForm");
const successModal = document.getElementById("successModal");

// Permite mostrar u ocultar el menú
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

// Ejecuta cuando la página ha cargado completamente
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservasForm");

    // Simula capturar la información del formulario y muestra el modal de reserva confirmada
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        successModal.classList.remove("hidden");
    });

    // Permite cerrar el modal
    function closeModal() {
        successModal.classList.add("hidden");
    }

    // Permite agregar el evento para que el modal pueda cerrarse
    document.querySelector('#successModal button').addEventListener('click', closeModal);
});
