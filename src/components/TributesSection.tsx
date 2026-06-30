import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

const PAYPIG_LEADERBOARD = [
  { rank: 1, initials: 'M.R.', amount: '€1.500', badge: '🐷', title: 'Cerdo de Oro', date: 'Jun 2026' },
  { rank: 2, initials: 'J.L.', amount: '€950',  badge: '🐷', title: 'Paypig Elite',  date: 'Jun 2026' },
  { rank: 3, initials: 'A.G.', amount: '€720',  badge: '🐷', title: 'Subastado',      date: 'Jun 2026' },
  { rank: 4, initials: 'R.M.', amount: '€480',  badge: '💸', title: 'Obediente',      date: 'Jun 2026' },
  { rank: 5, initials: 'S.P.', amount: '€310',  badge: '💸', title: 'En formación',   date: 'Jun 2026' },
];

const DRAIN_PERCENT = 84;

const PaymentMethod: React.FC<{ icon: string; name: string; detail: string; glow?: boolean }> = ({ icon, name, detail, glow }) => (
  <div className={`glass rounded-xl p-5 flex items-center gap-4 border transition-all duration-300 hover:border-neon-pink/40 ${glow ? 'border-neon-pink/30 glow-box-pink' : 'border-void-border'}`}>
    <span className="text-2xl">{icon}</span>
    <div>
      <p className="font-bold text-white text-sm">{name}</p>
      <p className="text-[11px] text-white-muted font-mono">{detail}</p>
    </div>
  </div>
);

export const TributesSection: React.FC<{ data: LolaProfileData }> = (_props) => {
  const telegramUrl = "https://t.me/+kGMlimodG3k1ZmFk";

  const drainRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(drainRef, { once: true, margin: '-100px' });
  const [drainFilled, setDrainFilled] = useState(false);

  useEffect(() => {
    if (isInView && !drainFilled) {
      const timer = setTimeout(() => setDrainFilled(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView, drainFilled]);

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
      id="tributos"
      style={{ background: 'linear-gradient(to bottom, #08080A 0%, #0A0008 50%, #08080A 100%)' }}
    >
      {/* Section separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-deep-red/30 to-transparent" />
      <div className="absolute top-32 left-0 w-80 h-80 bg-deep-red/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-32 right-0 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto relative z-10">

        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-deep-red font-mono text-xs">▶</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted border border-void-border px-3 py-1">
              BUILT TO DRAIN
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 lg:items-end justify-between">
            <h2 className="text-5xl md:text-7xl font-display text-white tracking-tight leading-[0.9]">
              Tributa Inútil.<br />
              <span className="italic font-normal" style={{ color: '#FF0055', textShadow: '0 0 30px rgba(255,0,85,0.6)' }}>
                Pay to Exist.
              </span>
            </h2>
            <p className="max-w-md text-white-muted font-light text-base leading-relaxed border-l-2 border-deep-red/30 pl-6">
              No respondo mensajes gratis. Mi tiempo es oro y tu dinero me pertenece.
              Si quieres mi atención, demuestra tu valor. Los sumisos obedecen sin rechistar.
            </p>
          </div>
        </div>

        {/* ===== TWO COLUMN: DRENÓMETRO + LEADERBOARD ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20" ref={drainRef}>

          {/* LEFT: DRENÓMETRO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass border border-void-border rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-white-muted mb-1">
                  // DRENÓMETRO.exe
                </p>
                <h3 className="text-xl font-display text-white font-bold">Meta Mensual de Drenaje</h3>
              </div>
              <div className="text-right">
                <p className="text-3xl font-display font-black text-neon-pink glow-pink">{DRAIN_PERCENT}%</p>
                <p className="text-[9px] font-mono text-white-muted">Junio 2026</p>
              </div>
            </div>

            {/* Main drain bar */}
            <div className="mb-6">
              <div className="flex justify-between text-[10px] font-mono text-white-muted mb-2">
                <span>€0 drenados</span>
                <span>Meta: €5.000</span>
              </div>
              <div className="h-5 bg-void-border rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{
                    background: 'linear-gradient(90deg, #FF0055 0%, #FF2E93 50%, #FF6EB7 100%)',
                    boxShadow: '0 0 20px rgba(255,46,147,0.6)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: drainFilled ? `${DRAIN_PERCENT}%` : 0 }}
                  transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                >
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[8px] font-mono font-bold text-white whitespace-nowrap">
                    {DRAIN_PERCENT}%
                  </div>
                </motion.div>
              </div>
              <p className="text-[9px] font-mono text-white-muted mt-2 text-right">
                €{Math.round(5000 * DRAIN_PERCENT / 100).toLocaleString('es')} / €5.000 este mes
              </p>
            </div>

            {/* Sub-stats */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { label: 'Tributos', value: '47', unit: 'este mes' },
                { label: 'Promedio', value: '€89', unit: 'por tributo' },
                { label: 'Streak', value: '18', unit: 'días seguidos' },
              ].map(s => (
                <div key={s.label} className="bg-void-surface rounded-lg p-3 text-center border border-void-border">
                  <p className="text-lg font-display font-black text-neon-pink">{s.value}</p>
                  <p className="text-[8px] font-mono text-white-muted uppercase">{s.label}</p>
                  <p className="text-[7px] font-mono text-white-muted/50">{s.unit}</p>
                </div>
              ))}
            </div>

            {/* Rules */}
            <div className="space-y-3 border-t border-void-border pt-5">
              {[
                { icon: '💸', rule: 'Tributo de entrada', sub: 'Obligatorio antes de tu primer mensaje. Sin esto: bloqueo inmediato.' },
                { icon: '🔥', rule: 'Drenaje de fin de semana', sub: 'Sesiones intensivas para paypigs comprometidos.' },
              ].map(r => (
                <div key={r.rule} className="flex gap-3">
                  <span className="text-lg mt-0.5">{r.icon}</span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-white">{r.rule}</p>
                    <p className="text-[11px] text-white-muted">{r.sub}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT: LEADERBOARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass border border-void-border rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="mb-8">
              <p className="font-mono text-[9px] uppercase tracking-widest text-white-muted mb-1">
                // TOP_PAYPIGS.exe
              </p>
              <h3 className="text-xl font-display text-white font-bold">
                Top Paypigs del Mes
              </h3>
              <p className="text-[11px] text-white-muted mt-1">
                Ranking mensual · ¿Eres tú el próximo?
              </p>
            </div>

            {/* Leaderboard entries */}
            <div className="space-y-3 mb-8">
              {PAYPIG_LEADERBOARD.map((pig, idx) => (
                <motion.div
                  key={pig.rank}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`flex items-center gap-4 rounded-xl p-4 border transition-all duration-300 ${
                    pig.rank === 1
                      ? 'bg-neon-pink/10 border-neon-pink/30'
                      : pig.rank === 2
                      ? 'bg-white-ghost border-white/10'
                      : 'bg-void-surface border-void-border'
                  }`}
                >
                  {/* Rank */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-black flex-shrink-0 ${
                    pig.rank === 1 ? 'bg-neon-pink text-white' :
                    pig.rank === 2 ? 'bg-white/20 text-white' :
                    'bg-void-border text-white-muted'
                  }`}>
                    #{pig.rank}
                  </div>

                  {/* Avatar / Initials */}
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    pig.rank <= 3 ? 'bg-neon-pink/20 text-neon-pink' : 'bg-void-border text-white-muted'
                  }`}>
                    {pig.initials}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white">{pig.title}</p>
                    <p className="text-[9px] font-mono text-white-muted">{pig.date} · {pig.badge}</p>
                  </div>

                  {/* Amount */}
                  <div className="text-right flex-shrink-0">
                    <p className={`text-base font-display font-black ${
                      pig.rank === 1 ? 'text-neon-pink glow-pink' : 'text-white'
                    }`}>
                      {pig.amount}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to action to join leaderboard */}
            <div className="border border-neon-pink/20 rounded-xl p-5 text-center bg-neon-pink/5">
              <p className="text-sm font-display italic text-white-dim mb-1">
                "Tu nombre aquí. Si te atreves."
              </p>
              <p className="text-[10px] text-white-muted font-mono mb-4">
                Próximo drenaje masivo: disponible ahora
              </p>
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neon-pink text-white px-8 py-3 text-[10px] uppercase kerning-wide font-black hover:bg-deep-red transition-all duration-300 hover-brat-glow w-full"
              >
                Iniciar Tributo (Telegram) →
              </a>
            </div>
          </motion.div>
        </div>

        {/* ===== PAYMENT METHODS ===== */}
        <div className="border-t border-void-border pt-16">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted mb-8 text-center">
            // MÉTODOS_DE_PAGO
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <PaymentMethod icon="📱" name="Bizum" detail="Número privado vía Telegram" glow />
            <PaymentMethod icon="🎁" name="Amazon Wishlist" detail="Sorpréndeme con un capricho" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default TributesSection;
