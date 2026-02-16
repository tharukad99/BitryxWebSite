import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import '../styles/main.css';

const Contact = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section className="bg-grid text-white text-center" style={{ padding: '8rem 0 4rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-accent font-mono mb-4 block">Say Hello</span>
                        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            Let's Build Something Great
                        </h1>
                        <p style={{ color: 'var(--blue-slate)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                            Have a project in mind? We'd love to discuss it.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container section">
                <div className="grid-2" style={{ gap: '4rem', alignItems: 'flex-start' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Get in Touch</h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: 'var(--blue-slate)', lineHeight: 1.6 }}>
                            Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div className="card-glass" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ color: 'var(--electric-blue)' }}><Mail size={24} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--white-slate)' }}>Chat with us</h3>
                                    <p style={{ color: 'var(--blue-slate)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Our friendly team is here to help.</p>
                                    <a href="mailto:hello@bitryx.com" className="text-accent font-mono">hello@bitryx.com</a>
                                </div>
                            </div>

                            <div className="card-glass" style={{ padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <div style={{ color: 'var(--electric-blue)' }}><MapPin size={24} /></div>
                                <div>
                                    <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--white-slate)' }}>Office</h3>
                                    <p style={{ color: 'var(--blue-slate)', fontSize: '0.9rem' }}>
                                        123 Tech Avenue, London<br />
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
                        className="card-glass"
                        style={{ padding: '3rem' }}
                    >
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white-slate)', fontSize: '0.9rem' }}>Name</label>
                                <input
                                    type="text"
                                    placeholder="Jane Doe"
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '4px',
                                        border: '1px solid var(--navy-lighter)', outline: 'none',
                                        background: 'var(--navy)', color: 'white', fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white-slate)', fontSize: '0.9rem' }}>Email</label>
                                <input
                                    type="email"
                                    placeholder="jane@company.com"
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '4px',
                                        border: '1px solid var(--navy-lighter)', outline: 'none',
                                        background: 'var(--navy)', color: 'white', fontSize: '1rem'
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--white-slate)', fontSize: '0.9rem' }}>Message</label>
                                <textarea
                                    placeholder="Tell us about your project..."
                                    rows="5"
                                    style={{
                                        width: '100%', padding: '1rem', borderRadius: '4px',
                                        border: '1px solid var(--navy-lighter)', outline: 'none',
                                        background: 'var(--navy)', color: 'white', fontSize: '1rem', fontFamily: 'inherit'
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
