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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let anchor = document.querySelectorAll('a')
console.log(anchor)

let anchorTags = Object.values(siteContent['nav'])

for (let i =0; i < anchorTags.length -1; i++){
anchor[i].textContent = anchorTags[i]
}



let nav = document.querySelector('nav')
let newAnchor = document.createElement('a')

newAnchor.textContent = 'Test'
newAnchor.style.color = 'green'
nav.appendChild(newAnchor)

let na = document.createElement('a')
na.textContent = 'Test1'
na.style.color = 'green'
nav.prepend(na)

anchor.forEach(elem => elem.style.color = 'green')


let h1 = document.querySelector('h1')
h1.textContent = siteContent['cta']['h1']

let button = document.querySelector('button')
button.textContent = siteContent['cta']['button']

let img = document.querySelector('#cta-img')
img.setAttribute('src', siteContent['cta']['img-src'])

let headings = document.querySelectorAll('.text-content h4')
headings[0].textContent = siteContent['main-content']['features-h4']
headings[1].textContent = siteContent['main-content']['about-h4']
headings[2].textContent = siteContent['main-content']['services-h4']
headings[3].textContent = siteContent['main-content']['product-h4']
headings[4].textContent = siteContent['main-content']['vision-h4']

let paragraph = document.querySelectorAll('.text-content p')
paragraph[0].textContent = siteContent['main-content']['features-content']
paragraph[1].textContent = siteContent['main-content']['about-content']
paragraph[2].textContent = siteContent['main-content']['services-content']
paragraph[3].textContent = siteContent['main-content']['product-content']
paragraph[4].textContent = siteContent['main-content']['vision-content']

let midImg = document.getElementById('middle-img')
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

let classContact = Array.from(document.querySelector('.contact').children)
let contactArr = Object.values(siteContent['contact'])
for (let i = 0; i < classContact.length; i++)
classContact[i].textContent = contactArr[i]

let footer = document.querySelectorAll('footer p')
footer[0].textContent = siteContent['footer']['copyright']








