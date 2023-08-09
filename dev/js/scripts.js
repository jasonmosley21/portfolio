import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

gsap.to("#logo",{duration:1,x:100});



GSDevTools.create();