import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <Link to="/" className="logo">
        Logo
      </Link>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={show ? "open" : ""}>
        <li>
          <NavLink to="/about">Hakkımızda</NavLink>
        </li>
        <li>
          <NavLink to="/services">Hizmetlerimiz</NavLink>
        </li>
        <li>
          <NavLink to="/contact">İletişim</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
