// preloader
window.onload = function () {
    setTimeout(function () {
        document.querySelector('.overlap-loader').remove();
    }, 100);

    setTimeout(function () {
        document.querySelector('.pre-loader').style.display = 'none';
        document.querySelector('.pre-loader').remove();
    }, 1200);
};

// banner typing 
var typed = new Typed('#bannerTyping', {
    strings: ['UI/UX Design.', 'Responsive Web Design.', 'Version Control ', 'Front-end Frameworks', 'Search engine optimization'],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000
});
// brand slider 
var swiper = new Swiper('.BrandSlide', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 10,
    autoplay: {
        delay: 1000,
        disableOnInteraction: true,
    },
    // Responsive breakpoints
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    }
});
// Expertise slider
var swiper = new Swiper('.expertiseSlider', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
});