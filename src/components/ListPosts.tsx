import Post from "./Post";
import { posts } from "../lib/data";

export default function ListPosts() {
  return (
    <div className="list">
      {posts.map((post) => (
        //id for list of items
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}
