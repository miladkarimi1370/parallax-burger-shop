import gsap from "https://esm.sh/gsap@3.12.5";

let stickerTL = null;
let hasPlayed = false;

export const StickerForTwoFries = (scroll) => {
    const burgerContainer = document.querySelector("#stickerBurger");
    const friesContainer   = document.querySelector("#stickerFires");

    if (!burgerContainer || !friesContainer) return;

    // فقط یک بار timeline بساز
    if (!stickerTL) {
        stickerTL = gsap.timeline({
            paused: true,
            defaults: { duration: 1.2, ease: "power2.out" }
        });

        // انیمیشن چسباندن برچسب (شبیه peel + stick)
        stickerTL
            // برگر اول ظاهر بشه و بچرخه و کمی کج بشه
            .fromTo(burgerContainer, 
                { 
                    opacity: 0, 
                    scale: 0.6, 
                    rotation: -25, 
                    y: 80 
                },
                { 
                    opacity: 1, 
                    scale: 1, 
                    rotation: 12, 
                    y: 20,
                    boxShadow: "18px 28px 35px -12px rgba(0,0,0,0.45)",
                    duration: 1.1
                }, 0)

            // fries با کمی تأخیر
            .fromTo(friesContainer, 
                { 
                    opacity: 0, 
                    scale: 0.65, 
                    rotation: 30, 
                    y: 90 
                },
                { 
                    opacity: 1, 
                    scale: 1, 
                    rotation: -16, 
                    y: 15,
                    boxShadow: "22px 25px 40px -15px rgba(0,0,0,0.4)"
                }, 0.25)

            // افکت نهایی کمی jiggle (تکون خوردن طبیعی بعد از چسبیدن)
            .to(burgerContainer, { rotation: 10, duration: 0.4 }, "-=0.3")
            .to(friesContainer,   { rotation: -13, duration: 0.35 }, "-=0.35");
    }

    // وقتی به محدوده رسید و هنوز پخش نشده
    if (scroll > 5200 && !hasPlayed) {
        hasPlayed = true;
        stickerTL.play();

        burgerContainer.classList.add("is-stuck");
        friesContainer.classList.add("is-stuck");
    }
};