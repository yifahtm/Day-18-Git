function onBallClick() {
    var elBall = document.querySelector('.ball')
    var newSize = 100 + 50
    elBall.style.width = newSize + 'px'
    elBall.style.height = newSize + 'px'
    elBall.innerText = newSize
}