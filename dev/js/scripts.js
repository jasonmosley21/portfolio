import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(ScrollTrigger, GSDevTools);

function landingANIME(){
    var tl = gsap.timeline();

    tl.from("#logo",{duration:1,opacity:0, scale:.5})
    tl.from("#landingtext", {duration:1, opacity:0,y:210})
    return tl;
}

function landingscrollANIME(){
    var tl = gsap.timeline({scrollTrigger:{trigger:"#landing", scrub:true, markers: true, end:"bottom 20%", start:"bottom 80%"}});

    tl.to("#landing", {opacity: .5})
    tl.from("#aboutme", {opacity:.5})
    return tl;
}

var maintl = gsap.timeline();
maintl.add(landingANIME())
.add(landingscrollANIME())
;



GSDevTools.create();