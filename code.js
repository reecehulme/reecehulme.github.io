// useful functions
hideAllBlocks = function () {
  document.getElementById('roomWitch').style.display = 'none'
  document.getElementById('roomA').style.display = 'none'
  document.getElementById('roomB').style.display = 'none'
  document.getElementById('roomC').style.display = 'none'
  document.getElementById('roomD').style.display = 'none'
  document.getElementById('roomE').style.display = 'none'
  document.getElementById('roomF').style.display = 'none'
  document.getElementById('roomG').style.display = 'none'
  document.getElementById('roomH').style.display = 'none'
  document.getElementById('roomM').style.display = 'none'
  document.getElementById('roomEnd').style.display = 'none'
  document.getElementById('roomWin').style.display = 'none'
}

// this code runs when the page has been fully loaded
window.onload = function () {

  // get a reference to all of the rooms
  const roomWitch = document.getElementById('roomWitch')
  const roomA = document.getElementById('roomA')
  const roomB = document.getElementById('roomB')
  const roomC = document.getElementById('roomC')
  const roomD = document.getElementById('roomD')
  const roomE = document.getElementById('roomE')
  const roomF = document.getElementById('roomF')
  const roomG = document.getElementById('roomG')
  const roomH = document.getElementById('roomH')
  const roomM = document.getElementById('roomM')
  const roomWin = document.getElementById('roomWin')

  // WITCHES ROOM
  document.getElementById('rwAdvance').onclick = function () {
    hideAllBlocks()
    roomA.style.display = 'block'
  }

  // ROOM A
  document.getElementById('raGoback').onclick = function () {
    hideAllBlocks()
    roomWitch.style.display = 'block'
  }

  document.getElementById('raAdvance').onclick = function () {
    hideAllBlocks()
    roomB.style.display = 'block'
  }

  // ROOM B
  document.getElementById('rbGoback').onclick = function () {
    hideAllBlocks()
    roomA.style.display = 'block'
  }

  document.getElementById('rbAdvance').onclick = function () {
    hideAllBlocks()
    roomC.style.display = 'block'
    hasKey = true
  }

  document.getElementById('rbAlternate').onclick = function () {
    hideAllBlocks()
    roomD.style.display = 'block'
  }

  // ROOM C
  document.getElementById('rcGoback').onclick = function () {
    hideAllBlocks()
    roomB.style.display = 'block'
  }

  // ROOM D
  document.getElementById('rdGoback').onclick = function () {
    hideAllBlocks()
    roomB.style.display = 'block'
  }

  document.getElementById('rdPrincess').onclick = function () {
    hideAllBlocks()
    roomE.style.display = 'block'
  }

  document.getElementById('rdUnlock').onclick = function () {
    if (hasKey === true) {
      hideAllBlocks()
      roomF.style.display = 'block'
    } else {
      alert('This door requires a key to open it')
    }
  }

  document.getElementById('rdAdvance').onclick = function () {
    hideAllBlocks()
    roomG.style.display = 'block'
  }

  // ROOM E
  document.getElementById('reGoback').onclick = function () {
    hideAllBlocks()
    roomD.style.display = 'block'
  }

  // ROOM F
  document.getElementById('rfGoback').onclick = function () {
    hideAllBlocks()
    roomD.style.display = 'block'
  }

  // ROOM G
  document.getElementById('rgAdvance').onclick = function () {
    hideAllBlocks()
    roomH.style.display = 'block'
  }

  document.getElementById('rgGoback').onclick = function () {
    hideAllBlocks()
    roomD.style.display = 'block'
  }

  // ROOM H
  document.getElementById('rhGoback').onclick = function () {
    hideAllBlocks()
    roomG.style.display = 'block'
  }

  document.getElementById('rhAdvance').onclick = function () {
    hideAllBlocks()
    roomM.style.display = 'block'

    if (!hasSword) {
      document.getElementById('rmUseSword').style.display = 'none'
    }


    if (!hasPoison) {
      document.getElementById('rmUsePoison').style.display = 'none'
    }
    if (!hasKnife) {
      document.getElementById('rmUseKnife').style.display = 'none'
    }




  }


  hideAllBlocks()
  roomWitch.style.display = 'block'

  let hasSword = false
  let hasString = false
  let hasPoison = false
  let hasKnife = false
  let hasKey = false
  let isMinotaurAwake = true

  document.getElementById('rwString').onclick = function () {
    hasString = true
    document.getElementById('rwString').style.display = 'none'
    document.getElementById('rwSword').style.display = 'none'
    document.getElementById('roomWitch').getElementsByTagName('div')[0].innerText =
      'You\'ve made your choice. Now leave.'
  }

  document.getElementById('rwSword').onclick = function () {
    hasSword = true
    document.getElementById('rwString').style.display = 'none'
    document.getElementById('rwSword').style.display = 'none'
    document.getElementById('roomWitch').getElementsByTagName('div')[0].innerText =
      'You\'ve made your choice. Now leave.'
  }


  document.getElementById('rePoison').onclick = function () {
    hasPoison = true
    document.getElementById('rePoison').style.display = 'none'
    document.getElementById('reKnife').style.display = 'none'
    document.getElementById('roomE').getElementsByTagName('div')[0].innerText =
      'Now I have ask you to leave.'
  }

  document.getElementById('reKnife').onclick = function () {
    hasKnife = true
    document.getElementById('rePoison').style.display = 'none'
    document.getElementById('reKnife').style.display = 'none'
    document.getElementById('roomE').getElementsByTagName('div')[0].innerText =
      'Now I have ask you to leave.'
  }

  ///// Attack

  document.getElementById('rmUsePoison').onclick = function () {
    if (isMinotaurAwake) {
      alert('You throw the poison but the Minotaur is unaffected. ' +
            'He proceeds to impale you with his horns.  The End.')
      hideAllBlocks()
      document.getElementById('roomEnd').style.display = 'block'
    } else {
      alert('The smash of the glass wakes the Minotaur up.  He strangles you.  The End.')
      hideAllBlocks()
      document.getElementById('roomEnd').style.display = 'block'
    }
  }

  document.getElementById('rmUseSword').onclick = function () {
    if (isMinotaurAwake) {
      alert('You swing the sword but it snaps, the Minotaur relieves you of you head. The End.')
      hideAllBlocks()
      document.getElementById('roomEnd').style.display = 'block'
    } else {
      alert('The sword snaps the Minotaur wakes up and grinds you into the ground.  The End.')
      hideAllBlocks()
      document.getElementById('roomEnd').style.display = 'block'
    }
  }

  document.getElementById('rmUseKnife').onclick = function () {
    if (isMinotaurAwake) {
      alert('The Minotaur moves too quickly for you to stab him, he smashes you into a pillar. The End.')
      hideAllBlocks()
      document.getElementById('roomEnd').style.display = 'block'
    } else {
      alert('The Knife pierces the Minotaur\'s skin. He roars in pain and then is silent.  The End.')
      hideAllBlocks()
      if (hasString){
        alert('You leave the maze triumphant and the princess comes home with you. The End.')
      } else {
        alert('You are doomed to wander the maze forever. The End.')
      }


      roomWin.style.display = 'block'
    }
  }

  document.getElementById('rmPlayHappyTune').onclick = function () {
    alert('The Minotaur gets excited. He kicks you and breaks your skull. The End.')
    hideAllBlocks()
    document.getElementById('roomEnd').style.display = 'block'
  }

  document.getElementById('rmPlaySleepyTune').onclick = function () {
    alert('The Minotaur goes to sleep.')
    isMinotaurAwake = false
    document.getElementById('rmPlayHappyTune').style.display = 'none'
    document.getElementById('rmPlaySleepyTune').style.display = 'none'


  }
}
