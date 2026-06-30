import React from 'react';
import type { LolaProfileData } from '../types/lola';

export const Footer: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const { profile } = data;

  const links = [
    { label: '@lolahaze66 (X backup)', href: 'https://x.com/lolahaze66' },
    { label: '@lolalovescashh (X backup)', href: 'https://x.com/lolalovescashh' },
    { label: '@gifts4lola (Telegram)', href: 'https://t.me/gifts4lola' },
  ];

  return (
    <footer className="w-full border-t border-void-border bg-void relative overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-neon-pink/5 blur-3xl pointer-events-none" />

      <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">

        {/* Top section: large CTA */}
        <div className="py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-void-border">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white-muted mb-2">
              // CONTACTO_DIRECTO
            </p>
            <h3 className="text-3xl md:text-4xl font-display font-black text-white">
              ¿Listo para el drenaje?
              <span className="text-neon-pink"> 💸</span>
            </h3>
          </div>
          <a
            href="https://t.me/+z0m5TkR0vCExNDU0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-neon-pink text-white px-10 py-5 text-[11px] uppercase kerning-wide font-black hover:bg-deep-red transition-all duration-300 hover-brat-glow pulse-glow-pink"
          >
            Entrar al Telegram →
          </a>
        </div>

        {/* Bottom section: three columns */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Brand */}
          <div className="space-y-3">
            <div className="text-2xl font-display font-black tracking-tighter text-white">
              SPANISH BRAT <span className="text-neon-pink glow-pink">💘</span>
            </div>
            <p className="text-[10px] uppercase kerning-wide text-white-muted tracking-wider max-w-[200px]">
              Diosa Lola · Domination & Mind Control
            </p>
            <p className="text-[9px] font-mono text-white-muted/50">
              {profile.username} · España
            </p>
          </div>

          {/* Backups & Contacts */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-widest font-black text-neon-pink font-mono mb-1">
              Backups & Contactos
            </span>
            {links.map(link => (
              <a
                key={link.href}
                className="text-[10px] uppercase kerning-wide text-white-muted hover:text-neon-pink transition-colors duration-300 font-bold hover:tracking-[0.35em]"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#inicio"
              className="text-[10px] uppercase kerning-wide text-white-muted hover:text-white transition-colors duration-300 font-bold mt-2"
            >
              ↑ Volver arriba
            </a>
          </div>

          {/* Legal */}
          <div className="space-y-4 max-w-sm md:text-right md:ml-auto">
            <span className="text-[9px] uppercase kerning-wide text-neon-pink font-black tracking-widest bg-neon-pink/10 border border-neon-pink/20 px-3 py-1 inline-block font-mono">
              18+ · Solo Adultos
            </span>
            <p className="text-[9px] leading-relaxed text-white-muted uppercase tracking-wider">
              Este sitio presenta dinámicas de dominación financiera (Findom) y Toxic Girlfriend Experience para adultos (+18). Todas las interacciones son estrictamente consensuadas y orientadas al entretenimiento adulto.
            </p>
            <p className="text-[10px] uppercase kerning-wide text-white-muted font-mono">
              © 2026 {profile.display_name}. Todos los derechos.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
export default Footer;
