export default function ScrollAnimation(){
    ScrollReveal({ reset: false });

    //SECTION CAROUSEL-CATEGORIES
    ScrollReveal().reveal('section.carrousel-categories', { delay: 500, duration: 1000, scale: 0});

    //SECTION CAROUSEL-FEATURED
    ScrollReveal().reveal('section.carrousel-featured', { delay: 500, duration: 1000, scale: 0});

    //SECTION BANNER
    ScrollReveal().reveal('section.banner', { delay: 500, duration: 1000, scale: 0});

    //SECTION CAROUSEL-DAILY
    ScrollReveal().reveal('section.carrousel-daily', { delay: 500, duration: 1000, scale: 0});

    //SECTION RATING
    ScrollReveal().reveal('section.rating', { delay: 500, duration: 1000, scale: 0});

    //SECTION SHOP-APP
    ScrollReveal().reveal('section.shop-app', { delay: 500, duration: 1000, scale: 0});

    //SECTION FOOTER
    ScrollReveal().reveal('footer', { delay: 500, duration: 1000, scale: 0});
}