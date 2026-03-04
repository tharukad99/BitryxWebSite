import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Globe, Mail, Users, Cookie, Clock, Scale, MoveRight, Link as LinkIcon, RefreshCw } from 'lucide-react';
import '../styles/main.css';

const PrivacyPolicy = () => {
    return (
        <div style={{ paddingTop: 'var(--header-height)' }}>
            <section style={{ padding: '8rem 0 4rem', background: 'var(--navy-dark)', color: 'var(--text-primary)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <span className="text-accent font-mono mb-4 block" style={{ color: 'var(--blue-accent)', display: 'block', marginBottom: '1rem', fontWeight: 600 }}>Legal</span>
                        <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--text-primary)' }}>
                            Privacy Policy
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                            Last updated: 4 March 2026
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-white)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Shield className="text-accent" size={28} /> Introduction
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                                Bitryx Solutions (“Bitryx”, “we”, “our”, or “us”) respects your privacy and is committed to protecting your personal data.
                                This Privacy Policy explains how we collect, use, store, and protect personal information when you visit our website,
                                interact with our services, or communicate with us.
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Bitryx Solutions operates in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Globe className="text-accent" size={28} /> Who We Are
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                                Bitryx Solutions is a software development and technology company providing digital products, cloud solutions, and custom software services.
                            </p>
                            <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                                <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>Website:</p>
                                <a href="https://bitryxsolutions.com" style={{ color: 'var(--blue-accent)', display: 'block', marginBottom: '1rem' }}>https://bitryxsolutions.com</a>
                                <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>Contact email:</p>
                                <a href="mailto:bitryxsolutions@gmail.com" style={{ color: 'var(--blue-accent)' }}>bitryxsolutions@gmail.com</a>
                            </div>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Eye className="text-accent" size={28} /> Personal Data We Collect
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                                We collect information in several ways depending on how you interact with our services.
                            </p>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Information you provide</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>You may provide personal data when you:</p>
                            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Submit a contact form</li>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Request a quotation</li>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Communicate with us by email</li>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Use our software platforms</li>
                            </ul>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Information collected automatically</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>When you visit our website we may automatically collect certain technical data such as:</p>
                            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc' }}>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>IP address</li>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Browser type</li>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Device information</li>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>Pages visited</li>
                                <li style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Website interaction data</li>
                            </ul>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <FileText className="text-accent" size={28} /> How We Use Personal Data
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                                Bitryx Solutions uses personal data for several purposes:
                            </p>
                            <ul style={{ marginBottom: '1rem', paddingLeft: '1.5rem', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Providing our software products and services</li>
                                <li style={{ marginBottom: '0.5rem' }}>Responding to enquiries and support requests</li>
                                <li style={{ marginBottom: '0.5rem' }}>Managing customer relationships</li>
                                <li style={{ marginBottom: '0.5rem' }}>Improving website functionality and user experience</li>
                                <li style={{ marginBottom: '0.5rem' }}>Monitoring system security and preventing fraud</li>
                                <li style={{ marginBottom: '1rem' }}>Communicating service updates or important information</li>
                            </ul>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Where required by law, we process personal data based on lawful bases such as consent, contractual necessity, or legitimate business interests.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Users className="text-accent" size={28} /> How We Share Personal Data
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                                We may share personal data with trusted service providers who support our business operations, including:
                            </p>
                            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Cloud hosting providers</li>
                                <li style={{ marginBottom: '0.5rem' }}>Infrastructure and platform services</li>
                                <li style={{ marginBottom: '0.5rem' }}>Payment processing providers</li>
                                <li style={{ marginBottom: '0.5rem' }}>Analytics providers</li>
                            </ul>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                These providers process data only on our behalf and must follow appropriate data protection safeguards. <strong>We do not sell personal data to third parties.</strong>
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Cookie className="text-accent" size={28} /> Cookies and Similar Technologies
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                                Our website may use cookies and similar technologies to:
                            </p>
                            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Remember user preferences</li>
                                <li style={{ marginBottom: '0.5rem' }}>Analyse website traffic</li>
                                <li style={{ marginBottom: '0.5rem' }}>Improve website functionality</li>
                            </ul>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Cookies are small text files stored on your device that allow websites to recognise returning users. You can manage cookie preferences through your browser settings.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Lock className="text-accent" size={28} /> Data Security
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                                Bitryx Solutions takes appropriate technical and organisational measures to protect personal data, including:
                            </p>
                            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Secure cloud hosting environments</li>
                                <li style={{ marginBottom: '0.5rem' }}>Encryption and secure connections</li>
                                <li style={{ marginBottom: '0.5rem' }}>Restricted access to sensitive information</li>
                                <li style={{ marginBottom: '1rem' }}>Regular system monitoring</li>
                            </ul>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                These safeguards help protect data from unauthorised access, loss, or misuse.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Clock className="text-accent" size={28} /> Data Retention
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                                We retain personal data only for as long as necessary to:
                            </p>
                            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Provide services to our clients</li>
                                <li style={{ marginBottom: '0.5rem' }}>Fulfil legal obligations</li>
                                <li style={{ marginBottom: '0.5rem' }}>Resolve disputes</li>
                                <li style={{ marginBottom: '0.5rem' }}>Enforce contractual agreements</li>
                            </ul>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                When personal data is no longer required, it will be securely deleted or anonymised.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Scale className="text-accent" size={28} /> Your Data Protection Rights
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.8' }}>
                                Under UK GDPR, individuals have several rights regarding their personal data, including:
                            </p>
                            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                <li style={{ marginBottom: '0.5rem' }}>Right to access personal data</li>
                                <li style={{ marginBottom: '0.5rem' }}>Right to correct inaccurate data</li>
                                <li style={{ marginBottom: '0.5rem' }}>Right to request deletion of data</li>
                                <li style={{ marginBottom: '0.5rem' }}>Right to restrict processing</li>
                                <li style={{ marginBottom: '0.5rem' }}>Right to object to processing</li>
                                <li style={{ marginBottom: '1rem' }}>Right to data portability</li>
                            </ul>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                If you wish to exercise any of these rights, you can contact us using the information below.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <MoveRight className="text-accent" size={28} /> International Data Transfers
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Some of our technology providers may operate outside the United Kingdom. When personal data is transferred internationally, we ensure appropriate safeguards are in place to protect the data.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <LinkIcon className="text-accent" size={28} /> Third-Party Links
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                Our website may contain links to external websites or services. Bitryx Solutions is not responsible for the privacy practices of those third-party websites.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <RefreshCw className="text-accent" size={28} /> Changes to This Policy
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                We may update this Privacy Policy periodically to reflect changes in our services, legal obligations, or data protection practices. The updated version will always be available on our website.
                            </p>
                        </div>

                        <div style={{ marginBottom: '3rem', padding: '2rem', background: 'rgba(56, 189, 248, 0.05)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--blue-accent)' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Mail className="text-accent" size={24} /> Contact Us
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                If you have questions regarding this Privacy Policy or how your personal data is handled, you may contact us at:
                                <br />
                                <strong style={{ color: 'var(--text-primary)' }}>Email:</strong> <a href="mailto:bitryxsolutions@gmail.com" style={{ color: 'var(--blue-accent)' }}>bitryxsolutions@gmail.com</a>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
