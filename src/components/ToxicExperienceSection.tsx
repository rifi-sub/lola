import React from 'react';
import { motion } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

const TELEGRAM_URL = "https://t.me/+kGMlimodG3k1ZmFk";

const SERVICES = [
  {
    num: '01',
    icon: '🧠',
    title: 'Terapias',
    desc: 'Sesiones de terapia para enfermos como tú. Shaming de adicciones, control mental y dependencia emocional administrada con precisión. Una sesión conmigo y empezamos a cortarlo.',
    ctaText: 'Iniciar Sesión',
  },
  {
    num: '02',
    icon: '🐍',
    title: 'Toxic Girlfriend Experience',
    desc: 'Relaciones tóxicas, infidelidades simuladas, celos, drama y caos consentido. Fotos, audios y mensajes diseñados para desestabilizarte y mantenerte exactamente donde quiero.',
    ctaText: 'Saber Más',
  },
  {
    num: '03',
    icon: '📸',
    title: 'Blackmail',
    desc: 'Para los que necesitan algo más que promesas. Blackmail consensuado y dinámicas de poder que van más allá de lo que te atreves a admitir. Sin vuelta atrás.',
    ctaText: 'Preguntar',
  },
];

export const ToxicExperienceSection: React.FC<{ data: LolaProfileData }> = (_props) => {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
      id="gfe"
      style={{ background: 'linear-gradient(to bottom, #08080A 0%, #0E0010 50%, #08080A 100%)' }}
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/30 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-deep-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">

        {/* Section Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-neon-pink font-mono text-xs">▶</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted border border-void-border px-3 py-1">
                Dinámicas · TGE · Terapias · Blackmail
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-white tracking-tight leading-[0.9]">
              Dinámicas<br />
              <span className="italic text-neon-pink glow-pink font-normal">& Control.</span>
            </h2>
          </div>
          <div className="max-w-sm border-l-2 border-neon-pink/30 pl-6">
            <p className="text-white-muted font-light text-sm md:text-base leading-relaxed">
              "¿Quieres una novia perfecta? Entonces esto no es para ti."
            </p>
            <p className="text-white-dim text-sm mt-2 leading-relaxed">
              Fotos, audios, celos, control y puro desorden consentido. Sin filtros, sin excusas.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-void-border">
          {SERVICES.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 md:p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-void-border group hover:bg-white-ghost transition-all duration-700 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{svc.icon}</span>
                <span className="text-[10px] font-mono text-white-muted tracking-widest">{svc.num}</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 group-hover:text-neon-pink transition-colors duration-500">
                {svc.title}
              </h3>
              <p className="text-sm font-light text-white-muted leading-relaxed mb-10 min-h-[80px]">
                {svc.desc}
              </p>
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-neon-pink/30 pb-1 text-[10px] uppercase kerning-wide font-black tracking-widest text-neon-pink hover:border-neon-pink transition-all duration-300"
              >
                {svc.ctaText} →
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 glass border border-neon-pink/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-white font-display text-xl italic">
              "Me necesitas, una chica joven, guapa, interesante y mala."
            </p>
            <p className="text-white-muted text-xs mt-1 font-mono uppercase tracking-widest">
              Solo sumisos solventes · con las cosas claras
            </p>
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-neon-pink text-white px-10 py-4 text-[11px] uppercase kerning-wide font-black hover:bg-deep-red transition-all duration-300 hover-brat-glow"
          >
            Contactar en Telegram →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default ToxicExperienceSection;
