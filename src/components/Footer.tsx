import React from 'react';
import type { LolaProfileData } from '../types/lola';

export const Footer: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const { profile } = data;


  return (
    <footer className="w-full py-20 border-t border-brand-black/5 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-12 max-w-[1600px] mx-auto gap-16">
        
        {/* Left column */}
        <div className="space-y-4">
          <div className="text-2xl font-display font-black tracking-tighter">
            SPANISH BRAT <span className="text-brand-pink-dark">💘</span>
          </div>
          <p className="text-[10px] uppercase kerning-wide text-brand-gray tracking-wider">
            Diosa Lola - Domination &amp; Mind Control.
          </p>
        </div>

        {/* Middle column: backup accounts & contacts */}
        <div className="flex flex-col gap-4">
          <span className="text-[9px] uppercase tracking-widest font-black text-brand-pink-dark">
            Backups &amp; Contactos
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
            <a
              className="text-[10px] uppercase kerning-wide hover:italic hover:text-brand-pink-dark transition-all duration-300 font-bold"
              href="https://x.com/lolahaze66"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lolahaze66 (X)
            </a>
            <a
              className="text-[10px] uppercase kerning-wide hover:italic hover:text-brand-pink-dark transition-all duration-300 font-bold"
              href="https://x.com/lolalovescashh"
              target="_blank"
              rel="noopener noreferrer"
            >
              @lolalovescashh (X)
            </a>
            <a
              className="text-[10px] uppercase kerning-wide hover:italic hover:text-brand-pink-dark transition-all duration-300 font-bold"
              href="https://t.me/gifts4lola"
              target="_blank"
              rel="noopener noreferrer"
            >
              @gifts4lola (Telegram)
            </a>
            <a
              className="text-[10px] uppercase kerning-wide hover:italic hover:text-brand-pink-dark transition-all duration-300 font-bold"
              href="#inicio"
            >
              Volver arriba ↑
            </a>
          </div>
        </div>

        {/* Right column: disclaimer and copyright */}
        <div className="space-y-4 max-w-sm md:text-right md:ml-auto">
          <div className="flex gap-8 md:justify-end">
            <span className="text-[9px] uppercase kerning-wide text-brand-pink-dark font-black tracking-widest bg-brand-pink-light px-2 py-0.5">
              18+ Consentimiento
            </span>
          </div>
          <p className="text-[9px] leading-relaxed text-brand-gray uppercase tracking-wider">
            Disclaimer: Este sitio presenta dinámicas de sumisión, dominación financiera (Findom) y juego de rol de novia tóxica para adultos (18+). Todas las interacciones son estrictamente consensuadas y orientadas al entretenimiento.
          </p>
          <p className="text-[10px] uppercase kerning-wide text-brand-black font-semibold">
            © 2026 {profile.display_name}. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
