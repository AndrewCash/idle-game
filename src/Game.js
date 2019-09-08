import React from 'react';
import styled from 'styled-components'
import {
          Button,
          ProgressBar,
          Container,
          Row,
          Col
       } from 'react-bootstrap'

const resEnum = {
    HAP: 1,
    FAT: 2,
    CLOUT: 3,
    TECH: 4,
    MONEY: 5

}

class Game extends React.Component {

    constructor() {
        super();

        let resourceArray = [
            {
                id: resEnum.HAP, value: 0
            },
            {
                id: resEnum.FAT, value: 0
            },
            {
                id: resEnum.CLOUT, value: 0
            },
            {
                id: resEnum.TECH, value: 0
            },
            {
                id: resEnum.MONEY, value: 0
            }
        ]

        this.state = {resources: resourceArray}
    }

    resourceUpdate(id, delta) {
        console.log("played a a game")

        this.setState(prevState => {
            let resources = prevState.resources.map(res => {
                if (res.id === id) {
                    res.value += delta
                }
                return res
            })
            return resources
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <Container>
                    <Row>
                        <Col >
                        <Button
                            onClick={event => this.resourceUpdate(resEnum.HAP, 5)}
                            variant="secondary"
                            size="sm"
                            >
                        visit coolmathgames.com
                        </Button>
                        {console.log(this.state.resources[0])}
                        </Col>

                        <Col >
                            <ProgressBar now={this.state.resources[0].value} />
                        </Col>
                        <Col>
                            <p>Max Happiness: {this.state.resources[0].value} </p>
                            <p>Max Fat: {this.state.resources[1].value} </p>
                            <p>Max Clout: {this.state.resources[2].value} </p>
                            <p>Max Tech: {this.state.resources[3].value} </p>
                            <p>Max Money: {this.state.resources[4].value} </p>
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }


}

export default Game;
