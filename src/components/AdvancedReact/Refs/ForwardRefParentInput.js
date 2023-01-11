import React, { Component, createRef } from 'react'
import ForwardRefsInput from './ForwardRefsInput'

class ForwardRefParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }

    render() {
        return (
            <div>
                <ForwardRefsInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default ForwardRefParentInput
