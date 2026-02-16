import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Portfolio', path: '/portfolio' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                height: 'var(--header-height)',
                display: 'flex',
                alignItems: 'center',
                boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.05)' : 'none'
            }}
        >
            <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Brand Logo - Clean Text */}
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.03em', color: 'var(--primary)' }}>
                    <div style={{
                        background: 'var(--accent)',
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <span style={{ color: 'white', fontWeight: 800, fontSize: '1.1rem' }}>B</span>
                    </div>
                    <span>Bitryx<span style={{ color: 'var(--accent)' }}>.</span></span>
                </Link>

                {/* Desktop Nav - Clean & Simple */}
                <div style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }} className="nav-desktop">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                            style={{
                                textDecoration: 'none',
                                fontWeight: 500,
                                fontSize: '0.95rem',
                                color: 'var(--primary)',
                                transition: 'color 0.2s ease'
                            }}
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        Get Started <ArrowUpRight size={16} />
                    </Link>
                </div>

                {/* Mobile Trigger - Clean */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', display: 'none' }}
                    className="mobile-trigger"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu - Full Screen White */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: 'fixed',
                            top: 'var(--header-height)',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(255,255,255,0.98)',
                            zIndex: 999,
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '2rem',
                            paddingTop: '4rem'
                        }}
                    >
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 600,
                                    color: 'var(--primary)',
                                    textDecoration: 'none'
                                }}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="btn btn-primary"
                            style={{ width: '80%', padding: '1rem', marginTop: '2rem' }}
                        >
                            Start Your Project
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 768px) {
                    .nav-desktop { display: flex !important; }
                }
                @media (max-width: 768px) {
                    .mobile-trigger { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
