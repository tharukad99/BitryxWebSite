import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import '../styles/main.css';

const Contact = () => {
    const location = useLocation();

    useEffect(() => {
        const queryString = location.search;
        const urlParams = new URLSearchParams(queryString);
        if (urlParams.get('success') === 'true') {
            alert("Message sent successfully!");
            // Clean up the URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }, [location]);

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section style={{ padding: '8rem 0 4rem', background: 'var(--navy-dark)', color: 'var(--text-primary)' }}>
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-accent font-mono mb-4 block" style={{ color: 'var(--blue-accent)', display: 'block', marginBottom: '1rem', fontWeight: 600 }}>Say Hello</span>
                        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
                            Let's Build Something Great
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                            Have a project in mind? We'd love to discuss it.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container section">
                <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Get in Touch</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="card-service" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ color: 'var(--blue-accent)' }}><Mail size={24} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Chat with us</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Our friendly team is here to help.</p>
                                    <a href="mailto:bitryxsolutions@gmail.com" className="text-accent font-mono" style={{ color: 'var(--blue-accent)' }}>bitryxsolutions@gmail.com</a>
                                </div>
                            </div>

                            <div className="card-service" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ color: 'var(--blue-accent)' }}><MapPin size={24} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>Office</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        Manchester<br />
                                        United Kingdom
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-service"
                        style={{ padding: '3rem' }}
                    >
                        <form action="https://formsubmit.co/bitryxsolutions@gmail.com" method="POST">
                            {/* Disabled Captcha */}
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_subject" value="New Submission from BitRyx Website" />
                            {/* Redirect back to the same page with success param */}
                            <input type="hidden" name="_next" value={`${window.location.protocol}//${window.location.host}${window.location.pathname}?success=true`} />

                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Jane Doe"
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '4px',
                                        border: '1px solid var(--border)', outline: 'none',
                                        background: 'var(--bg-light)', color: 'var(--text-primary)', fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="jane@company.com"
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '4px',
                                        border: '1px solid var(--border)', outline: 'none',
                                        background: 'var(--bg-light)', color: 'var(--text-primary)', fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '0.9rem', fontWeight: 600 }}>Message</label>
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Tell us about your project..."
                                    rows="5"
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '4px',
                                        border: '1px solid var(--border)', outline: 'none',
                                        background: 'var(--bg-light)', color: 'var(--text-primary)', fontSize: '1rem', fontFamily: 'inherit'
                                    }}
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                Send Message <Send size={16} style={{ marginLeft: '10px' }} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
