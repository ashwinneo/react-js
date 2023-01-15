import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './myStyle.css';

//https://jsonplaceholder.typicode.com/posts
function DataFetching() {

    // const [posts, setPosts] = useState([]);
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setidFromButtonClick] = useState(1);

    useEffect(() => {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        // .then(response => {
        //     console.log(response);
        //     setPosts(response.data);
        // })
        // .catch(error => {
        //     console.log(error);
        // });
        // (async function fetchData() {
        //     const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        //     setPosts(data.data);
        //     console.log(data.data);
        // })();

        (async function fetchData() {
            const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`);
            setPost(data.data);
            console.log(data.data);
        })();

        // console.log(data);
    }, [idFromButtonClick]);

    const handleClick = () => {
        setidFromButtonClick(id);
    };

    return (
        <div>
            <div>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                <button type="button" onClick={handleClick}>Fetch Post</button>
            </div>
            {/* <ul>
                {
                    posts.map(post => {
                        return (<li key={post.id}>{post.title}</li>)
                    })
                }
            </ul> */}
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching
