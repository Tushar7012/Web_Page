import React from 'react';
import { tokens } from '../tokens';

const GymTestimonial = () => {
    return (
        <section className="reveal" style={{ 
            padding: '5rem 1.5rem', 
            background: tokens.colors.bg 
        }}>
            <div style={{
                background: tokens.colors.surface,
                border: `1px solid ${tokens.colors.border}`,
                borderRadius: '12px',
                maxWidth: '680px',
                margin: '0 auto',
                padding: '2.5rem',
                textAlign: 'center'
            }}>
                <p style={{
                    fontFamily: tokens.fonts.display,
                    fontStyle: 'italic',
                    fontSize: '1.2rem',
                    color: tokens.colors.textPrimary,
                    lineHeight: 1.6,
                    marginBottom: '2rem'
                }}>
                    "We went from missing calls every evening to having every inquiry answered the same night. The AI books trials, handles FAQs, and the whole thing just runs."
                </p>
                
                <div style={{
                    fontFamily: tokens.fonts.body,
                    color: tokens.colors.accent,
                    fontWeight: '600',
                    fontSize: '1rem',
                    marginBottom: '0.25rem'
                }}>
                    — CrossFit Studio Owner, San Diego
                </div>
                
                <div style={{
                    fontFamily: tokens.fonts.body,
                    color: tokens.colors.textSecondary,
                    fontSize: '0.8rem'
                }}>
                    Demo client — results from prototype
                </div>
            </div>
        </section>
    );
};

export default GymTestimonial;
