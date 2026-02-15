import React from 'react';
import { Database, Server, Smartphone, Globe, Cpu, Wrench } from 'lucide-react';
import '../styles/main.css';

const Technologies = () => {
    const categories = [
        {
            title: 'Frontend',
            icon: <Globe size={24} color="var(--accent)" />,
            items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3']
        },
        {
            title: 'Backend',
            icon: <Server size={24} color="var(--accent)" />,
            items: ['.NET Core', 'Python (Django/FastAPI)', 'Node.js (Express)', 'Go', 'PHP (Laravel)']
        },
        {
            title: 'Databases',
            icon: <Database size={24} color="var(--accent)" />,
            items: ['SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB']
        },
        {
            title: 'Cloud & DevOps',
            icon: <Cpu size={24} color="var(--accent)" />,
            items: ['AWS (EC2, Lambda, S3)', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
        },
        {
            title: 'Tools & CI/CD',
            icon: <Wrench size={24} color="var(--accent)" />,
            items: ['Git & GitHub', 'GitLab CI', 'Jenkins', 'Jira', 'Postman', 'Figma']
        },
        {
            title: 'AI & Data',
            icon: <Smartphone size={24} color="var(--accent)" />,
            items: ['OpenAI API', 'Hugging Face', 'PyTorch', 'TensorFlow', 'Pandas', 'Apache Spark']
        }
    ];

    return (
        <div style={{ paddingBottom: '4rem' }}>
            <section className="bg-primary text-center" style={{ padding: '6rem 0 4rem', color: 'white' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Our Technology Stack</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1' }}>
                        We leverage the latest and most reliable technologies to build scalable, high-performance solutions.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-2">
                        {categories.map((cat, index) => (
                            <div key={index} className="card" style={{ padding: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{ background: '#e0f2fe', padding: '0.75rem', borderRadius: '8px' }}>
                                        {cat.icon}
                                    </div>
                                    <h3 style={{ margin: 0 }}>{cat.title}</h3>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                    {cat.items.map((item, i) => (
                                        <span key={i} style={{
                                            background: '#f1f5f9',
                                            padding: '0.5rem 1rem',
                                            borderRadius: '20px',
                                            fontSize: '0.9rem',
                                            color: '#334155',
                                            fontWeight: 500
                                        }}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technologies;
