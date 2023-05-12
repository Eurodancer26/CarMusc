const lines = (btnsSelecror, lineLeft, lineRight) => {
    const btns = document.querySelectorAll(btnsSelecror),
        linesL = document.querySelectorAll(lineLeft),
        linesR = document.querySelectorAll(lineRight);

    function hideLine(i) {
        linesL[i].classList.remove('line-left_show');
        linesR[i].classList.remove('line-right_show');
    }

    function showLine(i) {
        linesL[i].classList.add('line-left_show');
        linesR[i].classList.add('line-right_show');
    }

    btns.forEach((btn, i) => {
        btn.addEventListener('mouseover', () => showLine(i));
        btn.addEventListener('mouseout', () => hideLine(i));
    });
};

export default lines;