import client from "./Client";

const getComments = () => client.get("/comments");

const fetchComments = {
    getComments
}

export default fetchComments