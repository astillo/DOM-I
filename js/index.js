const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//header
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let header = document.querySelectorAll('header nav a')
header[0].setAttribute('class', 'nav-item-1')
header[0].textContent = 'Services'
header[1].setAttribute('class', 'nav-item-2')
header[1].textContent = 'Product'
header[2].setAttribute('class', 'nav-item-3')
header[2].textContent = 'Vision'
header[3].setAttribute('class', 'nav-item-4')
header[3].textContent = 'Features'
header[4].setAttribute('class', 'nav-item-5')
header[4].textContent = 'About'
header[5].setAttribute('class', 'nav-item-6')
header[5].textContent = 'Contact'
header.forEach(a=>{a.style.color = 'green'; a.style.textDecoration = 'none'})
newNav = document.createElement('a')
newNav.setAttribute('class', 'nav-item-7')
newNav.textContent = 'Cheeseburgers'
newNav.style.color = 'green'
newNav1 = document.createElement('a')
newNav1.setAttribute('class', 'nav-item-1')
newNav1.textContent = 'Hamburgers'
newNav1.style.color = 'green'
document.querySelector('header nav').appendChild(newNav)
document.querySelector('header nav').prepend(newNav1)
console.log(newNav)

//intro
let intro = document.querySelector('#cta-img')
intro.src ='img/header-img.png'
let introText = document.querySelector('.cta-text h1')
introText.innerHTML ='<h1>DOM<br> Is<br> Awesome</h1>'
let introBtn = document.querySelector('.cta button')
introBtn.textContent = 'Get Started'



//main
let main = document.querySelector('.main-content .top-content')
main.innerHTML = '<div class="text-content"><h4>Features</h4><p>Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.</p></div> <div class="text-content"><h4> About</h4>    <p>About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.</p></div >'

let mainImg = document.querySelector('#middle-img')
mainImg.src = 'img/mid-page-accent.jpg'


let mainThirds = document.querySelector('.bottom-content')
mainThirds.innerHTML = '<div class="text-content"> <h4> Services</h4 ><p>Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.</p>   </div><div class="text-content"><h4>Product</h4> <p>Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.</p></div><div class="text-content"><h4>Vision</h4><p>Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.</p></div>'

//footer 
let footer = document.querySelector('.contact')
footer.innerHTML = '<h4>Contact</h4> <p>123 Way 456 Street<br> Somewhere, USA</p><p>1 (888) 888-8888</p><p>sales@greatidea.io</p>'

let copy = document.querySelector('footer')
let el = document.createElement('p')
copy.appendChild(el)
copy.textContent ='Copyright Great Idea! 2018'
// copy.innerHTML = '  <p>Copyright Great Idea! 2018</p>'
console.log(el)
