import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/main.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Our Work', path: '/portfolio' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            style={{
                background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(11, 27, 50, 0.05)',
                backdropFilter: 'blur(10px)',
                borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.3s ease'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>

                {/* Logo Section */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                    <div style={{ position: 'relative', width: '60px', height: '60px' }}>
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="Bitryx Logo"
                            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                    </div>
                    <span style={{
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: scrolled ? 'var(--navy-dark)' : 'var(--navy-dark)',
                        letterSpacing: '-0.5px'
                    }}>
                        Bitryx
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="desktop-menu" style={{ display: 'none', alignItems: 'center', gap: '2.5rem' }}>
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? 'nav-active' : ''}
                            style={({ isActive }) => ({
                                fontWeight: 500,
                                fontSize: '0.95rem',
                                color: isActive ? 'var(--blue-accent)' : (scrolled ? 'var(--navy-primary)' : 'var(--navy-dark)'),
                                position: 'relative',
                                transition: 'color 0.2s'
                            })}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem', borderRadius: '50px' }}>
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: 'var(--navy-dark)', cursor: 'pointer', display: 'none' }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 'var(--header-height)',
                            left: 0,
                            right: 0,
                            background: 'white',
                            zIndex: 998,
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2rem',
                            borderTop: '1px solid var(--border)'
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={({ isActive }) => ({
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: isActive ? 'var(--blue-accent)' : 'var(--navy-dark)',
                                    textDecoration: 'none'
                                })}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="btn btn-primary"
                            style={{ width: '100%', maxWidth: '300px', borderRadius: '50px' }}
                        >
                            Start Your Project
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Responsive Styles Injection */}
            <style>{`
                @media (min-width: 768px) {
                    .desktop-menu { display: flex !important; }
                }
                @media (max-width: 767px) {
                    .mobile-toggle { display: block !important; }
                }
                .nav-active::after {
                    content: '';
                    position: absolute;
                    bottom: -4px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: var(--blue-accent);
                    border-radius: 2px;
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
