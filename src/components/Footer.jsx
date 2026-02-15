import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github, Mail, MapPin } from 'lucide-react';
import '../styles/main.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h3>Bitryx</h3>
                        <p>
                            Innovative Software Solutions for Modern Businesses. We help startups and enterprises scale with custom software development and cloud solutions.
                        </p>
                        <div className="social-links" style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Github"><Github size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services">Custom Software</Link></li>
                            <li><Link to="/services">Web Development</Link></li>
                            <li><Link to="/services">Mobile Apps</Link></li>
                            <li><Link to="/services">Cloud Solutions</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/technologies">Technologies</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                                <Mail size={16} /> <a href="mailto:hello@bitryx.com">hello@bitryx.com</a>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginTop: '0.5rem' }}>
                                <MapPin size={16} /> London, UK
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #334155', paddingTop: '2rem', textAlign: 'center', fontSize: '0.875rem', color: '#64748b' }}>
                    &copy; {new Date().getFullYear()} Bitryx Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
