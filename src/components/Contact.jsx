import React from 'react';
import { tokens } from '../tokens';
import { Mail, MessageCircle, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="reveal" style={{ 
            padding: '10rem 0', 
            position: 'relative',
            backgroundColor: tokens.colors.bg,
            overflow: 'hidden'
        }}>
            {/* Subtle Gradient Detail */}
            <div style={{
                position: 'absolute',
                bottom: '-20%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '800px',
                height: '800px',
                background: `radial-gradient(circle, ${tokens.colors.accent}1a 0%, transparent 70%)`,
                filter: 'blur(100px)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h2 style={{
                        fontFamily: tokens.fonts.display,
                        fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
                        color: tokens.colors.textPrimary,
                        marginBottom: '1.5rem',
                        letterSpacing: '-1px'
                    }}>
                        Ready to get your <span style={{ color: tokens.colors.accent }}>business online?</span>
                    </h2>
                    <p style={{
                        color: tokens.colors.textSecondary,
                        fontSize: '1.1rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        I'll respond within 24 hours. No jargon, no long contracts. Just a clean website that works.
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4rem'
                }}>
                    {/* Contact Buttons */}
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        <a href="mailto:td220627@gmail.com" style={socialButtonStyle}>
                            <Mail size={18} /> Email Me
                        </a>
                        <a href="https://wa.me/916371261522" target="_blank" rel="noopener noreferrer" style={socialButtonStyle}>
                            <MessageCircle size={18} /> WhatsApp
                        </a>
                        <a href="https://linkedin.com/in/tushar-d-2454a5376" target="_blank" rel="noopener noreferrer" style={socialButtonStyle}>
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </div>

                    <div style={{ 
                        width: '100%', 
                        height: '1px', 
                        backgroundColor: tokens.colors.border, 
                        maxWidth: '400px' 
                    }} />

                    {/* Form Section */}
                    <div style={{ width: '100%', maxWidth: '500px' }}>
                        <p style={{
                            textAlign: 'center',
                            color: tokens.colors.textSecondary,
                            fontSize: '0.9rem',
                            marginBottom: '2rem'
                        }}>
                            Or fill this quick form and I'll reach out to you:
                        </p>

                        <form action="https://formspree.io/f/XXXXXXXX" method="POST" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                required 
                                style={inputStyle} 
                            />
                            <input 
                                type="text" 
                                name="contact" 
                                placeholder="Phone / WhatsApp Number" 
                                required 
                                style={inputStyle} 
                            />
                            <select name="business-type" required style={inputStyle}>
                                <option value="" disabled selected>Business Type</option>
                                <option value="Hotel">Hotel</option>
                                <option value="Cafe">Cafe</option>
                                <option value="Restaurant and Bar">Restaurant and Bar</option>
                                <option value="Other">Other</option>
                            </select>
                            
                            <button type="submit" style={{
                                backgroundColor: tokens.colors.accent,
                                color: tokens.colors.bg,
                                border: 'none',
                                padding: '1.25rem',
                                fontSize: '1rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                marginTop: '1rem'
                            }} className="btn-submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                .btn-submit:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px rgba(212, 168, 83, 0.2);
                    filter: brightness(1.1);
                }
                select option { background-color: #1a1a1a; color: #f0ece0; }
            `}</style>
        </section>
    );
};

const socialButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    border: `1px solid ${tokens.colors.border}`,
    color: tokens.colors.textPrimary,
    padding: '1rem 2rem',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'all 0.3s ease'
};

const inputStyle = {
    backgroundColor: tokens.colors.surface,
    border: `1px solid ${tokens.colors.border}`,
    padding: '1.2rem',
    color: tokens.colors.textPrimary,
    fontFamily: tokens.fonts.body,
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.3s ease'
};

export default Contact;
