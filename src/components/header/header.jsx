import React from "react";
import "./header.css";
export const Header = () => (
  <header className="header">
    <span className="header__title">HELLO WORLD!</span>
    <button className="header__button" onClick={() => alert("OK")}>
      OK?
    </button>
  </header>
);
