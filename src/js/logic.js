
import Lenis from "lenis"; // حالا کار می‌کنه
import { MovePosters } from "./movePosters.js";
import { movePlane } from "./movePlane.js";
import { AppearenceCartForAirPlanePart } from "./appearenceCartForAirPlanePart.js";





const myHeader = document.querySelector("#header");
const theBurgerTitle = document.querySelector("#theBurgerTitle");
const paragraphUnderTheBurger = document.querySelector("#paragraphUnderTheBurger");
const TopClassicTitle = document.querySelector("#top-classic");
const foodThatFeelsGood = document.querySelector("#foodThatFeelsGood");
const stickerPng = document.querySelector("#sticker");
const orderPostersOfOrderNow = document.querySelectorAll(".orderNow")
const justCheesBurgerBackground = document.querySelector("#justCheesBurgerBackground");
const pureQuelity = document.querySelector("#pureQuelity")
const fourMaterial = document.querySelector("#fourMaterial");
const goldPartWithAirplane = document.querySelector("#goldPartWithAirplane");
const feelItTheTitleChangePart = document.querySelector("#feelItTheTitleChangePart");
const belowMenuPart = document.querySelector("#belowMenuPart");
const topClassicTitle = document.querySelector("#top-classic-title");
const juicyCheesyFullyLloaded = document.querySelector("#juicy-cheesy-fully-loaded");
const subTitleBelowJuicyCheesy = document.querySelector("#subTitleBelowJuicyCheesy");
const experience = document.querySelector("#experience");
const foodThatS = document.querySelectorAll(".foodThat");
const feelTheChangeParagraph = document.querySelectorAll(".feelTheChangeParagraph")
const lastCrav = document.querySelector("#lastCrav");








const claculateSpeedOfScroll = (atLeast, scrolly, percentage, section) => {


    if (section != null) {
        if (scrolly > atLeast) {
            section.style.top = - (scrolly / percentage) + "px"
        }
    }

}



/////////////////////about smooth scroll with lenis //////////////////////

const lenis = new Lenis({ smoothWheel: true });

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



lenis.on("scroll", ({ scroll }) => {


console.log(scroll);

    



    claculateSpeedOfScroll(20, scroll, 3, myHeader);
    claculateSpeedOfScroll(20, scroll, 2, theBurgerTitle)
    claculateSpeedOfScroll(20, scroll, 2, paragraphUnderTheBurger);
    claculateSpeedOfScroll(20, scroll, 2, TopClassicTitle);
    claculateSpeedOfScroll(20, scroll, 2, orderButtonAndThreePictures);
    claculateSpeedOfScroll(20, scroll, 2, foodThatFeelsGood);
    claculateSpeedOfScroll(20, scroll, 2, justCheesBurgerBackground);
    claculateSpeedOfScroll(20, scroll, 2, pureQuelity)
    claculateSpeedOfScroll(20, scroll, 1.5, fourMaterial);
    claculateSpeedOfScroll(20, scroll, 2, goldPartWithAirplane);
    claculateSpeedOfScroll(20 , scroll , 2 , feelItTheTitleChangePart);
    claculateSpeedOfScroll(20 , scroll , 2 , belowMenuPart);





    // sticker png functionality //////////////////////
    if (scroll > 2850) {
        stickerPng.classList.add("is-stuck")

    } else {
        stickerPng.classList.remove("is-stuck")
    }

    // sticker png functionality //////////////////////

    // move plane to the page ////////////////////
    movePlane(scroll);
    // move plane to page ///////////////////////

    if(scroll > 900) {
        topClassicTitle.classList.add("reveal-text-entrance-for-top-classic");
    }
if(scroll > 1000) {
    juicyCheesyFullyLloaded.classList.add("reveal-text-entrance-for-juicy-cheesy-fully-loaded");
}
if(scroll > 1400) {
    subTitleBelowJuicyCheesy.classList.add("paragraph-leading-reveal")
}
if(scroll > 5200) {
    experience.classList.add("reveal-text");
    foodThatS.forEach((item , index) => {
        item.style.animation = "textEntrance 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) "+index * 0.5+"s forwards"
        
    })
}

if(scroll > 17500) {
    feelTheChangeParagraph.forEach((item , index) => {
       item.style.animation = "textEntrance 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) "+index * 0.5+"s forwards";
       
    })
}

if(scroll > 18000) {
    lastCrav.style.animation = "textEntrance 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) forwards";
}

    // appearance Cart For Airplane part

    AppearenceCartForAirPlanePart(scroll)
    // appearance Cart For Airplane part


    // scroll control for move three pictures with mouse movement//////////////////////
    if (scroll > 2800 && scroll < 4200) {
        MovePosters()
    } else {
        return
    }
    // scroll control for move three pictures with mouse movement//////////////////////


})



