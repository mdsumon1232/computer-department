import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleNavbar = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <div className="logo">
        <a href="/">CST</a>
      </div>
      <nav className={`nav ${open ? "open" : "close"}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/admission/guide">Admissions Guide</Link>
          </li>
          <li>
            <Link to="/book/list">Book List</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="user">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <div onClick={handleNavbar}>
          {open ? (
            <XMarkIcon className="barIcon" />
          ) : (
            <Bars3Icon className="barIcon" />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
