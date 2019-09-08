import React from 'react';
// import styled from 'styled-components'
import {
          Button,
          ProgressBar,
          Container,
          Row,
          Col
       } from 'react-bootstrap'

class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            happiness: 0,
            fat: 0,
            clout: 0,
            tech: 0,
            money: 0
        }
    }

    handleCoolMathGame() {
        console.log("played a a game")

        this.setState({
            happiness: 5
        })
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm={4}>
                        <Button
                            onClick={this.handleCoolMathGame}
                            variant="secondary"
                            size="sm"
                            >
                        visit coolmathgames.com
                        </Button>
                        </Col>

                        <Col sm={8}>
                            <ProgressBar now={60} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }


}

export default Game;
