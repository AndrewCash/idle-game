import addictionData from '../addictionData'

const catagories = Object.keys(addictionData)

const initAddictions = Object.values(addictionData).reduce((catObj, catItem, catagory) => {
  const addictions = Object.keys(catItem)

  const catagoryObj = Object.values(catItem).reduce((addObj, addItem, index) => {
    addObj[addictions[index]] = addItem.isUnlocked

    return addObj
  }, {})
  catObj[catagories[catagory]] = catagoryObj

  return catObj
}, {})

export default function purchasedAddictionsReducer (state = {
  purchasedAddicticions: initAddictions
}, action) {
  switch (action.type) {
    case 'BUY_ADDICTION': {
      return { ...state, [action.catagory[action.index]]: true }
    }
  }
  return { ...state }
}
