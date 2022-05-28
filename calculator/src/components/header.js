import React from "react";

function Header() {
  return (
    <header className="calculator-header">
      <h1 className="header-heading">Calc</h1>
      <div className="header-inner">
        <span className="inner-text">THEME</span>
        <div className="inner-track">
          <button className="track-btn"></button>
        </div>
      </div>
    </header>
  );
}

export default Header;
