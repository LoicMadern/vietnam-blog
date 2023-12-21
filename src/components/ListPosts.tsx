import Post from "./Post";
import { posts } from "../lib/data";
import "./ListPosts.css";

export default function ListPosts() {
  return (
    <div className="list">
      {posts.map((post) => (
        //id for list of items

        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
