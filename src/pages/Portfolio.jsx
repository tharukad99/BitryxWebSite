import React from 'react';
import '../styles/main.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'FinTech Dashboard',
            category: 'Web Application',
            description: 'A comprehensive financial analytics dashboard for a leading London-based investment firm.',
            tags: ['React', 'Node.js', 'D3.js', 'MongoDB'],
            link: '#'
        },
        {
            title: 'HealthTrack Mobile App',
            category: 'Mobile App',
            description: 'Cross-platform mobile application for patient monitoring and telehealth consultations.',
            tags: ['React Native', 'Firebase', 'Twilio'],
            link: '#'
        },
        {
            title: 'E-Commerce Platform Revamp',
            category: 'Cloud Migration',
            description: 'Migrated a legacy e-commerce system to a scalable AWS microservices architecture.',
            tags: ['AWS', 'Docker', 'Kubernetes', 'Next.js'],
            link: '#'
        },
        {
            title: 'AI Customer Service Bot',
            category: 'AI & Automation',
            description: 'Integrated an intelligent chatbot using OpenAI API to handle 60% of customer inquiries automatically.',
            tags: ['Python', 'OpenAI', 'FastAPI'],
            link: '#'
        }
    ];

    return (
        <>
            <section className="bg-primary text-center" style={{ padding: '6rem 0 4rem', color: 'white' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Our Portfolio</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1' }}>
                        See how we've helped businesses transform their ideas into reality.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-2">
                        {projects.map((project, index) => (
                            <div key={index} className="card" style={{ padding: '0', overflow: 'hidden' }}>
                                <div style={{ height: '200px', background: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                    <h3 style={{ opacity: 0.5, fontSize: '3rem', fontWeight: 700 }}>{project.title.charAt(0)}</h3>
                                </div>
                                <div style={{ padding: '2rem' }}>
                                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--accent)', fontWeight: 600, letterSpacing: '0.05em' }}>
                                        {project.category}
                                    </span>
                                    <h3 style={{ margin: '0.5rem 0' }}>{project.title}</h3>
                                    <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>{project.description}</p>

                                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                        {project.tags.map((tag, i) => (
                                            <span key={i} style={{
                                                background: '#f1f5f9',
                                                padding: '0.25rem 0.75rem',
                                                borderRadius: '999px',
                                                fontSize: '0.8rem',
                                                color: '#475569'
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
