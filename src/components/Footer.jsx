import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--navy)', color: 'var(--white)', padding: '4rem 0 2rem' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* Brand */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--white)' }}>Bitryx</h3>
                    <p style={{ color: 'var(--text-light)', maxWidth: '300px' }}>
                        Empowering businesses with custom software, cloud solutions, and strategic technical consulting.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                        <a href="#" className="text-light-hover" style={{ color: 'var(--text-light)' }}><Linkedin size={20} /></a>
                        <a href="#" className="text-light-hover" style={{ color: 'var(--text-light)' }}><Twitter size={20} /></a>
                        <a href="#" className="text-light-hover" style={{ color: 'var(--text-light)' }}><Github size={20} /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 style={{ color: 'var(--electric-blue)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>SERVICES</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/services" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Web Development</Link></li>
                        <li><Link to="/services" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Custom Software</Link></li>
                        <li><Link to="/services" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Cloud & DevOps</Link></li>
                        <li><Link to="/services" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Consulting</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 style={{ color: 'var(--electric-blue)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>COMPANY</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/about" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>About Us</Link></li>
                        <li><Link to="/portfolio" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Our Work</Link></li>
                        <li><Link to="/technologies" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Tech Stack</Link></li>
                        <li><Link to="/contact" style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ color: 'var(--electric-blue)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>GET IN TOUCH</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-light)' }}>
                            <Mail size={18} /> <a href="mailto:hello@bitryx.com" style={{ color: 'inherit' }}>hello@bitryx.com</a>
                        </li>
                        <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-light)' }}>
                            <MapPin size={18} /> <span>London, United Kingdom</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-light)', fontSize: '0.875rem' }}>
                <p>&copy; {new Date().getFullYear()} Bitryx Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
