import ListPosts from "../components/ListPosts";
import SimpleMap from "../components/SimpleMap";

export default function Discover() {
  return (
    <div style={{ padding: 20 }}>
      <ListPosts></ListPosts>
      <div id="map">
        <SimpleMap></SimpleMap>
      </div>
    </div>
  );
}
