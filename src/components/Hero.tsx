import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

interface HeroProps {
  data: LolaProfileData;
}

interface ChatMessage {
  id: number;
  from: 'lola' | 'user';
  text: string;
  time: string;
}

const getTime = () => {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
};

// Chill, sparse Lola messages — not insistent, just matter-of-fact dominant
const LOLA_AUTO_MESSAGES = [
  "paga pringado o no tendrás mi atención 💅",
  "visto ✓✓",
];

const AUTO_RESPONSES: Record<string, string> = {
  hola: "Hola 🥱 ¿Y el tributo?",
  cuanto: "¿Cuánto tienes? Eso es lo que debes.",
  pagar: "Telegram: t.me/gifts4lola66 — no repito.",
  por: "Por favor. JAJAJ.",
  favor: "No.",
  quiero: "Claro que quieres. Empieza a pagar.",
  ayuda: "La ayuda cuesta.",
  default: "Interesante. Ahora paga. 💋",
};

const TELEGRAM_DIRECT = "https://t.me/gifts4lola66";

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { profile } = data;

  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, from: 'lola', text: "paga pringado o no tendrás mi atención 💅", time: getTime() },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [autoIdx, setAutoIdx] = useState(1);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(2);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Only one more auto message (the "visto" one), then stops
  useEffect(() => {
    if (autoIdx < LOLA_AUTO_MESSAGES.length) {
      const timer = setTimeout(() => {
        addLolaMessage(LOLA_AUTO_MESSAGES[autoIdx]);
        setAutoIdx(prev => prev + 1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [autoIdx]);

  const addLolaMessage = (text: string) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: msgIdRef.current++,
        from: 'lola',
        text,
        time: getTime(),
      }]);
    }, 1200);
  };

  const handleUserSend = () => {
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    setMessages(prev => [...prev, {
      id: msgIdRef.current++,
      from: 'user',
      text: trimmed,
      time: getTime(),
    }]);
    setInputVal('');

    const lower = trimmed.toLowerCase();
    const key = Object.keys(AUTO_RESPONSES).find(k => lower.includes(k)) ?? 'default';
    setTimeout(() => addLolaMessage(AUTO_RESPONSES[key]), 800);
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 pt-28 pb-16 md:pt-36 gap-12 lg:gap-16 max-w-[1600px] mx-auto overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-deep-red/5 rounded-full blur-3xl pointer-events-none" />

      {/* ---- LEFT COLUMN ---- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-full lg:w-1/2 space-y-8 z-10"
      >
        {/* Monospace tag */}
        <div className="flex items-center gap-3">
          <span className="text-neon-pink font-mono text-xs">▶</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted border border-void-border px-3 py-1">
            {profile.username} · +2 años de experiencia
          </span>
        </div>

        {/* Main headline */}
        <div className="space-y-1">
          <h1 className="text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[0.88] font-display font-black tracking-tighter text-white">
            Lola
          </h1>
          <h1 className="text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[0.88] font-display font-black tracking-tighter italic text-neon-pink glow-pink">
            Haze.
          </h1>
        </div>

        {/* Description — her own words */}
        <div className="border-l-2 border-neon-pink/40 pl-6 space-y-4 max-w-xl">
          <p className="text-base md:text-lg text-white-dim leading-relaxed">
            Tu vida es monótona y aburrida, cada día te pesa más todo: el trabajo, la universidad, tu aburrida novia…
            Estás harto de ser un adicto al porno, ya no es suficiente,
            necesitas darle un poco de sentido a tu miserable existencia.
          </p>
          <p className="text-base md:text-lg text-white-dim leading-relaxed">
            <span className="text-neon-pink font-semibold">Me necesitas.</span> Una chica joven, guapa, interesante y mala.
            Conmigo todo va a volver a tener sentido.
          </p>
          <p className="text-sm text-white-muted leading-relaxed">
            Me gustan los juegos de rol, hago sesiones de terapia para enfermos como tú, blackmail,
            Toxic Girlfriend Experience y mucho más.
          </p>
          <p className="text-xs font-mono text-white-muted/60 uppercase tracking-widest">
            Solo me interesan los sumisos solventes, con las cosas claras.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-8 border-t border-void-border pt-6">
          <div>
            <div className="text-2xl font-display font-black text-white">+2</div>
            <div className="text-[10px] uppercase tracking-widest text-white-muted font-mono">Años exp.</div>
          </div>
          <div className="w-px bg-void-border" />
          <div>
            <div className="text-2xl font-display font-black text-neon-pink">BCN</div>
            <div className="text-[10px] uppercase tracking-widest text-white-muted font-mono">Presencial</div>
          </div>
          <div className="w-px bg-void-border" />
          <div>
            <div className="text-2xl font-display font-black text-white">0</div>
            <div className="text-[10px] uppercase tracking-widest text-white-muted font-mono">Msgs gratis</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={TELEGRAM_DIRECT}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-neon-pink text-white px-10 py-5 text-[11px] uppercase kerning-wide font-black hover:bg-deep-red transition-all duration-300 hover-brat-glow pulse-glow-pink"
          >
            Entrar al Caos Tóxico
          </a>
          <a
            href="#gfe"
            className="text-center border border-white/20 text-white-dim px-10 py-5 text-[11px] uppercase kerning-wide font-bold hover:border-neon-pink/50 hover:text-neon-pink transition-all duration-300"
          >
            Saber Más →
          </a>
        </div>
      </motion.div>

      {/* ---- RIGHT COLUMN: TELEGRAM CHAT ---- */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="w-full lg:w-5/12 z-10"
      >
        <div className="relative mx-auto max-w-sm">
          <div className="absolute inset-0 bg-neon-pink/10 blur-2xl rounded-[40px] scale-110 pointer-events-none" />

          <div
            className="relative bg-void-mid rounded-[32px] border border-void-border overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(255,46,147,0.15), 0 0 120px rgba(255,46,147,0.05)' }}
          >
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2 text-[10px] text-white-muted font-mono">
              <span>{new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}</span>
              <div className="w-20 h-4 bg-void rounded-full mx-auto" />
              <span>●●●</span>
            </div>

            {/* Telegram header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-void-border bg-void-surface">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-neon-pink/40">
                <img
                  src="/photo_2026-06-30_20-24-07.jpg"
                  alt="Lola Haze"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = profile.profile_image_url;
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">Lola Haze 💘</p>
                <p className="text-[10px] text-neon-pink font-mono">
                  {isTyping ? (
                    <span className="flex items-center gap-1">
                      escribiendo
                      <span className="flex gap-0.5">
                        {[0, 1, 2].map(i => (
                          <motion.span key={i} className="w-1 h-1 bg-neon-pink rounded-full inline-block"
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                          />
                        ))}
                      </span>
                    </span>
                  ) : 'en línea ahora'}
                </p>
              </div>
              <div className="flex gap-3 text-white-muted">
                <span className="material-symbols-outlined !text-base">call</span>
                <span className="material-symbols-outlined !text-base">more_vert</span>
              </div>
            </div>

            {/* Chat area */}
            <div
              className="h-72 overflow-y-auto px-3 py-4 space-y-2 bg-void no-scrollbar"
              style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,46,147,0.04) 0%, transparent 70%)' }}
            >
              <AnimatePresence>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                      msg.from === 'lola'
                        ? 'bg-void-surface text-white rounded-tl-sm border border-void-border'
                        : 'bg-neon-pink/80 text-white rounded-tr-sm'
                    }`}>
                      <p>{msg.text}</p>
                      <p className={`text-[9px] mt-1 ${msg.from === 'lola' ? 'text-white-muted' : 'text-white/60'} text-right`}>
                        {msg.time}{msg.from === 'user' && ' ✓✓'}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex justify-start"
                  >
                    <div className="bg-void-surface border border-void-border px-3 py-2 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                      {[0, 1, 2].map(i => (
                        <motion.div key={i}
                          className="w-1.5 h-1.5 bg-neon-pink/60 rounded-full"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={chatEndRef} />
            </div>

            {/* Input area */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-void-border bg-void-surface">
              <input
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleUserSend()}
                placeholder="Escríbele algo a Lola..."
                className="flex-1 bg-void border border-void-border rounded-full px-4 py-2 text-xs text-white placeholder-white-muted/50 focus:outline-none focus:border-neon-pink/40 transition-colors"
              />
              <button
                onClick={handleUserSend}
                className="w-8 h-8 rounded-full bg-neon-pink flex items-center justify-center flex-shrink-0 hover:bg-deep-red transition-colors"
              >
                <span className="material-symbols-outlined !text-sm text-white">send</span>
              </button>
            </div>

            <p className="text-[9px] text-white-muted text-center py-2 font-mono">
              ⚡ Simulador · Telegram real → arriba
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
