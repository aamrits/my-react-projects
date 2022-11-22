import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-header">
        <Link className="navbar-brand m-auto" to="/">Projects with React JS</Link>
    </nav>
  )
}

export default Header