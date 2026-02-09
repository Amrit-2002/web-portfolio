import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Amrit</h2>

      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>

        <li>
          <NavLink to="/education">Education</NavLink>
        </li>

        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
