import React, { Component } from 'react'

class EventBind extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello'
        };
        // this.changeMessage = this.changeMessage.bind(this); //Do this always, as only one time bind will be called
    }

    //   changeMessage() {
    //     this.setState({
    //         message: 'GoodBye'
    //     })
    //   }

    changeMessage = () => {
        this.setState({
            message: 'GoodBye'
        })
    };
    render() {
        const { message } = this.state;
        return (
            <div>
                <div><h1>{message}</h1></div>
                <button onClick={this.changeMessage}>Click</button>
                {/* <button onClick={this.changeMessage.bind(this)}>Click</button> */}
                {/* <button onClick={() =>this.changeMessage()}>Click</button> */}
            </div>
        )
    }
}

export default EventBind
