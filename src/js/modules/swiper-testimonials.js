import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

let swiper1, swiper2, swiper3, swiperHorizontal;

//устанавливаем брейкпоинты

const breakpoint = window.matchMedia( '(max-width:1023px)' );

//функция которая проверяет срабатывание медиазапроса в breakpoint

const breakpointChecker = function() {

    if ( breakpoint.matches === true ) {

        if ( swiper1 !== undefined ) swiper1.destroy( true, true );
        if ( swiper2 !== undefined ) swiper2.destroy( true, true );
        if ( swiper3 !== undefined ) swiper3.destroy( true, true );
            return;
        } 
        
        else if ( breakpoint.matches === false ) {
            // swiperTestimonials ();
            return enableSwiper();    
        }   
};

const breakpoint2 = window.matchMedia( '(min-width:1023px)' );

//функция которая проверяет срабатывание медиазапроса в breakpoint

const breakpointChecker2 = function() {

    if ( breakpoint2.matches === true ) {

        if ( swiperHorizontal !== undefined ) swiperHorizontal.destroy( true, true );
            return;
        } 
        
        else if ( breakpoint2.matches === false ) {
            // swiperTestimonials ();
            return enableSwiper();    
        }   
};


const enableSwiper = function swiperTestimonials () {

    swiperHorizontal = new Swiper('#testimonials-horizontal', {
        direction: 'horizontal',
        slidesPerView: 1,
        // slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        ally: false,
        freeMode: true,
        speed: 5000,
        loop: true,

        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        breakpoints: {
            762: {
                slidesPerView: 2,
                spaceBetween: 25,
            },
        },

    });
    
    swiper1 = new Swiper('#testimonials-col-1', {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        ally: false,
        freeMode: true,
        speed: 5000,
        loop: true,

        autoplay: {
            delay: 0.0,
            disableOnInteraction: false,
        },

    });

    swiper2 = new Swiper('#testimonials-col-2', {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        ally: false,
        freeMode: true,
        speed: 6000,
        loop: true,
        autoplay: {
            delay: 0.0,
            disableOnInteraction: false,
            reverseDirection: true,
        },
    });

    swiper3 = new Swiper('#testimonials-col-3', {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 32,
        grabCursor: true,
        ally: false,
        freeMode: true,
        speed: 8000,
        loop: true,
        autoplay: {
            delay: 0.0,
            disableOnInteraction: false,
        },
    });
}



  breakpoint.addListener(breakpointChecker);

  breakpointChecker();

export default swiperTestimonials;