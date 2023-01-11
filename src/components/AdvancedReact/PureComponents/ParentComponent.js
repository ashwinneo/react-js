import React, { Component } from 'react'
import PureComp from './PureComponent'
import RegularComponent from './RegularComponent'

class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Ashwin'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Ashwin'
            })
        },2000)
    }

    render() {
        return (
            <div>
                <h1>Parent Component</h1>
                <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComponent
