const menuicon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const timelineItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
});

const workItems = document.querySelectorAll('.timeline-item');

window.addEventListener('scroll', () => {
    workItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
});

const animatedElements = document.querySelectorAll('.home-content, .about-content, .home-img img, .about-img img, .timeline-item');

window.addEventListener('scroll', () => {
    animatedElements.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            item.classList.add('animated');
        }
    });
});

