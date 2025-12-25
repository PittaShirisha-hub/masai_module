import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/aboutus">About Us</NavLink>
      <NavLink to="/todos">Todos</NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "20px",
    padding: "15px",
    background: "#222",
    color: "#fff",
  },
};

