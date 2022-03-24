const $simpleCarousel = document.querySelector('.js-carousel')

  new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  dots: '.dots',
  arrows: {
    prev: '.js-carousel-prev',
    next: '.js-carousel-next'
  }
});
