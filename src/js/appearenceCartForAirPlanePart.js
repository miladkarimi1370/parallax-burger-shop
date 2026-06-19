import gsap from "https://esm.sh/gsap@3.12.5";

const cities = [
    { id: "berlinPart",   baseTrigger: 11800 },
    { id: "londenPart",   baseTrigger: 12200 },
    { id: "newYorkPart",  baseTrigger: 12800 },
    { id: "sydneyPart",   baseTrigger: 13200 },
    { id: "tokyoPart",    baseTrigger: 13600 }
];

let cityObjects = [];

document.addEventListener("DOMContentLoaded", () => {
    cityObjects = cities.map(city => {
        const el = document.querySelector(`#${city.id}`);
        if (el) {
            gsap.set(el, { opacity: 0, y: 60, display: "none" });
        }
        return { ...city, el, shown: false };
    });
});

export function AppearenceCartForAirPlanePart(scroll) {
    const width = window.innerWidth;

    // تنظیم trigger بر اساس سایز صفحه
    let multiplier = 1;
    if (width >= 1536) {           // 2xl
        multiplier = 1.2;
    } else if (width >= 1280) {    // xl
        multiplier = 1.1;
    } else if (width >= 1024) {    // lg
        multiplier = 1;
    } else {
        return; // زیر lg انیمیشن اجرا نشود
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
    // reset shown states وقتی سایز تغییر کرد
    cityObjects.forEach(city => {
        if (city.el) city.shown = false;
    });
});