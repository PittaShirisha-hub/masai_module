function TodoCard({ userId, title, completed }) {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "8px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h4>{title}</h4>
      <p>User ID: {userId}</p>
      <p>
        Status:{" "}
        <b style={{ color: completed ? "green" : "red" }}>
          {completed ? "Completed" : "Not Completed"}
        </b>
      </p>
    </div>
  );
}

export default TodoCard;
