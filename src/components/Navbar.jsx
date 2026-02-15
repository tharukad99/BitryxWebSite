import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/main.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="navbar">
                <div className="container navbar-content">
                    <Link to="/" className="logo">
                        <img src="/logo.png" alt="Bitryx" style={{ height: '60px' }} />
                    </Link>

                    <div className="nav-links">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink>
                        <NavLink to="/technologies" className={({ isActive }) => isActive ? "active" : ""}>Technologies</NavLink>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : ""}>Portfolio</NavLink>
                        <Link to="/contact" className="btn btn-primary" style={{ marginLeft: '2rem' }}>Contact Us</Link>
                    </div>

                    <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isOpen ? 'open' : ''}`} style={{
                transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                position: 'fixed',
                top: 0,
                right: 0,
                height: '100vh',
                width: '100%',
                background: 'var(--bg-white)',
                zIndex: 999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease-in-out'
            }}>
                <button onClick={toggleMenu} style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                    <X size={32} />
                </button>
                <Link to="/" onClick={toggleMenu} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Home</Link>
                <Link to="/about" onClick={toggleMenu} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>About</Link>
                <Link to="/services" onClick={toggleMenu} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Services</Link>
                <Link to="/technologies" onClick={toggleMenu} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Technologies</Link>
                <Link to="/portfolio" onClick={toggleMenu} style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Portfolio</Link>
                <Link to="/contact" onClick={toggleMenu} className="btn btn-primary" style={{ marginTop: '1rem' }}>Contact Us</Link>
            </div>
        </>
    );
};

export default Navbar;
