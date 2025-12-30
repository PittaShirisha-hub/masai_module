import { useState, lazy, Suspense } from "react";

// Lazy load component
const HeavyComponent = lazy(() => import("./components/HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React.memo & Lazy Loading Demo</h2>

      <button onClick={() => setCount(count + 1)}>
        Counter: {count}
      </button>

      <hr />

      <Suspense fallback={<h3>Loading Heavy Component...</h3>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
