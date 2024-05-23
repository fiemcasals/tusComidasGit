async function cargarMasImagenes(id) {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTJjYTAwZDYxZWIzOTEyYjZlNzc4MDA4YWQ3ZmNjOCIsInN1YiI6IjYyODJmNmYwMTQ5NTY1MDA2NmI1NjlhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4MJSPDJhhpbHHJyNYBtH_uCZh4o0e3xGhZpcBIDy-Y8'
            }
        });
        const data = await response.json();
        const imagenes = data.results.slice(0, 4); // Obtén las primeras 4 imágenes (puedes ajustar esto según tus necesidades)

        // Obtener el contenedor de imágenes
        const contenedor = document.getElementById(id);

        // Crear nuevas imágenes y agregarlas al final del contenedor
        imagenes.forEach((imagen, i) => {
            const nuevaImagen = document.createElement('div');
            nuevaImagen.className = 'caja palabra';
            nuevaImagen.innerHTML = `
                <a href="detalle.html">
                    <img class="imagenPlato" src="https://image.tmdb.org/t/p/w500${imagen.poster_path}" loading="lazy" alt="Menu principal">
                </a>
            `;
                      
            contenedor.insertBefore(nuevaImagen, contenedor.lastChild.previousSibling);
        });
    } catch (error) {
        console.error('Error al cargar imágenes desde la API:', error);
    }
}

