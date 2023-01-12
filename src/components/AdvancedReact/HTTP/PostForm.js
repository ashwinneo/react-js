import axios from 'axios';
import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    componentDidMount() {

    }

    setUserId = (event) => {
        console.log(event.target.value);
        this.setState({
            userId: event.target.value
        })
    };

    setTitle = (event) => {
        console.log(event.target.value);
        this.setState({
            title: event.target.value
        })
    };

    setBody = (event) => {
        console.log(event.target.value);
        this.setState({
            body: event.target.value
        })
    };

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    submit = async (event) => {
        console.log(this.state);
        event.preventDefault(); //to prevent page refresh
        const data = await axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .catch(error => {
            console.log(error);
        });
        console.log(data);
    };

    render() {
        const { userId, title, body } = this.state;
        console.log(userId, title, body);
        return (
            <div>
                <form onSubmit={this.submit}>
                    <div>
                        <label style={{marginRight: '10px'}}>User id</label>
                        <input type="text" value={userId} onChange={this.setUserId}></input>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <label style={{marginRight: '17px'}}>Title</label>
                        <input type="text" value={title} onChange={this.setTitle}></input>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        <label style={{marginRight: '17px'}}>Body</label>
                        <input type="text" value={body} onChange={this.setBody}></input>
                    </div>
                    <div style={{marginTop: '10px'}}>
                        {/* <label style={{marginRight: '17px'}}>Topic</label> */}
                        <button type='submit'>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm
