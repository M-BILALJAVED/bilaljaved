document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the id from localStorage, default to 2 if not set
  id = parseInt(localStorage.getItem('id')) || 1;

  // Set up the event listener for the button
  const button = document.getElementById('downloadBtn');
  button.addEventListener('click', createHtmlFile);
});

function createHtmlFile() {
  // Get the content from the input fields
  const pic = document.getElementById('picc').value; // This won't be used as it's a file input
  const TITLE = document.getElementById('TITLE').value;
  const firstParagraph = document.getElementById('firstParagraph').value;
  const SecondParagraph = document.getElementById('SecondParagraph').value;
  const FANCYParagraph = document.getElementById('FANCYParagraph').value;

  // Check if the required inputs are empty
  if (!TITLE || !firstParagraph || !SecondParagraph || !FANCYParagraph) {
    alert('Please fill in all the fields.');
    return;
  }

  // Template for the HTML content
  const htmlTemplate = `
     <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${TITLE} | RANA BILAL JAVED</title>
  <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png">
  <!-- our own style  -->
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/responsive.css">
  <!-- bootstrap css -->
  <link rel="stylesheet" href="/bootstrap/css/bootstrap.min.css">
  <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">  -->
  <!-- fontawesome -->
  <script src="https://kit.fontawesome.com/57efafa6c2.js" crossorigin="anonymous"></script>
  <!-- Local Themify Icons -->
  <link rel="stylesheet" href="themify-icons/themify-icons.css">
  <!-- cssanimation.io css -->
  <link href="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css" rel="stylesheet">
  <!-- animation.style -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <!-- Swiper CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
  <!-- Aos  -->
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <style>

  </style>

</head>

<body>

  <!----------------------------- pre-loader ----------------------------->
  <section class="pre-loader">
    <div class="container-fluid">
      <div class="overlap-loader">
        <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <div class="row">
        <div class="col-3 m-0 p-0">
          <div class="bg-loader"></div>
        </div>
        <div class="col-3 m-0 p-0">
          <div class="bg-loader"></div>
        </div>
        <div class="col-3 m-0 p-0">
          <div class="bg-loader"></div>
        </div>
        <div class="col-3 m-0 p-0">
          <div class="bg-loader"></div>
        </div>
      </div>
    </div>
  </section>
  <!----------------------------- pre-loader ----------------------------->

  <!----------------------------- scrol ----------------------------->
  <button type="button" class="scroll-btn btn btn-danger btn-floating btn-lg" id="btn-back-to-top">
    <i class="fas fa-arrow-up"></i>
  </button>
  <!----------------------------- scrol ----------------------------->

  <!----------------------------- header-below-md ----------------------------->
  <header class="header-below-md d-md-none d-flex justify-content-center">
    <img class="" src="/assets/logo-icon.png" alt="">
    <i class="fa-solid fa-bars" class="btn btn-primary" type="button" data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasleft" aria-controls="offcanvasleft"></i>
    <!--  -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasleft" aria-labelledby="offcanvasleftLabel">
      <div class="offcanvas-header">
        <span id="offcanvasleftLabel">
          <img src="/assets/logo-icon.png" alt="">
        </span>
        <button class="fa-solid fa-xmark" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="ps-2">
          <a data-bs-dismiss="offcanvas" href="#home">
            <li>Home</li>
          </a>
          <a data-bs-dismiss="offcanvas" href="#service-wrapper">
            <li>expertise</li>
          </a>
          <a data-bs-dismiss="offcanvas" href="#recent-project-wrapper">
            <li>portfolio</li>
          </a>
          <a data-bs-dismiss="offcanvas" href="#about-wapper">
            <li>about</li>
          </a>
          <a data-bs-dismiss="offcanvas" href="#resume-wrapper">
            <li>Resume</li>
          </a>
          <a data-bs-dismiss="offcanvas" href="#blog-wrapper">
            <li>blog</li>
          </a>
          <a data-bs-dismiss="offcanvas" href="#contact-wrapper">
            <li>contact</li>
          </a>
        </ul>
      </div>
    </div>
  </header>
  <!----------------------------- header-below-md ----------------------------->

  <!----------------------------- header-left ----------------------------->
  <header class="header-left d-md-flex d-none flex-column position-fixed justify-content-between align-items-center">
    <div class="logo">
      <a href="#"><img src="/assets/logo-icon.png" alt="" srcset=""></a>
    </div>
    <div class="menu">
      <ul class="nav d-flex flex-column text-center">
        <li>
          <a href="#"><i class="fas fa-home"></i>
            <div class="menu-name">Home</div>
          </a>
        </li>
        <li>
          <a href="#service-wrapper"><i class="fas fa-cog"></i>
            <div class="menu-name">Services</div>
          </a>
        </li>
        <li>
          <a href="#recent-project-wrapper"><i class="fas fa-briefcase"></i>
            <div class="menu-name">Portfolio</div>
          </a>
        </li>
        <li>
          <a href="#about-wapper"><i class="fas fa-user"></i>
            <div class="menu-name">About</div>
          </a>
        </li>
        <li>
          <a href="#resume-wrapper"><i class="fas fa-file-alt"></i>
            <div class="menu-name">Resume</div>
          </a>
        </li>
        <li class="border-0">
          <a href="#blog-wrapper"><i class="fas fa-blog"></i>
            <div class="menu-name">Blog</div>
          </a>
        </li>
        <li class="border-0">
          <a href="#contact-wrapper"><i class="fas fa-comments"></i>
            <div class="menu-name">Contact</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="header-video">
      <!-- <a href=""><i class="fas fa-play"></i></a> -->
    </div>

  </header>
  <!----------------------------- header-left ----------------------------->

  <!----------------------------- BLOG ----------------------------->
  <section class="BLOG_PAGE">
    <div class="container">
      <div class="row">
        <div class="col-10 m-auto">
          <img src="${pic}" height="500px" width="100%">
          <div class="BLOG_PAGE-span py-3">
            <span class="me-3"><i class="fa-solid fa-user-tie me-2"></i>Admin</span>
            <span><i class="fa-solid fa-comments me-2"></i><span>26</span>Comments</span>
          </div>
          <div class="">
            <h1>${TITLE}</h1>
            <p>
              ${firstParagraph}<br>
            </p>
          </div>
          <div class="BLOG_PAGE-fancy my-4">
            <h3>${FANCYParagraph}</h3>
          </div>
          <p>${SecondParagraph}</p>
          <div class="BLOG_PAGE-auther d-flex gap-4">
            <img class="rounded-circle bg-warning" src="/assets/abpic.png" width="170px" height="170px" alt=""
              srcset="">
            <div class="">
              <h4>RANA CHAND</h4>
              <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec at
                odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit. All
                the Lorem Ipsum generators on the Internet tend. Entire its the did figure wonder off. sportsmen
                zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listeni
              </p>
            </div>
          </div>
          <div class="BLOG_PAGE-tag d-flex justify-content-between my-4">
            <div class="d-flex gap-4 align-items-center">
              <h4>TAGS:</h4>
              <a href="">Algorithm</a>
              <a href="">Data Science</a>
            </div>
            <div class="d-flex gap-4 align-items-center">
              <h4>Share:</h4>
              <i class="fas fa-phone"></i>
              <i class="fas fa-xmark"></i>
            </div>
          </div>
          <hr>
          <section>
            <div class="BLOG_PAGE-comment d-flex gap-4">
              <img class="rounded-circle bg-warning" src="/assets/abpic.png" width="100px" height="100px" alt=""
                srcset="">
              <div class="">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <h4 class="m-0">RANA CHAND</h4>
                    <span>2 Aug, 2024</span>
                  </div>
                  <a href=""><i class="fa-solid fa-reply me-2"></i>Reply</a>
                </div>
                <p>Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion consectetur elit. Vesti at bulum nec
                  at
                  odio aea the dumm ipsumm ipsum that dolocons rsus mal suada and fadolorit to the consectetur elit.
                </p>
              </div>
            </div>
            <div class="BLOG_PAGE-form my-3">
              <h2 class="my-5">Leave a Comment</h2>
              <form action="">
                <div class="row">
                  <div class="col-6 mb-4">
                    <div class="form-floating">
                      <input type="NAME" class="form-control" placeholder="NAME">
                      <label>NAME *</label>
                    </div>
                  </div>
                  <div class="col-6 mb-4">
                    <div class="form-floating">
                      <input type="EMAIL" class="form-control" placeholder="EMAIL">
                      <label>EMAIL *</label>
                    </div>
                  </div>
                  <div class="col-12 mb-5">
                    <div class="form-floating">
                      <textarea class="form-control" placeholder="Leave a comment here"
                        style="height: 100px"></textarea>
                      <label>Comments</label>
                    </div>
                  </div>
                  <button class="my-btn primary-btn" style="width: 300px;margin: 0 auto;"><span>POST
                      COMMENT</span></button>
              </form>
            </div>
        </div>
      </div>
  </section>
  </div>
  </div>
  </section>
  <!----------------------------- BLOG ----------------------------->


  <!----------------------------- contact ----------------------------->
  <footer class="footer-wrapper">
    <div class="container py-4">
      <div class="row align-items-center">
        <div class="col-md-6 text-md-start text-center">
          <div class="footer-social">
            <a href="">
              <lord-icon src="https://cdn.lordicon.com/mpigogwa.json" trigger="loop"
                style="width:30px;height:30px"></lord-icon>
            </a>
            <a href="">
              <lord-icon src="https://cdn.lordicon.com/zmrclejd.json" trigger="loop"
                style="width:30px;height:30px"></lord-icon>
            </a>
            <a href="">
              <lord-icon src="https://cdn.lordicon.com/ftgjzwjn.json" trigger="loop"
                style="width:30px;height:30px"></lord-icon>
            </a>
            <a href="">
              <lord-icon src="https://cdn.lordicon.com/fjuachvi.json" trigger="loop"
                style="width:30px;height:30px"></lord-icon>
            </a>

          </div>
        </div>
        <div class="col-md-6 text-md-end text-center">
          <p class="m-0">© 2024 RANA BILAL JAVED. All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
  <!----------------------------- contact ----------------------------->


  <!-- for typed -->
  <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
  <!-- cssanimation.io js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js"></script>
  <!-- <script src="https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/letteranimation.min.js"></script> -->
  <!-- bootstrap js -->
  <script src="/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script> -->
  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
  <!-- lordicon -->
  <script src="https://cdn.lordicon.com/lordicon.js"></script>
  <!-- Aos  -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>


  <!-- own js -->
  <script src="/js/main.js"></script>
</body>

</html>
    `;

  // Create a Blob object with the HTML content
  const blob = new Blob([htmlTemplate], { type: 'text/html' });

  // Create a download link and simulate a click
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `blog${id}.html`;
  link.click();
  // Increment id for the next file
  id++;

  // Store the updated id in localStorage
  localStorage.setItem('id', id);
  // clear

  // Revoke the object URL to free memory
  URL.revokeObjectURL(link.href);
  // clear 
  document.getElementById('picc').value = '';
  document.getElementById('TITLE').value = '';
  document.getElementById('firstParagraph').value = '';
  document.getElementById('SecondParagraph').value = '';
  document.getElementById('FANCYParagraph').value = '';
}