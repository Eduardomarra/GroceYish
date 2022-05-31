export default function ScrollAnimation(){
    ScrollReveal({ reset: true });
    ScrollReveal().reveal('.carrousel-categories', { delay: 500, duration: 1000 });
    ScrollReveal().reveal('.carrousel-featured', { delay: 500, duration: 1000 });
}