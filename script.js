// Archivo script.js para Ovalo Futuro

// Este evento asegura que el código se ejecute cuando todo el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', function() {

    console.log("Sitio web de Ovalo Futuro cargado correctamente.");

    // (Futuro) Aquí puedes añadir funcionalidades como:
    // 1. Un carrusel para los testimonios.
    // 2. Animaciones al hacer scroll.
    // 3. Validaciones avanzadas para el formulario de contacto.
    
    // Ejemplo de funcionalidad:
    // Al hacer clic en un enlace del menú, el desplazamiento es suave.
    const enlacesMenu = document.querySelectorAll('.menu-navegacion a');

    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function(evento) {
            // Prevenimos el comportamiento por defecto del enlace
            evento.preventDefault();
            
            // Obtenemos el id de la sección a la que queremos ir (ej: #servicios)
            const seccionId = this.getAttribute('href');
            const seccionDestino = document.querySelector(seccionId);
            
            // Hacemos el scroll suave hacia la sección
            seccionDestino.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});