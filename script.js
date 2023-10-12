let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(
        sec => {
            let top = window.scrollY;            //w.sy will give the value of current vertical scroll position of webpage
            let offset = sec.offsetTop - 140    //os will give the distance between top of element and the top of nearest parent
            let height = sec.offsetHeight;          //total hieght of the element including padding border
            let id = sec.getAttribute('id');           //want to access or manipulate the attributes of an HTML element in the DOM.
            

            if (top > offset && top < offset + height) {
                navLinks.forEach(
                    links => {
                        links.classList.remove('active');
                        document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
                    });
            };
        });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({
    reset: true,
    distance: '300px',
    duration: 1500,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , contact form' , {origin:'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img' , {origin:'left'})
ScrollReveal().reveal('.home-content p , .about-content' , {origin:'right'})


var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Video Editor', 'Trader' , 'Software Engineer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
