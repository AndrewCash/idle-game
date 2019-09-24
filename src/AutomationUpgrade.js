import React from 'react'
import {
  Button,
  Row,
  Col,
  OverlayTrigger
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { buyAutomation } from './actions/addictionsActions'

const mapStateToProps = (state) => {
  return {
    resources: state.resourcesReducer.resources
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyAutomation: dispatch(buyAutomation(ownProps.catagory, ownProps.index))
  }
}

class AutomationUpgrade extends React.Component {
  handleClick (catagory, index) {
    this.props.buyAutomation()
  }

  render () {
    return (
      <Row className='justify-content-md-center'>
        <Col sm='2'>
          <OverlayTrigger
            placement='right-start'
            delay={{ show: 250, hide: 400 }}
            overlay={
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.85)',
                  padding: '2px 10px',
                  color: 'white',
                  borderRadius: 3
                }}
              >
                Costs $1000
              </div>
            }
          >
            <Button variant='primary'>
              Buy
            </Button>
          </OverlayTrigger>
        </Col>
        <Col sm='6'>
          <Row className='justify-content-md-center'>
            <p>Math game bot.</p>
          </Row>
          <Row className='justify-content-md-center'>
            <p>Costs $1000</p>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutomationUpgrade)
