var gBallSize = 100
var gBallSizeStep = 50
function onBallClick() {
    var elBall = document.querySelector('.ball')
    gBallSize += 50
    if (gBallSize > 400) {
        gBallSize = 100
        elBall.style.transition = 'width 1s, height 1s'
    }
    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    elBall.innerText = gBallSize
}