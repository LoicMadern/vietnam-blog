import { Link } from "react-router-dom";
import background from "../../assets/hagiang.jpg";
import "./Home.css";
import ImageContainer from "../../components/image/ImageContainer";

export default function Home() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="text">
        <div className="welcome-message">Welcome on my Vietnam Blog</div>
        <Link to="/discover">
          <ImageContainer
            name={"valley"}
            widthSize={400}
            heigthSize={300}
            borderRadius={20}
            caption="Discover"
          ></ImageContainer>
        </Link>
        <Link to="/about">
          <ImageContainer
            name={"about"}
            widthSize={400}
            heigthSize={300}
            borderRadius={20}
            caption="About"
          ></ImageContainer>
        </Link>
      </div>
    </div>
  );
}
