
import Lenis from "lenis"; // حالا کار می‌کنه
import { MovePosters } from "./movePosters.js";
import { StickerForTwoFries } from "./sticker.js";



const myHeader = document.querySelector("#header");
const theBurgerTitle = document.querySelector("#theBurgerTitle");
const paragraphUnderTheBurger = document.querySelector("#paragraphUnderTheBurger");
const TopClassicTitle = document.querySelector("#top-classic");
const foodThatFeelsGood = document.querySelector("#foodThatFeelsGood");
const stickerPng = document.querySelector("#sticker");

const orderPostersOfOrderNow = document.querySelectorAll(".orderNow")

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



    claculateSpeedOfScroll(20, scroll, 3, myHeader);
    claculateSpeedOfScroll(20, scroll, 2, theBurgerTitle)
    claculateSpeedOfScroll(20, scroll, 2, paragraphUnderTheBurger);
    claculateSpeedOfScroll(20, scroll, 2, TopClassicTitle);
    claculateSpeedOfScroll(20, scroll, 2, orderButtonAndThreePictures);
    claculateSpeedOfScroll(20, scroll, 2, foodThatFeelsGood);





    // sticker png functionality //////////////////////
    if (scroll > 2850) {
        stickerPng.classList.add("is-stuck")

    } else {
        stickerPng.classList.remove("is-stuck")
    }

    // sticker png functionality //////////////////////


    // sticker for two fires walking functionality //////////////
    StickerForTwoFries(scroll);



    // sticker for two fires walking functionality //////////////



    // scroll control for move three pictures with mouse movement//////////////////////
    if (scroll > 2800 && scroll < 4200) {
        MovePosters()
    } else {
        return
    }
    // scroll control for move three pictures with mouse movement//////////////////////



})



