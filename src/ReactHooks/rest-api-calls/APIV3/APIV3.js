import React, { useEffect } from "react";
import axios from "axios";
import useAPI from "../UseApi";

const getPosts = () => axios.get("https://jsonplaceholder.typicode.com/posts");
const getComments = () => axios.get("https://jsonplaceholder.typicode.com/comments");

function APIV3() {
    const getPostsApi = useAPI(getPosts);
    const getCommentsApi = useAPI(getComments);

    useEffect(() => {
        getPostsApi.request();
        getCommentsApi.request();
    }, []);

    return (
        <>
            <div>
                <h1>Posts</h1>
                {getPostsApi.loading && <p>Posts are loading!</p>}
                {getPostsApi.error && <p>{getPostsApi.error}</p>}
                <ul>
                    {getPostsApi.data?.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            </div>
            {/* Comment List */}
            <div>
                <h1>Comments</h1>
                {getCommentsApi.loading && <p>Comments are loading!</p>}
                {getCommentsApi.error && <p>{getCommentsApi.error}</p>}
                <ul>
                    {getCommentsApi.data?.map((comment) => (
                        <li key={comment.id}>{comment.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default APIV3
