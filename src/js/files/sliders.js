/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Manipulation, Thumbs, Scrollbar, Pagination, EffectFade } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	let swiper1;
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.product__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.product__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Scrollbar],
			observer: true,
			observeParents: true,
			slidesPerView: 4,
			spaceBetween: 20,
			autoHeight: true,
			//speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация

			// pagination: {
			// 	el: '.swiper-pagination',
			// 	clickable: true,
			// },


			// Скроллбар

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},


			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 10,
					autoHeight: true,
				},
				478: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3.2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			},

			// События
			on: {

			}
		});
	}

	if (document.querySelector('.card-product-thumbs__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		swiper1 = new Swiper('.card-product-thumbs__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Manipulation, Thumbs],

			//loop: true,
			spaceBetween: 20,
			slidesPerView: 4,
			freeMode: true,
			watchSlidesProgress: true,
			direction: "vertical",
			autoHeight: true,

			breakpoints: {
				320: {
					spaceBetween: 10,
					direction: "horizontal",
					autoHeight: false,

				},
				768: {
					spaceBetween: 10,
				},
			},
		});
	}

	if (document.querySelector('.card-product__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.card-product__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Manipulation, Thumbs],

			//loop: true,
			//spaceBetween: 10,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: swiper1,
			},
		});
	}

	if (document.querySelector('.related-product__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.related-product__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Scrollbar, Pagination, Manipulation],
			//loop: true,
			spaceBetween: 20,
			slidesPerView: 4,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			// Скроллбар

			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},

			// Брейкпоинты

			breakpoints: {
				320: {
					slidesPerView: 1.2,
					//spaceBetween: 0,
					autoHeight: true,
				},
				478: {
					slidesPerView: 2.2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3.2,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
		});
	}



}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});