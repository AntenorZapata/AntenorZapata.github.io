import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHomeWifiLine, RiUser6Line } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';
import { MdComputer } from 'react-icons/md';

function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="navigation">
          <ul className="links">
            <li className="link">
              <NavLink to="/" exact activeclassname="active">
                <span className="icon">
                  <RiHomeWifiLine className="fa" />
                </span>
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/about" exact activeclassname="active">
                <span className="icon">
                  <RiUser6Line className="fa" />
                </span>
              </NavLink>
            </li>{' '}
            <li className="link">
              <NavLink to="/projects" exact activeclassname="active">
                <span className="icon">
                  <MdComputer className="fa" />
                </span>
              </NavLink>
            </li>{' '}
            <li className="link">
              <NavLink to="/contact" exact activeclassname="active">
                <span className="icon">
                  <TiMessages className="fa" />
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <footer className="footer">
        <p>A.Z</p>
      </footer>
    </div>
  );
}

export default Navbar;
