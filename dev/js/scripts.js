import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(ScrollTrigger);

function landingANIME(){
    var tl = gsap.timeline();

    tl.from("#logo",{duration:1,opacity:0, scale:.5})
    tl.from("#landingtext", {duration:1, opacity:0,y:210})
    return tl;
}

function imageANIME(){
    var tl = gsap.timeline();

    tl.to("#backgroundcolor", { duration: 1})
    return tl;
}

function landingscrollANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#backgroundcolor", scrub:true, markers: false, end:"100% 0%", start:"20% 0%"}});

    tl.to("#landing", {opacity: 0})
    tl.from("#aboutme", {opacity:0})
    return tl;
}

var maintl = gsap.timeline();
maintl.add(landingANIME())
.add(landingscrollANIME())
.add(imageANIME)
;



//GSDevTools.create();