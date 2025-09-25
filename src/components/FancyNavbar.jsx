import React, { useState } from "react";
import "./FancyNavbar.css";

const FancyNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const links = ["home", "services", "portfolio", "contact"];

  return (
    <nav className="fancy-navbar">
      <ul className="fancy-nav-links">
        {links.map((link) => (
          <li
            key={link}
            className={activeLink === link ? "active" : ""}
            onClick={() => setActiveLink(link)}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
            <span className="underline"></span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FancyNavbar;
