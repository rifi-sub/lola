import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

interface ToxicLevel {
  level: number;
  label: string;
  badge: string;
  color: string;
  quote: string;
  description: string;
  emoji: string;
}

const TOXICITY_LEVELS: ToxicLevel[] = [
  {
    level: 1,
    label: 'Soft Brat',
    badge: 'NIVEL 1',
    color: '#FFB3D1',
    quote: '"Te dejo en visto... pero pienso en ti. Un poco."',
    description: 'Indiferencia estratégica. Mensajes que nunca contestas. La táctica de la chica que parece que no le importas, pero que te tiene exactamente donde quiere.',
    emoji: '😏',
  },
  {
    level: 2,
    label: 'Bratty Princess',
    badge: 'NIVEL 2',
    color: '#FF8EC7',
    quote: '"El tributo es tu saludo. Sin eso, no existes para mí."',
    description: 'Caprichos diarios, exigencias de regalo, audios provocadores y un trato que mezcla ternura con crueldad calculada. ¿Aún no has pagado?',
    emoji: '👑',
  },
  {
    level: 3,
    label: 'Toxic Girlfriend',
    badge: 'NIVEL 3',
    color: '#FF2E93',
    quote: '"Bloqueo a tus amigas de Instagram. Solo existo yo."',
    description: 'Celos tóxicos, infidelidades simuladas, drama diario. Una relación diseñada para desestabilizarte y mantenerte completamente dependiente de ella.',
    emoji: '🐍',
  },
  {
    level: 4,
    label: 'Mind Control',
    badge: 'NIVEL 4',
    color: '#E0006B',
    quote: '"Haz que renuncie a sus vicios. Empiezas por el dinero."',
    description: 'Control mental intensivo. Shaming de adicciones, manipulación emocional profunda y sesiones diseñadas para reconfigurar tu cabeza. Tu mente tiene dueña.',
    emoji: '🧠',
  },
  {
    level: 5,
    label: 'Total Drain',
    badge: 'NIVEL 5',
    color: '#FF0055',
    quote: '"Vacía tu cuenta. Born to be spoiled. Built to drain."',
    description: 'Drenaje total. Financial domination extrema. No hay límites, no hay vuelta atrás. Tributos ilimitados, adoración absoluta. Bienvenido al fondo del pozo.',
    emoji: '💸',
  },
];

export const ToxicExperienceSection: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const gfeTelegramUrl = "https://t.me/+D91Mh70fnqczYjZk";
  const [selectedLevel, setSelectedLevel] = useState(3);
  const themes = data.content_summary.main_themes;

  const current = TOXICITY_LEVELS[selectedLevel - 1];

  const services = [
    {
      num: '01',
      icon: '🎭',
      title: 'Manipulación & Caos',
      desc: 'Relaciones tóxicas, drama diario, audios que te desestabilizan. Infidelidades simuladas que duelen de verdad.',
      ctaText: 'Entrar al Caos',
    },
    {
      num: '02',
      icon: '🧠',
      title: 'Control Mental',
      desc: 'Terapia de adicción, shaming directo. Te hago depender únicamente de mí. La terapia que no esperabas necesitar.',
      ctaText: 'Iniciar Terapia',
    },
    {
      num: '03',
      icon: '💸',
      title: 'Financial Domination',
      desc: 'Drenaje financiero puro. Tributos espontáneos en vivo, adoración exclusiva a tu Diosa. El dinero siempre fluye hacia arriba.',
      ctaText: 'Tributar Ahora',
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden" id="gfe"
      style={{ background: 'linear-gradient(to bottom, #08080A 0%, #0E0010 50%, #08080A 100%)' }}>
      
      {/* Background decorative elements */}
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
                The Reality Show
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-white tracking-tight leading-[0.9]">
              Toxic Girlfriend<br />
              <span className="italic text-neon-pink glow-pink font-normal">Experience.</span>
            </h2>
          </div>
          <div className="max-w-sm space-y-4">
            <p className="text-white-muted font-light text-sm md:text-base leading-relaxed border-l-2 border-neon-pink/30 pl-6">
              "¿Quieres una novia perfecta? Entonces esto no es para ti."
              <br />
              <span className="text-white-dim">Fotos, audios, celos, control y puro desorden consentido.</span>
            </p>
            <div className="flex flex-wrap gap-2 pl-6">
              {themes.slice(0, 4).map(t => (
                <span key={t} className="text-[9px] uppercase tracking-wider font-bold text-neon-pink bg-neon-pink/10 border border-neon-pink/20 px-2 py-0.5 font-mono">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ===== TOXICITY LEVEL SIMULATOR ===== */}
        <div className="glass border border-void-border rounded-2xl p-8 md:p-12 mb-20 relative overflow-hidden"
          style={{ boxShadow: `0 0 60px ${current.color}10, 0 0 120px ${current.color}05` }}>
          
          {/* Simulator header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
            <div>
              <div className="font-mono text-[10px] text-white-muted uppercase tracking-widest mb-2">
                // TOXICITY_SIMULATOR.exe
              </div>
              <h3 className="text-2xl font-display text-white font-bold">
                Calibra tu nivel de drenaje
              </h3>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.level}
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="flex items-center gap-3 glass-pink rounded-xl px-5 py-3"
              >
                <span className="text-2xl">{current.emoji}</span>
                <div>
                  <div className="text-[9px] font-mono text-white-muted uppercase tracking-widest">{current.badge}</div>
                  <div className="text-lg font-display font-bold" style={{ color: current.color }}>
                    {current.label}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider */}
          <div className="mb-10">
            <div className="flex justify-between mb-4 text-[9px] font-mono uppercase tracking-widest">
              <span className="text-white-muted">Soft Brat</span>
              <span className="text-white-muted">Total Drain</span>
            </div>
            <div className="relative">
              <input
                type="range"
                min={1}
                max={5}
                step={1}
                value={selectedLevel}
                onChange={e => setSelectedLevel(Number(e.target.value))}
                className="toxicity-slider w-full"
                style={{ '--target-width': `${(selectedLevel - 1) * 25}%` } as React.CSSProperties}
              />
              {/* Level markers */}
              <div className="flex justify-between mt-3">
                {TOXICITY_LEVELS.map(l => (
                  <button
                    key={l.level}
                    onClick={() => setSelectedLevel(l.level)}
                    className={`w-7 h-7 rounded-full text-[9px] font-mono font-bold border transition-all duration-300 ${
                      l.level === selectedLevel
                        ? 'text-white scale-125 border-neon-pink'
                        : 'text-white-muted border-void-border hover:border-white-muted'
                    }`}
                    style={l.level === selectedLevel ? { backgroundColor: current.color, borderColor: current.color } : {}}
                  >
                    {l.level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.level}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <blockquote
                  className="text-xl md:text-2xl font-display italic leading-relaxed"
                  style={{ color: current.color }}
                >
                  {current.quote}
                </blockquote>
                <p className="text-sm text-white-muted leading-relaxed">
                  {current.description}
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4">
                {/* Toxicity bar visualization */}
                <div className="space-y-2">
                  {['Drenaje', 'Control Mental', 'Caos Emocional', 'Dependencia'].map((label, i) => {
                    const fillPct = Math.min(100, (current.level / 5) * 100 + (i % 2 === 0 ? -5 : 5));
                    return (
                      <div key={label}>
                        <div className="flex justify-between text-[9px] font-mono text-white-muted mb-1">
                          <span>{label}</span>
                          <span style={{ color: current.color }}>{Math.round(fillPct)}%</span>
                        </div>
                        <div className="h-1 bg-void-border rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: current.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${fillPct}%` }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <a
                  href={gfeTelegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-4 px-6 text-[11px] uppercase kerning-wide font-black tracking-widest text-white transition-all duration-300 hover-brat-glow"
                  style={{ backgroundColor: current.color }}
                >
                  Quiero el Nivel {current.level} →
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ===== SERVICES GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-void-border">
          {services.map((svc, index) => (
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
                href={gfeTelegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-neon-pink/30 pb-1 text-[10px] uppercase kerning-wide font-black tracking-widest text-neon-pink hover:border-neon-pink transition-all duration-300"
              >
                {svc.ctaText} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ToxicExperienceSection;
