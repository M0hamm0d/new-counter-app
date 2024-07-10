let countScore = document.querySelector('.count-score');
let subBtn = document.querySelector('.sub-btn')
countScore.textContent = 0;
if (countScore.textContent == 0) {
    subBtn.style.backgroundColor = ''
}
function add() {
    countScore.textContent++;
    if (countScore.textContent >= 1){
        subBtn.style.backgroundColor = '#D926A9'
    } 
};
function sub() {
    if (countScore.textContent >= 1){
        countScore.textContent--;
    } 
    if (countScore.textContent < 1){
        subBtn.style.backgroundColor = ''
    } 
};
function del() {
    countScore.textContent = 0;
    if (countScore.textContent < 1){
        subBtn.style.backgroundColor = ''
    }
}