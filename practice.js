'use strict';

const navbar = document.querySelector('#navbar');
const navbarheight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > navbarheight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
   }
});

navbar.addEventListener('click', (event) => {
    const target = event.target;
    const scroll = target.dataset.scroll;
    if (scroll === undefined) {
        return;
    } else {
        console.log(event.target.dataset.scroll);
    }
    scrolltoid(scroll)
});

const homebtn = document.querySelector('.home__button');
homebtn.addEventListener('click', (event) => {
    const hometarget = event.target;
    const homescroll = hometarget.dataset.homescroll;
    if (homescroll === undefined) {
        return;
    } else {
        console.log(event.target.dataset.homescroll);
    }
    scrolltoid(homescroll);
});

const home=document.querySelector('.home__container')
const homeheight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeheight;
});

const arrowup = document.querySelector('.arrowup__btn');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeheight / 2) {
        arrowup.classList.add('arrowup--visible');
    } else {
        arrowup.classList.remove('arrowup--visible');
    }
});

arrowup.addEventListener('click', () => {
    scrolltoid('#home');
});


const workbtn = document.querySelector('.mywork__btn');
const workcollection = document.querySelector('.mywork__collection');
const hrefs = document.querySelectorAll('.href');

workbtn.addEventListener('click', (event) => {
    const filter = event.target.dataset.filter
        || event.target.parentNode.parentNode.dataset.filter
        || event.target.parentNode.dataset.filter;
    console.log(filter);
    if (filter === undefined) {
        return;
    } 
        workcollection.classList.add('href__animation');
    
    setTimeout(() => {
        hrefs.forEach((href) => {
            if (filter === href.dataset.type) {
                href.classList.remove('href--invisible');
            } else {
                href.classList.add('href--invisible');
            }
        });
        workcollection.classList.remove('href__animation');
    }, 400);
});

function scrolltoid(section) {
    const scrolltoid = document.querySelector(section);
    scrolltoid.scrollIntoView({ behavior: "smooth" });
}