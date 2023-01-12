import React, { Component } from 'react'

export class User extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default User
