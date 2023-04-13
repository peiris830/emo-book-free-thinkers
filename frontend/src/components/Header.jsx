import React from "react";

function Header() {
  return (
      <header className="header>">
        {/*<nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="/login" className="nav__link">Login</a></li>
                <li className="nav__item"><a href="/signup" className="nav__link">Sign Up</a></li>
            </ul>
        </nav>*/}
          <div className="navbar">
              <div className="logo"><a href="/">Emo Book</a></div>
              <ul className="list_el ">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/signup">Contact Us</a></li>
              </ul>
              <a href="/register" className="Button">Login/Signup</a>
              <div className="toggleButton">
                  <i className="fa-solid fa-bars"/>
              </div>
          </div>
          <div className="dropdown_menu ">
              {/*<li><a href="Main.html">Home</a></li>
              <li><a href="About.html">About</a></li>
              <li><a href="ContactPage.html">Contact Us</a></li>
              <li><a href="register.html" className="Button">Login/Signup</a></li>*/}
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/register" className="Button">Login/Signup</a></li>
          </div>
      </header>
  );
}

export default Header;