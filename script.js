import Swiper from '../vendor/package/swiper-bundle.min.mjs';
const swiperContainer = document.querySelector('.swiper');
const input = document.querySelector('.input');
const inputEmail = document.querySelector('.input-email')
const inputTelephone = document.querySelector('.input-telephone')
const form = document.querySelector('.section-feedback_form');
const button = document.querySelector('.section-feedback_button');
const modal = document.querySelector('.section-modal');

window.onload = () => {
      slider();
  }
// код для включения слайдера на 1920 и 400
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
      spaceBetween: 15,
      
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

    // код для окрашивания placeholder в красный при клике по кнопке 
      form.addEventListener('submit', (evt) => {
        // Отменяем действие по умолчанию
        evt.preventDefault();
        
        // Проверяем, что поля заполнены
        if (input.value === '') {
          // pl.innerHTML = fontcolor("green");
          input.classList.add('input--color');
          button.classList.add('button-disabled');
          button.textContent = 'Не заполнены поля';
        }

        if (inputEmail.value === '') {
          inputEmail.classList.add('input--color');
          button.classList.add('button-disabled');
        }

        if (inputTelephone.value === '') {
          inputTelephone.classList.add('input--color');
          button.classList.add('button-disabled');
        }
         
        // Если всё в порядке, отправляем форму
        if (input.value === '' || inputEmail.value === '' || inputTelephone.value === '') {
          return
        } else{
          modal.classList.remove('close-modal');
          modal.classList.add('open-modal');
          const timerId = setTimeout(() => {
            modal.classList.remove('open-modal');
            modal.classList.add('close-modal');
            form.submit();
          }, 2000)
}
      });


  // анимация для элементов
      const observer = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
              // добавить ему CSS-класс
              entry.target.classList.add('type');
            }
          });
      });
      const observer2 = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
              // добавить ему CSS-класс
              entry.target.classList.add('type2');
            }
          });
      });
      const observer3 = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
              // добавить ему CSS-класс
              entry.target.classList.add('type3');
            }
          });
      });
      const observer4 = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
              // добавить ему CSS-класс
              entry.target.classList.add('type4');
            }
          });
      });
      const observer5 = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
              // добавить ему CSS-класс
              entry.target.classList.add('type5');
            }
          });
      });
      const observer6 = new IntersectionObserver(entries => {
        // перебор записей
        entries.forEach(entry => {
            // если элемент появился
            if (entry.isIntersecting) {
              // добавить ему CSS-класс
              entry.target.classList.add('type6');
            }
          });
      });
  // Сообщить наблюдателю, какие элементы следует отслеживать
  observer.observe(document.querySelector('.animation'));
  observer2.observe(document.querySelector('.animation2'));
  observer3.observe(document.querySelector('.animation3'));
  observer4.observe(document.querySelector('.animation4'));
  observer5.observe(document.querySelector('.animation5'));
  observer6.observe(document.querySelector('.animation6'));
  
    