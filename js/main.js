var gBallSize = 100
var gBallSizeStep

function onBallClick(maxDiameter) {
    var elBall = document.querySelector('.ball')
    //var elBall2 = document.querySelector('.ball2')
    gBallSizeStep = getRandomInt(20, 61)
    if (gBallSize > 400) {
        gBallSize = 100
        elBall.style.transition = 'width 1s, height 1s'
    }
    gBallSize += gBallSizeStep
    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    elBall.innerText = gBallSize
    elBall.style.backgroundColor = getRandomColor()

} 