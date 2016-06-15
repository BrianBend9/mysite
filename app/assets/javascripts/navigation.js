$(document).ready(function() {

  "use strict";

  var toggleButton = document.querySelector(".hamburger");
  var toggleMenu = document.querySelector(".responsive-menu");

  function toggleMenuHandler(toggleButton, toggleMenu) {
    toggleButton.addEventListener( "click", function(e) {
      e.preventDefault();
      toggleButton.classList.toggle("is-active");
      toggleMenu.classList.toggle("is-active");
    });
  }

  toggleMenuHandler(toggleButton, toggleMenu);



  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 90
        }, 1000);
        return false;
      }
    }
  });

});
