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
//......................................................................
/// Declare the variable in the global scope
let vip;
const id = parseInt(localStorage.getItem('id')) || 1;
const tittilee = id - 1;
let looooop;
for (let i = 1; i <= 4; i++) {
    looooop = i;
    console.log(looooop);
}
// Fetch products from the API
fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(json => {
        // Access the products array from the JSON response
        const products = json.products;

        // Log the entire products array
        console.log(products);

        // Set the global `vip` variable
        if (products.length > tittilee) {
            vip = products[tittilee].title;
            console.log('Product title:', vip);

            // Generate blog cards after fetching data
            generateBlogCards();
        } else {
            console.error('Product index out of bounds');
        }
    })
    .catch(error => console.error('Error fetching the products:', error));

// Function to generate blog cards
function generateBlogCards() {
    let blogid = 1;
    const addBlogDetail = document.querySelector('#addBlogDetail');

    let blogLinksHTML = '';
    for (let i = 0; i < id; i++) {
        const bloglink = `
      <div class="col-md-4">
        <div class="card" style="box-shadow: rgba(100, 107, 115, 0.2) 0px 8px 24px;">
          <a href="/blog/blog${blogid}.html">
            <img src="/assets/blog3.jpg" class="card-img-top rounded-3" alt="...">
            <div class="card-body">
              <h4 class="card-text">${vip}</h4>
            </div>
          </a>
          <div class="card-footer d-flex justify-content-between">
            <span><i class="me-2 fa-regular fa-circle-user"></i>USER</span>
            <span><i class="me-2 fa-regular fa-calendar-days"></i>15 August, 2024</span>
          </div>
        </div>
      </div>`;

        // Accumulate the generated bloglink HTML
        blogLinksHTML += bloglink;

        // Increment blogid for the next blog card
        blogid++;
    }

    // Insert the accumulated HTML into the addBlogDetail element
    addBlogDetail.innerHTML = blogLinksHTML;

    console.log(addBlogDetail);
}
