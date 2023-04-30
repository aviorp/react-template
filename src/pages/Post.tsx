import { useQuery } from "react-query";
import Page from "../layouts/Page";
import { getPostById } from "../api/posts";
import { useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  const { isLoading, data: post } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostById(id!),
    enabled: !!id
  });
  return (
    <Page isLoading={isLoading}>
      <h1>Post #{id}</h1>
      <h2>{post?.title}</h2>
      <pre>{post?.body}</pre>
    </Page>
  );
};

export default Post;
