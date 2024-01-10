import ListPosts from "../../components/posts/ListPosts";
import SimpleMap from "../../components/map/SimpleMap";
import { Link } from "react-router-dom";

export default function Discover() {
  return (
    <div style={{ padding: 20 }}>
      <Link to="/" style={{ padding: 10 }}>
        Home
      </Link>
      <ListPosts></ListPosts>
      <div id="map">
        <SimpleMap></SimpleMap>
      </div>
    </div>
  );
}
