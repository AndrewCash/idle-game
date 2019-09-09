import React from 'react';
import styled from 'styled-components'
import {
          Button,
          ProgressBar,
          Container,
          Row,
          Col
       } from 'react-bootstrap'

class Addiction extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            allowClick: true,
            barWidth: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.clearProgBar = this.clearProgBar.bind(this)
        this.incrementProgBar = this.incrementProgBar.bind(this)
    }

    handleClick() {
        if (this.state.allowClick) {
            this.setState(prevState =>{
                return {
                    allowClick: false,
                    barWidth: prevState.barWidth
                }
            })

            this.props.updateFunction(1, 5)
            // setTimeout(() => {
            //     this.state.allowClick = true
            // }, 5000)
        }
    }

    updateProgressBar(clearProgBar, incrementProgBar) {
        if (this.state.allowClick) {
            let identity = setInterval(() => progress(this.state.barWidth), 100)
            function progress(width) {
                if (width >= 100) {
                    setTimeout(() => {
                        clearInterval(identity)
                        clearProgBar()
                    }, 500)

                } else {
                    incrementProgBar()
                }
            }
        }
    }

    clearProgBar() {
        this.setState(prevState => {
            return {
                allowClick: true,
                barWidth: 0
            }
        })
    }

    incrementProgBar() {
        this.setState(prevState => {
            return {
                allowClick: prevState.allowClick,
                barWidth: prevState.barWidth + 5
            }
        })
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                    <Button
                        onClick={event => {
                            this.handleClick();
                            this.updateProgressBar(this.clearProgBar, this.incrementProgBar)
                        }}
                        variant="secondary"
                        >
                    visit coolmathgames.com
                    </Button>
                    </Col>

                    <Col>
                        <ProgressBar now={this.state.barWidth} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Addiction
