import React, { Component } from 'react'
import withCounter from './Hoc/WithCounter';

export class ClickCounter extends Component {

    render() {
        // const { count } = this.state;
        const { count,  incrementCount, name } = this.props;
        return (
            <div>
                <button onClick={incrementCount}>{name} Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter, 5)
