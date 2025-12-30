import { useContext } from "react";
import { TodoContext } from "../../../../video_player/src/context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
