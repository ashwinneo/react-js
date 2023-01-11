import React, { Component, createRef } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef();

        //Older Approach
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element
        }
        //Older Approach
    }

    componentDidMount() {
        console.log(this.inputRef);
        this.inputRef.current.focus();

        //Older Approach
        // if (this.cbRef) {
        //     this.cbRef.focus();
        // }
        //Older Approach
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default RefsDemo
