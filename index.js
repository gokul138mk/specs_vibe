document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});


$(document).ready(function(){
  $(".carousel-testimony").owlCarousel({
      autoPlay: 3000, // Set AutoPlay to 3 seconds
      items: 1,       // Display one item at a time
      loop: true,     // Infinite loop
      pagination: true,
      navigation: true
  });
});


$(document).ready(function(){
  $('.team-slider').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 2
          },
          1000: {
              items: 4
          }
      }
  });
});
