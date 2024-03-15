// Obtener la galería y el contenedor de la imagen ampliada
var gallery = document.querySelector('.gallery');
var modalContainer = document.getElementById('modal-container');
var modalImage = document.getElementById('modal-image');

// Agregar un evento clic a cada imagen de la galería
gallery.addEventListener('click', function(event) {
    if (event.target.classList.contains('thumbnail')) {
        // Mostrar el contenedor de la imagen ampliada
        modalContainer.style.display = 'block';
        
        // Mostrar la imagen ampliada en el contenedor
        modalImage.src = event.target.src;
    }
});

// Función para obtener un número aleatorio entre min (incluido) y max (excluido)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Obtener un número aleatorio de imágenes por fila (entre 2 y 4)
var imagesPerRow = getRandomInt(2, 4);

// Aplicar clases de diseño según el número de imágenes por fila
gallery.classList.add('images-per-row-' + imagesPerRow);

// Agregar un evento clic al botón de cerrar
var closeButton = document.querySelector('.close');
closeButton.addEventListener('click', function() {
    // Ocultar el contenedor de la imagen ampliada al hacer clic en el botón de cerrar
    modalContainer.style.display = 'none';
});