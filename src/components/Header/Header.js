import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="bg-info py-3 h-50">
      <img
        className="rounded-circle"
        src="/images/headerImage.jpg"
        alt="A lady leaning on wood smiling"
      />
      <div className="header__bottom">
        <h1 className="header__primary">
          <span className="header__primary--main">Lilly Sabri</span>
          <span className="header__primary--sub">Pro</span>
        </h1>
        <h4>bio.fm/lillysabri</h4>
      </div>
    </header>
  );
};

export default Header;
