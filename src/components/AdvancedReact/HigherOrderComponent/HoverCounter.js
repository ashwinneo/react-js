import React, { Component } from 'react'
import withCounter from './Hoc/WithCounter';

class HoverCounter extends Component {

    render() {
        // const { count } = this.state;
        const { count,  incrementCount, name } = this.props;
        return (
            <div>
                <h2 onMouseOver={incrementCount}>{name} Howered {count} times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10)
