import React from 'react';
import { tokens } from '../tokens';

const Work = () => {
    const projects = [
        {
            title: "Fitness Studio AI Website",
            description: "Custom website + AI receptionist for a boutique fitness studio. Handles class bookings, membership queries, and lead capture around the clock.",
            tags: ["Gym", "AI Chatbot", "Website"],
            gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            link: "#"
        },
        {
            title: "Residency Club — Hotel Website",
            description: "Direct booking site with room gallery for a boutique hotel.",
            tags: ["Hotel", "Booking"],
            gradient: "linear-gradient(135deg, #d4a853 0%, #1a1a1a 100%)",
            link: "https://residencyclub.co.in/"
        },
        {
            title: "Cafe Coffee Day — Cafe Website",
            description: "Menu showcase and Instagram integration for a specialty cafe.",
            tags: ["Cafe", "Menu"],
            gradient: "linear-gradient(135deg, #1a1a1a 0%, #d4a853 100%)",
            link: "https://www.cafecoffeeday.com/"
        },
        {
            title: "The Sassy Spoon — Restaurant Website",
            description: "Full menu site with direct ordering, reducing Swiggy dependency.",
            tags: ["Restaurant", "Ordering"],
            gradient: "linear-gradient(135deg, #0f0f0f 0%, #d4a853 100%)",
            link: "https://www.thesassyspoon.co.in/"
        }
    ];

    return (
        <section id="work" className="reveal" style={{ padding: '8rem 0', backgroundColor: '#0a0a0a' }}>
            <div className="container">
                <h2 style={{
                    fontFamily: tokens.fonts.display,
                    fontSize: 'clamp(2rem, 5vw, 3rem)',
                    color: tokens.colors.textPrimary,
                    marginBottom: '4rem'
                }}>
                    Recent Work
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '2.5rem'
                }}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{
                            backgroundColor: tokens.colors.surface,
                            border: `1px solid ${tokens.colors.border}`,
                            transition: 'all 0.4s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {/* Placeholder Image Area */}
                            <div style={{
                                height: '200px',
                                background: project.gradient,
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    border: `1px solid ${tokens.colors.accent}`,
                                    color: tokens.colors.accent,
                                    padding: '0.4rem 0.8rem',
                                    fontSize: '0.7rem',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase'
                                }}>
                                    Demo Project
                                </div>
                            </div>

                            <div style={{ padding: '2rem' }}>
                                <h3 style={{
                                    fontFamily: tokens.fonts.body,
                                    fontWeight: '700',
                                    fontSize: '1.25rem',
                                    color: tokens.colors.textPrimary,
                                    marginBottom: '0.5rem'
                                }}>
                                    {project.title}
                                </h3>

                                <p style={{
                                    color: tokens.colors.textSecondary,
                                    fontSize: '0.9rem',
                                    lineHeight: 1.6,
                                    marginBottom: '1.5rem'
                                }}>
                                    {project.description}
                                </p>

                                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                                    {project.tags.map((tag, tIndex) => (
                                        <span key={tIndex} style={{
                                            backgroundColor: '#252525',
                                            color: tokens.colors.accent,
                                            padding: '0.3rem 0.8rem',
                                            borderRadius: '50px',
                                            fontSize: '0.75rem',
                                            fontWeight: '600'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                                    display: 'inline-block',
                                    border: `1px solid ${tokens.colors.accent}`,
                                    color: tokens.colors.accent,
                                    padding: '0.75rem 1.5rem',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    fontWeight: '600',
                                    transition: 'all 0.3s ease'
                                }} className="btn-project">
                                    View Demo
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .project-card:hover {
                    transform: translateY(-8px);
                    border-color: ${tokens.colors.accent}40;
                }
                .btn-project:hover {
                    background-color: ${tokens.colors.accent};
                    color: ${tokens.colors.bg};
                }
            `}</style>
        </section>
    );
};

export default Work;
