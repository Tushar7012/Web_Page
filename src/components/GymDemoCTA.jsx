import React from 'react';
import { tokens } from '../tokens';

const GymDemoCTA = () => {
    return (
        <section className="reveal" style={{ 
            padding: '10rem 0', 
            backgroundColor: tokens.colors.bg,
            textAlign: 'center'
        }}>
            <div className="container">
                <h2 style={{
                    fontFamily: tokens.fonts.display,
                    fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                    color: tokens.colors.textPrimary,
                    marginBottom: '1.5rem',
                    letterSpacing: '-1px'
                }}>
                    Want to see it for your gym?
                </h2>
                
                <p style={{
                    color: tokens.colors.textSecondary,
                    fontSize: '1.1rem',
                    maxWidth: '700px',
                    margin: '0 auto 3rem',
                    lineHeight: 1.6,
                    fontFamily: tokens.fonts.body
                }}>
                    I'll build a custom demo for your studio — free, no commitment. 
                    You'll see exactly how the AI works on your website before spending a rupee.
                </p>

                <a href="mailto:td220627@gmail.com?subject=Gym Demo Request" style={{
                    display: 'inline-block',
                    backgroundColor: tokens.colors.accent,
                    color: tokens.colors.bg,
                    padding: '1.2rem 2.5rem',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                }} className="btn-gym-demo">
                    Get a free gym demo →
                </a>
            </div>

            <style>{`
                .btn-gym-demo:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 15px 30px rgba(212, 168, 83, 0.2);
                }
            `}</style>
        </section>
    );
};

export default GymDemoCTA;
