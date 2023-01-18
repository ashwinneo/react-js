import client from "./Client";

const getPosts = () => client.get("/posts");

const fetchPosts = {
    getPosts
}

export default fetchPosts;