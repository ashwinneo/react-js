import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    console.log("-----REGULAR COMPO------")
    return (
      <div>
        <h1>Regular Component {this.props.name}</h1>
      </div>
    )
  }
}

export default RegularComponent
