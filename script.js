window.onload = function() {
    const images = document.querySelectorAll('.carrusel img');
    let index = 0;

    // Esperar a que todas las imágenes se carguen
    let loadedImages = 0;
    images.forEach(function(img) {
        img.onload = function() {
            loadedImages++;
            if (loadedImages === images.length) {
                startCarousel();
            }
        };
    });

    function startCarousel() {
        setInterval(function() {
            images.forEach(function(img) {
                img.classList.remove('active'); // Desactiva todas
            });
            images[index].classList.add('active'); // Activa la imagen actual

            // Incrementa el índice y reinicia cuando llega al final
            index = (index + 1) % images.length; // El operador % asegura que cuando index llegue a imágenes.length, vuelva a 0
        }, 3000); // Cambia cada 3 segundos
    }
};
