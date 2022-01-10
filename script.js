//NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top='-50px'
    } else {
        navbar.style.top='0';
    }
    lastScrollTop = scrollTop;
});


// TYPED
  var typed = new Typed('.typed', {
    strings: ['Bonjour à vous, je m\'appelle Lucas et j\'ai 25 ans. </br> Après une carrière m\'ayant permis de découvrir plusieurs milieux professionnel et exercer plusieurs metiers différents. J\'ai décider de prendre un virage a 180° afin de devenir développeur, ayant suivis une formation d\'une année pour apprendre le code, je me suis donc formé aux differents langages du front tels que CSS, Javascript et son Framework Vue afin de devenir le plus rapidement possible développeur. Plus qu\'un avenir, je me suis découvert une nouvelle passion, celle de coder'],
    typeSpeed: 20,
  });