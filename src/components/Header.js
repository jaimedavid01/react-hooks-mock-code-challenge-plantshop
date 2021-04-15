import React from "react";

function Header() {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1><br></br>
      <p>* Data may take a few seconds to fetch *</p>
    </header>
  );
}

export default Header;
