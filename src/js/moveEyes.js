export function move(pupil, container, mouseX, mouseY) {
    const cr = container.getBoundingClientRect();

    const cx = cr.left + cr.width / 2;
    const cy = cr.top + cr.height / 2;

    const maxX = (cr.width  - pupil.offsetWidth)  / 2;
    const maxY = (cr.height - pupil.offsetHeight) / 2;

    const dx = mouseX - cx;
    const dy = mouseY - cy;
    const angle = Math.atan2(dy, dx);
    const ratio = Math.min(1, Math.sqrt(dx*dx + dy*dy) / 200);

    const x = Math.cos(angle) * ratio * maxX;
    const y = Math.sin(angle) * ratio * maxY;

    pupil.style.left = (cr.width  / 2 - pupil.offsetWidth  / 2 + x) + 'px';
    pupil.style.top  = (cr.height / 2 - pupil.offsetHeight / 2 + y) + 'px';
}

window.addEventListener('mousemove', (e) => {
    move(leftEyes,  leftEyes.parentElement,  e.clientX, e.clientY);
    move(rightEyes, rightEyes.parentElement, e.clientX, e.clientY);
});