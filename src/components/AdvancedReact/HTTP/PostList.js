import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMessage: ''
        }
    }

    async componentDidMount() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        .catch(error => {
            console.log(error);
            this.setState({errorMessage: error.message})
        });    
        this.setState({
            posts: response.data
        })
    }

    render() {
        const { posts, errorMessage } = this.state;
        const postList = posts.map(post => (
            <div key={post.id}>
                <div>{post.title}</div>
            </div>
        ))
        return (
            <div>
                <h1>List of Posts</h1>
                {
                    posts.length ?
                    // posts.map(post => <div key={post.id}>{post.title}</div>) :
                    postList :
                    null
                }
                {
                    errorMessage ? 
                    <div>{errorMessage}</div> :
                    null
                }
            </div>
        )
    }
}

export default PostList
