import React from 'react';
import '../styles/main.css';

const About = () => {
    return (
        <>
            <section className="bg-primary text-center" style={{ padding: '6rem 0 4rem', color: 'white' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>About Bitryx</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1' }}>
                        Passionate about technology. Driven by innovation. Dedicated to your success.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#475569' }}>
                                Founded in London, Bitryx started with a simple mission: to bridge the gap between complex technology and business needs. We recognized that while technology was advancing rapidly, many businesses struggled to implement it effectively.
                            </p>
                            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#475569' }}>
                                Today, we are a team of senior engineers, designers, and strategists working with clients across the globe. From early-stage startups to established enterprises, we help our partners navigate the digital landscape with confidence.
                            </p>
                        </div>
                        <div style={{ background: '#f1f5f9', minHeight: '400px', borderRadius: '1rem', padding: '2rem' }}>
                            <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Our Mission</h3>
                                <p>To empower businesses with innovative, scalable, and user-centric software solutions that drive real growth.</p>
                            </div>
                            <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', marginTop: '2rem' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Our Vision</h3>
                                <p>To be the most trusted technology partner for forward-thinking companies worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-light section-padding" style={{ background: '#f8fafc' }}>
                <div className="container text-center">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Core Values</h2>
                    <div className="grid-3">
                        <div className="card" style={{ textAlign: 'left' }}>
                            <h3>Innovation First</h3>
                            <p>We constantly explore new technologies to provide the best solutions.</p>
                        </div>
                        <div className="card" style={{ textAlign: 'left' }}>
                            <h3>Transparency</h3>
                            <p>We believe in open communication and honest collaboration.</p>
                        </div>
                        <div className="card" style={{ textAlign: 'left' }}>
                            <h3>Quality Obsession</h3>
                            <p>We don't cut corners. We build software that lasts.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
