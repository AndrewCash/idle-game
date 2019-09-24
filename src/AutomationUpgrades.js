import React from 'react'
import { connect } from 'react-redux'
import addictionsData from './addictionsData'
import AutomationUpgrade from './AutomationUpgrade'

const mapStateToProps = (state) => {
  return {
    resources: state.resourcesReducer.resources,
    addictions: state.addictionsReducer.addictions
  }
}

class AutomationUpgrades extends React.Component {
  render () {
    const rows = []

    for (let cat = 0; cat < Object.keys(addictionsData).length; cat++) {
      rows.push(<h2>{Object.keys(this.props.addictions)[cat]}</h2>)
      for (let i = 0; i < Object.keys(Object.values(addictionsData)[cat]).length; i++) {
        if (Object.values(Object.values(this.props.addictions)[cat])[i].isUnlocked) {
          rows.push(
            <AutomationUpgrade
              catagory={Object.keys(addictionsData)[cat]}
              index={Object.keys(Object.values(addictionsData)[cat])[i]}
            />
          )
        } else {
          break
        }
      }
    }

    return rows
  }
}

export default connect(mapStateToProps)(AutomationUpgrades)
