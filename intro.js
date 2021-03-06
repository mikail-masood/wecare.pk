const image = document.querySelector(".background__img");
const slider = document.querySelector(".slider");
const title = document.querySelector(".intro__title");
const button = document.querySelector(".learn__more--button");
const page2 = document.querySelector(".services__intro");


const t1 = new TimelineMax(); 

t1.fromTo(image, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
.fromTo(image, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })
.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2")
.fromTo(page2, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut }, "-=1.2")
.fromTo(title, 1.3, {opacity: "0.0"}, {opacity: "1", ease: Power2.easeInOut})
.fromTo(button, 1.5, {opacity: "0.0"}, {opacity: "1", ease: Power2.easeInOut}, "-=1.1");



