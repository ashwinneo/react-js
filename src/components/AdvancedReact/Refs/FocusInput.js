import React, { Component, createRef } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
        this.componentRef = createRef();
    }

    setFocus = () => {
        this.componentRef.current.focusInput();
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.setFocus}>Focus Input</button>
            </div>
        )
    }
}

export default FocusInput
