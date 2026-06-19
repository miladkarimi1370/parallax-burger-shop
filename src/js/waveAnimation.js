const waveAbove = document.querySelector("#waveAbove");
const waveUnder = document.querySelector("#waveUnder");
const waveAbovePureQuality = document.querySelector("#waveAbovePureQuality");
const waveUnderForGoldPartOrAirPlanePart = document.querySelector("#waveUnderForGoldPartOrAirPlanePart");



const keyFramesAbove = [
    "M0,0L40,26.7C80,53,160,107,240,122.7C320,139,400,117,480,122.7C560,128,640,160,720,144C800,128,880,64,960,53.3C1040,43,1120,85,1200,112C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z",
    "M0,128L40,138.7C80,149,160,171,240,176C320,181,400,171,480,181.3C560,192,640,224,720,229.3C800,235,880,213,960,186.7C1040,160,1120,128,1200,122.7C1280,117,1360,139,1400,149.3L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"

]
const keyFramesUnder = [
    "M0,160L40,160C80,160,160,160,240,176C320,192,400,224,480,224C560,224,640,192,720,181.3C800,171,880,181,960,192C1040,203,1120,213,1200,218.7C1280,224,1360,224,1400,224L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z",
    "M0,64L40,101.3C80,139,160,213,240,245.3C320,277,400,267,480,224C560,181,640,107,720,80C800,53,880,75,960,101.3C1040,128,1120,160,1200,192C1280,224,1360,256,1400,272L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"

]

function randomNumber() {

    let n = Math.round(Math.random() * 10) % 2;

    if (n == 0) {
        waveAbove.setAttribute("d", keyFramesAbove[n]);
        waveUnder.setAttribute("d", keyFramesUnder[n]);
        waveAbovePureQuality.setAttribute("d", keyFramesAbove[n]);
        waveUnderForGoldPartOrAirPlanePart.setAttribute("d" , keyFramesUnder[n]);
    } else {
        waveAbove.setAttribute("d", keyFramesAbove[n]);
        waveUnder.setAttribute("d", keyFramesUnder[n]);
        waveAbovePureQuality.setAttribute("d", keyFramesAbove[n]);
        waveUnderForGoldPartOrAirPlanePart.setAttribute("d" , keyFramesUnder[0]);
    }

    let r = setInterval(() => {
        clearInterval(r)
        randomNumber();
    }, 5000)

}

randomNumber();