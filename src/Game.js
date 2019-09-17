import React from 'react'
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Tab
} from 'react-bootstrap'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import resEnum from './resEnum.js'
import AddictionList from './AddictionList.js'
import AutomationUpgrades from './AutomationUpgrades.js'
import addictionData from './addictionsData'
import { updateResources } from './actions/resourcesActions'

const mapStateToProps = (store) => {
  console.log('Store: ')
  console.log(store)
  return { resources: store.resourcesReducer.resources }
}

const mapDispatchToProps = (dispatch) => {
  return ({
    updateResources: (resourceName, delta) => { dispatch(updateResources(resourceName, delta)) }
  })
}

class Game extends React.Component {
  updateResources (ids, deltas) {
    this.setState(prevState => {
      const resources = prevState.resources.map(res => {
        for (let i = 0; i < ids.length; i++) {
          if (res.id === ids[i]) {
            res.value += deltas[i]
          }
        }

        return res
      })

      return resources
    })
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
        <h1>Addiction Sim</h1>
        <Container fluid='true'>
          <Row>
            <Col sm={9}>
              <Tab.Container defaultActiveKey='addictions'>
                <Row>
                  <Col sm={2}>
                    <Nav variant='pills' className='flex-column'>
                      <Nav.Item>
                        <Nav.Link eventKey='addictions'>Addictions</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='automation'>Automation</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={10}>
                    <Tab.Content>
                      <Tab.Pane eventKey='addictions'>
                        <AddictionList updateResources={this.props.updateResources} canAffordAddiction={this.canAffordAddiction} />
                      </Tab.Pane>
                    </Tab.Content>
                    <Tab.Content>
                      <Tab.Pane eventKey='automation'>
                        <AutomationUpgrades />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
            <Col sm={3}>
              <Navbar bg='light' expand='lg' className='justify-content-center flex-column'>
                <Navbar.Brand>Resources</Navbar.Brand>
                <Nav className='mr-auto flex-column'>
                  <Row>
                    <Col>
                      <Nav.Item>
                        <Nav.Link className='text-right' style={{ color: 'royalblue' }}>Happiness: </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='text-right' style={{ color: 'orange' }}>Fat: </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='text-right' style={{ color: 'orangered' }}>Clout: </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='text-right' style={{ color: 'red' }}>Tech: </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link className='text-right' style={{ color: 'green' }}>Money: </Nav.Link>
                      </Nav.Item>
                    </Col>
                    <Col>
                      <Nav.Item>
                        <Nav.Link style={{ color: 'royalblue' }}>
                          {this.props.resources.Hap.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link style={{ color: 'orange' }}>
                          {this.props.resources.Fat.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link style={{ color: 'orangered' }}>
                          {this.props.resources.Clout.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link style={{ color: 'red' }}>
                          {this.props.resources.Tech.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link style={{ color: 'green' }}>
                          {this.props.resources.Money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Nav.Link>
                      </Nav.Item>
                    </Col>
                  </Row>
                </Nav>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

Game.propTypes = {
  resources: PropTypes.object.isRequired,
  updateResources: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
