import React from 'react';
import type { LolaProfileData } from '../types/lola';

const TELEGRAM_URL = "https://t.me/+kGMlimodG3k1ZmFk";
const X_URL = "https://x.com/Lolahaze66";

export const Footer: React.FC<{ data: LolaProfileData }> = (_props) => {
  const links = [
    { label: '@Lolahaze66 (X)', href: X_URL },
    { label: '@gifts4lola66 (X alt)', href: 'https://x.com/gifts4lola66' },
    { label: '@lolahaze66 (X backup)', href: 'https://x.com/lolahaze66' },
    { label: 'Telegram principal', href: TELEGRAM_URL },
  ];

  return (
    <footer className="w-full border-t border-void-border bg-void relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-neon-pink/5 blur-3xl pointer-events-none" />

      <div className="px-6 md:px-12 max-w-[1600px] mx-auto relative z-10">

        {/* Top CTA */}
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
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-neon-pink text-white px-10 py-5 text-[11px] uppercase kerning-wide font-black hover:bg-deep-red transition-all duration-300 hover-brat-glow pulse-glow-pink"
          >
            Entrar al Telegram →
          </a>
        </div>

        {/* Bottom columns */}
        <div className="py-12 flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Brand */}
          <div className="space-y-3">
            <div className="text-2xl font-display font-black tracking-tighter text-white">
              LOLA HAZE <span className="text-neon-pink glow-pink">💘</span>
            </div>
            <p className="text-[10px] uppercase kerning-wide text-white-muted tracking-wider max-w-[200px]">
              +2 Años de Experiencia · Barcelona
            </p>
            <p className="text-[9px] font-mono text-white-muted/50">
              @Lolahaze66 · @gifts4lola66
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="text-[9px] uppercase tracking-widest font-black text-neon-pink font-mono mb-1">
              Contacto & Redes
            </span>
            {links.map(link => (
              <a
                key={link.href}
                className="text-[10px] uppercase kerning-wide text-white-muted hover:text-neon-pink transition-colors duration-300 font-bold"
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
              18+ · Solo Adultos · Barcelona
            </span>
            <p className="text-[9px] leading-relaxed text-white-muted uppercase tracking-wider">
              Este sitio presenta dinámicas de dominación financiera (Findom), Toxic Girlfriend Experience
              y sesiones presenciales para adultos (+18). Todas las interacciones son estrictamente
              consensuadas. Solo sumisos solventes con las cosas claras.
            </p>
            <p className="text-[10px] uppercase kerning-wide text-white-muted font-mono">
              © 2026 Lola Haze. Todos los derechos.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
export default Footer;
