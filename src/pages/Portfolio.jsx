import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const Portfolio = () => {
    const projects = [
        {
            title: "ERP Dashboard for Manufacturing",
            category: "Web Application",
            problem: "Legacy spreadsheet systems were prone to errors and couldn't scale.",
            solution: "A custom React dashboard with real-time inventory tracking and automated reporting.",
            outcome: "Reduced manual data entry by 70% and improved stock accuracy.",
            tech: ["React", "Node.js", "PostgreSQL", "Azure"]
        },
        {
            title: "AI-Powered Customer Support",
            category: "Internal Tool",
            problem: "Support team overwhelmed with repetitive queries.",
            solution: "Integrated an LLM-based chatbot within their existing CRM.",
            outcome: "Decreased first-response time by 50%.",
            tech: ["Python", "FastAPI", "OpenAI API", "Redis"]
        },
        {
            title: "E-Commerce Migration",
            category: "Cloud Migration",
            problem: "Existing on-prem server crashed during peak traffic.",
            solution: "Migrated to a serverless architecture on Azure.",
            outcome: "Zero downtime during Black Friday sales.",
            tech: ["Azure Functions", "Cosmos DB", "CDN"]
        }
    ];

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section className="bg-grid text-white text-center" style={{ padding: '8rem 0 6rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: 800 }}>
                            <span className="text-accent font-mono" style={{ display: 'block', fontSize: '1rem', fontWeight: 400, marginBottom: '0.5rem' }}>Our Work</span>
                            Selected Projects
                        </h1>
                        <p style={{ color: 'var(--blue-slate)', maxWidth: '600px', margin: '0 auto', fontSize: '1.15rem' }}>
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
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="card-glass card-hover"
                            style={{
                                padding: '3rem',
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: '400px',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute', top: 0, right: 0, padding: '1rem',
                                opacity: 0.2, transform: 'scale(1.5)', pointerEvents: 'none'
                            }}>
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="40" stroke="var(--electric-blue)" strokeWidth="2" />
                                    <path d="M50 10 L50 90 M10 50 L90 50" stroke="var(--electric-blue)" strokeWidth="2" />
                                </svg>
                            </div>

                            <span style={{
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--electric-blue)',
                                fontSize: '0.85rem',
                                marginBottom: '1rem',
                                letterSpacing: '0.05em'
                            }}>
                                {project.category}
                            </span>

                            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontWeight: 600, color: 'var(--white-slate)' }}>{project.title}</h3>

                            <div style={{ flex: 1, marginBottom: '2rem' }}>
                                <div style={{ marginBottom: '1rem' }}>
                                    <strong style={{ color: 'var(--white-slate)', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Challenge:</strong>
                                    <p style={{ color: 'var(--blue-slate)', fontSize: '0.95rem' }}>{project.problem}</p>
                                </div>
                                <div>
                                    <strong style={{ color: 'var(--electric-blue)', display: 'block', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Result:</strong>
                                    <p style={{ color: 'var(--white-slate)', fontSize: '0.95rem' }}>{project.outcome}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{
                                        color: 'var(--blue-slate)',
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

            <section className="section bg-light" style={{ textAlign: 'center', background: 'var(--navy-light)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Interested in working with us?</h2>
                    <p style={{ color: 'var(--blue-slate)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
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
