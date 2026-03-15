import React from 'react';
import { tokens } from '../tokens';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "You tell me about your business",
            body: "Share your photos, menu, and what you want. WhatsApp or email works fine."
        },
        {
            number: "02",
            title: "I build it in 4 days",
            body: "You get a preview first. We tweak until it's exactly right."
        },
        {
            number: "03",
            title: "It goes live. You start getting found.",
            body: "I handle everything technical. You just share the link."
        }
    ];

    return (
        <section id="workflow" className="reveal" style={{ padding: '8rem 0', backgroundColor: '#0f0f0f' }}>
            <div className="container">
                <h2 style={{
                    fontFamily: tokens.fonts.display,
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    color: tokens.colors.textPrimary,
                    textAlign: 'center',
                    marginBottom: '5rem'
                }}>
                    Done in 3 Steps
                </h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '4rem',
                    position: 'relative',
                    flexWrap: 'wrap'
                }}>
                    {/* Desktop Connector Line */}
                    <div className="desktop-line" style={{
                        position: 'absolute',
                        top: '40px',
                        left: '10%',
                        right: '10%',
                        height: '1px',
                        backgroundColor: tokens.colors.accent,
                        opacity: 0.3,
                        zIndex: 0
                    }} />

                    {steps.map((step, index) => (
                        <div key={index} style={{
                            flex: '1',
                            minWidth: '280px',
                            position: 'relative',
                            zIndex: 1,
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontFamily: tokens.fonts.display,
                                fontSize: '3.5rem',
                                fontWeight: '900',
                                color: tokens.colors.accent,
                                backgroundColor: tokens.colors.bg,
                                display: 'inline-block',
                                padding: '0 1rem',
                                marginBottom: '1.5rem',
                                lineHeight: 1
                            }}>
                                {step.number}
                            </div>
                            
                            <h3 style={{
                                fontFamily: tokens.fonts.body,
                                fontWeight: '700',
                                fontSize: '1.25rem',
                                color: tokens.colors.textPrimary,
                                marginBottom: '1rem',
                                maxWidth: '250px',
                                margin: '0 auto 1rem'
                            }}>
                                {step.title}
                            </h3>

                            <p style={{
                                color: tokens.colors.textSecondary,
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                maxWidth: '280px',
                                margin: '0 auto'
                            }}>
                                {step.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 968px) {
                    .desktop-line { display: none; }
                    section > div > div { flex-direction: column; align-items: center; }
                }
            `}</style>
        </section>
    );
};

export default HowItWorks;
