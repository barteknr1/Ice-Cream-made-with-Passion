const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  //   direction: 'vertical',  <= zakomentować
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // <= ze by można było kliknąć
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
