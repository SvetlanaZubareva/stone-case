import Swiper from '../vendor/package/swiper-bundle.min.mjs';
const swiperContainer = document.querySelector('.swiper');

// первый слайдер
const slider = () => {
  if (!swiperContainer) {
      return ;
  };
  }
  
  const swiper = new Swiper(swiperContainer, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    observer: true,
    spaceBetween: 24,
    
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      360: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  });

  export { slider }