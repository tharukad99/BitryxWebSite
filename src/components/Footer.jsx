import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import '../styles/main.css';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--navy-dark)', color: 'var(--text-primary)', padding: '4rem 0 2rem', borderTop: '1px solid var(--border)' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                {/* Brand */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-white)' }}>BitRyx</h3>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                        Empowering businesses with custom software, cloud solutions, and strategic technical consulting.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                        <a href="https://www.instagram.com/bitryxsolutions/?fbclid=IwY2xjawQDO7VleHRuA2FlbQIxMABicmlkETB1REZBaDE3ZkNNcjcxSHFic3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnWZoKRlsYqzGphIL_ZH0OVRkh9vR_WNKuyJ6dArxMAcT9TqdwVhiTYj632l_aem_dPu7QKnzUzfBgewr-JMqOQ" target="_blank" rel="noopener noreferrer" className="text-light-hover" style={{ color: 'var(--text-secondary)' }}><Instagram size={20} /></a>
                        <a href="https://www.facebook.com/profile.php?id=61588270263509" target="_blank" rel="noopener noreferrer" className="text-light-hover" style={{ color: 'var(--text-secondary)' }}><Facebook size={20} /></a>
                        <a href="https://www.linkedin.com/company/bitryx-solutions/" target="_blank" rel="noopener noreferrer" className="text-light-hover" style={{ color: 'var(--text-secondary)' }}><Linkedin size={20} /></a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <h4 style={{ color: 'var(--blue-accent)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>SERVICES</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Web Development</Link></li>
                        <li><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Custom Software</Link></li>
                        <li><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Cloud & DevOps</Link></li>
                        <li><Link to="/services" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Consulting</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 style={{ color: 'var(--blue-accent)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>COMPANY</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li><Link to="/about" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>About Us</Link></li>
                        <li><Link to="/portfolio" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Our Work</Link></li>
                        <li><Link to="/technologies" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Tech Stack</Link></li>
                        <li><Link to="/contact" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Contact</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ color: 'var(--blue-accent)', marginBottom: '1.25rem', letterSpacing: '0.05em' }}>GET IN TOUCH</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-secondary)' }}>
                            <Mail size={18} /> <a href="mailto:bitryxsolutions@gmail.com" style={{ color: 'inherit' }}>bitryxsolutions@gmail.com</a>
                        </li>
                        <li style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', color: 'var(--text-secondary)' }}>
                            <MapPin size={18} /> <span>Manchester, United Kingdom</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                <p>&copy; {new Date().getFullYear()} BitRyx Solutions. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

