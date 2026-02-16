import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Code, Database, Layout, ShieldCheck, Zap, Globe, Cpu, Server, Layers } from 'lucide-react';
import '../styles/main.css';

const Home = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Infinite Marquee Clients
    const clients = ["Acme", "Stripe", "Uber", "Vercel", "Linear", "Supabase", "Retool", "Figma", "Airbnb", "Spotify"];

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.6 } }
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* HEROL: Deep Tech Grid Atmosphere */}
            <section
                ref={scrollRef}
                className="bg-grid"
                style={{
                    position: 'relative',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'radial-gradient(ellipse at center, #0B192E 0%, #020c1b 100%)',
                    overflow: 'hidden'
                }}
            >
                {/* Floating Elements */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: '20%',
                        right: '15%',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(100,255,218,0.15) 0%, transparent 60%)',
                        filter: 'blur(80px)',
                        zIndex: 0
                    }}
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                />

                <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '4rem' }}>
                    <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>

                        {/* Left: Text Content */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.1 } }
                            }}
                        >
                            <motion.span variants={variants} style={{
                                color: 'var(--electric-blue)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1rem',
                                display: 'block',
                                marginBottom: '1.5rem'
                            }}>
                                Hi, we are Bitryx.
                            </motion.span>

                            <motion.h1 variants={variants} style={{
                                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                                marginBottom: '1.5rem',
                                fontWeight: 800,
                                lineHeight: 1.1,
                                letterSpacing: '-0.03em'
                            }}>
                                Building the <span className="text-gradient">digital future</span> for ambitious brands.
                            </motion.h1>

                            <motion.p variants={variants} style={{
                                fontSize: '1.15rem',
                                color: 'var(--blue-slate)',
                                maxWidth: '540px',
                                marginBottom: '2.5rem',
                                lineHeight: 1.7
                            }}>
                                We are a software engineering studio specializing in high-performance web applications, cloud architecture, and scalable digital products.
                            </motion.p>

                            <motion.div variants={variants} style={{ display: 'flex', gap: '1.5rem' }}>
                                <Link to="/contact" className="btn btn-primary">
                                    Start a Project
                                </Link>
                                <Link to="/portfolio" className="btn btn-secondary">
                                    View Our Work
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Right: Abstract 3D Representation */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
                        >
                            <div className="card-glass" style={{
                                padding: '2rem',
                                width: '100%',
                                maxWidth: '500px',
                                position: 'relative',
                                transform: 'rotateY(-5deg) rotateX(5deg)',
                                transformStyle: 'preserve-3d',
                                perspective: '1000px'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                                        <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                                    </div>
                                    <span className="font-mono" style={{ fontSize: '0.8rem', color: '#8892b0' }}>server.ts</span>
                                </div>
                                <code className="font-mono" style={{ fontSize: '0.85rem', lineHeight: 1.7, color: '#a8b2d1' }}>
                                    <span style={{ color: '#c792ea' }}>const</span> system = <span style={{ color: '#82aaff' }}>require</span>(<span style={{ color: '#c3e88d' }}>'bitryx-core'</span>);<br /><br />
                                    <span style={{ color: '#c792ea' }}>async function</span> <span style={{ color: '#82aaff' }}>deploy</span>() {'{'}<br />
                                    &nbsp;&nbsp;<span style={{ color: '#f07178' }}>await</span> system.<span style={{ color: '#82aaff' }}>optimize</span>({'{'}<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;performance: <span style={{ color: '#f78c6c' }}>100</span>,<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;security: <span style={{ color: '#c3e88d' }}>'enterprise'</span><br />
                                    &nbsp;&nbsp;{'}'});<br />
                                    &nbsp;&nbsp;<span style={{ color: '#546e7a' }}>// Ready for scale</span><br />
                                    &nbsp;&nbsp;<span style={{ color: '#82aaff' }}>return</span> <span style={{ color: '#c3e88d' }}>true</span>;<br />
                                    {'}'}
                                </code>
                                {/* Glowing orb behind code */}
                                <div style={{
                                    position: 'absolute', bottom: '-20%', right: '-20%',
                                    width: '200px', height: '200px', background: 'radial-gradient(circle, var(--electric-blue) 0%, transparent 70%)',
                                    opacity: 0.15, borderRadius: '50%', filter: 'blur(40px)', pointerEvents: 'none'
                                }}></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MARQUEE: Social Proof */}
            <div style={{ background: '#0a192f', padding: '2rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container marquee-container">
                    <div className="marquee-track">
                        {[...clients, ...clients].map((client, i) => (
                            <span key={i} style={{
                                display: 'inline-block',
                                margin: '0 3rem',
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                color: '#8892b0',
                                opacity: 0.5,
                                fontFamily: 'var(--font-heading)'
                            }}>
                                {client}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* BENTO GRID: Features */}
            <section className="section bg-navy">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={variants}
                        className="text-center"
                        style={{ marginBottom: '4rem' }}
                    >
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Engineered for Growth</h2>
                        <p style={{ color: 'var(--blue-slate)', maxWidth: '600px', margin: '0 auto' }}>
                            We don't just write code. We architect solutions that scale with your business demands.
                        </p>
                    </motion.div>

                    <div className="bento-grid" style={{
                        display: 'grid',
                        gap: '1.5rem',
                        gridTemplateColumns: 'repeat(1, 1fr)', // Mobile first
                        // Desktop override handled by CSS @media but inline style might conflict if not careful.
                        // Relying on CSS class 'bento-grid' for actual layout structure.
                    }}>
                        {/* Large Card 1 */}
                        <motion.div
                            className="card-glass card-hover"
                            style={{ padding: '2.5rem', gridColumn: 'span 2' }} // Span 2 on desktop
                            whileHover={{ y: -5 }}
                        >
                            <div style={{ color: 'var(--electric-blue)', marginBottom: '1.5rem' }}><Globe size={32} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Global Scalability</h3>
                            <p style={{ color: 'var(--blue-slate)' }}>
                                Our applications are built to handle traffic from anywhere. We use Edge computing and CDN strategies to ensure low latency and high availability across the globe.
                            </p>
                        </motion.div>

                        {/* Standard Card 2 */}
                        <motion.div className="card-glass card-hover" style={{ padding: '2.5rem' }} whileHover={{ y: -5 }}>
                            <div style={{ color: 'var(--electric-blue)', marginBottom: '1.5rem' }}><ShieldCheck size={32} /></div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Enterprise Security</h3>
                            <p style={{ color: 'var(--blue-slate)', fontSize: '0.95rem' }}>Bank-grade encryption and compliance standards built-in from day one.</p>
                        </motion.div>

                        {/* Standard Card 3 */}
                        <motion.div className="card-glass card-hover" style={{ padding: '2.5rem' }} whileHover={{ y: -5 }}>
                            <div style={{ color: 'var(--electric-blue)', marginBottom: '1.5rem' }}><Zap size={32} /></div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>High Performance</h3>
                            <p style={{ color: 'var(--blue-slate)', fontSize: '0.95rem' }}>Core Web Vitals optimized. Fast loads = higher conversion.</p>
                        </motion.div>

                        {/* Large Card 4 */}
                        <motion.div
                            className="card-glass card-hover"
                            style={{ padding: '2.5rem', gridColumn: 'span 2' }}
                            whileHover={{ y: -5 }}
                        >
                            <div style={{ color: 'var(--electric-blue)', marginBottom: '1.5rem' }}><Cpu size={32} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>AI Integration Ready</h3>
                            <p style={{ color: 'var(--blue-slate)' }}>
                                Prepare for the future. Our architectures are designed to easily integrate with LLMs, vector databases, and machine learning pipelines when you're ready.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* PROCESS TIMELINE: Vertical Step */}
            <section className="section" style={{ background: '#0a192f' }}>
                <div className="container">
                    <div className="grid-2" style={{ alignItems: 'flex-start' }}>
                        <div style={{ position: 'sticky', top: '120px' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>How We Work</h2>
                            <p style={{ color: 'var(--blue-slate)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                                A transparent, agile process designed to minimize risk and maximize value delivery.
                            </p>
                            <Link to="/services" className="btn btn-secondary">Explore Services <ArrowRight size={18} style={{ marginLeft: '10px' }} /></Link>
                        </div>

                        <div style={{ position: 'relative', borderLeft: '2px solid rgba(255,255,255,0.05)', paddingLeft: '3rem' }}>
                            {[
                                { step: "01", title: "Discovery & Strategy", desc: "We deep dive into your business goals, user needs, and technical constraints to build a solid roadmap." },
                                { step: "02", title: "Design & Prototype", desc: "Creating intuitive UI/UX and validating concepts before writing a single line of code." },
                                { step: "03", title: "Agile Development", desc: "Iterative sprints with regular demos. You see progress every two weeks, not just at the end." },
                                { step: "04", title: "Launch & Scale", desc: "Seamless deployment with automated testing. We monitor performance and help you grow." }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                                    style={{ marginBottom: '4rem', position: 'relative' }}
                                >
                                    <span style={{
                                        position: 'absolute', left: '-3.65rem', top: '0',
                                        width: '20px', height: '20px', background: 'var(--electric-blue)',
                                        borderRadius: '50%', border: '4px solid #0a192f'
                                    }}></span>
                                    <span className="font-mono text-accent" style={{ fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>{item.step}</span>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                                    <p style={{ color: 'var(--blue-slate)' }}>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="section text-center" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-accent font-mono" style={{ marginBottom: '1.5rem' }}>What's Next?</p>
                        <h2 style={{ fontSize: '3rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>Ready to build something extraordinary?</h2>
                        <p style={{ color: 'var(--blue-slate)', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                            Whether you need a full product team or a technical consultation, our inbox is always open.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1rem' }}>
                            Schedule Consultation
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
