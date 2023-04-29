import axios from "axios";

export const getPosts = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return data.data;
};

export const getPostById = async (id: number | string) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return data;
};

export const createPost = async (post: any) => {
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post
  );
  return data;
};
