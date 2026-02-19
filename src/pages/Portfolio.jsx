import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Portfolio = () => {
    const projects = [
        {
            title: "Predictive AI Analytics Platform",
            category: "Artificial Intelligence",
            problem: "Client needed to predict market trends and customer behavior from massive datasets.",
            solution: "Built a machine learning model integrated into a user-friendly interface.",
            outcome: "Improved decision-making speed by 40% and increased forecast accuracy.",
            tech: ["Python", "TensorFlow", "React", "AWS"]
        },
        {
            title: "Enterprise SaaS Admin Dashboard",
            category: "Web Application",
            problem: "Existing tools lacked real-time visibility into global operations.",
            solution: "Developed a comprehensive dashboard with live data visualization and reporting.",
            outcome: "Streamlined operations and reduced reporting time by 60%.",
            tech: ["React", "D3.js", "Node.js", "GraphQL"]
        },
        {
            title: "Global E-Commerce Platform",
            category: "E-Commerce System",
            problem: "Legacy platform couldn't handle high traffic and lacked mobile responsiveness.",
            solution: "Architected a headless commerce solution with a modern frontend.",
            outcome: "Achieved 99.9% uptime during peak sales and boosted mobile conversion by 35%.",
            tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"]
        },
        {
            title: "Secure FinTech Banking Portal",
            category: "Financial Technology",
            problem: "Need for a highly secure, compliant platform for processing international transactions.",
            solution: "Implemented a bank-grade security portal with multi-factor authentication.",
            outcome: "Processed over $10M in transactions securely in the first quarter.",
            tech: ["Java", "Spring Boot", "Angular", "SQL"]
        }
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section style={{ padding: '8rem 0 6rem', background: 'var(--navy-dark)', color: 'var(--text-primary)' }}>
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                            <span className="text-accent font-mono" style={{ display: 'block', fontSize: '1rem', fontWeight: 400, marginBottom: '0.5rem', color: 'var(--blue-accent)' }}>Our Work</span>
                            Selected Projects
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
                            We solve complex problems with clean, maintainable code.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container section">
                <div className="grid-2" style={{ gap: '3rem' }}>
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="card-service"
                            style={{
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '400px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <motion.div
                                style={{
                                    position: 'absolute', top: 0, right: 0, padding: '1rem',
                                    opacity: 0.1, transform: 'scale(1.5)', pointerEvents: 'none',
                                    transformOrigin: 'center center'
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            >
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="40" stroke="var(--blue-accent)" strokeWidth="1" />
                                    <path d="M50 10 L50 90 M10 50 L90 50" stroke="var(--blue-accent)" strokeWidth="1" />
                                    <circle cx="50" cy="50" r="20" stroke="var(--blue-accent)" strokeWidth="1" strokeDasharray="4 4" />
                                </svg>
                            </motion.div>

                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--blue-accent)',
                                fontSize: '0.85rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em'
                            }}>
                                {project.category}
                            </span>

                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{project.title}</h3>

                            <div style={{ flex: 1, marginBottom: '2rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong style={{ color: 'var(--text-primary)', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Challenge:</strong>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{project.problem}</p>
                                </div>
                                <div>
                                    <strong style={{ color: 'var(--blue-accent)', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Result:</strong>
                                    <p style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{project.outcome}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{
                                        color: 'var(--text-secondary)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.8rem',
                                        marginRight: '0.5rem'
                                    }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <section className="section" style={{ textAlign: 'center', background: 'var(--bg-light)', borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Interested in working with us?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        We are currently accepting new projects for Q3.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Get in Touch <ArrowUpRight size={18} style={{ marginLeft: '0.5rem' }} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;

