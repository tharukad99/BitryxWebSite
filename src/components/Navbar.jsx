import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Terminal } from 'lucide-react';
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
        { name: 'Work', path: '/portfolio' },
        { name: 'About', path: '/about' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                backgroundColor: scrolled ? 'rgba(10, 25, 47, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                height: 'var(--header-height)',
                display: 'flex',
                alignItems: 'center',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(2, 12, 27, 0.7)' : 'none'
            }}
        >
            <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Brand Logo */}
                <Link to="/" className="text-white" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                    <div style={{
                        color: 'var(--electric-blue)',
                        border: '2px solid var(--electric-blue)',
                        borderRadius: '4px',
                        padding: '4px'
                    }}>
                        <Terminal size={24} strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>Bitryx<span style={{ color: 'var(--electric-blue)' }}>.</span></span>
                </Link>

                {/* Desktop Nav */}
                <ul className="nav-desktop" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link, idx) => (
                        <li key={link.name}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => isActive ? "text-accent" : "text-white"}
                                style={{
                                    fontSize: '0.9rem',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 500,
                                    position: 'relative'
                                }}
                            >
                                <span style={{ color: 'var(--electric-blue)', marginRight: '4px' }}>0{idx + 1}.</span> {link.name}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', marginLeft: '1rem', fontSize: '0.85rem' }}>
                            Start Project
                        </Link>
                    </li>
                </ul>

                {/* Mobile Trigger */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: 'var(--electric-blue)', cursor: 'pointer', display: 'none' }} className="mobile-trigger">
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.aside
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 20 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100vh',
                            width: 'min(75vw, 400px)',
                            background: 'var(--navy-light)',
                            zIndex: 999,
                            padding: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: '-10px 0px 30px -15px rgba(2, 12, 27, 0.7)'
                        }}
                    >
                        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', width: '100%' }}>
                            {navLinks.map((link, idx) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) => isActive ? "text-accent" : "text-white"}
                                    style={{ fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}
                                >
                                    <span style={{ color: 'var(--electric-blue)', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>0{idx + 1}.</span>
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="btn btn-primary"
                                style={{ marginTop: '2rem', width: '100%' }}
                            >
                                Say Hello
                            </Link>
                        </nav>
                    </motion.aside>
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
