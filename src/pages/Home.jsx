import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Shield, Database, Layout } from 'lucide-react';
import '../styles/main.css';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
                color: 'white',
                padding: '8rem 0 6rem',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>
                        Innovative Software Solutions<br />
                        <span style={{ color: 'var(--accent)' }}>for Modern Businesses</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '800px', margin: '0 auto 3rem' }}>
                        We help ambitious startups and established enterprises scale with custom software development, cloud strategies, and intelligent automation.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Start Your Project <ArrowRight size={20} />
                        </Link>
                        <Link to="/portfolio" className="btn btn-secondary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>

            {/* Trusted By Strip */}
            <div style={{ background: 'white', borderBottom: '1px solid #e2e8f0', padding: '2rem 0' }}>
                <div className="container">
                    <p className="text-center" style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Trusted by industry leaders</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', alignItems: 'center', opacity: 0.6 }}>
                        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#475569' }}>Acme Corp</h3>
                        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#475569' }}>GlobalTech</h3>
                        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#475569' }}>Nebula Systems</h3>
                        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#475569' }}>Vertex Dynamics</h3>
                        <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#475569' }}>Flux Industries</h3>
                    </div>
                </div>
            </div>

            {/* Services Overview */}
            <section className="section-padding">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem' }}>What We Do</h2>
                        <p>End-to-end development services tailored to your needs</p>
                    </div>

                    <div className="grid-3">
                        <div className="card">
                            <div style={{ background: '#e0f2fe', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Code color="var(--accent)" />
                            </div>
                            <h3>Custom Software</h3>
                            <p>Tailor-made software solutions designed to streamline your business operations and drive efficiency.</p>
                        </div>

                        <div className="card">
                            <div style={{ background: '#e0f2fe', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Layout color="var(--accent)" />
                            </div>
                            <h3>Web Applications</h3>
                            <p>High-performance, scalable web apps built with modern frameworks like React and Next.js.</p>
                        </div>

                        <div className="card">
                            <div style={{ background: '#e0f2fe', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                <Database color="var(--accent)" />
                            </div>
                            <h3>Cloud & DevOps</h3>
                            <p>Secure cloud infrastructure setup, migration, and CI/CD pipelines on AWS and Azure.</p>
                        </div>
                    </div>

                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/services" style={{ fontWeight: 600, color: 'var(--accent)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                            View All Services <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-padding bg-white">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Partner with Bitryx?</h2>
                            <p style={{ marginBottom: '2rem' }}>
                                We don't just write code; we build digital products that solve real business problems. Our team of senior engineers and designers ensures quality at every step.
                            </p>

                            <ul style={{ display: 'grid', gap: '1.5rem' }}>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <Zap color="var(--accent)" />
                                    <div>
                                        <strong>Agile & Fast</strong>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Rapid prototyping and iterative development cycles.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <Shield color="var(--accent)" />
                                    <div>
                                        <strong>Enterprise Security</strong>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Security-first approach protecting your data and IP.</p>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem' }}>
                                    <Code color="var(--accent)" />
                                    <div>
                                        <strong>Clean Code</strong>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Maintainable, scalable, and well-documented codebase.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div style={{ position: 'relative', height: '400px', background: 'radial-gradient(circle at center, #f1f5f9 0%, #ffffff 100%)', borderRadius: '1rem', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', background: 'conic-gradient(from 180deg at 50% 50%, #eff6ff 0deg, #ecfeff 180deg, #eff6ff 360deg)', borderRadius: '50%', opacity: 0.5, filter: 'blur(40px)' }}></div>

                            <div style={{ position: 'absolute', top: '20%', left: '20%', background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', gap: '0.75rem', transform: 'rotate(-5deg)' }}>
                                <div style={{ background: '#dbeafe', padding: '0.5rem', borderRadius: '8px' }}><Zap size={24} color="#2563eb" /></div>
                                <div><strong>Fast Delivery</strong><br /><span style={{ fontSize: '0.8rem', color: '#64748b' }}>2-week Sprints</span></div>
                            </div>

                            <div style={{ position: 'absolute', bottom: '20%', right: '15%', background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', display: 'flex', alignItems: 'center', gap: '0.75rem', transform: 'rotate(5deg)' }}>
                                <div style={{ background: '#dcfce7', padding: '0.5rem', borderRadius: '8px' }}><Shield size={24} color="#059669" /></div>
                                <div><strong>Secure Core</strong><br /><span style={{ fontSize: '0.8rem', color: '#64748b' }}>ISO 27001 Compliant</span></div>
                            </div>

                            <div style={{ position: 'absolute', top: '40%', right: '20%', background: 'white', padding: '1rem', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                                <code style={{ fontFamily: 'monospace', color: '#0f172a', fontSize: '0.9rem' }}>
                                    git commit -m "feat: scale"<br />
                                    git push origin main
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary" style={{ textAlign: 'center', color: 'white' }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Transform Your Business?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#cbd5e1' }}>
                        Let's discuss your project and see how we can help you achieve your goals with technology.
                    </p>
                    <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>
                        Book a Free Consultation
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
