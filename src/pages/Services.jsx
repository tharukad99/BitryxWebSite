import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Terminal, Layers, RefreshCw, Cloud, Server, Database, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

const servicesData = [
    {
        category: "Software Development",
        desc: "Custom solutions for unique business challenges.",
        items: [
            { title: "Web Applications", desc: "Responsive, scalable web apps built with React & modern frameworks.", icon: <Code /> },
            { title: "Internal Tools", desc: "Dashboards, CRM systems, and desktop applications for operations.", icon: <Terminal /> },
            { title: "Backend & APIs", desc: "Robust REST/GraphQL APIs and microservices architecture.", icon: <Server /> }
        ]
    },
    {
        category: "Consulting & Advisory",
        desc: "Strategic guidance to navigate technical decisions.",
        items: [
            { title: "Product Roadmap", desc: "Defining MVP features and long-term development strategy.", icon: <TrendingUp /> },
            { title: "Architecture Design", desc: "Scalable system design and technology selection.", icon: <Layers /> },
            { title: "Cost & Timeline", desc: "Accurate estimation and resource planning.", icon: <Database /> }
        ]
    },
    {
        category: "Cloud & Infrastructure",
        desc: "Secure, scalable hosting and deployment.",
        items: [
            { title: "Azure Cloud Setup", desc: "Hosting, storage, and serverless function configuration.", icon: <Cloud /> },
            { title: "DevOps & CI/CD", desc: "Automated testing and deployment pipelines.", icon: <RefreshCw /> },
            { title: "Scaling & Monitoring", desc: "Performance optimization and real-time system alerts.", icon: <ShieldCheck /> }
        ]
    }
];

const Services = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)', overflowX: 'hidden' }}>
            {/* Header */}
            <section className="bg-navy text-white text-center" style={{ padding: '8rem 0 6rem' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-accent font-mono mb-4 block">What We Do</span>
                        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                            Engineering Excellence
                        </h1>
                        <p style={{ color: 'var(--blue-slate)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
                            We build high-performance products that solve complex business challenges with precision and speed.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <div className="container section">
                {servicesData.map((category, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        style={{ marginBottom: '8rem' }}
                    >
                        <div style={{ marginBottom: '3rem', borderLeft: '2px solid var(--electric-blue)', paddingLeft: '1.5rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{category.category}</h2>
                            <p style={{ color: 'var(--blue-slate)', fontSize: '1.1rem' }}>{category.desc}</p>
                        </div>

                        <div className="grid-3" style={{ gap: '2rem' }}>
                            {category.items.map((item, itemIdx) => (
                                <motion.div
                                    key={itemIdx}
                                    className="card-glass card-hover"
                                    style={{
                                        padding: '2.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        minHeight: '280px'
                                    }}
                                    whileHover={{ y: -7 }}
                                >
                                    <div>
                                        <div style={{
                                            color: 'var(--electric-blue)',
                                            marginBottom: '1.5rem',
                                            width: '40px',
                                            height: '40px'
                                        }}>
                                            {item.icon}
                                        </div>
                                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--white-slate)' }}>{item.title}</h3>
                                        <p style={{ color: 'var(--blue-slate)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <section className="bg-navy section text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>Don't see exactly what you need?</h2>
                        <p style={{ marginBottom: '2.5rem', color: 'var(--blue-slate)', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            We specialize in custom software. If you have a unique challenge, we likely have the solution.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Let's Discuss Your Needs
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;
