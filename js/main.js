var gBallSize = 100
var gBallSizeStep = 50
function onBallClick() {
    var elBall = document.querySelector('.ball')
    gBallSize += 50
    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    elBall.innerText = gBallSize
}