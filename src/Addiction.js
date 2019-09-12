import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  ProgressBar,
  Row,
  Col
} from 'react-bootstrap'

class Addiction extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      allowClick: true,
      barWidth: 0,
      currentTextIndex: 0
    }

    this.handleClick = this.handleClick.bind(this)
    this.clearProgBar = this.clearProgBar.bind(this)
    this.incrementProgBar = this.incrementProgBar.bind(this)
  }

  handleClick () {
    if (this.state.allowClick) {
      this.setState(prevState => {
        return {
          allowClick: false,
          barWidth: prevState.barWidth
        }
      })
      this.props.updateResources(this.props.addictionData.resIds, this.props.addictionData.deltas)
    }
  }

  updateProgressBar (clearProgBar, incrementProgBar) {
    if (this.state.allowClick) {
      const identity = setInterval(() => progress(this.state.barWidth), 100)
      const progress = (width) => {
        if (width >= 100) {
          clearInterval(identity)
          clearProgBar()
        } else {
          incrementProgBar()
        }
      }
    }
  }

  clearProgBar () {
    this.setState(() => {
      return {
        allowClick: true,
        barWidth: 0,
        currentTextIndex: this.getRandomText()
      }
    })
  }

  incrementProgBar () {
    this.setState(prevState => {
      return {
        allowClick: prevState.allowClick,
        barWidth: prevState.barWidth + 100 * 200 / this.props.addictionData.cooldown
      }
    })
  }

  getRandomText () {
    return Math.floor(Math.random() * 100) % this.props.addictionData.text.length
  }

  render () {
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
              {this.props.addictionData.text[this.state.currentTextIndex]}
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
  updateResources: PropTypes.func.isRequired,
  addictionData: PropTypes.object.isRequired,
  isPurchased: PropTypes.object.isRequired
}

export default Addiction
