import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Todos() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)));
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div>
      <h2>Todos</h2>
      <button onClick={logout}>Logout</button>

      {todos.map(todo => (
        <div
          key={todo.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
            cursor: "pointer"
          }}
          onClick={() => navigate(`/todos/${todo.id}`)}
        >
          <h4>{todo.title}</h4>
          <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
        </div>
      ))}
    </div>
  );
}

export default Todos;
