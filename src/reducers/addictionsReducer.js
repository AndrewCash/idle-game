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

const getRandomText = () => {
  return Math.floor(Math.random() * 100) % addictionsData[this.props.catagory][this.props.index].text.length
}

export default function addictionsReducer (state = { addictions: initAddictions }, action) {
  if (action.type === undefined) {
    return state
  }
  switch (action.type) {
    case 'BUY_ADDICTION': {
      return { ...state, [action.catagory[action.index].isUnlocked]: true }
    } case 'DONT_ALLOW_CLICK': {
      return { ...state, [action.catagory[action.index].allowClick]: false }
    } case 'INCREMENT_PROGRESS_BAR': {
      const cooldown = addictionsData[action.catagory][action.index].cooldown
      return { ...state, [action.catagory[action.index].barWidth]: state[action.catagory][action.index].barWidth + 100 * 200 / cooldown }
    } case 'CLEAR_PROGRESS_BAR': {
      return {
        ...state,
        [action.catagory[action.index].allowClick]: true,
        [action.catagory[action.index].barWidth]: 0,
        [action.catagory[action.index].currentTextIndex]: getRandomText()
      }
    } default: {
      return { ...state }
    }
  }
}
