const hamburgerImg = document.querySelector("#hambergurTitle");

hamburgerImg.addEventListener("animationend", function handler(e) {
    if (e.animationName === "imageEntrance") {
        hamburgerImg.classList.add("start-bobbing");
        hamburgerImg.removeEventListener("animationend", handler)
    }

})