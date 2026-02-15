import React from 'react';
import { Layers, Server, Smartphone, Globe, Cloud, Bot, Code2 } from 'lucide-react';
import '../styles/main.css';

const Services = () => {
    return (
        <>
            <section className="bg-primary text-center" style={{ padding: '6rem 0 4rem', color: 'white' }}>
                <div className="container">
                    <h1 style={{ color: 'white' }}>Our Services</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: '#cbd5e1' }}>
                        Comprehensive technology solutions to drive your business forward. We cover the entire software development lifecycle.
                    </p>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="grid-2">

                        <div className="service-card" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--accent)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Code2 color="white" size={24} />
                            </div>
                            <h3>Custom Software Development</h3>
                            <p>We build robust, scalable software tailored to your specific business needs. Whether it's an internal tool, a CRM, or an ERP system, we ensure it fits your workflow perfectly.</p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--accent)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Globe color="white" size={24} />
                            </div>
                            <h3>Web Application Development</h3>
                            <p>Modern, responsive web applications built with React, Vue, or Angular. We focus on performance, SEO, and user experience to deliver world-class web products.</p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--accent)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Smartphone color="white" size={24} />
                            </div>
                            <h3>Mobile App Development</h3>
                            <p>Native and cross-platform mobile apps for iOS and Android. Using React Native or Flutter, we deliver seamless mobile experiences that users love.</p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--accent)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Cloud color="white" size={24} />
                            </div>
                            <h3>Cloud & DevOps Solutions</h3>
                            <p>Scale your infrastructure with confidence. We offer cloud migration, architecture design, and DevOps implementation on AWS, Azure, and Google Cloud.</p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--accent)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Server color="white" size={24} />
                            </div>
                            <h3>API Development & Integration</h3>
                            <p>Seamlessly connect your systems with robust RESTful and GraphQL APIs. We ensure secure data exchange and smooth integration with third-party services.</p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem', background: '#f8fafc', borderRadius: '12px' }}>
                            <div style={{ background: 'var(--accent)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                <Bot color="white" size={24} />
                            </div>
                            <h3>AI & Automation</h3>
                            <p>Leverage the power of Artificial Intelligence to automate repetitive tasks and gain insights from your data. We implement LLM integrations and custom ml models.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
