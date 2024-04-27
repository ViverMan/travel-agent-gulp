import ScrollReveal from 'scrollreveal';

function ScrollRev () {

//базовые настройки, для всех
    ScrollReveal({
        distance: '60px',
        duration: 2800,
    });
//--------------//-------------
    ScrollReveal().reveal(`.hint-discover, .partners`, {
        origin: 'top',
    });

    ScrollReveal().reveal(`.scroll-down, .popular__controls, .discover__picture-img`, {
        origin: 'right',
    });

    ScrollReveal().reveal(`.discover__title, .discover__text, .popular__title`, {
        origin: 'left',
    });

    ScrollReveal().reveal(`.discover__form`, {
        origin: 'bottom',
    });  
};

export default ScrollRev;