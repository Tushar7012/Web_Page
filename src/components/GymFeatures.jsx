import React from 'react';
import { CalendarCheck, MessageCircle, Users, BellRing, Clock } from 'lucide-react';
import { tokens } from '../tokens';

const GymFeatures = () => {
    const features = [
        {
            icon: <CalendarCheck size={24} color={tokens.colors.accent} />,
            title: "Trial class bookings",
            sub: "Visitor asks, AI books it in the same conversation"
        },
        {
            icon: <MessageCircle size={24} color={tokens.colors.accent} />,
            title: "Membership questions",
            sub: "Pricing, tiers, cancellation — handled 24/7"
        },
        {
            icon: <Users size={24} color={tokens.colors.accent} />,
            title: "Waitlist management",
            sub: "Auto-notifies members the moment a spot opens"
        },
        {
            icon: <BellRing size={24} color={tokens.colors.accent} />,
            title: "After-hours lead capture",
            sub: "Nobody leaves the site without their details logged"
        },
        {
            icon: <Clock size={24} color={tokens.colors.accent} />,
            title: "No-show reminders",
            sub: "Automated follow-ups sent before every class"
        }
    ];

    return (
        <section id="gym-features" className="reveal" style={{ 
            padding: '8rem 0', 
            backgroundColor: tokens.colors.surface 
        }}>
            <div className="container">
                <h2 style={{
                    fontFamily: tokens.fonts.display,
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    color: tokens.colors.textPrimary,
                    textAlign: 'center',
                    marginBottom: '5rem'
                }}>
                    What the AI handles for fitness studios
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    justifyContent: 'center'
                }}>
                    {features.map((feature, index) => (
                        <div key={index} style={{
                            textAlign: 'center',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div style={{
                                marginBottom: '1.5rem',
                                backgroundColor: tokens.colors.bg,
                                padding: '1rem',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {feature.icon}
                            </div>
                            
                            <h3 style={{
                                fontFamily: tokens.fonts.body,
                                fontWeight: '700',
                                fontSize: '1.25rem',
                                color: tokens.colors.textPrimary,
                                marginBottom: '1rem'
                            }}>
                                {feature.title}
                            </h3>

                            <p style={{
                                color: tokens.colors.textSecondary,
                                fontSize: '0.95rem',
                                lineHeight: 1.6,
                                maxWidth: '280px'
                            }}>
                                {feature.sub}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GymFeatures;
