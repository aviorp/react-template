import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Post from "../pages/Post";
import { useAuth } from "../hooks";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

function Router(): JSX.Element {
  const {
    authInfo: { loggedIn }
  } = useAuth();

  if (loggedIn) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default Router;
