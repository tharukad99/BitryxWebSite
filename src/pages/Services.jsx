import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Code, Terminal, Layers, RefreshCw, Cloud, Server, Database, TrendingUp, ShieldCheck, ArrowRight, Settings, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/main.css';

// Data from user's spreadsheet
const servicesData = [
    {
        category: "Software Development Services / Custom",
        desc: "We build robust applications tailored to your business needs.",
        items: [
            {
                id: "01",
                title: "Web Applications",
                desc: "Responsive, scalable web platforms built with modern frameworks.",
                details: "From enterprise portals to consumer-facing platforms, we build web apps that are fast, secure, and user-friendly. Our tech stack includes React, Next.js, and high-performance backend systems.",
                benefits: ["Scalable Architecture", "SEO Optimized", "Responsive Design"],
                icon: <Code />
            },
            {
                id: "02",
                title: "Desktop or Internal Tools",
                desc: "Streamline operations with custom dashboards and management software.",
                details: "Custom-built internal tools help your team work more efficiently. We create dashboards, automation scripts, and management systems that integrate perfectly with your existing workflow.",
                benefits: ["Improved Efficiency", "Cross-platform support", "Secure Internal Data"],
                icon: <Terminal />
            },
            {
                id: "03",
                title: "APIs and Backend Systems",
                desc: "Secure, high-performance server-side logic and database integration.",
                details: "We design and implement robust APIs (REST/GraphQL) that power your mobile and web applications, ensuring seamless data flow and security.",
                benefits: ["High Availability", "OAuth Security", "Fast Response Times"],
                icon: <Server />
            }
        ]
    },
    {
        category: "Software Consulting & Technical Advisory",
        desc: "Expert guidance to help you make the right technology decisions.",
        items: [
            {
                id: "05",
                title: "Decide What to Build",
                desc: "Product discovery and MVP definition to maximize ROI.",
                details: "Not sure where to start? We help you define your Minimum Viable Product (MVP), prioritize features, and create a roadmap that gets you to market faster.",
                benefits: ["Cost Reduction", "Market Validation", "Clear Milestones"],
                icon: <TrendingUp />
            },
            {
                id: "06",
                title: "Architecture Planning",
                desc: "Designing scalable, maintainable system blueprints.",
                details: "We design system architectures that can grow with your business. We focus on maintainability, modularity, and choosing the right tech stack for long-term success.",
                benefits: ["Zero Tech Debt", "Future-proof Tech", "Optimized Costs"],
                icon: <Layers />
            },
            {
                id: "07",
                title: "Estimate Cost and Timelines",
                desc: "Accurate project scoping and resource planning.",
                details: "Get realistic expectations for your project. We provide detailed breakdowns of costs, resources, and timelines based on your specific requirements.",
                benefits: ["Transparent Pricing", "Reliable Deadlines", "Risk Assessment"],
                icon: <Database />
            }
        ]
    },
    {
        category: "System Integration Services",
        desc: "Connecting your disparate systems for seamless data flow.",
        items: [
            {
                id: "08",
                title: "Sync Application",
                desc: "Real-time data synchronization across platforms.",
                details: "Bridge the gap between your tools. We create custom sync engines that ensure your data is consistent across CRMs, ERPs, and your primary applications.",
                benefits: ["Data Consistency", "Real-time Updates", "Error Reduction"],
                icon: <RefreshCw />
            },
            {
                id: "09",
                title: "Automate Data Flow",
                desc: "Eliminate manual data entry with automated pipelines.",
                details: "Save hundreds of hours by automating repetitive tasks. We build pipelines that move data where it needs to go without human intervention.",
                benefits: ["Time Savings", "Reduced Human Error", "Better Insights"],
                icon: <Settings />
            }
        ]
    },
    {
        category: "Software Maintenance & Support",
        desc: "Ensuring your software remains secure, fast, and bug-free.",
        items: [
            {
                id: "10",
                title: "Bug Fixes",
                desc: "Rapid resolution of critical issues.",
                details: "We provide dedicated support to find and fix bugs before they impact your users. Our quick-response team ensures your critical services stay online.",
                benefits: ["Rapid Response", "Root Cause Analysis", "Stable Systems"],
                icon: <ShieldCheck />
            },
            {
                id: "11",
                title: "Updates",
                desc: "Keeping dependencies and security patches up to date.",
                details: "Stay secure and up to date. We manage library updates, security patches, and version migrations to keep your software running on modern tech.",
                benefits: ["Ironclad Security", "Modern Compliance", "Asset Longevity"],
                icon: <RefreshCw />
            },
            {
                id: "12",
                title: "Performance Improvements",
                desc: "Optimizing load times and resource usage.",
                details: "We audit your existing code and infrastructure to find bottlenecks. We optimize queries, caching strategies, and frontend performance.",
                benefits: ["Faster UX", "Lower Hosting Costs", "Better Ratings"],
                icon: <TrendingUp />
            },
            {
                id: "13",
                title: "Small Feature Changes",
                desc: "Iterative enhancements based on user feedback.",
                details: "Your software should evolve with your business. We help you add small features and UI improvements continuously without breaking existing logic.",
                benefits: ["Agile Development", "User-led Growth", "Low Friction"],
                icon: <Code />
            }
        ]
    },
    {
        category: "Cloud & Infrastructure Services",
        desc: "Reliable hosting and scaling solutions.",
        items: [
            {
                id: "14",
                title: "Cloud Hosting Setup / Azure",
                desc: "Professional deployment on Microsoft Azure and other providers.",
                details: "We specialize in Microsoft Azure but work with all major cloud providers. We handle the entire setup, from resource grouping to network configuration.",
                benefits: ["Enterprise Grade", "Scalable Setup", "Secure Config"],
                icon: <Cloud />
            },
            {
                id: "16",
                title: "Monitoring",
                desc: "24/7 system health checks and alert configuration.",
                details: "Know about issues before your customers do. We set up comprehensive monitoring dashboards and custom alerts for your entire stack.",
                benefits: ["Zero Downtime", "Insight Dashboards", "Proactive Alerts"],
                icon: <Server />
            },
            {
                id: "17",
                title: "Scaling Systems",
                desc: "Auto-scaling strategies to handle traffic spikes.",
                details: "Ensure your application can handle 10x growth. We implement auto-scaling and load balancing to keep your app fast during peak loads.",
                benefits: ["Handles Traffic Spikes", "Cost Efficiency", "High Resiliency"],
                icon: <Layers />
            }
        ]
    }
];

const Services = () => {
    const [selectedItem, setSelectedItem] = useState(null);

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
                                    onClick={() => setSelectedItem(item)}
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
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{item.desc}</p>

                                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--blue-accent)', fontSize: '0.9rem', fontWeight: 600 }}>
                                        Learn More <ArrowRight size={16} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal for Service Details */}
            <AnimatePresence>
                {selectedItem && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedItem(null)}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={() => setSelectedItem(null)}>
                                <X size={20} />
                            </button>

                            <div className="modal-header">
                                <div className="icon-box" style={{ background: 'rgba(56, 189, 248, 0.1)', color: 'var(--blue-accent)', marginBottom: '1.5rem' }}>
                                    {selectedItem.icon}
                                </div>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{selectedItem.title}</h2>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                                    {selectedItem.details}
                                </p>
                            </div>

                            <div className="modal-body">
                                <div style={{ marginTop: '2rem' }}>
                                    <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Key Benefits</h4>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                                        {selectedItem.benefits.map((benefit, bIdx) => (
                                            <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                                <CheckCircle2 size={18} color="var(--blue-accent)" />
                                                <span>{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ borderTop: '1px solid var(--border)', marginTop: '2.5rem', paddingTop: '2.5rem' }}>
                                    <Link
                                        to="/contact"
                                        className="btn btn-primary"
                                        style={{ width: '100%' }}
                                        onClick={() => setSelectedItem(null)}
                                    >
                                        Inquire About This Service
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

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
