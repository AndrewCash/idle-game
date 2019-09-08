import React from 'react';
import styled from 'styled-components'
import {ProgressBar} from 'react-bootstrap'

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
                <button onClick={event => this.resourceUpdate(resEnum.HAP, 5)} >visit coolmathgames.com</button>
                {console.log(this.state.resources[0])}
                <ProgressBar now={60} />
            </div>
        )
    }


}

export default Game;
