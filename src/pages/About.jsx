import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Users, Zap, CheckCircle, Code } from 'lucide-react';
import '../styles/main.css';

const About = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section className="bg-grid text-white text-center" style={{ padding: '8rem 0 6rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-accent font-mono mb-4 block">About Us</span>
                        <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            We Are System Architects.
                        </h1>
                        <p style={{ color: 'var(--blue-slate)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                            A collective of engineers, designers, and thinkers building the next generation of software.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container section">
                <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                            Engineering First,<br /><span className="text-gradient">Marketing Second.</span>
                        </h2>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--blue-slate)', lineHeight: 1.7 }}>
                            Bitryx was founded to bridge the gap between complex technology and business value. We believe that great software shouldn't just look good—it must be performant, secure, and scalable.
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                "Senior Engineering Team",
                                "Cloud-Native Architecture",
                                "Data-Driven Decisions"
                            ].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--white-slate)' }}>
                                    <CheckCircle size={20} className="text-accent" /> {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="card-glass"
                        style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}
                    >
                        <div style={{ position: 'absolute', top: '-20%', right: '-20%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(100,255,218,0.1) 0%, transparent 70%)', borderRadius: '50%' }}></div>
                        <Code size={48} className="text-accent" style={{ marginBottom: '1.5rem' }} />
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Our Philosophy</h3>
                        <p style={{ color: 'var(--blue-slate)', lineHeight: 1.6 }}>
                            "Code is a liability, not an asset." We write the minimum amount of code necessary to solve the problem robustly. This means fewer bugs, easier maintenance, and faster feature delivery.
                        </p>
                    </motion.div>
                </div>
            </div>

            <section className="section bg-light" style={{ background: 'var(--navy-light)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Core Values</h2>
                        <p style={{ color: 'var(--blue-slate)' }}>The principles that guide every commit.</p>
                    </div>

                    <div className="grid-3">
                        {[
                            { icon: <Target size={32} />, title: "Precision", desc: "We don't guess. We engineer solutions based on data and proven patterns." },
                            { icon: <Users size={32} />, title: "Collaboration", desc: "We work alongside your team, ensuring transparency at every step." },
                            { icon: <Zap size={32} />, title: "Velocity", desc: "Speed matters. We optimize our workflows to deliver value quickly." }
                        ].map((val, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                className="card-glass card-hover"
                                style={{ padding: '2.5rem' }}
                            >
                                <div style={{
                                    color: 'var(--electric-blue)',
                                    marginBottom: '1.5rem',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}>
                                    {val.icon}
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{val.title}</h3>
                                <p style={{ color: 'var(--blue-slate)', textAlign: 'center', fontSize: '0.95rem' }}>{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
