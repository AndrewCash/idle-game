import React from 'react'
import PropTypes from 'prop-types'
import addictionsData from './addictionsData.js'
import CatagoryTab from './CatagoryTab.js'
import {
  Tabs,
  Tab
} from 'react-bootstrap'
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
  return {
    resources: store.resourcesReducer.resources
  }
}

class AddictionList extends React.Component {
  constructor (props) {
    super(props)

    const catagories = Object.keys(addictionsData)

    const initAddictions = Object.values(addictionsData).reduce((catObj, catItem, catagory) => {
      const addictions = Object.keys(catItem)

      const catagoryObj = Object.values(catItem).reduce((addObj, addItem, index) => {
        addObj[addictions[index]] = addItem.isUnlocked

        return addObj
      }, {})
      catObj[catagories[catagory]] = catagoryObj

      return catObj
    }, {})

    this.state = { purchasedAddictions: initAddictions }
  }

  canAffordAddiction (catagory, index) {
    for (let i = 0; i < addictionsData[catagory][index].unlockCost.length; i++) {
      const unlockId = addictionsData[catagory][index].unlockIds[i]

      if (addictionsData[catagory][index].unlockCost[i] > this.resources[unlockId]) {
        return false
      }
    }

    return true
  }

  render () {
    return (
      <div>
        <Tabs defaultActiveKey='internet'>
          <Tab eventKey='internet' title='Internet'>
            <CatagoryTab
              catagory='internet'
              canAffordAddiction={this.canAffordAddiction}
            />
          </Tab>

          <Tab eventKey='food' title='Food'>
            <CatagoryTab
              catagory='food'
              canAffordAddiction={this.canAffordAddiction}
            />
          </Tab>

          <Tab eventKey='money' title='Money'>
            <CatagoryTab
              catagory='money'
              canAffordAddiction={this.canAffordAddiction}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
}

AddictionList.propTypes = {
  resources: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(AddictionList)
