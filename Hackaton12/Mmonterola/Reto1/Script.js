document.addEventListener("DOMContentLoaded", function() {
    function DropdownMenu() {
      var button = document.getElementById('dropdown-button');
      var menu = document.getElementById('dropdown-menu');
      var arrowIcon = document.getElementById('arrow-icon');
  
      function toggleMenu() {
        menu.classList.toggle('hidden');
        menu.classList.toggle('show');
        arrowIcon.classList.toggle('rotate');
      }
  
      button.addEventListener('click', toggleMenu);
    }
  
    new DropdownMenu();
  });
  