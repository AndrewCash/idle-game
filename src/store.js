import { createStore } from 'redux'
import reducer from './reducers'

import addictionData from './addictionData'

export function createInitState () {
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

  return {
    resources: {
      Hap: 5000,
      Fat: 1000,
      Clout: 0,
      Tech: 500,
      Money: 0
    },
    purchasedAddictions: initAddictions
  }
}

export default createStore(reducer)
