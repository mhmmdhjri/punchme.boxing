// scroll section active link

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
    
};
   


// toggle icon navbar 

let menuIcon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll reveal //


ScrollReveal({ 
    reset: true,
    distance:'90px',
    duration:2000,
    delay:200,  
});


// typed js
const typed = new Typed('.multiple-text',{
   strings:['VENUM','EVERLAST','HOOK','HAYABUSA',''],
   typeSpeed:100,
   backSpeed:100,
   bacDelay:900,
   loop:true

});






























ScrollReveal().reveal('.home-content,.heading,', { origin: 'top' });
ScrollReveal().reveal('.home-img,.service-container,.portofolio-box,.contact form', { origin: 'top' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
