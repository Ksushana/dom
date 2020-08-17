$(function () {
  if (isMobile()) {
    var mySwiper = new Swiper('.pm-landing-insurance-list.swiper-container', {
      speed: 400,
      spaceBetween: 10,
      slidesPerView: 3,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }
});
