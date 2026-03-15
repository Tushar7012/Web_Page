import React from 'react';
import { tokens } from '../tokens';
import { Bed, Coffee, Utensils } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Bed size={32} color={tokens.colors.accent} />,
            title: "Hotel Websites",
            body: "Room showcase, direct booking form, Google Maps embed, photo gallery. Guests book directly — no OTA commission.",
            price: "Starting ₹13,000"
        },
        {
            icon: <Coffee size={32} color={tokens.colors.accent} />,
            title: "Cafe Websites",
            body: "Menu display, opening hours, Instagram feed embed, location page. Turns your followers into walk-in customers.",
            price: "Starting ₹8,500"
        },
        {
            icon: <Utensils size={32} color={tokens.colors.accent} />,
            title: "Restaurant and Bar Websites",
            body: "Full menu page, online ordering option, Zomato/Swiggy alternative. Stop paying 30% commission on your own customers.",
            price: "Starting ₹10,000"
        }
    ];

    return (
        <section id="services" className="reveal" style={{ padding: '8rem 0' }}>
            <div className="container">
                <h2 style={{
                    fontFamily: tokens.fonts.display,
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    color: tokens.colors.textPrimary,
                    textAlign: 'center',
                    marginBottom: '4rem'
                }}>
                    What I Build For You
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {services.map((service, index) => (
                        <div key={index} className="service-card" style={{
                            backgroundColor: tokens.colors.surface,
                            padding: '3rem 2rem',
                            borderLeft: `3px solid ${tokens.colors.accent}`,
                            transition: 'all 0.4s ease',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%'
                        }}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                {service.icon}
                            </div>
                            
                            <h3 style={{
                                fontFamily: tokens.fonts.display,
                                fontSize: '1.5rem',
                                color: tokens.colors.textPrimary,
                                marginBottom: '1rem'
                            }}>
                                {service.title}
                            </h3>

                            <p style={{
                                color: tokens.colors.textSecondary,
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                marginBottom: '2.5rem',
                                flexGrow: 1
                            }}>
                                {service.body}
                            </p>

                            <div style={{
                                color: tokens.colors.accent,
                                fontWeight: '600',
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {service.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .service-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
                    background-color: #222;
                }
            `}</style>
        </section>
    );
};

export default Services;
