$(function () {
  $('.cards__slider').slick({
    centerMode: true,
    centerPadding: '360px',
    slidesToShow: 3,
    arrows: false,
    dots: false,
    autoplay: true
  });

});
// const hamburger = document.querySelector('.burger');
// const navLink = document.querySelector('.menu');

// hamburger.addEventListener('click', () => {
//   navLink.classList.toggle('active');
// });



let accordions = document.querySelectorAll('.faqs__content-container .accordion');

accordions.forEach(acco => {
  acco.onclick = () => {
    acco.classList.toggle('active');
  }
});