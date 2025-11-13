import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Digital Kit</div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Casa</Link>
        <Link to="/shop" onClick={closeMenu}>Tienda</Link>
        <Link to="/digitalkit" onClick={closeMenu}>Digital Kit</Link>
        <Link to="/contact" onClick={closeMenu}>Contacto</Link>
      </div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};
