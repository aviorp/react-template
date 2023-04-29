import axios from "axios";

export const getPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data.data;
};

export const createPost = async (post: any) => {
  const { data } = await axios.post("http://localhost:3300/users", post);
  return data;
};
