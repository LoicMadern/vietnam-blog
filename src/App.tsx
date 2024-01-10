import { Routes, Route, Link } from "react-router-dom";
import About from "./ui/about/About";
import NoMatch from "./ui/NoMatch";
import Home from "./ui/home/Home";
import Discover from "./ui/discover/Discover";

function App() {
  return (
    <div>
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
