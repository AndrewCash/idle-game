import React from 'react'
import {
  Container,
  Col,
  DropdownButton,
  Dropdown
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
  constructor() {
    super()
    this.changeTheme = this.changeTheme.bind(this)
  }

  changeTheme(e) {
    console.log("Change theme")
  }

  render() {
    // const navDropdownTitle = (<i className="fas fa-cog"></i>);

    return (
      <div>
        <Container>
          <Col md={{ span: 6, offset: 3 }}>
            <h3>Addiction Sim</h3>
          </Col>
          <Col md={{ span: 3, offset: 3 }}>
            <DropdownButton
              title={<FontAwesomeIcon icon={faCog} />}
              variant={"secondary"}
              id={"settings"}
            >

              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Container>
      </div>
    )
  }
}

export default Header
