
        function cargarMasImagenes(id) {
            // Obtener el contenedor de imágenes
            var contenedor = document.getElementById(id);
    
            // Crear nuevas imágenes y agregarlas al contenedor
            for (var i = 0; i < 4; i++) { // Por ejemplo, agregar 4 imágenes adicionales
                var nuevaImagen = document.createElement('div');
                nuevaImagen.className = 'caja palabra';
                nuevaImagen.innerHTML = `
                    <a href="detalle.html">
                        <img class="imagenPlato" src="./assets/img/pizza.jpg" loading="lazy" alt="Menu principal">
                    </a>
                `;
                contenedor.insertBefore(nuevaImagen, contenedor.lastElementChild);
            }
        }
    