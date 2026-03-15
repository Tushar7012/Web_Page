import React from 'react';
import { tokens } from '../tokens';

const ProblemStats = () => {
    const stats = [
        {
            number: "76%",
            label: "of customers search online before visiting a local business"
        },
        {
            number: "₹0",
            label: "earned from customers who can't find you on Google"
        },
        {
            number: "25–30%",
            label: "commission paid to Zomato/Swiggy on every order"
        }
    ];

    return (
        <section className="reveal" style={{
            padding: '8rem 0',
            backgroundColor: '#141414',
            borderTop: `1px solid ${tokens.colors.border}`,
            borderBottom: `1px solid ${tokens.colors.border}`
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '4rem',
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{ padding: '0 1rem' }}>
                            <div style={{
                                fontFamily: tokens.fonts.display,
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                color: tokens.colors.accent,
                                fontWeight: 700,
                                marginBottom: '1rem'
                            }}>
                                {stat.number}
                            </div>
                            <p style={{
                                color: tokens.colors.textSecondary,
                                fontSize: '0.9rem',
                                lineHeight: 1.5,
                                maxWidth: '200px',
                                margin: '0 auto'
                            }}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{
                    textAlign: 'center',
                    color: tokens.colors.textSecondary,
                    fontSize: '1rem',
                    fontStyle: 'italic',
                    opacity: 0.7,
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    "Businesses without websites are invisible to the customers searching for them right now."
                </div>
            </div>
        </section>
    );
};

export default ProblemStats;
