document.addEventListener('DOMContentLoaded', function () {
    const scrollFactor = 0.3; // Ajusta este valor para controlar la velocidad de movimiento

    const spiderman = document.querySelector('.layer-5');
    const spidermanLimit = 400; // Ajusta este valor al punto en el que deseas detener la animación
  
    const telarana = document.querySelector('.layer-2');
    const telaranaLimit = 400;
    
    const chicaSpiderman = document.querySelector('.layer-6');
    const chicaSpidermanLimit = 700; 

    const blackSpiderman = document.querySelector('.layer-4');
    const blackSpidermanLimit = 400; 

    const telarana2 = document.querySelector('.layer-1');
    const telaran2aLimit = 400;

    const duendeVerde = document.querySelector('.duendeVerde');
    const duendeVerdeLimit = 1050;
    const startScrollDuende = 800; // Ajusta este valor al punto en el que quieres que comience el movimiento

    let flexCard01 = document.querySelector('.contenedor-1');
    let flexCard02 = document.querySelector('.contenedor-2');
    let flexCard03 = document.querySelector('.contenedor-3');

    


    window.addEventListener('scroll', function () {
      let logo = document.querySelector('.layer-3');

      var header = document.querySelector("header")
      header.classList.toggle("abajo",window.scrollY>0)  //cuando la haga scroll y el valor sea mayor a 0

      // Obtener el desplazamiento vertical de la página
      const scrollY = window.scrollY || window.pageYOffset;
      
      
      // Agregar la clase 'small' cuando el desplazamiento es mayor que 200px
      if (window.scrollY > 20) {
          logo.classList.add("small");
      } else {
          logo.classList.remove("small");
      }

      // Ajustar la posición vertical de Spiderman dentro del rango especificado
      if (scrollY <= spidermanLimit) {
        spiderman.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
  
      // Ajustar la posición vertical de la telaraña dentro del rango especificado
      if (scrollY <= telaranaLimit) {
        const rotationAngle = 65.403; // Ángulo de rotación en el CSS
        const translateY = (scrollY * 0.2) * Math.sin(rotationAngle * (Math.PI / 180));
        telarana.style.transform = `translateY(${translateY}px) rotate(${rotationAngle}deg)`;
      }

      if (scrollY <= chicaSpidermanLimit) {
        chicaSpiderman.style.transform = `translateY(${scrollY * 0.2}px)`;
      }

      if (scrollY <= blackSpidermanLimit) {
        blackSpiderman.style.transform = `translateY(${scrollY * 0.2}px)`;
      }

      if (scrollY <= telaran2aLimit) {
        telarana2.style.transform = `translateY(${scrollY * 0.2}px)`;
      } 

      if (scrollY >= startScrollDuende && scrollY< duendeVerdeLimit ) {
        duendeVerde.style.transform = `translateY(${(scrollY - startScrollDuende) * scrollFactor}px) scaleX(-1)`;
      } 


      if(window.scrollY > 1250){
        setTimeout(()=>{
            flexCard01.classList.add("showUp");
        },0);
        setTimeout(()=>{
            flexCard02.classList.add("showUp");
        },150);
        setTimeout(()=>{
            flexCard03.classList.add("showUp");
        },400);        
      } else {
          flexCard01.classList.remove("showUp");
          flexCard02.classList.remove("showUp");
          flexCard03.classList.remove("showUp");
      }

      



    });
  });

  (function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem1 = document.querySelector('.seccion-4-layer-1');
    const elem2 = document.querySelector('.seccion-4-layer-2');
    const elem3 = document.querySelector('.seccion-4-layer-3');

    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
        let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
        let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
        let x = `${_depth3}, ${_depth2}, ${_depth1}`;
        console.log(x);
        elem1.style.backgroundPosition = x;
        elem2.style.backgroundPosition = x;
        elem3.style.backgroundPosition = x;

    }

})();


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


  // Obtén el elemento que se hace hover
const blackSpiderSpiderHover = document.querySelector('.blackSpider-seccion-7');

// Obtén los otros elementos que deseas afectar
const barraSuperiorBlackSpider = document.querySelector('.svg-barraSuperior-blackSpider-seccion-7');
const barraInferiorBlackSpider = document.querySelector('.svg-barraInferior-blackSpider-seccion-7');
const fondoBlackSpider = document.querySelector('.svg-blackSpider-seccion-7');

// Agrega un evento de hover al elemento
blackSpiderSpiderHover.addEventListener('mouseover', () => {
  // Aplica estilos a otros elementos cuando 'elementoHover' está en hover
  barraSuperiorBlackSpider.style.opacity = 1;
  barraInferiorBlackSpider.style.opacity = 1;
  fondoBlackSpider.style.opacity = 1;
  SpiderHover.style.filter = 'blur(5px)'
  ChicaSpiderSpiderHover.style.filter = 'blur(5px)'
});

// Elimina los estilos cuando se sale del hover
blackSpiderSpiderHover.addEventListener('mouseout', () => {
  barraSuperiorBlackSpider.style.opacity = 0;
  barraInferiorBlackSpider.style.opacity = 0;
  fondoBlackSpider.style.opacity = 0;
  SpiderHover.style.filter = 'blur(0px)'
  ChicaSpiderSpiderHover.style.filter = 'blur(0px)'
});


const SpiderHover = document.querySelector('.SpiderMan-seccion-7');

// Obtén los otros elementos que deseas afectar
const barraSuperiorSpider = document.querySelector('.svg-barraSuperior-SpiderMan-seccion-7');
const barraInferiorSpider = document.querySelector('.svg-barraInferior-SpiderMan-seccion-7');
const fondoSpider = document.querySelector('.svg-SpiderMan-seccion-7');

// Agrega un evento de hover al elemento
SpiderHover.addEventListener('mouseover', () => {
  // Aplica estilos a otros elementos cuando 'elementoHover' está en hover
  barraSuperiorSpider.style.opacity = 1;
  barraInferiorSpider.style.opacity = 1;
  fondoSpider.style.opacity = 1;
  blackSpiderSpiderHover.style.filter = 'blur(5px)'
  ChicaSpiderSpiderHover.style.filter = 'blur(5px)'
});

// Elimina los estilos cuando se sale del hover
SpiderHover.addEventListener('mouseout', () => {
  barraSuperiorSpider.style.opacity = 0;
  barraInferiorSpider.style.opacity = 0;
  fondoSpider.style.opacity = 0;
  blackSpiderSpiderHover.style.filter = 'blur(0px)'
  ChicaSpiderSpiderHover.style.filter = 'blur(0px)'
});



  // Obtén el elemento que se hace hover
  const ChicaSpiderSpiderHover = document.querySelector('.chicaSpider-seccion-7');

  // Obtén los otros elementos que deseas afectar
  const barraSuperiorChicaSpider = document.querySelector('.svg-barraSuperior-chicaSpider-seccion-7');
  const barraInferiorChicaSpider = document.querySelector('.svg-barraInferior-chicaSpider-seccion-7');
  const fondoChicaSpider = document.querySelector('.svg-chicaSpider-seccion-7');
  
  // Agrega un evento de hover al elemento
  ChicaSpiderSpiderHover.addEventListener('mouseover', () => {
    // Aplica estilos a otros elementos cuando 'elementoHover' está en hover
    barraSuperiorChicaSpider.style.opacity = 1;
    barraInferiorChicaSpider.style.opacity = 1;
    fondoChicaSpider.style.opacity = 1;
    SpiderHover.style.filter = 'blur(5px)'
    blackSpiderSpiderHover.style.filter = 'blur(5px)'

  });
  
  // Elimina los estilos cuando se sale del hover
  ChicaSpiderSpiderHover.addEventListener('mouseout', () => {
    barraSuperiorChicaSpider.style.opacity = 0;
    barraInferiorChicaSpider.style.opacity = 0;
    fondoChicaSpider.style.opacity = 0;
    SpiderHover.style.filter = 'blur(0px)'
    blackSpiderSpiderHover.style.filter = 'blur(0px)'
  });



// const menuButton = document.querySelector('.menu');
// const dropMenu = document.querySelector('.drop-menu');

// menuButton.addEventListener('click', function() {
//   dropMenu.classList.toggle('visible');
//   menuButton.classList.toggle('active');
// });
