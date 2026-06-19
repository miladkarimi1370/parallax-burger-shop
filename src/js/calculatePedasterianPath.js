


let w = window.innerWidth;
const svgTag = document.querySelector("#pedestarianLgUp");

function calculatePedasterianPath(width) {
    if (!svgTag) return; // محافظت در صورت نبودن المنت

    let svgContent = '';

    if (width >= 1536) {                    // 2xl
        svgContent = `
            <svg width="2100" height="1600" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 500 -30 
                    Q 1500 100 1300 400  
                    Q -600 700 700 720 
                    Q 1000 750 1200 770 
                    Q 1500 820 1550 880  
                    Q 1450 930 900 970
                    Q -600 1030 900 1120
                    Q 1100 1160 1500 1310 
                " stroke="#D4A017" stroke-width="5" stroke-dasharray="30 20" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>`;
    } 
    else if (width >= 1280 && width < 1536) { // xl
        svgContent = `
            <svg width="1700" height="1400" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 500 -30 
                    Q 1300 100 1100 400  
                    Q -400 700 500 720 
                    Q 800 750 1000 770 
                    Q 1300 820 1350 880  
                    Q 1250 930 700 970
                    Q -400 1030 700 1120
                    Q 900 1160 1300 1310 
                " stroke="#D4A017" stroke-width="5" stroke-dasharray="30 20" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>`;
    } 
    else if (width >= 1024 && width < 1280) { // lg
        svgContent = `
            <svg width="1500" height="1200" viewBox="0 0 1400 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 500 -30 
                    Q 1100 100 900 400  
                    Q -200 700 300 720 
                    Q 600 750 800 770 
                    Q 1100 820 1150 880  
                    Q 1050 930 500 970
                    Q -200 1030 500 1120
                    Q 700 1160 1100 1310 
                " stroke="#D4A017" stroke-width="5" stroke-dasharray="30 20" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </svg>`;
    }

    svgTag.innerHTML = svgContent;
}

// اجرا کردن تابع
calculatePedasterianPath(w);

// اگر پنجره resize شد هم بروز بشه (اختیاری ولی توصیه میشه)
window.addEventListener('resize', () => {
    w = window.innerWidth;
    calculatePedasterianPath(w);
});