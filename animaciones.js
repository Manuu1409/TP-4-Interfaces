/*let estado = false; 

let menuHamburguesa = document.getElementById('menuHamburguesa');

menuHamburguesa.addEventListener('click', function() {
  if (estado) {
    menuHamburguesa.src = 'images/menu-hamburguesa.png';
  } else {
    menuHamburguesa.src = 'images/cruz.png'; 
  }
  estado = !estado; 
});
*/


// Función para mostrar la imagen de fondo cuando se termina de desplazar una sección de texto
function showBackgroundImage() {
  const sections = document.querySelectorAll('.contenedor');

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    const text = section.querySelector('.text');

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      if (text.getBoundingClientRect().bottom <= window.innerHeight) {
        // Ocultar todas las imágenes de fondo
        sections.forEach((s) => {
          s.style.backgroundImage = 'none';
        });
        // Mostrar la imagen de fondo de la sección visible
        section.style.backgroundImage = `url('images/descripcion-imagen-${index + 1}.png')`;
      }
    }
  });
}

// Asignar el evento scroll para llamar a la función showBackgroundImage
window.addEventListener('scroll', showBackgroundImage);

// Llamar a showBackgroundImage inicialmente para establecer la imagen de fondo al cargar la página
showBackgroundImage();
