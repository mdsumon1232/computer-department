import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile.png";
import ActiveLink from "../ActiveLink/ActiveLink";
import { AuthContext } from "../UserProvider/UserProvider";
import "./Header.css";

const Header = () => {
  const { user } = useContext(AuthContext);

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
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/admission/guide">Admissions Guide</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/book/list">Book List</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </li>
        </ul>
      </nav>
      <div className="user">
        {user ? (
          <img
            src={user.photoURL ? user.profile : profile}
            className="profile"
          />
        ) : (
          <span>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </span>
        )}
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
