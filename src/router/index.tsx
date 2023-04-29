import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about/:id" Component={About} />
    </Routes>
  );
};

export default Router;
