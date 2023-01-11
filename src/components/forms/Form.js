import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            comments: '',
            topic: 'ReactJS'
        }
        this.setUserName = this.setUserName.bind(this);
    }

    setUserName = (event) => {
        console.log(event.target.value);
        this.setState({
            userName: event.target.value
        })
    };

    setPassword = (event) => {
        console.log(event.target.value);
        this.setState({
            password: event.target.value
        })
    };

    setComments = (event) => {
        console.log(event.target.value);
        this.setState({
            comments: event.target.value
        })
    };

    setTopic = (event) => {
        console.log(event.target.value);
        this.setState({
            topic: event.target.value
        })
    };

    submit = (event) => {
        console.log(this.state);
        alert(`${this.state.userName}, ${this.state.password}, ${this.state.comments}, ${this.state.topic}`);
        event.preventDefault(); //to prevent page refresh
    }

    topics = ["ReactJS", "Angular"]

    render() {
        const { userName, password, comments, topic } = this.state;
        // console.log(this.topics);
        const dropDownValues = this.topics.map((topic1,index) => {
            // console.log(topic);
            return (<option value={topic1} key={index}>{topic1}</option>)
        })
        return (
            <div>
                <h1>Form Component</h1>
                <form onSubmit={this.submit}>
                    <div>
                        <label style={{marginRight: '10px'}}>UserName</label>
                        <input type="text" value={userName} onChange={this.setUserName}></input>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <label style={{marginRight: '17px'}}>Password</label>
                        <input type="password" value={password} onChange={this.setPassword}></input>
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <label style={{marginRight: '17px'}}>Comments</label>
                        <textarea value={comments} onChange={this.setComments}></textarea>
                    </div>

                    <div style={{marginTop: '10px'}}>
                        <label style={{marginRight: '17px'}}>Topic</label>
                        <select value={topic} onChange={this.setTopic}>
                            {dropDownValues}
                        </select>
                    </div>

                    <div style={{marginTop: '10px'}}>
                        {/* <label style={{marginRight: '17px'}}>Topic</label> */}
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
