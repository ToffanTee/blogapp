import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import BlogsPage from "../../pages/BlogsPage";
import ErrorPage from "../../pages/ErrorPage";
import AuthPage from "../../pages/AuthPage";
import Login from "../AuthComponents/Login";
import Register from "../AuthComponents/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<BlogsPage />} />
      <Route path="/get-started" element={<AuthPage />}>
        <Route path="sign-up" element={<Register />} />
        <Route path="sign-in" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
