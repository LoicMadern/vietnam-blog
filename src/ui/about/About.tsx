import { Link } from "react-router-dom";
export default function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>
        You are on the about page click to return
        <Link to="/" style={{ padding: 10 }}>
          Home
        </Link>
      </p>
    </div>
  );
}
