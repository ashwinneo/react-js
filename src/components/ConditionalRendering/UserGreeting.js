import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        const { isLoggedIn } = this.state;
        // let loggedIn;
        // if (isLoggedIn) {
        //     // return <div>Welcome Ashwin</div>
        //     loggedIn = <div>Welcome Ashwin</div>
        // }
        // else {
        //     // return <div>Welcome Guest</div>
        //     loggedIn = <div>Welcome Guest</div>
        // }
        return (
            <div>
                {/* <div>{loggedIn}</div> */}
                <div>{isLoggedIn ? <div><h1 style={{color: "red"}, {fontWeight: 'bold'}}>Welcome Ashwin</h1></div>: <div>Welcome Guest</div> }</div>
            </div>
        )
    }
}

export default UserGreeting
