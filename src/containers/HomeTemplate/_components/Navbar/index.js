import './style.css';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function NavbarHome() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Home Navbar</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent01" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact activeClassName="active" className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" className="nav-link" to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}