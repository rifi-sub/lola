import React from 'react';
import { motion } from 'framer-motion';

const TELEGRAM_URL = "https://t.me/+kGMlimodG3k1ZmFk";

const LIKES = [
  'Ballbusting',
  'Humillación verbal',
  'Trampling',
  'Splitting',
  'Humillación pública',
  'Violencia dentro del rol consensuado',
  'Que me toquen o huelan los pies',
];

const DISLIKES = [
  'Facesitting',
  'Prácticas explícitas',
  'Que me chupen los pies',
  'Scat',
  'Lluvia dorada',
];

export const PresencialSection: React.FC = () => {
  return (
    <section
      id="presencial"
      className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #08080A 0%, #08040A 50%, #08080A 100%)' }}
    >
      {/* Decorative borders */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-deep-red/30 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent" />
      <div className="absolute top-32 right-0 w-80 h-80 bg-deep-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-deep-red font-mono text-xs">▶</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted border border-void-border px-3 py-1">
              Sesiones Presenciales
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:items-end justify-between">
            <h2 className="text-5xl md:text-7xl font-display text-white tracking-tight leading-[0.9]">
              Barcelona<br />
              <span className="italic font-normal" style={{ color: '#FF0055', textShadow: '0 0 30px rgba(255,0,85,0.5)' }}>
                Presencial. 😜
              </span>
            </h2>
            <p className="max-w-md text-white-muted font-light text-base leading-relaxed border-l-2 border-deep-red/30 pl-6">
              En presencial solo hago sesiones de compras y cashmeets en sitios discretos pero públicos.
              No me meto en habitaciones de hotel con desconocidos.
              <span className="block mt-2 text-white-dim font-semibold">Reserva obligatoria: 40€</span>
            </p>
          </div>
        </div>

        {/* Main grid: Cashmeets + Sesiones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* CASHMEETS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border border-neon-pink/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">❤️</span>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Cashmeets</h3>
                <p className="text-[10px] font-mono text-white-muted uppercase tracking-widest">Encuentro rápido</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-white-dim">
                <span className="text-neon-pink mt-0.5 flex-shrink-0">·</span>
                <span>En la calle</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white-dim">
                <span className="text-neon-pink mt-0.5 flex-shrink-0">·</span>
                <span>Duración máxima: <strong className="text-white">20 minutos</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white-dim">
                <span className="text-neon-pink mt-0.5 flex-shrink-0">·</span>
                <span>Aportación mínima: <strong className="text-neon-pink text-base">100€</strong></span>
              </li>
            </ul>
          </motion.div>

          {/* SESIONES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass border border-deep-red/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">☀️</span>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Sesiones</h3>
                <p className="text-[10px] font-mono text-white-muted uppercase tracking-widest">Sesión completa</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-white-dim">
                <span className="text-deep-red mt-0.5 flex-shrink-0">·</span>
                <span>Duración máxima: <strong className="text-white">1 hora</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white-dim">
                <span className="text-deep-red mt-0.5 flex-shrink-0">·</span>
                <span>Aportación mínima: <strong className="text-deep-red text-base">300€</strong></span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white-dim">
                <span className="text-deep-red mt-0.5 flex-shrink-0">·</span>
                <span>No realizo prácticas explícitas</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Likes / Dislikes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

          {/* LIKES */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border border-neon-pink/15 rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">✨</span>
              <h4 className="text-lg font-display font-bold text-white">Me gusta</h4>
            </div>
            <ul className="space-y-2">
              {LIKES.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white-dim">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-pink flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* DISLIKES */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass border border-void-border rounded-2xl p-8"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl">❌</span>
              <h4 className="text-lg font-display font-bold text-white">No me gusta</h4>
            </div>
            <ul className="space-y-2">
              {DISLIKES.map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-white-muted line-through decoration-white-muted/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0 no-underline" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-white-muted font-mono mt-4 border-t border-void-border pt-4">
              🛍️ Sesiones de compras, salidas a comer y otras experiencias: consultar por privado.
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white-muted text-sm mb-6 font-mono uppercase tracking-widest">
            Reserva obligatoria · 40€ · Barcelona
          </p>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-neon-pink text-white px-14 py-5 text-[11px] uppercase kerning-wide font-black hover:bg-deep-red transition-all duration-300 hover-brat-glow"
          >
            Reservar Sesión →
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default PresencialSection;
