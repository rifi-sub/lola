import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

interface NavbarProps {
  data: LolaProfileData;
}

export const Navbar: React.FC<NavbarProps> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const displayName = data.profile.display_name.toUpperCase();

  const navLinks = [
    { name: 'Toxic GFE', href: '#gfe' },
    { name: 'Tributos', href: '#tributos' },
    { name: 'Historias', href: '#tweets' },
    { name: 'Galería', href: '#galeria' },
  ];

  const telegramUrl = "https://t.me/+D91Mh70fnqczYjZk";

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-black/5">
      <div className="flex justify-between items-center w-full px-6 md:px-12 max-w-[1600px] mx-auto h-20 md:h-24">
        {/* Logo */}
        <a href="#inicio" className="text-xl md:text-2xl font-display font-black tracking-tighter hover:text-brand-pink-dark transition-colors duration-300">
          {displayName}
        </a>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              className="text-[11px] uppercase kerning-wide font-bold text-brand-black/60 hover:text-brand-black border-b border-transparent hover:border-brand-black transition-all duration-300 py-1"
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brand-black px-8 py-3 text-[10px] uppercase kerning-wide font-bold hover:bg-brand-black hover:text-white transition-all duration-500 hover:scale-105"
          >
            Entrar al Caos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-brand-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined !text-2xl">
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
            className="lg:hidden w-full bg-white border-b border-brand-black/5 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm uppercase tracking-wider font-semibold text-brand-black/80 hover:text-brand-pink-dark transition-colors py-2 border-b border-brand-black/5"
                >
                  {link.name}
                </a>
              ))}
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full text-center border border-brand-black bg-brand-black text-white py-4 text-xs uppercase kerning-wide font-bold hover:bg-brand-pink-dark hover:border-brand-pink-dark transition-all duration-300"
              >
                Telegram Principal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
export default Navbar;
