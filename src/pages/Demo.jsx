import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Monitor } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DEMOS = [
    { id: 'cakeynuts', name: 'Cakey Nuts', url: 'https://cakeynuts.com/' },
    { id: 'ecommerce', name: 'Kyouiku Lanka', url: 'https://kyouikulanka.com/' },
    { id: 'dashboard', name: 'Admin Dashboard', url: 'https://tharukad99.github.io/InvertoryManagementSystem.demo/' }
];

const Demo = () => {
    const [activeDemo, setActiveDemo] = useState(DEMOS[0]);

    return (
        <section className="section" style={{ minHeight: '100vh', paddingTop: 'max(var(--header-height), 6rem)' }}>
            <div className="container">
                <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: 500 }}>
                            <ArrowLeft size={20} />
                            Back to Home
                        </Link>
                    </motion.div>

                    {/* Demo Selector Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}
                    >
                        {DEMOS.map(demo => (
                            <button
                                key={demo.id}
                                onClick={() => setActiveDemo(demo)}
                                style={{
                                    padding: '0.5rem 1.2rem',
                                    borderRadius: '50px',
                                    border: activeDemo.id === demo.id ? '1px solid transparent' : '1px solid var(--border)',
                                    background: activeDemo.id === demo.id ? 'var(--blue-accent)' : 'var(--bg-card)',
                                    color: activeDemo.id === demo.id ? '#0f172a' : 'var(--text-primary)',
                                    cursor: 'pointer',
                                    fontWeight: 600,
                                    fontSize: '0.85rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    transition: 'all 0.2s ease',
                                    outline: 'none',
                                    boxShadow: activeDemo.id === demo.id ? '0 4px 12px rgba(56, 189, 248, 0.3)' : 'none'
                                }}
                            >
                                <Monitor size={16} />
                                {demo.name}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                        <h1 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>
                            Live <span style={{ color: 'var(--blue-accent)' }}>Demos</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Animated Iframe Container */}
                <div style={{ position: 'relative', width: '100%', height: '80vh' }}>
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeDemo.id}
                            initial={{ opacity: 0, scale: 0.98, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: -10 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                                background: 'white', /* Ensure the background is white while loading iframes */
                                border: '1px solid var(--border)'
                            }}
                        >
                            <iframe
                                src={activeDemo.url}
                                style={{ width: '100%', height: '100%', border: '0', background: 'transparent' }}
                                title={activeDemo.name}
                                allowFullScreen
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>

                <p style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    If a demo doesn't load, its server might not allow iframe embedding.
                </p>
            </div>
        </section>
    );
};

export default Demo;
