const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const reservasForm = document.getElementById("reservasForm");
const successModal = document.getElementById("successModal");

menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("reservasForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        successModal.classList.remove("hidden");
    });

    function closeModal() {
        successModal.classList.add("hidden");
    }

    document.querySelector('#successModal button').addEventListener('click', closeModal);
});
