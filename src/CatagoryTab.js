import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  OverlayTrigger
} from 'react-bootstrap'
import addictionData from './addictionsData'
import Addiction from './Addiction.js'
import { connect } from 'react-redux'
import { updateResources } from './actions/resourcesActions'
import { buyAddiction } from './actions/addictionsActions'

const mapStateToProps = (state, ownProps) => {
  const adObj = state.addictionsReducer.addictions[ownProps.catagory]
  const ad = Object.keys(adObj).reduce((accumulator, addiction, index) => {
    accumulator[Object.keys(adObj)[index]].isUnlocked = adObj.isUnlocked
    return accumulator
  }, {})

  return {
    resources: state.resourcesReducer.resources,
    purchasedAddictions: ad
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateResources: (resourceName, delta) => {
      dispatch(updateResources(resourceName, delta))
    },
    buyAddiction: (catagory, index) => {
      dispatch(buyAddiction(catagory, index))
    }
  }
}

class CatagoryTab extends React.Component {
  nextUnlock () {
    // return index of next addiction to be unlocked in specified catagory

    for (let i = 0; i < Object.keys(this.props.purchasedAddicticions).length; i++) {
      if (!Object.values(this.props.purchasedAddicticions)[i]) {
        return Object.keys(this.props.purchasedAddicticions)[i]
      }
    }
  }

  renderTooltip (catagory, index) {
    const nameArray = addictionData[catagory][index].unlockIds

    const costArray = addictionData[catagory][index].unlockCost

    const rows = []
    for (let i = 0; i < nameArray.length; i++) {
      rows.push(<p>{nameArray[i]}: {costArray[i]}</p>)
    }

    return (
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2px 10px',
          color: 'white',
          borderRadius: 3
        }}
      >
        <p>Cost:</p>
        {rows}
      </div>
    )
  }

  buyAddiction (index) {
    if (this.props.canAffordAddiction(this.props.catagory, index)) {
      this.setState(prevState => {
        const output = JSON.parse(JSON.stringify(prevState.purchasedAddictions))
        output[index] = true

        return {
          purchasedAddictions: output
        }
      })
      this.props.updateResources(addictionData[this.props.catagory][index].unlockIds,
        addictionData[this.props.catagory][index].unlockCost.map((cost) => {
          return -1 * cost
        }))
    }
  }

  render () {
    const rows = []
    const cat = this.props.catagory

    for (let i = 0; i < Object.keys(addictionData[cat]).length; i++) {
      rows.push(
        <Addiction
          updateResources={this.props.updateResources}
          catagory={cat}
          index={Object.keys(addictionData[cat])[i]}
          isPurchased={Object.values(this.props.purchasedAddictions[cat])[i]}
        />
      )
    }

    if (!this.props.canAffordAddiction(cat, Object.keys(this.props.purchasedAddictions[cat])[0])) {
      return null
    } else {
      return (
        <div>
          {rows}
          <OverlayTrigger
            placement='right-start'
            delay={{ show: 250, hide: 400 }}
            overlay={this.renderTooltip(cat, this.nextUnlock(cat))}
          >
            <Button
              onClick={() => {
                if (this.props.canAffordAddiction(cat, this.nextUnlock(cat))) {
                  this.buyAddiction(this.nextUnlock(cat))
                }
              }}
              variant='secondary'
            >
              {addictionData[cat][this.nextUnlock(cat)].purchaseText}
            </Button>
          </OverlayTrigger>
        </div>
      )
    }
  }
}

CatagoryTab.propTypes = {
  catagory: PropTypes.string.isRequired,
  purchasedAddictions: PropTypes.object.isRequired,
  canAffordAddiction: PropTypes.func.isRequired,
  updateResources: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CatagoryTab)
