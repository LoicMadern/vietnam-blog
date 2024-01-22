import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="background">
      <div className="boxes">
        <div className="welcome-box">Welcome on my Vietnam Blog</div>
        <Link to="/discover">
          <figure>
            <img
              className="discover-box"
              src={require("../../assets/valley.jpg")}
              alt={"valley"}
            />
            <figcaption>{"Discover"}</figcaption>
          </figure>
        </Link>
        <Link to="/about">
          <figure>
            <img
              className="about-box"
              src={require("../../assets/about.jpg")}
              alt={"about"}
            />
            <figcaption>{"About"}</figcaption>
          </figure>
        </Link>
      </div>
    </div>
  );
}
