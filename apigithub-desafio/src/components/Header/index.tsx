import { Link } from "react-router-dom";

import './styles.css';

export default function Header() {
    return (
        <header className="dsc-header-client">
        <nav className="dsc-container">
          <Link to="/">
            <h1>Github API</h1>
          </Link>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              <div className="dsc-menu-item">
               <Link to="/"> Inicio </Link>
              </div>
            </div>
            <Link to="/cart">  </Link>
          </div>
        </nav>
      </header>
    );
}