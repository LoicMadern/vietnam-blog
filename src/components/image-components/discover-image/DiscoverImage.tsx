import "./DiscoverImage.css";
import "../ContainerImage.css";

export default function DiscoverImage() {
  return (
    <div className="image-container">
      <img
        className="discover-image"
        src={require("../../../assets/valley.jpg")}
        alt={"valley"}
      />
      <div className="overlay">Discover</div>
    </div>
  );
}
