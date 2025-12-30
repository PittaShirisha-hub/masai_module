import { useState } from "react";

function ColorToggle() {

  // initial color is red
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <div
        style={{
          width: "200px",
          height: "100px",
          margin: "auto",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px",
          backgroundColor: isRed ? "red" : "blue"
        }}
      >
        The div is {isRed ? "RED" : "BLUE"}
      </div>

      <button
        onClick={toggleColor}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Toggle Color
      </button>

    </div>
  );
}

export default ColorToggle;
