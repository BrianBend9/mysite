// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function() {
  // Fade-in transitions for About and Feature sections
  var tweenAbout = new TweenMax.from('.card-about', 1, {
    css: {autoAlpha:0},
    repeat: 0
  });

  var tweenFeature = new TweenMax.from('.card-feature', 1, {
    css: {autoAlpha:0},
    repeat: 0
  });

  // Transition for navbar animation and fixed top positioning
  var tweenNav = new TweenMax.to('#nav-container', 0.5);

  // Tranisition triggers and controls
  var sceneNav = new ScrollMagic.Scene({
    triggerElement: '#nav-container'
  })
  .setTween(tweenNav)
  .setPin('#nav-container')
  .triggerHook(0)
  .addIndicators();

  var sceneAbout = new ScrollMagic.Scene({
    triggerElement: '#about'
  })
  .setTween(tweenAbout)
  .triggerHook(0.5)
  .reverse(false)
  .addIndicators();

  var sceneFeature = new ScrollMagic.Scene({
    triggerElement: '#feature'
  })
  .setTween(tweenFeature)
  .triggerHook(0.6)
  .reverse(false)
  .addIndicators();

  var controller = new ScrollMagic.Controller()
  .addScene([sceneNav, sceneAbout, sceneFeature]);

  //Smooth scroll to anchor positions on click of Navbar links
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 70
        }, 1000);
        return false;
      }
    }
  });

});
