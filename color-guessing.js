let array = ["yellow","blue","red","green","black"]

const game = () => {
    document.getElementById('colorReturned').style.backgroundColor = array[Math.floor(Math.random() * array.length)]

  if (document.getElementById('colorReturned').style.backgroundColor == document.getElementById('myColorGuess').value) {
    alert ("You win !")
  }
    else {
      alert ("You loose !")
    }
}

document.getElementById('runTest').addEventListener('click', game)
