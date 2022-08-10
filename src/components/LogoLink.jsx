import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const LogoLink = () => {
  return (
    <div>
      <Link to="/">
        <img
          className="logo"
          src="https://empleo.chaco.gob.ar/static/media/logo-fut.b30da876.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default LogoLink;
