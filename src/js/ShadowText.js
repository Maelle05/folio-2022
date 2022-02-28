import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

const shadowName = document.querySelector('#name > p.shadow')
const topShadowName = shadowName.getBoundingClientRect().top
const shadowSubTitle = document.querySelector('#sub_title > p.shadow')

shadowName.style.transform = `translateX(15px)`
shadowSubTitle.style.transform = `translateX(5px)`

gsap.to( shadowName, {
    scrollTrigger: {
      tigger: shadowName,
      start: `${window.innerHeight} bottom`,
      end: `${window.innerHeight * 2} top`,
      markers: true,
      scrub: true,
    },
    y: -150,
    ease: "power1.inOut",
    duration: 3
  }
)