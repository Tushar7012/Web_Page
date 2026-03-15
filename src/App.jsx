import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemStats from './components/ProblemStats'
import Services from './components/Services'
import Work from './components/Work'
import HowItWorks from './components/HowItWorks'
import Contact from './components/Contact'
import { tokens } from './tokens'

function App() {
  
  // Custom Cursor Effect
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      width: 8px; height: 8px;
      background: ${tokens.colors.accent};
      border-radius: 50%;
      position: fixed;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      box-shadow: 0 0 15px ${tokens.colors.accent};
    `;
    document.body.appendChild(cursor);
    const move = (e) => {
      cursor.style.left = e.clientX - 4 + 'px';
      cursor.style.top = e.clientY - 4 + 'px';
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      if (document.body.contains(cursor)) document.body.removeChild(cursor);
    };
  }, []);

  // Scroll Reveal Effect
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ backgroundColor: tokens.colors.bg, minHeight: '100vh', color: tokens.colors.textPrimary }}>
      <Navbar />
      
      <main>
        <Hero />
        <ProblemStats />
        <Services />
        <Work />
        <HowItWorks />
        <Contact />
      </main>
      
      <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: `1px solid ${tokens.colors.border}`, backgroundColor: '#0a0a0a' }}>
        <p style={{ color: tokens.colors.textSecondary, fontSize: '0.9rem', fontFamily: tokens.fonts.body }}>
          &copy; 2026 Tushar Das. Websites for hotels, cafes & restaurants across India.
        </p>
      </footer>
    </div>
  )
}

export default App
