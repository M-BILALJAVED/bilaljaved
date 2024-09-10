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
// //......................................................................
(() => {
    const hearts = [];
    const requestAnimationFramePolyfill = window.requestAnimationFrame || 
        (callback => setTimeout(callback, 1000 / 60));

    function animateHearts() {
        hearts.forEach((heart, index) => {
            if (heart.alpha <= 0) {
                document.body.removeChild(heart.element);
                hearts.splice(index, 1);
            } else {
                heart.y--;
                heart.scale += 0.004;
                heart.alpha -= 0.013;
                heart.element.style.cssText = `
                    left: ${heart.x}px;
                    top: ${heart.y}px;
                    opacity: ${heart.alpha};
                    transform: scale(${heart.scale}) rotate(45deg);
                    background: ${heart.color};
                    z-index: 99999;
                `;
            }
        });
        requestAnimationFramePolyfill(animateHearts);
    }

    document.onclick = (event) => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        hearts.push({
            element: heart,
            x: event.clientX - 5,
            y: event.clientY - 5,
            scale: 1,
            alpha: 1,
            color
        });
        document.body.appendChild(heart);
    };

    animateHearts();
})();

// const addBlogDetail = document.getElementById('addBlogDetail');
// addBlogDetail.innerHTML = '';

// // Fetch products from the API
// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then(json => {
//         // Access the products array from the JSON response
//         const products = json.products;

//         // Log the entire products array
//         console.log(products);

//         // Set the global `vip` variable
//         if (products.length > 0) {
//             const vip = products[0].title;
//             console.log('Product title:', vip);

//             // Generate blog cards after fetching data
//             let blogCardsHTML = '';
//             products.forEach(product => {
//                 blogCardsHTML += `
//         <div class="col-md-4">
//           <div class="card" style="box-shadow: rgba(100, 107, 115, 0.2) 0px 8px 24px;" >
//             <a href="/blog/blog${product.id}.html">
//               <img src="${product.images[0]}" class="card-img-top rounded-3" alt="...">
//               <div class="card-body">
//                 <h4 class="card-text">${product.title}</h4>
//               </div>
//             </a>
//             <div class="card-footer d-flex justify-content-between">
//               <span><i class="me-2 fa-regular fa-circle-user"></i>USER</span>
//               <span><i class="me-2 fa-regular fa-calendar-days"></i>15 Auguest,2024</span>
//             </div>
//           </div>
//         </div>
//                 `;
//             });
//             addBlogDetail.innerHTML = blogCardsHTML;
//         } else {
//             console.error('No products found');
//         }
//     })
//     .catch(error => console.error('Error fetching the products:', error));
