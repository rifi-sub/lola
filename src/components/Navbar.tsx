import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

interface NavbarProps {
  data: LolaProfileData;
}

export const Navbar: React.FC<NavbarProps> = ({ data: _data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const displayName = 'LOLA HAZE';

  const navLinks = [
    { name: 'Dinámicas', href: '#gfe' },
    { name: 'Presencial', href: '#presencial' },
    { name: 'Tributos', href: '#tributos' },
    { name: 'Galería', href: '#galeria' },
  ];

  const telegramUrl = "https://t.me/+kGMlimodG3k1ZmFk";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-void/90 backdrop-blur-xl border-b border-void-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1600px] mx-auto h-20 md:h-24">
        {/* Logo */}
        <a href="#inicio" className="relative group">
          <span className="text-xl md:text-2xl font-display font-black tracking-tighter text-white transition-colors duration-300 group-hover:text-neon-pink">
            {displayName}
          </span>
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neon-pink group-hover:w-full transition-all duration-500" />
          <span className="text-neon-pink ml-1">💘</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="relative text-[11px] uppercase kerning-wide font-bold text-white-muted hover:text-neon-pink transition-colors duration-300 py-1 group"
              href={link.href}
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neon-pink group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative px-8 py-3 text-[10px] uppercase kerning-wide font-bold text-white border border-neon-pink/50 hover:border-neon-pink hover:bg-neon-pink/10 transition-all duration-300 hover-brat-glow"
          >
            <span className="relative z-10">Entrar al Caos</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined !text-2xl text-neon-pink">
            {isOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-void-mid/95 backdrop-blur-xl border-b border-void-border overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-wider font-semibold text-white-dim hover:text-neon-pink transition-colors py-2 border-b border-void-border"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center border border-neon-pink bg-neon-pink/10 text-white py-4 text-xs uppercase kerning-wide font-bold hover:bg-neon-pink transition-all duration-300"
              >
                Telegram → Entrar al Caos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
