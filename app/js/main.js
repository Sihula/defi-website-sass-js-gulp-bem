$(function () {
  $(".cards__slider").slick({
    centerMode: true,
    centerPadding: "360px",
    slidesToShow: 3,
    arrows: false,
    dots: false,
    autoplay: true,
  });
});

let accordions = document.querySelectorAll(
  ".faqs__content-container .accordion"
);

accordions.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("active");
  };
});

let arrow = document.querySelectorAll(
  ".litepaper__inner .litepaper__inner-item"
);

arrow.forEach((acco) => {
  acco.onclick = () => {
    acco.classList.toggle("show");
  };
});

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__inner");

burger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
