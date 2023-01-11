import React, {Component} from "react";


class SetState extends Component {
    constructor() {
        super(); //extends react components class and call base class consturctor
        this.state = {
            message: 'Welcome Visitor'
        };
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                {/* <h1> Welcome Visitor </h1> */}
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Submit</button>
            </div>
        )
    }
};

export default SetState;