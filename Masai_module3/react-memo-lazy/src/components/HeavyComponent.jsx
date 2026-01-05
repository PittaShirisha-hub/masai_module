import React from "react";

const HeavyComponent = () => {
  console.log("🔥 Heavy Component Rendered");

  return (
    <div style={{ padding: "20px", background: "#f2f2f2" }}>
      <h3>Heavy Component</h3>
      <p>This component is heavy and should not re-render.</p>
    </div>
  );
};

export default React.memo(HeavyComponent);
