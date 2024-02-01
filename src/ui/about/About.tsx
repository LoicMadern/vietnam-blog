import { Link } from "react-router-dom";
import AboutImage from "../../components/image-components/about-image/AboutImage";
import HomeLogo from "../../components/icons/HomeLogo";
import "./About.css";
export default function About() {
  return (
    <div style={{ padding: 20 }}>
      <Link to="/" style={{ padding: 10 }}>
        <HomeLogo></HomeLogo>
      </Link>

      <div className="about-container">
        <div>
          <AboutImage></AboutImage>
        </div>

        <div className="about-text">
          <h2>Why this blog ? </h2>
          <p>
            This blog is a souvenir of my travel in Vietnam on
            <span className="font-style"> October 2023.</span> The idea trip was
            to walk in the footsteps of my
            <span className="font-style"> grandfather</span> which did the
            <span className="font-style"> Indochina war</span>. This iniative
            connects me with the history of my family and my country.
          </p>
          <p>
            The picture next to this text represents my grandfather when he was{" "}
            <span className="font-style"> 19 years old</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
