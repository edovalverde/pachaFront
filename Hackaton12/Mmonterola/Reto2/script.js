document.addEventListener("DOMContentLoaded", function() {
    function Collapsible() {
      var collapsibleItems = document.getElementsByClassName('collapsible');
  
      function toggleContent() {
        var content = this.nextElementSibling;
        content.style.display = (content.style.display === 'none') ? 'block' : 'none';
      }
  
      for (var i = 0; i < collapsibleItems.length; i++) {
        var button = collapsibleItems[i].querySelector('.collapsible-button');
        button.addEventListener('click', toggleContent);
      }
    }
  
    new Collapsible();
  });
  