import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Post from "../pages/Post";

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about/:id" element={<About />} />
      <Route path="/contact" element={<div>Contact</div>} />
      <Route path="/posts/:id" element={<Post />} />
    </Routes>
  );
}

export default Router;
