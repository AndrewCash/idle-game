import React from 'react'
import PropTypes from 'prop-types'
import addictionData from './addictionData.js'
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

    this.state = { purchasedAddictions: initAddictions }
  }

  canAffordAddiction (catagory, index) {
    for (let i = 0; i < addictionData[catagory][index].unlockCost.length; i++) {
      const unlockId = addictionData[catagory][index].unlockIds[i]

      if (addictionData[catagory][index].unlockCost[i] > this.props.resources[unlockId]) {
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
