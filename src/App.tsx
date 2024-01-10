import { Routes, Route, Link } from "react-router-dom";
import About from "./ui/About";
import NoMatch from "./ui/NoMatch";
import Home from "./ui/Home";
import Discover from "./ui/Discover";

function App() {
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/about" style={{ padding: 5 }}>
          About
        </Link>
        <Link to="/discover" style={{ padding: 5 }}>
          Discover
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
