import addictionsData from '../addictionsData'

const catagories = Object.keys(addictionsData)

const initAddictions = Object.values(addictionsData).reduce((catObj, catItem, catagory) => {
  const addictions = Object.keys(catItem)

  const catagoryObj = Object.values(catItem).reduce((addObj, addItem, index) => {
    addObj[addictions[index]] = {
      isUnlocked: addItem.isUnlocked,
      allowClick: true,
      barWidth: 0,
      currentTextIndex: 0
    }

    return addObj
  }, {})
  catObj[catagories[catagory]] = catagoryObj

  return catObj
}, {})

const getRandomText = (catagory, index) => {
  return Math.floor(Math.random() * 100) % addictionsData[catagory][index].text.length
}

export default function addictionsReducer (state = { addictions: initAddictions }, action) {
  switch (action.type) {
    case 'BUY_ADDICTION': {
      const newState = JSON.parse(JSON.stringify(state))
      newState.addictions[action.catagory][action.index].isUnlocked = true

      return newState
    }
    case 'DONT_ALLOW_CLICK': {
      const newState = JSON.parse(JSON.stringify(state))
      newState.addictions[action.catagory][action.index].allowClick = false

      return newState
    }
    case 'INCREMENT_PROGRESS_BAR': {
      const cooldown = addictionsData[action.catagory][action.index].cooldown
      const newState = JSON.parse(JSON.stringify(state))
      newState.addictions[action.catagory][action.index].barWidth += (100 * 200 / cooldown)

      return newState
    }
    case 'CLEAR_PROGRESS_BAR': {
      const newState = JSON.parse(JSON.stringify(state))
      newState.addictions[action.catagory][action.index].allowClick = true
      newState.addictions[action.catagory][action.index].barWidth = 0
      newState.addictions[action.catagory][action.index].currentTextIndex = getRandomText(action.catagory, action.index)

      return newState
    }
    default: {
      return state
    }
  }
}
