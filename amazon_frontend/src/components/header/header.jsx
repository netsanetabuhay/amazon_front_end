import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="Amazon Logo"
        className="header__logo"
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <span className="header__searchIcon">🔍</span>
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
