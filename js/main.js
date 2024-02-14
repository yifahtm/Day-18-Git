var gBallSize = 100
var gBallSizeStep

function onBallClick(maxDiameter) {
    var elBall1 = document.querySelector('.ball')
    gBall1SizeStep = getRandomInt(20, 61)
    if (gBall1Size > 400) {
        gBall1Size = 100
        elBall1.style.transition = 'width 1s, height 1s'
    }
    gBall1Size += gBall1SizeStep
    elBall1.style.width = gBall1Size + 'px'
    elBall1.style.height = gBall1Size + 'px'
    elBall1.innerText = gBall1Size
    elBall1.style.backgroundColor = getRandomColor()
}

function onBall2Click(maxDiameter) {
    var elBall2 = document.querySelector('.ball2')
    gBall2SizeStep = getRandomInt(20, 61)
    if (gBall2Size > 400) {
        gBall2Size = 100
        elBall2.style.transition = 'width 1s, height 1s'
    }
    gBallSize += gBallSizeStep
    elBall2.style.width = gBallSize + 'px'
    elBall2.style.height = gBallSize + 'px'
    elBall2.innerText = gBallSize
    elBall2.style.backgroundColor = getRandomColor()
} 