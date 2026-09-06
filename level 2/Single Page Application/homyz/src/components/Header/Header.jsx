import { Link } from "react-router-dom";
import "./header.css";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <section className="h-wrapper">
      <section className="h-container center innerWidth paddings">
        {/* Logo */}
        <img src="./logo.png" alt="logo" width={100} />

        {/* Desktop Menu */}
        <section className="center h-menu">
          <Link to="/">Home</Link>
          <Link to="/residencies">Residencies</Link>
          <Link to="/ourValue">Our Value</Link>
          <Link to="/contactUs">
            <button className="button">Contact Us</button>
          </Link>
        </section>

        {/* Mobile Menu Button */}
        <div className="menu-icon" onClick={() => setMenuOpened(!menuOpened)}>
          <HiMenu size={30} />
        </div>
      </section>

      {/* Mobile Menu */}
      {menuOpened && (
        <section className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/residencies">Residencies</Link>
          <Link to="/ourValue">Our Value</Link>
          <Link to="/contactUs">
            <button className="button">Contact Us</button>
          </Link>
        </section>
      )}
    </section>
  );
};

export default Header;
