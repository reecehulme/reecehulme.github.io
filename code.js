// this code runs when the page has been fully loaded
window.onload = function () {

  // get a reference to all of the rooms
  var roomA = document.getElementById('roomA')
  var roomB = document.getElementById('roomB')

  // attach button click handlers
  console.log(document.getElementById('button1'))
  document.getElementById('button1').onclick = function () {
    roomA.style.display = 'none'
    roomB.style.display = 'block'
  }

  document.getElementById('button2').onclick = function () {
    roomA.style.display = 'block'
    roomB.style.display = 'none'
  }



  // finally, show the first room so the player can begin
  roomA.style.display = 'block'
}