import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ashwin'
        };
        console.log("LifeCycleA constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Adith'
        })
    }

    render() {
        const { name } = this.state;
        console.log('LifeCycleA render');
        return (
            <div>
                <h1> LifeCycleA {name}</h1>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
