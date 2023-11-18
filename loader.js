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
    window.location.href = 'animaciones.html';
  }, 1000); 
}

window.onload = startCounter;
