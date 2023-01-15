import React, { useState, useEffect } from 'react'
import axios from 'axios';

function DataFetchingOne() {

     const [post, setPost] = useState({});
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState('');

     useEffect(() => {
         axios.get('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => {
            setLoading(false);
            setPost(response.data);
            setError('');
         })
         .catch(error => {
            setLoading(false);
            setPost({});
            setError("Something went wrong", error);
         });
     })

    return (
        <div>
            { loading ? 'Loading' : post.title }
            { error? error : null }
        </div>
    )
}

export default DataFetchingOne
