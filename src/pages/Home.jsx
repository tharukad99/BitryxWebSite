import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Palette, Layers, Server, Code, HeartHandshake, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Home = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end start"] });

    // Client Logos for Social Proof
    const clients = ["Microsoft", "Oracle", "SAP", "Salesforce", "Google Cloud", "Adobe"];

    return (
        <div style={{ overflowX: 'hidden' }}>

            {/* HERO SECTION: Professional & Trustworthy */}
            <section
                ref={scrollRef}
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    paddingTop: 'var(--header-height)',
                    background: 'radial-gradient(ellipse at top right, #EBF1FF 0%, #FFFFFF 60%)' // Very subtle blue tint
                }}
            >
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>

                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                background: '#E0F2FE',
                                color: '#0369A1',
                                borderRadius: '50px',
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                marginBottom: '1.5rem',
                                letterSpacing: '0.5px'
                            }}>
                                YOUR TECHNOLOGY PARTNER
                            </span>

                            <h1 style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                marginBottom: '1.5rem',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                color: 'var(--navy-dark)'
                            }}>
                                Future-Proof Software Solutions.
                            </h1>

                            <p style={{
                                fontSize: '1.25rem',
                                color: 'var(--text-secondary)',
                                maxWidth: '600px',
                                marginBottom: '2.5rem',
                                lineHeight: 1.6
                            }}>
                                We help ambitious businesses scale with custom software, cloud infrastructure, and strategic IT consulting.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', borderRadius: '50px' }}>
                                    Start Your Project
                                </Link>
                                <Link to="/services" className="btn btn-secondary" style={{ padding: '1rem 2.5rem', borderRadius: '50px' }}>
                                    Explore Services
                                </Link>
                            </div>

                            {/* Trust Indicators */}
                            <div style={{ marginTop: '3rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                                <div style={{ display: 'flex', gap: '2rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '2rem', color: 'var(--blue-accent)', marginBottom: '0.25rem' }}>98%</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Client Retention</p>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '2rem', color: 'var(--blue-accent)', marginBottom: '0.25rem' }}>50+</h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Enterprise Projects</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual: Clean Abstract Graphic */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            {/* Main Card */}
                            <div style={{
                                background: 'white',
                                borderRadius: '24px',
                                padding: '3rem',
                                boxShadow: '0 40px 80px -20px rgba(11, 27, 50, 0.15)',
                                position: 'relative',
                                zIndex: 2
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#F0F9FF', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Code size={24} color="#0284C7" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem' }}>Custom Development</h3>
                                        <p style={{ color: '#64748B' }}>Tailored to your workflow</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#ecfdf5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Server size={24} color="#059669" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem' }}>Cloud Infrastructure</h3>
                                        <p style={{ color: '#64748B' }}>Secure & Scalable Azure Setup</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: '#fff1f2', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <HeartHandshake size={24} color="#e11d48" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem' }}>Ongoing Support</h3>
                                        <p style={{ color: '#64748B' }}>24/7 Monitoring & Fixes</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    position: 'absolute', top: '-1rem', right: '-1rem', zIndex: 3,
                                    background: 'var(--navy-dark)', color: 'white', padding: '1rem 1.5rem', borderRadius: '12px',
                                    boxShadow: '0 20px 40px -10px rgba(11, 27, 50, 0.3)'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <CheckCircle size={20} color="#00C2CB" />
                                    <span style={{ fontWeight: 600 }}>Certified Experts</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TRUSTED BY: Greyscale Logos */}
            <section style={{ background: '#F8FAFC', padding: '3rem 0', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0' }}>
                <div className="container">
                    <p className="text-center" style={{
                        fontSize: '0.85rem', color: '#94A3B8', marginBottom: '2rem',
                        textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600
                    }}>
                        Trusted by industry leaders
                    </p>
                    <div style={{
                        display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap',
                        alignItems: 'center', opacity: 0.6, filter: 'grayscale(100%)'
                    }}>
                        {clients.map(c => (
                            <span key={c} style={{ fontSize: '1.5rem', fontWeight: 700, color: '#475569' }}>{c}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW: Based on Spreadsheet */}
            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '5rem' }}>
                        <span style={{ color: 'var(--blue-accent)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Our Expertise</span>
                        <h2 style={{ fontSize: '2.5rem', marginTop: '1rem', color: 'var(--navy-dark)' }}>Comprehensive IT Solutions</h2>
                    </div>

                    <div className="grid-3">
                        {/* 1. Software Development */}
                        <div className="card-service">
                            <div className="icon-box"><Code size={30} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Software Development</h3>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                <li>• Web Applications</li>
                                <li>• Desktop & Internal Tools</li>
                                <li>• APIs & Backend Systems</li>
                            </ul>
                        </div>

                        {/* 2. Consulting */}
                        <div className="card-service">
                            <div className="icon-box"><Layers size={30} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Consulting & Advisory</h3>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                <li>• Architecture Planning</li>
                                <li>• Cost & Timeline Estimation</li>
                                <li>• Technology Strategy</li>
                            </ul>
                        </div>

                        {/* 3. Cloud & Infrastructure */}
                        <div className="card-service">
                            <div className="icon-box"><Server size={30} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cloud & Infrastructure</h3>
                            <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                <li>• Cloud Hosting Setup (Azure)</li>
                                <li>• System Monitoring</li>
                                <li>• Scaling & Performance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center" style={{ marginTop: '4rem' }}>
                        <Link to="/services" className="btn btn-primary" style={{ borderRadius: '50px', padding: '1rem 3rem' }}>
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA SECTION: Navy Background for Contrast */}
            <section className="section" style={{ background: 'var(--navy-dark)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to transform your business?</h2>
                    <p style={{ color: '#94A3B8', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                        Partner with a team that delivers precision, performance, and peace of mind.
                    </p>
                    <Link to="/contact" className="btn btn-white" style={{ padding: '1rem 3rem', borderRadius: '50px' }}>
                        Get a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
