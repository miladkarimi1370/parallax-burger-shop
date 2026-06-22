import gsap from "https://esm.sh/gsap@3.12.5";

const cities = [
    { id: "berlinPart",   baseTrigger: 11200 },
    { id: "londenPart",   baseTrigger: 11600 },
    { id: "newYorkPart",  baseTrigger: 12000 },
    { id: "sydneyPart",   baseTrigger: 12400 },
    { id: "tokyoPart",    baseTrigger: 12800 }
];

let cityObjects = [];
let isDesktop = false;

document.addEventListener("DOMContentLoaded", () => {
    cityObjects = cities.map(city => {
        const el = document.querySelector(`#${city.id}`);
        if (el) {
            // مقداردهی اولیه
            gsap.set(el, { opacity: 0, y: 60, display: "none" });
        }
        return { ...city, el, shown: false };
    });

    checkScreenSize();
});

// چک کردن سایز صفحه
function checkScreenSize() {
    isDesktop = window.innerWidth >= 1024;
    
    if (!isDesktop) {
        // حالت موبایل/تبلت → همه کارت‌ها بدون انیمیشن نمایش داده شوند
        cityObjects.forEach(city => {
            if (city.el) {
                city.el.style.display = "block";
                gsap.set(city.el, { opacity: 1, y: 0 });
                city.shown = true;
            }
        });
    }
}

export function AppearenceCartForAirPlanePart(scroll) {
    const width = window.innerWidth;
    isDesktop = width >= 1024;

    // اگر زیر lg بود، هیچ انیمیشنی اجرا نشود
    if (!isDesktop) return;

    // تنظیم multiplier برای سایزهای بزرگ
    let multiplier = 1;
    if (width >= 1536) {           // 2xl
        multiplier = 1.22;
    } else if (width >= 1280) {    // xl
        multiplier = 1.12;
    }

    cityObjects.forEach((city, index) => {
        if (!city.el) return;

        const trigger = Math.floor(city.baseTrigger * multiplier);

        if (scroll > trigger && !city.shown) {
            city.shown = true;
            city.el.style.display = "block";

            gsap.to(city.el, {
                opacity: 1,
                y: 0,
                duration: 1.1,
                ease: "back.out(1.5)",
                delay: index * 0.1
            });

        } else if (scroll < trigger - 200 && city.shown) {
            city.shown = false;

            gsap.to(city.el, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power1.in"
            });
        }
    });
}

// بروزرسانی هنگام تغییر سایز صفحه
window.addEventListener('resize', () => {
    checkScreenSize();
    
    // reset وضعیت انیمیشن برای حالت دسکتاپ
    cityObjects.forEach(city => {
        if (city.el) city.shown = false;
    });
});