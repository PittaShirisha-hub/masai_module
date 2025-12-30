import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 0 && count % 3 === 0) {
      alert(`The current number ${count} is divisible by 3`);
    }
  }, [count]); // effect runs only when count changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter App</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
    </div>
  );
}

export default Counter;
