import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(ScrollTrigger);

function landingANIME(){
    var tl = gsap.timeline();

    tl.from("#logo",{duration:1,opacity:0, scale:.5})
    tl.from("#landingtext", {duration:1, opacity:0,x:200, delay:-1})
    tl.from("#arttext", {x:-200, duration:1, opacity:0, delay: -1})
    return tl;
}



function landingscrollANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#backgroundcolor", scrub:true, markers: false, end:"100% 0%", start:"20% 0%"}});

    tl.to("#logo", {opacity:0, scale: .5,duration:1})
    tl.to("#landingtext", {x:200, opacity: 0, delay: -1, duration: 1})
    tl.to("#arttext", {opacity:0, x:-200, delay: -1, duration: 1})
    
    return tl;
}

function cover1ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#item1", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#item1", {opacity: 0, duration: 1})
    return tl;
}
function cover2ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#item2", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#item2", {opacity: 0, duration: 1})
    return tl;
}
function cover3ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#item3", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#item3", {opacity: 0, duration: 1})
    return tl;
}

function cover4ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#item4", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#item4", {opacity: 0, duration: 1})
    return tl;
}

function cover5ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#item5", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#item5", {opacity: 0, duration: 1})
    return tl;
}

function cover6ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#item6", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#item6", {opacity: 0, duration: 1})
    return tl;
}

function cover7ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#item7", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#item7", {opacity: 0, duration: 1})
    return tl;
}

function cover8ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#item8", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#item8", {opacity: 0, duration: 1})
    return tl;
}

function projectANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#img1", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}});

    tl.from("#img1", {opacity: 0, y:200, duration: 1 })
    tl.from("#img2", {opacity: 0, y:200, duration: 1, delay: -1 })

    return tl;
}

function project2ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#img3", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}})

    tl.from("#img3", {opacity: 0, y:200, scale: .90})

    return tl;
}

function project3ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#img4", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}})

    tl.from("#img4", {opacity:0, y:200})

    return tl;
}

function project4ANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#img5", scrub:true, markers: false, end:"50% 50%", start:"0% 90%"}})

    tl.from("#img5", {opacity: 0, y:200, duration:1})
    tl.from("#img6", {opacity:0, y:200, duration:1, delay:-1})

    return tl;
}

function aboutANIME(){
    var tl = gsap.timeline()

    tl.from("#profilepic", {opacity: 0, y:-200, duration:1})
    tl.from("#aboutmetext", {opacity:0, y:200, duration:1, delay:-1})
    tl.from("#buttons", {opacity:0, y:200, duration: 1, delay: -1})
    return tl;
}



var maintl = gsap.timeline();
maintl.add(landingANIME())
.add(landingscrollANIME())
.add(cover1ANIME())
.add(cover2ANIME())
.add(cover3ANIME())
.add(cover4ANIME())
.add(cover5ANIME())
.add(cover6ANIME())
.add(cover7ANIME())
.add(cover8ANIME())
.add(projectANIME())
.add(project2ANIME())
.add(project3ANIME())
.add(project4ANIME())
.add(aboutANIME())

;

let autoSlideInterval;

document.addEventListener("DOMContentLoaded", () => {
    const carouselInner = document.querySelector('.carousel_inner');
    const items = document.querySelectorAll('.carousel_item');
    const dots = document.querySelectorAll('.carousel_dot');
    let currentIndex = 0;
    const slideInterval = 3000;

    function goToSlide(index) {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        document.querySelector('.carousel_dot__active').classList.remove('carousel_dot__active');
        dots[index].classList.add('carousel_dot__active');
        currentIndex = index;
    }

    function autoSlide() {
        autoSlideInterval = setInterval(() => {
            let nextIndex = (currentIndex + 1) % items.length;
            goToSlide(nextIndex);
        }, slideInterval);
    }

    function pauseAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function resumeAutoSlide() {
        autoSlide();
    }

    document.querySelector('.carousel_button__prev').addEventListener('click', () => {
        let prevIndex = (currentIndex - 1 + items.length) % items.length;
        goToSlide(prevIndex);
    });

    document.querySelector('.carousel_button__next').addEventListener('click', () => {
        let nextIndex = (currentIndex + 1) % items.length;
        goToSlide(nextIndex);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', pauseAutoSlide);
    carousel.addEventListener('mouseleave', resumeAutoSlide);

    autoSlide();
});




// GSDevTools.create();