import gsap from "https://esm.sh/gsap@3.12.5";

const plane = document.querySelector("#plane");
const pathParent = document.querySelector("#pathParent");

const SCROLL_START = 9200;
const SCROLL_END = 15800;

const SCROLL_START_DESKTOP = 11500;
const SCROLL_END_DESKTOP = 14500;

export function movePlane(scroll) {
  
    
    if (!plane || !pathParent) return;


    const width = window.innerWidth;



    // ====================== حالت موبایل و تبلت (زیر lg) ======================
    if (width <= 1024) {
        const parentHeight = pathParent.clientHeight;
        const planeHeight = plane.offsetHeight;
        const maxTop = parentHeight - planeHeight - 120;



        if (scroll < SCROLL_START) {
            plane.style.top = "-120px";
            plane.style.left = 50 + "%";
            plane.style.transform = "translateX(0%)"
            return;
        }

        if (scroll > SCROLL_END) {
            plane.style.top = maxTop + "px";

            return;
        }

        const progress = (scroll - SCROLL_START) / (SCROLL_END - SCROLL_START);
        const newTop = progress * maxTop * 1.8;

        plane.style.top = Math.min(maxTop, newTop) + "px";

        return;
    } else {
     if (scroll < SCROLL_START_DESKTOP) {
            plane.style.top = -30 + "vh";
            plane.style.left = -30 + "vw";
            plane.style.transform = "rotateZ(-80deg)";
            return;
        }

        let progress = ((scroll - SCROLL_START_DESKTOP) / (SCROLL_END_DESKTOP - SCROLL_START_DESKTOP)) * 80;

        // اصلاح شده برای 2xl و سایزهای خیلی بزرگ
        if (progress < 120) {
            let left = progress * 2;
            let top = progress * 0.7;

            // محدود کردن برای سایزهای خیلی بزرگ (2xl)
            if (width >= 1536) {
                left = Math.min(left, 95);   // بیشتر از 95vw نره
                top = Math.min(top, 95);
            }

            plane.style.top = top + "vh";
            plane.style.left = left + "vw";
        }
    }

    }
