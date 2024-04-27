import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';

function swiperJs () {

    const swiper = new Swiper('#swiper-popular', {
        // configure Swiper to use modules
        loop: true,

        slidesPerView: 1,
        spaceBetween: 32,

        grabCursor: true,
        ally: false,
        freeMode: true,
        // speed: 15000,
        // autoplay: {
        //     delay: 0.0,
        //     disableOnInteraction: false,
        //     reverseDirection: true,
        // },

        navigation: {
            nextEl: '#sliderNext',
            prevEl: '#sliderPrev',
        },

        breakpoints: {
            // when window width is >= 320px
            425: {
                slidesPerView: 2,
                spaceBetween: 10,
                // slideToClickedSlide: true,
            },

            767: {
                slidesPerView: 3,
                spaceBetween: 20,
                // slideToClickedSlide: true,
            },

            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                // slideToClickedSlide: true,
            },
        },


        // autoplay: {
        //     delay: 0.0,
        //     disableOnInteraction: false,
        //     // reverseDirection: true,
        // },
    });
};

export default swiperJs;