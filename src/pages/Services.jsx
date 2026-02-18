import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code, Terminal, Layers, RefreshCw, Cloud, Server, Database, TrendingUp, ShieldCheck, ArrowRight, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

// Data from user's spreadsheet
const servicesData = [
    {
        category: "Software Development Services / Custom",
        desc: "We build robust applications tailored to your business needs.",
        items: [
            { id: "01", title: "Web Applications", desc: "Responsive, scalable web platforms built with modern frameworks (React, Vue, Angular).", icon: <Code /> },
            { id: "02", title: "Desktop or Internal Tools", desc: "Streamline operations with custom dashboards and management software.", icon: <Terminal /> },
            { id: "03", title: "APIs and Backend Systems", desc: "Secure, high-performance server-side logic and database integration.", icon: <Server /> }
        ]
    },
    {
        category: "Software Consulting & Technical Advisory",
        desc: "Expert guidance to help you make the right technology decisions.",
        items: [
            { id: "05", title: "Decide What to Build", desc: "Product discovery and MVP definition to maximize ROI.", icon: <TrendingUp /> },
            { id: "06", title: "Architecture Planning", desc: "Designing scalable, maintainable system blueprints.", icon: <Layers /> },
            { id: "07", title: "Estimate Cost and Timelines", desc: "Accurate project scoping and resource planning.", icon: <Database /> }
        ]
    },
    {
        category: "System Integration Services",
        desc: "Connecting your disparate systems for seamless data flow.",
        items: [
            { id: "08", title: "Sync Application", desc: "Real-time data synchronization across platforms.", icon: <RefreshCw /> },
            { id: "09", title: "Automate Data Flow", desc: "Eliminate manual data entry with automated pipelines.", icon: <Settings /> }
        ]
    },
    {
        category: "Software Maintenance & Support",
        desc: "Ensuring your software remains secure, fast, and bug-free.",
        items: [
            { id: "10", title: "Bug Fixes", desc: "Rapid resolution of critical issues.", icon: <ShieldCheck /> },
            { id: "11", title: "Updates", desc: "Keeping dependencies and security patches up to date.", icon: <RefreshCw /> },
            { id: "12", title: "Performance Improvements", desc: "Optimizing load times and resource usage.", icon: <TrendingUp /> },
            { id: "13", title: "Small Feature Changes", desc: "Iterative enhancements based on user feedback.", icon: <Code /> }
        ]
    },
    {
        category: "Cloud & Infrastructure Services",
        desc: "Reliable hosting and scaling solutions.",
        items: [
            { id: "14", title: "Cloud Hosting Setup / Azure", desc: "Professional deployment on Microsoft Azure and other providers.", icon: <Cloud /> },
            { id: "16", title: "Monitoring", desc: "24/7 system health checks and alert configuration.", icon: <Server /> },
            { id: "17", title: "Scaling Systems", desc: "Auto-scaling strategies to handle traffic spikes.", icon: <Layers /> }
        ]
    }
];

const Services = () => {
    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div style={{ paddingTop: 'var(--header-height)', overflowX: 'hidden' }}>

            {/* Header */}
            <section style={{ padding: '6rem 0 4rem', background: 'var(--navy-dark)', color: 'var(--text-primary)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <span style={{
                            color: 'var(--blue-accent)',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            display: 'block',
                            marginBottom: '1rem'
                        }}>
                            Our Expertise
                        </span>
                        <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
                            Services & Solutions
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem', lineHeight: 1.6 }}>
                            From initial concept to final deployment and ongoing support, we handle every aspect of your software journey.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List */}
            <div className="container section">
                {servicesData.map((category, idx) => (
                    <motion.div
                        key={idx}
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        style={{ marginBottom: '6rem' }}
                    >
                        <div style={{ marginBottom: '2.5rem', borderLeft: '4px solid var(--blue-accent)', paddingLeft: '1.5rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{category.category}</h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{category.desc}</p>
                        </div>

                        <div className="grid-3" style={{ gap: '2rem' }}>
                            {category.items.map((item, itemIdx) => (
                                <motion.div
                                    key={itemIdx}
                                    variants={itemVariants}
                                    className="card-service"
                                    style={{
                                        padding: '2.5rem',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        minHeight: '250px'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                        <div className="icon-box" style={{ marginBottom: 0 }}>
                                            {item.icon}
                                        </div>
                                        <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--border)', lineHeight: 1 }}>{item.id}</span>
                                    </div>

                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <section className="section text-center" style={{ background: 'var(--bg-light)', color: 'white', borderTop: '1px solid var(--border)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem', color: 'white' }}>Have a specific requirement?</h2>
                        <p style={{ marginBottom: '2.5rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
                            We specialize in custom solutions. If you don't see exactly what you need, let's talk.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', borderRadius: '50px' }}>
                            Schedule a Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Services;

