import { useState } from "react";
import "./Navbar.css";

const Navbar = ({
  logo = "Vikalp UI",
  links = [],
  onLinkClick,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setMenuOpen(false);

    if (onLinkClick) {
      onLinkClick(link);
    }
  };

  return (
    <nav className="vikalp-navbar" aria-label="Main navigation">
      <div className="vikalp-navbar-container">
        <a
          href="#"
          className="vikalp-navbar-logo"
          onClick={(event) => event.preventDefault()}
        >
          {logo}
        </a>

        <button
          type="button"
          className="vikalp-navbar-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="vikalp-navigation"
        >
          ☰
        </button>

        <div
          id="vikalp-navigation"
          className={`vikalp-navbar-links ${
            menuOpen ? "vikalp-navbar-links-open" : ""
          }`}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href || "#"}
              onClick={() => handleLinkClick(link)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;