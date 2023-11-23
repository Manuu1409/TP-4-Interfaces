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

//selecciono cada clase y lo almaceno
let game_1 = document.querySelector(".contenido-0");
let game_2 = document.querySelector(".contenido-1");
let game_3 = document.querySelector(".contenido-2");
let game_4 = document.querySelector(".contenido-3");


window.addEventListener("scroll", () => {  //listener cuando me desplazo por la pagina
  let seccion = document.querySelector(".datos-juego");
  const seccionY = seccion.getBoundingClientRect().y; //pos vertical 
  let value = seccionY; //almaceno la pos vertical
  console.log(value) //imprimo
  if(value >= -200 && value <= 300){ //rangos de pos vertical y muestra o remueve las classlist
    
      game_1.classList.add("mostrar-imagen");
      game_2.classList.remove("mostrar-imagen");
  } 
  
  else if(value >= -900 && value <= -201){
      game_1.classList.remove("mostrar-imagen")
      game_2.classList.add("mostrar-imagen")
      game_3.classList.remove("mostrar-imagen")
  }
  
  else if(value >= -1300 && value <= -901){
    game_2.classList.remove("mostrar-imagen")
    game_3.classList.add("mostrar-imagen")
    game_4.classList.remove("mostrar-imagen")
}

  else if(value >= -1600 && value <= -1301){
    game_3.classList.remove("mostrar-imagen")
    game_4.classList.add("mostrar-imagen")
}
});






const menuButton = document.querySelector('.menu');
const dropMenu = document.querySelector('.drop-menu');
const navListItems = document.querySelectorAll('.nav-list li');

menuButton.addEventListener('click', function() {
  dropMenu.classList.toggle('visible');
  menuButton.classList.toggle('active');

  if (dropMenu.classList.contains('visible')) {
    navListItems.forEach((item, index) => {
      item.style.animationDelay = `${index * 200}ms`; // retraso de los LI
    });
  }
});
