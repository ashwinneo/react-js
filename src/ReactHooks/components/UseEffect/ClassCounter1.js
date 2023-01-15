import React, { Component } from 'react'

export class ClassCounter1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name: ''
      }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
        console.log("Mount: ", this.state.count)
    }

    componentDidUpdate(preProps, prevState) {
        console.log("Update: ", this.state.count)
        if (prevState.count !== this.state.count) {
            console.log('Updating document title')
            document.title = `Clicked ${this.state.count} times`
        }
    }
    
    render() {
        return (
            <div>
                <input type='text' 
                value={this.state.name} 
                onChange={ e => {
                    this.setState({ name: e.target.value})
                }}/>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click {this.state.count} times</button>
            </div>
        )
    }
}

export default ClassCounter1
