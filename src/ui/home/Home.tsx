import { Link } from "react-router-dom";
import "./Home.css";
import Discover from "../../components/image-components/discover-image/DiscoverImage";
import About from "../../components/image-components/about-image/AboutImage";

export default function Home() {
  return (
    <div className="background">
      <div className="container">
        <div className="welcome-container">Vietnam Blog</div>
        <div className="images-container">
          <Link to="/about">
            <About></About>
          </Link>
          <Link to="/discover">
            <Discover></Discover>
          </Link>
        </div>
      </div>
    </div>
  );
}
