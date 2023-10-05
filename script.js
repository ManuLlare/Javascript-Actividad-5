const getCatButton = document.getElementById('getCatButton');
const catImage = document.getElementById('catImage');

// Manejar el evento de clic en el botón
getCatButton.addEventListener('click', () => {
    // Hacer una solicitud a la API de The Cat API
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            // Obtener la URL de la imagen del gato aleatorio
            const imageUrl = data[0].url;

            // Actualizar la fuente de la imagen
            catImage.src = imageUrl;
        })
        .catch(error => {
            console.error('Error al obtener la imagen del gato:', error);
        });
});