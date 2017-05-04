// this code runs when the page has been fully loaded
window.onload = function () {

  // get a reference to all of the rooms
  var roomWitch = document.getElementById('roomWitch')
  var roomA = document.getElementById('roomA')

  // attach button click handlers
  document.getElementById('button1').onclick = function () {
    roomWitch.style.display = 'none'
    roomA.style.display = 'block'
  }

  document.getElementById('button2').onclick = function () {
    roomWitch.style.display = 'block'
    roomA.style.display = 'none'
  }



  // finally, show the first room so the player can begin
  roomWitch.style.display = 'block'
}
