
  $('.delivery-slider').slick({
    accessibility: true,
    arrows: true,
    dots: true,
    speed: 1500,
    dotsClass: "delivery-slider__dots",
    prevArrow: '<div class="delivery-slider-left delivery-slider__button"><img src="img/chevron-left.svg" alt="Слайд"></div>',
    nextArrow: '<div class="delivery-slider-right delivery-slider__button"><img src="img/chevron-right.svg" alt="Слайд"></div>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1,
          dots: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
        }
      }
    ]
  });
  var acc = document.getElementsByClassName("accordion"),
  i;
for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
      for (j = 0; j < acc.length; j++) {
          if (acc[j] !== this) {
              acc[j].classList.remove("accordion__active");
              acc[j].nextElementSibling.classList.remove("show");

          } else {
              this.classList.toggle("accordion__active");
              this.nextElementSibling.classList.toggle("show");
          }

      }

  }
}

  $(document).ready(function() {
    $(".open-image").fancybox();
  });

  // переменная не переназначается, поэтому используем const
  // используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
  const select = document.querySelectorAll('.select');

  // если массив не пустой, пробегаемся в цикле по каждой найденой сущности
  if (select.length) {
    select.forEach(item => {
      // достаем из текущей сущности .select__current
      const selectCurrent = item.querySelector('.select__current');

      item.addEventListener('click', event => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;

        // Проверяем является ли это choosen и не выбрано ли его значение уже
        if (el === 'choosen' && selectCurrent.innerText !== text) {
          selectCurrent.innerText = text;
        }

        item.classList.toggle('is-active');
      });
    });
  }
