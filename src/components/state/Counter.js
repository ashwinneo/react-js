import React, { Component } from 'react'

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
        count: 0
    };
  };

  increment() {
    // this.state.count = this.state.count + 1;
    // this.setState(
    //     {
    //     count: this.state.count + 1
    //     },
    //     () => {
    //         console.log("Callback Value", this.state.count);
    //     }
    // )
    this.setState((prevState, props)=> (
            {
                count: prevState.count + 1
            }
        )
    )
    // console.log(this.state.count);
  }; 

  incrementFive() {
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
  }

  decrement() {
    // this.state.count = this.state.count + 1;
    console.log(this.state.count);
    if (this.state.count < 1) {
        this.setState({count: 0});
    } else {
        this.setState(
            {
            count: this.state.count - 1
            },
            () => {
                console.log("Callback Value", this.state.count);
            }
        )
    }
  }; 

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count {count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    )
  }
}

export default Counter
