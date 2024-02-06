import "./AboutImage.css";
import "../ContainerImage.css";

export default function AboutImage() {
  return (
    <div className="image-container">
      <img
        className="about-image"
        src={require("../../../assets/about.jpg")}
        alt={"about"}
      />
      <div className="overlay">About</div>
    </div>
  );
}
