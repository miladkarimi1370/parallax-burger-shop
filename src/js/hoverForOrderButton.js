const btn = document.querySelector('[data-anm-btn="btn"]');
const path = document.querySelector('[data-anm-btn="path"]');

const original = "M310.777 0.20434C424.154 2.91791 540.733 50.9739 574.176 159.34C606.479 264.014 533.962 365.999 442.064 425.623C364.995 475.626 270.863 455.893 193.524 406.309C93.8313 342.395 -27.3608 259.503 5.48889 145.729C40.0621 25.9857 186.179 -2.77783 310.777 0.20434Z";

const hovered = "M310.777 30.20434C400.154 32.91791 480.733 68.9739 504.176 159.34C526.479 246.014 468.962 330.999 392.064 378.623C324.995 420.626 246.863 405.893 183.524 364.309C103.831 309.395 18.639 244.503 45.489 155.729C72.062 67.986 210.179 27.222 310.777 30.20434Z";

// هر path رو به آرایه از اعداد تبدیل میکنه
const parseNumbers = (d) => d.match(/-?[\d.]+/g).map(Number);

// از آرایه اعداد دوباره path میسازه
const buildPath = (template, numbers) => {
    let i = 0;
    return template.replace(/-?[\d.]+/g, () => numbers[i++].toFixed(5));
};

const fromNums = parseNumbers(original);
const toNums   = parseNumbers(hovered);
const current  = [...fromNums];

let target = 0; // 0 = original, 1 = hovered
let rafId  = null;

const lerp = (a, b, t) => a + (b - a) * t;

const animate = () => {
    let stillMoving = false;

    for (let i = 0; i < current.length; i++) {
        const dest = target === 1 ? toNums[i] : fromNums[i];
        current[i] = lerp(current[i], dest, 0.08); // عدد کوچیکتر = کندتر
        if (Math.abs(current[i] - dest) > 0.01) stillMoving = true;
    }

    path.setAttribute("d", buildPath(original, current));

    if (stillMoving) {
        rafId = requestAnimationFrame(animate);
    }
};

btn.addEventListener("mouseenter", () => {
    target = 1;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);

});

btn.addEventListener("mouseleave", () => {
    target = 0;
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(animate);

});