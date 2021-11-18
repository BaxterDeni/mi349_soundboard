var splashButton = document.getElementById('splashbtn')
var fireButton = document.getElementById('firebtn')
var ducksButton = document.getElementById('ducksbtn')
var splashFX = new Audio('splash.wav')
var fireFX = new Audio('Fire.wav')
var ducksFX = new Audio('Ducks.wav')

splashButton.addEventListener('click', function () {
    splashFX.play()
  })

fireButton.addEventListener('click', function () {
   fireFX.play()
  })

ducksButton.addEventListener('click', function () {
    ducksFX.play()
  })

  