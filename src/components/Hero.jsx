import React from 'react';
import { tokens } from '../tokens';

const Hero = () => {
    return (
        <section className="reveal" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Gradient Detail */}
            <div style={{
                position: 'absolute',
                top: '20%',
                right: '10%',
                width: '600px',
                height: '600px',
                background: `radial-gradient(circle, ${tokens.colors.accent}1a 0%, transparent 70%)`,
                filter: 'blur(60px)',
                zIndex: -1
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: '800px' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        marginBottom: '1.5rem',
                        letterSpacing: '-2px',
                        color: tokens.colors.textPrimary
                    }}>
                        Your business deserves to be <span style={{ color: tokens.colors.accent }}>found.</span>
                    </h1>
                    
                    <p style={{
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: tokens.colors.textSecondary,
                        maxWidth: '600px',
                        marginBottom: '3rem',
                        lineHeight: 1.6
                    }}>
                        I build websites for hotels, cafes, and restaurants across India. 
                        Fast delivery. One-time payment. No tech headaches.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <a href="#work" style={{
                            backgroundColor: tokens.colors.accent,
                            color: tokens.colors.bg,
                            padding: '1.2rem 2.5rem',
                            borderRadius: '2px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease'
                        }} className="btn-hero-primary">
                            See My Work
                        </a>
                        
                        <a href="https://wa.me/916371261522" target="_blank" rel="noopener noreferrer" style={{
                            border: `1px solid ${tokens.colors.accent}`,
                            color: tokens.colors.accent,
                            padding: '1.2rem 2.5rem',
                            borderRadius: '2px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1rem',
                            transition: 'all 0.3s ease'
                        }} className="btn-hero-secondary">
                            WhatsApp Me
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
                .btn-hero-primary:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 30px rgba(212, 168, 83, 0.2);
                }
                .btn-hero-secondary:hover {
                    background: rgba(212, 168, 83, 0.05);
                    transform: translateY(-4px);
                }
                @media (max-width: 768px) {
                    h1 { letter-spacing: -1px; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
