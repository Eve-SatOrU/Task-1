document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const navItems = document.querySelectorAll('.nav-item');
  
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#555';
      } else {
        navbar.style.backgroundColor = '#333';
      }
    });
  
    navItems.forEach(item => {
      item.addEventListener('mouseover', function () {
        this.style.backgroundColor = '#555';
        this.style.color = '#fff';
      });
  
      item.addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
        this.style.color = '#fff';
      });
    });
  });  