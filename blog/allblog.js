const allBlogCardElement = document.getElementById('ALL_BLOG_CARD');
const productId1 = new URLSearchParams(window.location.search).get('id');
console.log(productId1);

if (productId1) {
  const SINGLE_BLOG_CARD1 = document.getElementById('SINGLE_BLOG_CARD');
  console.log("Product ID:", productId1); // Check if this prints the correct ID


  fetch(`https://dummyjson.com/products/${productId1}`)
    .then(res => res.json())
    .then(items => {
      if (productId1) {
        SINGLE_BLOG_CARD1.innerHTML = `<div class="col-10 m-auto">
          <img
            src="${items.images[0]}"
            height="500px" width="100%">
          <div class="BLOG_PAGE-span py-3">
            <span class="me-3"><i class="fa-solid fa-user-tie me-2"></i>${items.brand}</span>
            <span><i class="fa-solid fa-comments me-2"></i><span>26</span>Comments</span>
          </div>
          <div class="">
            <h1>${items.title}</h1>
            <p>
              In today’s rapidly evolving digital world, businesses require dynamic websites and seamless user
              interfaces. Enter RANA BILAL JAVED, a highly skilled front-end developer who is passionate about creating
              engaging user experiences. With a foundation built on modern web technologies and a Bachelor in Higher
              National Diploma, RANA BILAL JAVED has consistently demonstrated excellence in front-end development.

            <h3>Expertise in Front-End Development</h3>
            BILAL JAVED has extensive experience working with HTML, CSS, JavaScript, and a variety of frameworks such as
            React and Vue.js. With a focus on responsive design, BILAL ensures that every website he develops works
            flawlessly on any device, whether it’s a desktop, tablet, or smartphone.<br>
            </p>
          </div>
          <div class="BLOG_PAGE-fancy my-4">
            <h3>${items.description}</h3>
          </div>
          <p>
          <h3>Innovation through Animation and Interactivity</h3>
          One of the standout qualities of RANA BILAL JAVED is his ability to integrate stunning animations and
          interactive features into websites. From implementing advanced text animation effects to creating seamless
          transitions using CSS and JavaScript, BILAL JAVED knows how to captivate users.

          <h3>Problem-Solving and Creative Thinking</h3>
          BILAL's expertise goes beyond just coding. He brings creative problem-solving to the table, ensuring that any
          issues in user experience or functionality are resolved efficiently. His ability to use tools like CountUp.js
          for number counter animations, or API integrations for dynamic content, demonstrates his versatility in web
          development.</p>
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
        </div>`;
      } else {
        console.error('No products found');
      }
    })
} else {
  console.log('Product ID not found in the URL');
}


// Now clear the content
allBlogCardElement.innerHTML = '';

// Fetch products from the API
fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(json => {
    const products = json.products;
    if (products.length > 0) {
      // Generate blog cards after fetching data
      let blogCardsHTML = '';
      products.forEach(product => {
        blogCardsHTML += `
         <div class="col-md-4">
           <div class="card" style="box-shadow: rgba(100, 107, 115, 0.2) 0px 8px 24px;">
                <a onclick="userclickbtn(${product.id});">
               <img src="${product.images[0]}" class="card-img-top rounded-3" alt="${product.title}" style="height: 300px;width: 300px;object-fit: contain;">
               <div class="card-body">
                 <h4 class="card-text">${product.title}</h4>
               </div>
             </a>
             <div class="card-footer d-flex justify-content-between">
               <span><i class="me-2 fa-regular fa-circle-user"></i>${product.brand}</span>
               <span><i class="me-2 fa-regular fa-calendar-days"></i>${product.stock} Aug</span>
             </div>
           </div>
         </div>
        `;
      });
      allBlogCardElement.innerHTML = blogCardsHTML;
    } else {
      console.error('No products found');
    }
  })
  .catch(error => console.error('Error fetching the products:', error));

// Function triggered when the user clicks on a blog card
userclickbtn = (id) => {
  console.log(id);
  window.location.href = `/blog/blog-single.html?id=${id}`;
}


