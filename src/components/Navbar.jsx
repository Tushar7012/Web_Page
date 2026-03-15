import React, { useState, useEffect } from 'react';
import { tokens } from '../tokens';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 1000,
                padding: '1.5rem 0',
                transition: 'all 0.4s ease',
                backgroundColor: isScrolled ? 'rgba(15, 15, 15, 0.85)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(12px)' : 'none',
                borderBottom: isScrolled ? `1px solid ${tokens.colors.border}` : '1px solid transparent'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ 
                    fontFamily: tokens.fonts.display, 
                    color: tokens.colors.accent, 
                    fontSize: '1.2rem', 
                    fontWeight: 900, 
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    Tushar Das
                </div>

                {/* Desktop Menu */}
                <div className="nav-menu" style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                    <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
                        <a href="#work" style={linkStyle}>Work</a>
                        <a href="#services" style={linkStyle}>Services</a>
                        <a href="#contact" style={linkStyle}>Contact</a>
                    </div>
                    
                    <a href="https://wa.me/916371261522" target="_blank" rel="noopener noreferrer" style={{
                        backgroundColor: tokens.colors.accent,
                        color: tokens.colors.bg,
                        padding: '0.8rem 1.5rem',
                        borderRadius: '2px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        transition: 'transform 0.3s ease'
                    }} className="btn-cta">
                        Get a Free Quote
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .nav-links { display: none !important; }
                    .nav-menu { gap: 1rem !important; }
                }
                .btn-cta:hover { transform: translateY(-2px); }
            `}</style>
        </nav>
    );
};

const linkStyle = {
    textDecoration: 'none',
    color: tokens.colors.textPrimary,
    fontSize: '0.9rem',
    fontWeight: '500',
    transition: 'color 0.3s ease',
    opacity: 0.8
};

export default Navbar;
