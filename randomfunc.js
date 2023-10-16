//selecting random index without same element
const selectIndex = (totalIndex, selectingNumber) => {
  let randomIndexArray = []
  for (i=0; i<selectingNumber; i++) {   //check if there is any duplicate index
    randomNum = Math.floor(Math.random() * totalIndex)
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    } else { //if the randomNum is already in the array retry
      i--
    }
  }
  return randomIndexArray
}

