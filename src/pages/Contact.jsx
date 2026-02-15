import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import '../styles/main.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <section className="bg-primary text-center" style={{ padding: '6rem 0 4rem', color: 'white' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Get in Touch</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1' }}>
                        Ready to start your next project? We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'start' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Information</h2>
                            <p style={{ marginBottom: '2rem', color: '#475569' }}>
                                Have a question about our services or want to discuss a potential partnership? Reach out to us directly.
                            </p>

                            <ul style={{ display: 'grid', gap: '1.5rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '50%' }}>
                                        <Mail color="var(--accent)" />
                                    </div>
                                    <div>
                                        <strong>Email Us</strong>
                                        <p><a href="mailto:hello@bitryx.com" className="hover-underline">hello@bitryx.com</a></p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '50%' }}>
                                        <Phone color="var(--accent)" />
                                    </div>
                                    <div>
                                        <strong>Call Us</strong>
                                        <p><a href="tel:+442012345678" className="hover-underline">+44 20 1234 5678</a></p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '50%' }}>
                                        <MapPin color="var(--accent)" />
                                    </div>
                                    <div>
                                        <strong>Visit Us</strong>
                                        <p>123 Tech Avenue, Shoreditch, London, UK</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="card" style={{ padding: '2rem', background: '#f8fafc' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Send a Message</h3>
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1' }}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontFamily: 'inherit' }}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
