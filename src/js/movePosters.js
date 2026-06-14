const orderPostersOfOrderNow = document.querySelectorAll(".orderNow");

    
 export const MovePosters = () => {
    orderPostersOfOrderNow.forEach((item, index) => {
        const onMove = (e) => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.width / 2;

     

            if (index == 0) {
                item.style.transform = `rotateZ(-12deg) translate(${(x * 1.1) - 10}px , ${y * 1.1}px)`;
                item.style.transition = "transform 0.1s ease-in-out";
            } else if (index == 1) {
                item.style.transform = `scale(1.05) translate(${x * 1.1}px , ${y * 1.1}px)`;
                item.style.transition = "transform 0.1s ease-in-out";
            } else if (index == 2) {
                item.style.transform = `rotateZ(12deg) translate(${(x * 1.1) + 10}px , ${y * 1.1}px)`;
                item.style.transition = "transform 0.1s ease-in-out";
            }

        }

        const onLeave = () => {
   window.removeEventListener("mousemove", onMove);
            if (index == 0) {
                item.style.transform = "rotateZ(-12deg) translate(0px , 0px)";
                item.style.transition = "transform 0.6s ease-in-out";
                     
            } else if (index == 1) {
                item.style.transform = "scale(1.05) translate(0px , 0px)";
                item.style.transition = "transform 0.6s ease-in-out";
            } else if (index == 2) {
                item.style.transform = "rotateZ(12deg) translate(0px , 0px)";
                item.style.transition = "transform 0.6s ease-in-out";
            }


            window.removeEventListener("mousemove", onMove);
        };

        item.addEventListener("mouseenter", () => {
            window.addEventListener("mousemove", onMove)
        })
        item.addEventListener("mouseleave", onLeave)
    })
}

