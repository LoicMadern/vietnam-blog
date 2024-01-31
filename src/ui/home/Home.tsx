import { Link } from "react-router-dom";
import "./Home.css";
import Discover from "../../components/image-components/discover-image/Discover";
import About from "../../components/image-components/about-image/About";

export default function Home() {
  return (
    <div className="background">
      <div className="container">
        <div className="welcome-container">Welcome on my Vietnam Blog</div>
        <div className="images-container">
          <Link to="/discover">
            <Discover></Discover>
          </Link>
          <Link to="/about">
            <About></About>
          </Link>
        </div>
      </div>
    </div>
  );
}
