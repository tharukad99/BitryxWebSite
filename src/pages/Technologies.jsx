import { motion } from 'framer-motion';
import { Database, Layout, Server, Cloud } from 'lucide-react';
import '../styles/main.css';

const Technologies = () => {
    const techData = [
        {
            category: "Frontend",
            icon: <Layout size={32} />,
            items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"]
        },
        {
            category: "Backend",
            icon: <Server size={32} />,
            items: ["Node.js", ".NET Core", "Python", "REST APIs", "GraphQL"]
        },
        {
            category: "Data",
            icon: <Database size={32} />,
            items: ["SQL Server", "PostgreSQL", "MongoDB", "Redis"]
        },
        {
            category: "Cloud & DevOps",
            icon: <Cloud size={32} />,
            items: ["Azure", "AWS", "Docker", "Kubernetes", "CI/CD"]
        }
    ];

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section className="bg-navy text-white text-center" style={{ padding: '6rem 0 4rem', background: 'var(--navy)' }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ color: 'white', marginBottom: '1rem', fontSize: '3rem' }}
                    >
                        Technology Stack
                    </motion.h1>
                    <p style={{ color: 'var(--text-light)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        We choose the right tools for the job, favoring scalability and maintainability.
                    </p>
                </div>
            </section>

            <div className="container section">
                <div className="grid-2">
                    {techData.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="card"
                            style={{ padding: '2.5rem' }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ color: 'var(--electric-blue)', background: 'var(--bg-light)', padding: '0.75rem', borderRadius: '12px' }}>
                                    {tech.icon}
                                </div>
                                <h2 style={{ fontSize: '1.75rem', margin: 0 }}>{tech.category}</h2>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {tech.items.map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.05, backgroundColor: 'var(--electric-blue)', color: 'white' }}
                                        style={{
                                            padding: '0.6rem 1.25rem',
                                            background: 'var(--bg-light)',
                                            borderRadius: '50px',
                                            fontWeight: 600,
                                            color: 'var(--navy)',
                                            fontSize: '0.95rem',
                                            cursor: 'default',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Technologies;
