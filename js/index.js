document.addEventListener('DOMContentLoaded', function () {
    const startScroll = 700; // Ajusta este valor al punto en el que quieres que comience el movimiento
    const scrollFactor = 0.2; // Ajusta este valor para controlar la velocidad de movimiento

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


    window.addEventListener('scroll', function () {

        var header = document.querySelector("header")
        header.classList.toggle("abajo",window.scrollY>0)  //cuando la haga scroll y el valor sea mayor a 0

      // Obtener el desplazamiento vertical de la página
      const scrollY = window.scrollY || window.pageYOffset;
        
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

      if (scrollY >= startScroll && scrollY< duendeVerdeLimit ) {
        duendeVerde.style.transform = `translateY(${(scrollY - startScroll) * scrollFactor}px) scaleX(-1)`;
      } 

    });
  });


  let counter = document.querySelector('.counter');

  function startCounter() {
    let count = 0;
  
    const interval = setInterval(() => {
      count++;
      counter.textContent = count;
  
      if (count === 100) {
        clearInterval(interval);
        redirectToNewPage();
      }
    }, 80);
  }
  
  function redirectToNewPage() {
    setTimeout(function() {
      window.location.href = '../html/index.html';
    }, 1000); 
  }
  
  window.onload = startCounter;
  