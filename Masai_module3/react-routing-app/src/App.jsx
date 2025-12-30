import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import Todos from "./pages/Todos";
import TodoDetails from "./pages/TodoDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <Todos />
            </ProtectedRoute>
          }
        />

        <Route
          path="/todos/:todoId"
          element={
            <ProtectedRoute>
              <TodoDetails />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
