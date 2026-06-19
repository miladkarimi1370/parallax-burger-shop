

const plane = document.querySelector("#plane");
const pathParent = document.querySelector("#pathParent");
const goldSection = document.querySelector("#goldPartWithAirplane");

const SCROLL_START = 9200;
const SCROLL_END = 15500;




export function movePlane(scroll) {
    const parentHeight = pathParent.clientHeight;
    const planeHeight = plane.offsetHeight;
    const maxTop = parentHeight - planeHeight - 120

    if (scroll < SCROLL_START) {
      
            plane.style.top = "-120px";
            return;
    
    

    }

    if (scroll > SCROLL_END) {
        plane.style.top = maxTop + "px";
        return;
    }

    const progress = (scroll - SCROLL_START) / (SCROLL_END - SCROLL_START);

    const newTop = progress * maxTop * 2;

    plane.style.top = Math.min(maxTop, newTop) + "px";
}