const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //toggling the nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        //animate navlinks
        navLinks.forEach((link, index) => {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.8}s`;

        });

        burger.classList.toggle('toggle');
    });
    
}

navSlide();