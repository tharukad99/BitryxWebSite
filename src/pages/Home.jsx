import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Shield, Database, Layout } from 'lucide-react';
import '../styles/main.css';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{
                background: 'var(--primary)',
                color: 'var(--text-white)',
                padding: '8rem 0 6rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-20%',
                    width: '800px',
                    height: '800px',
                    background: 'radial-gradient(circle, rgba(100,255,218,0.1) 0%, rgba(10,25,47,0) 70%)',
                    borderRadius: '50%',
                    pointerEvents: 'none'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <h4 style={{ color: 'var(--accent)', fontWeight: 400, letterSpacing: '0.1em', marginBottom: '1.5rem', textTransform: 'uppercase', fontSize: '1rem' }}>
                        Enterprise-Grade Solutions
                    </h4>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', marginBottom: '1.5rem', color: 'var(--text-white)', fontWeight: 800 }}>
                        Build the Future with<br />
                        <span style={{ color: 'var(--text-white)', opacity: 0.9 }}>Intelligent Software</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
                        We design and develop scalable digital products for forward-thinking companies. From cloud architecture to AI-driven applications.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                            Start Your Project
                        </Link>
                        <Link to="/portfolio" className="btn" style={{ color: 'var(--text-white)', borderBottom: '1px solid var(--accent)', borderRadius: 0, padding: '0.5rem 0' }}>
                            View Case Studies <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trusted By Strip */}
            <div style={{ background: 'var(--bg-white)', borderBottom: '1px solid var(--border)', padding: '3rem 0' }}>
                <div className="container">
                    <p className="text-center" style={{ fontSize: '0.875rem', color: 'var(--text-light)', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Trusted by industry leaders</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', alignItems: 'center', opacity: 0.7, filter: 'grayscale(100%)' }}>
                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary-light)' }}>Acme Corp</h3>
                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary-light)' }}>GlobalTech</h3>
                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary-light)' }}>Nebula</h3>
                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary-light)' }}>Vertex</h3>
                        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--primary-light)' }}>Flux</h3>
                    </div>
                </div>
            </div>

            {/* Services Overview */}
            <section className="section-padding" style={{ background: 'var(--bg-light)' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto 5rem auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Engineering Excellence</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            We bring top-tier engineering to solve complex business challenges.
                        </p>
                    </div>

                    <div className="grid-3">
                        <div className="card" style={{ padding: '3rem 2rem' }}>
                            <div style={{ background: 'rgba(10, 25, 47, 0.05)', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Code color="var(--primary)" size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Custom Software</h3>
                            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                                Full-cycle development tailored to your specific business logic and requirements.
                            </p>
                            <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Learn more <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="card" style={{ padding: '3rem 2rem', background: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' }}>
                            <div style={{ background: 'rgba(255, 255, 255, 0.1)', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Layout color="var(--accent)" size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'white' }}>Web Applications</h3>
                            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                                Scalable, high-performance web apps using React, Node.js, and modern cloud architecture.
                            </p>
                            <Link to="/services" style={{ color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Learn more <ArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="card" style={{ padding: '3rem 2rem' }}>
                            <div style={{ background: 'rgba(10, 25, 47, 0.05)', width: '60px', height: '60px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                                <Database color="var(--primary)" size={28} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cloud Infrastructure</h3>
                            <p style={{ color: 'var(--text-light)', marginBottom: '2rem' }}>
                                Secure, scalable cloud solutions on AWS and Azure with automated CI/CD pipelines.
                            </p>
                            <Link to="/services" style={{ color: 'var(--primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                Learn more <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h4 style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontWeight: 600 }}>Why Bitryx?</h4>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', lineHeight: 1.2 }}>We Don't Just Write Code.<br />We Build Assets.</h2>
                            <p style={{ marginBottom: '3rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                                In a world of digital noise, we deliver clarity and quality. Our team consists of senior engineers dedicated to robust architecture and seamless user experiences.
                            </p>

                            <ul style={{ display: 'grid', gap: '2rem' }}>
                                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ marginTop: '0.25rem' }}><Zap color="var(--primary)" size={24} /></div>
                                    <div>
                                        <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Velocity & Agility</strong>
                                        <p style={{ color: 'var(--text-light)' }}>Rapid iterations with a focus on delivering value from day one.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ marginTop: '0.25rem' }}><Shield color="var(--primary)" size={24} /></div>
                                    <div>
                                        <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Enterprise-Grade Security</strong>
                                        <p style={{ color: 'var(--text-light)' }}>Built-in security best practices to protect your data and IP.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ marginTop: '0.25rem' }}><Code color="var(--primary)" size={24} /></div>
                                    <div>
                                        <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Sustainable Code</strong>
                                        <p style={{ color: 'var(--text-light)' }}>Clean, documented, and testable code that is easy to maintain.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                background: 'white',
                                border: '1px solid var(--border)',
                                borderRadius: '1rem',
                                padding: '2rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', borderBottom: '1px solid var(--bg-light)', paddingBottom: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }}></div>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }}></div>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }}></div>
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'monospace' }}>server.js</div>
                                </div>
                                <code style={{ fontFamily: 'monospace', fontSize: '0.9rem', color: '#334155', display: 'block', lineHeight: 1.8 }}>
                                    <span style={{ color: '#8b5cf6' }}>const</span> <span style={{ color: '#0ea5e9' }}>scaleParams</span> = {'{'}<br />
                                    &nbsp;&nbsp;mode: <span style={{ color: '#16a34a' }}>'cluster'</span>,<br />
                                    &nbsp;&nbsp;instances: <span style={{ color: '#f59e0b' }}>'max'</span>,<br />
                                    &nbsp;&nbsp;monitoring: <span style={{ color: '#0ea5e9' }}>true</span><br />
                                    {'}'};<br /><br />
                                    <span style={{ color: '#64748b' }}>// Initialize high-performance cluster</span><br />
                                    <span style={{ color: '#8b5cf6' }}>await</span> <span style={{ color: '#0ea5e9' }}>System</span>.optimize(<span style={{ color: '#0ea5e9' }}>scaleParams</span>);
                                </code>
                            </div>

                            {/* Floating Badge */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-2rem',
                                left: '-2rem',
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '1.5rem',
                                borderRadius: '8px',
                                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'center'
                            }}>
                                <div style={{ background: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '4px' }}>
                                    <Zap size={24} color="var(--accent)" />
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent)' }}>99.9%</div>
                                    <div style={{ fontSize: '0.875rem', opacity: 0.8 }}>Uptime Guarantee</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding" style={{ background: 'var(--primary)', color: 'var(--text-white)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready to Scale?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: 'var(--text-light)', fontSize: '1.1rem' }}>
                        Book a free technical consultation with our senior architects. No sales fluff, just engineering capabilities.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
