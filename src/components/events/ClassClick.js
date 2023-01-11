import React, { Component } from 'react'

export class ClassClick extends Component {
  clickMe() {
    console.log("Button Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickMe}>Click Me</button>
      </div>
    )
  }
}

export default ClassClick
