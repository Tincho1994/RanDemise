var face=1;
var rando = function() {
  face = Math.floor(Math.random() * 6) + 1
  $('#cube').attr('class', 'show'+face);
};