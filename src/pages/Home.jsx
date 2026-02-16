import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Settings, BarChart2, CheckCircle, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Home = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const clients = ["Microsoft", "Oracle", "SAP", "Salesforce", "Google Cloud", "Adobe"];

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* HERO: Clean, White, Professional */}
            <section
                ref={scrollRef}
                className="hero-bg"
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8rem 0 4rem'
                }}
            >
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'center' }}>
                        {/* Text Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span style={{
                                display: 'inline-block',
                                padding: '0.5rem 1rem',
                                background: '#eff6ff',
                                color: 'var(--accent)',
                                borderRadius: '50px',
                                fontSize: '0.875rem',
                                fontWeight: 600,
                                marginBottom: '1.5rem',
                                border: '1px solid #dbeafe'
                            }}>
                                Enterprise Software Solutions
                            </span>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                marginBottom: '1.5rem',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                color: 'var(--primary)'
                            }}>
                                Empowering Business <br />
                                <span className="text-gradient">Growth Through IT.</span>
                            </h1>

                            <p style={{
                                fontSize: '1.2rem',
                                color: 'var(--primary-light)',
                                maxWidth: '540px',
                                marginBottom: '2.5rem',
                                lineHeight: 1.6
                            }}>
                                We simplify complexity. Our expert team builds scalable software that makes your work easier, your processes faster, and your business stronger.
                            </p>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                                    Start Your Project
                                </Link>
                                <Link to="/services" className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>
                                    View Services
                                </Link>
                            </div>

                            <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ display: 'flex' }}>
                                    {[1, 2, 3].map(i => (
                                        <div key={i} style={{
                                            width: '40px', height: '40px', borderRadius: '50%', background: '#cbd5e1',
                                            marginLeft: i > 1 ? '-15px' : 0, border: '2px solid white'
                                        }}></div>
                                    ))}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--primary)' }}>Trusted Partner</p>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--primary-light)' }}>Helping businesses scale since 2024</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual: Abstract Growth/Dashboard - Clean & Corporate */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ position: 'relative' }}
                        >
                            {/* Main Card */}
                            <div className="card-clean" style={{
                                padding: '2.5rem',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                                position: 'relative',
                                background: 'white',
                                zIndex: 2
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>System Performance</h3>
                                        <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Real-time analytics</p>
                                    </div>
                                    <div style={{ background: '#ecfdf5', color: '#059669', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 600 }}>
                                        +24% Growth
                                    </div>
                                </div>

                                {/* Mock Chart Bars */}
                                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem', height: '150px' }}>
                                    {[40, 65, 45, 80, 55, 90].map((h, i) => (
                                        <div key={i} style={{
                                            flex: 1,
                                            height: `${h}%`,
                                            background: i === 5 ? 'var(--accent)' : '#e2e8f0',
                                            borderRadius: '4px'
                                        }}></div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Card 1: Ease of Use */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="card-clean"
                                style={{
                                    position: 'absolute',
                                    top: '-2rem',
                                    right: '-2rem',
                                    padding: '1rem 1.5rem',
                                    zIndex: 3,
                                    width: '200px'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ background: '#ecfdf5', padding: '0.5rem', borderRadius: '8px' }}>
                                        <CheckCircle size={20} color="#059669" />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>Efficiency</p>
                                        <p style={{ fontSize: '0.75rem', color: '#64748b' }}>Work simplified</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Card 2: Support */}
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="card-clean"
                                style={{
                                    position: 'absolute',
                                    bottom: '-2rem',
                                    left: '-2rem',
                                    padding: '1rem 1.5rem',
                                    zIndex: 3,
                                    width: '220px'
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{ background: '#eff6ff', padding: '0.5rem', borderRadius: '8px' }}>
                                        <Users size={20} color="var(--accent)" />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>Dedicated Support</p>
                                        <p style={{ fontSize: '0.75rem', color: '#64748b' }}>24/7 Expert Team</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* TRUSTED BY STRIP */}
            <div style={{ background: 'white', borderBottom: '1px solid var(--border)', padding: '2rem 0' }}>
                <div className="container">
                    <p className="text-center" style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>Supporting Industry Leaders</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap', alignItems: 'center', opacity: 0.5 }}>
                        {clients.map(c => (
                            <span key={c} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#94a3b8' }}>{c}</span>
                        ))}
                    </div>
                </div>
            </div>

            {/* SERVICES: Professional Grid */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What We Do</span>
                        <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '1rem' }}>Solutions That Drive Results</h2>
                        <p style={{ color: 'var(--primary-light)', maxWidth: '600px', margin: '0 auto' }}>
                            From custom development to cloud infrastructure, we handle the technology so you can focus on your business.
                        </p>
                    </div>

                    <div className="grid-3" style={{ gap: '2rem' }}>
                        {[
                            { icon: <TrendingUp size={32} />, title: "Business Growth", desc: "Digital tools designed to increase revenue and customer engagement." },
                            { icon: <Settings size={32} />, title: "Process Automation", desc: "Automate repetitive tasks to save time and reduce operational costs." },
                            { icon: <Zap size={32} />, title: "Custom Software", desc: "Tailor-made applications that fit your unique business workflows." },
                            { icon: <Shield size={32} />, title: "Secure Cloud", desc: "Enterprise-grade security and scalable infrastructure." },
                            { icon: <Users size={32} />, title: "IT Consulting", desc: "Strategic advice to help you make the right technology decisions." },
                            { icon: <BarChart2 size={32} />, title: "Data Analytics", desc: "Turn data into actionable insights for better decision making." }
                        ].map((s, i) => (
                            <motion.div
                                key={i}
                                className="card-clean card-hover"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                style={{ padding: '2.5rem' }}
                            >
                                <div style={{ background: 'var(--bg-light)', display: 'inline-flex', padding: '1rem', borderRadius: '12px', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                                    {s.icon}
                                </div>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{s.title}</h3>
                                <p style={{ color: '#64748b', fontSize: '1rem' }}>{s.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA: Clean & Direct */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to simplify your work?</h2>
                    <p style={{ color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem' }}>
                        Partner with a team that cares about your success. Let's build something great together.
                    </p>
                    <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--primary)', padding: '1rem 3rem', fontWeight: 600 }}>
                        Get a Free Consultation
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
