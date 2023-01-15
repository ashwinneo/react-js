import React, { Component, /**PureComponent*/ } from 'react'
import MemoComp from './MemoComponents/MemoComp'
// import PureComp from './PureComponent'
// import RegularComponent from './RegularComponent'

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
        console.log("-----PARENT COMPO------")
        return (
            <div>
                <h1>Parent Component</h1>
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoComp name={this.state.name}/>
            </div>
        )
    }
}

export default ParentComponent
