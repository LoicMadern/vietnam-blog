import { Link } from "react-router-dom";
import background from "../../assets/catba.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="text">
        You are home
        <Link to="/about">About</Link>
        <Link to="/discover">Discover</Link>
      </div>
    </div>
  );
}
