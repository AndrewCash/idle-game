import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  ProgressBar,
  Row,
  Col
} from 'react-bootstrap'
import { connect } from 'react-redux'
import addictionsData from './addictionsData'
import {
  dontAllowClick,
  incrementProgressBar,
  clearProgressBar
} from './actions/addictionsActions'
import { updateResources } from './actions/resourcesActions'

const mapStateToProps = (state, ownProps) => {
  return {
    allowClick: state.addictionsReducer[ownProps.catagory][ownProps.index].allowClick,
    barWidth: state.addictionsReducer[ownProps.catagory][ownProps.index].barWidth,
    currentTextIndex: state.addictionsReducer[ownProps.catagory][ownProps.index].currentTextIndex
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dontAllowClick: () => {
      dispatch(dontAllowClick(ownProps.catagory, ownProps.index))
    },
    incrementProgressBar: () => {
      dispatch(incrementProgressBar(ownProps.catagory, ownProps.index))
    },
    clearProgressBar: () => {
      dispatch(clearProgressBar(ownProps.catagory, ownProps.index))
    }
  }
}

class Addiction extends React.Component {
  handleClick () {
    if (this.props.allowClick) {
      this.props.dontAllowClick()
      this.updateProgressBar()
      this.props.updateResources(
        addictionsData[this.props.catagory][this.props.index].resIds,
        addictionsData[this.props.catagory][this.props.index].deltas
      )
    }
  }

  updateProgressBar () {
    if (this.props.allowClick) {
      const identity = setInterval(() => progress(this.props.barWidth), 100)
      const progress = (width) => {
        if (width >= 100) {
          clearInterval(identity)
          this.props.clearProgressBar()
        } else {
          this.props.incrementProgressBar()
        }
      }
    }
  }

  getRandomText () {
    return Math.floor(Math.random() * 100) % addictionsData[this.props.catagory][this.props.index].text.length
  }

  render () {
    const adData = addictionsData[this.props.catagory][this.props.index]
    if (this.props.isPurchased) {
      return (
        <Row>
          <Col className='my-1'>
            <Button
              onClick={() => {
                this.handleClick()
                this.updateProgressBar(this.clearProgBar, this.incrementProgBar)
              }}
              variant='primary'
              block
            >
              {adData.text[this.state.currentTextIndex]}
            </Button>
          </Col>

          <Col className='my-3'>
            <ProgressBar className='my-0' now={this.state.barWidth} />
          </Col>
        </Row>
      )
    } else {
      return null
    }
  }
}

Addiction.propTypes = {
  isPurchased: PropTypes.bool.isRequired,
  allowClick: PropTypes.bool.isRequired,
  catagory: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  barWidth: PropTypes.number.isRequired,
  updateResources: PropTypes.func.isRequired,
  dontAllowClick: PropTypes.func.isRequired,
  incrementProgressBar: PropTypes.func.isRequired,
  clearProgressBar: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Addiction)
