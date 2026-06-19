const wrapperOfTitle = document.querySelector("#wrapperOfTitle");
const wrapperOfParagraphOfTitle = document.querySelector("#wrapperOfParagraphOfTitle");
let widthOfPage = 0;
widthOfPage = window.innerWidth;

if (widthOfPage != 0) {
    alternateParagraph(widthOfPage);
}

window.addEventListener("resize" , (e) => {
    alternateParagraph(window.innerWidth)
})

function alternateParagraph(width) {
    if (width <= 1024) {
        wrapperOfTitle.children[0].innerText = "a story in";
        wrapperOfTitle.children[1].innerText = "every bite";

        wrapperOfParagraphOfTitle.children[0].innerText = "from fresh farms to your hands every";
        wrapperOfParagraphOfTitle.children[1].innerText = "layers matters";
        wrapperOfParagraphOfTitle.children[2].innerText = ""
    } else if (width > 1024) {
        wrapperOfTitle.children[0].innerText = "quality that";
        wrapperOfTitle.children[1].innerText = "travels with you";

        wrapperOfParagraphOfTitle.children[0].innerText = "freshly packed smash burgers . ready to go wherever you ";
        wrapperOfParagraphOfTitle.children[1].innerText = "crav . from our flat-top to any corner of the globe . we";
        wrapperOfParagraphOfTitle.children[2].innerText = "ensure every layer stays hot and juicy .";
    }
}