import React from 'react'
import PropTypes from 'prop-types'
import addictionData from './addictionData.js'
import CatagoryTab from './CatagoryTab.js'
import {
  Container,
  Tabs,
  Tab
} from 'react-bootstrap'

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

  render () {
    return (
      <div>
        <Container>
          <Tabs defaultActiveKey='internet'>
            <Tab eventKey='internet' title='Internet'>
              <CatagoryTab
                catagory='internet'
                updateResources={this.props.updateResources}
                isPurchasedObject={this.state.purchasedAddictions}
                canAffordAddiction={this.props.canAffordAddiction}
              />
            </Tab>

            <Tab eventKey='food' title='Food'>
              <CatagoryTab
                catagory='food'
                updateResources={this.props.updateResources}
                isPurchasedObject={this.state.purchasedAddictions}
                canAffordAddiction={this.props.canAffordAddiction}
              />
            </Tab>

            <Tab eventKey='money' title='Money'>
              <CatagoryTab
                catagory='money'
                updateResources={this.props.updateResources}
                isPurchasedObject={this.state.purchasedAddictions}
                canAffordAddiction={this.props.canAffordAddiction}
              />
            </Tab>
          </Tabs>
        </Container>
      </div>
    )
  }
}

AddictionList.propTypes = {
  canAffordAddiction: PropTypes.func.isRequired,
  updateResources: PropTypes.func.isRequired
}

export default AddictionList
