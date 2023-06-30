document.addEventListener("DOMContentLoaded", function () {
  

  var mySwiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 2500, 
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    paginationClickable: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
