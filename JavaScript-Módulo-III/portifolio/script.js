document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetPage = this.getAttribute('href');
        loadPage(targetPage);
      });
    });
  
    function loadPage(page) {
      // Carrega a página desejada
      fetch(page)
        .then(response => response.text())
        .then(data => {
          document.querySelector('main').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
    }
  });
  