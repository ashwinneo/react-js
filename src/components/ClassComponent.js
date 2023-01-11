import React, {Component} from "react";

// class Welcome extends Component {
//     render() {
//         return <h1>Welcome Ronaldo</h1>
//     }
// };

// class Welcome extends Component {
//     render() {
//         return <h1>Welcome {this.props.name} from {this.props.team}</h1>
//     }
// };

class ClassComponent extends Component {
    //props are immutable
    render() {
        return (
            <div>
                <h1> Welcome {this.props.name} from {this.props.team} </h1>
                <p>{this.props.children}</p>
            </div>
        )
    }
};

export default ClassComponent;