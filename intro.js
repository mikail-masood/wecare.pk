const image = document.querySelector(".background__img");
const slider = document.querySelector(".slider");
const title = document.querySelector(".intro__title");
const text = document.querySelector(".intro__para");
const button = document.querySelector(".learn__more--button");
const navbar = document.querySelector("nav");
const logo = document.querySelector(".logo__image");
const navlinks = document.querySelector(".nav__links");
const page2 = document.querySelector(".services__intro");


const t1 = new TimelineMax(); 

t1.fromTo(image, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
.fromTo(image, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2")
.fromTo(navbar, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2")
.fromTo(page2, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2")
.fromTo(title, 1.3, {opacity: "0.0"}, {opacity: "1", ease: Power2.easeInOut})
.fromTo(logo, 1.3, {opacity: "0.0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1.2")
.fromTo(navlinks, 1.3, {opacity: "0.0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1.2")
.fromTo(text, 1.4, {opacity: "0.0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1.1")
.fromTo(button, 1.5, {opacity: "0.0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1.1");



