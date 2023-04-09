import React from "react";

function Header() {
  return (
      <header className="header>">
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="/login" className="nav__link">Login</a></li>
                <li className="nav__item"><a href="/signup" className="nav__link">Sign Up</a></li>
            </ul>
        </nav>
      </header>
  );
}