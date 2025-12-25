import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Todos from "../pages/Todos";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/todos" element={<Todos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
