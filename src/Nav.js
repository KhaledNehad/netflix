import React, { useState, useEffect } from 'react'

import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])

    return (
      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <div className="nav__panal">
          <img
            className="nav__avatar"
            src="https://e7.pngegg.com/pngimages/141/425/png-clipart-user-profile-computer-icons-avatar-profile-s-free-angle-rectangle-thumbnail.png"
            alt="Profile Avatar"
          />
          <span className="username">Khaled Nehad</span>
        </div>
      </div>
    );
}

export default Nav;
