var gBallSize = 100
var gBallSizeStep

function onBallClick(maxDiameter) {
    //var elBall = document.querySelector('.ball')
    var elBall2 = document.querySelector('.ball2')
    gBallSizeStep = getRandomInt(20, 61)
    if (gBallSize > 400) {
        gBallSize = 100
        elBall2.style.transition = 'width 1s, height 1s'
    }
    gBallSize += gBallSizeStep
    elBall2.style.width = gBallSize + 'px'
    elBall2.style.height = gBallSize + 'px'
    elBall2.innerText = gBallSize
    elBall2.style.backgroundColor = getRandomColor()
}