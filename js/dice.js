var $die = $('.die'),
    sides = 20,
    initialSide = 1,
    lastFace,
    timeoutId,
    transitionDuration = 500, 
    animationDuration  = 3000

function randomFace() {
  var face = Math.floor((Math.random() * sides)) + initialSide
  lastFace = face == lastFace ? randomFace() : face
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId)
  
  $die.attr('data-face', face)
}

function reset() {
  $die.attr('data-face', null).removeClass('rolling')
}

$('.randomize, .die').click(function () {
  
  timeoutId = setTimeout(function () {
    $die.removeClass('rolling')
    
    rollTo(randomFace())
  })
  
  return false
})