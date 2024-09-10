AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    offset: 100
});

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
// scroll 
let mybutton = document.getElementById("btn-back-to-top");
mybutton.style.display = "none";

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Counter Element
function animateCounter(element, start, end, duration) {
    let startTime = null;
    const range = end - start;
    const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const value = Math.floor(progress * range + start);
        element.textContent = value;
        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };
    requestAnimationFrame(step);
}

document.addEventListener('DOMContentLoaded', () => {
    const counterNumber1 = document.getElementById('counterNumber1');
    const counterNumber2 = document.getElementById('counterNumber2');

    animateCounter(counterNumber1, 0, 465, 2000); // Counter 1: 0 to 465
    animateCounter(counterNumber2, 0, 75, 2000); // Counter 2: 0 to 75
});

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
