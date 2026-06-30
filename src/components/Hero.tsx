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

const LOLA_MESSAGES = [
  "¿Ya tributaste hoy? 💸",
  "Tu cartera me pertenece. 💋",
  "Visto ✓✓",
  "El silencio también se paga inútil 😘",
  "Mmmm… de quien me voy a aprovechar esta noche…?",
  "Born to be spoiled. Built to drain. 🐍",
  "Tributas o bloqueo. No hay más opciones.",
  "¿Sigues ahí? Eso te costará extra 🫦",
];

const AUTO_RESPONSES: Record<string, string> = {
  hola: "Hola 🥱 ¿Y el tributo?",
  quiero: "Claro que quieres. Todo el mundo quiere. Empieza a pagar.",
  pagar: "Bizum: 666·XXX·XXX. No pidas nada a cambio.",
  cuanto: "¿Cuánto tienes? Eso es lo que debes. JAJAJ",
  por: "Por favor… qué ternura. No te va a servir de nada.",
  favor: "Favor. JAJAJ. No.",
  default: "Interesante. Ahora paga. 💋",
};

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { profile } = data;
  const telegramUrl = "https://t.me/+z0m5TkR0vCExNDU0";

  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, from: 'lola', text: "¿Ya tributaste hoy? 💸", time: getTime() },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [lolaIdx, setLolaIdx] = useState(1);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(2);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto Lola messages every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (lolaIdx < LOLA_MESSAGES.length) {
        addLolaMessage(LOLA_MESSAGES[lolaIdx]);
        setLolaIdx(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [lolaIdx]);

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

    const userMsg: ChatMessage = {
      id: msgIdRef.current++,
      from: 'user',
      text: trimmed,
      time: getTime(),
    };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');

    // Find auto response
    const lower = trimmed.toLowerCase();
    const key = Object.keys(AUTO_RESPONSES).find(k => lower.includes(k)) ?? 'default';
    setTimeout(() => {
      addLolaMessage(AUTO_RESPONSES[key]);
    }, 600);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleUserSend();
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 pt-28 pb-16 md:pt-36 gap-12 lg:gap-16 max-w-[1600px] mx-auto overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-deep-red/5 rounded-full blur-3xl pointer-events-none" />

      {/* Left Column: Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-full lg:w-1/2 space-y-10 z-10"
      >
        {/* Monospace tag */}
        <div className="flex items-center gap-3">
          <span className="text-neon-pink font-mono text-xs">▶</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted border border-void-border px-3 py-1">
            {profile.username} / BRAT MODE ACTIVATED
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-2">
          <h1 className="text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[0.88] font-display font-black tracking-tighter text-white">
            Spanish
          </h1>
          <h1 className="text-7xl md:text-[6rem] lg:text-[7.5rem] leading-[0.88] font-display font-black tracking-tighter italic text-neon-pink glow-pink">
            Brat.
          </h1>
        </div>

        {/* Quote */}
        <div className="border-l-2 border-neon-pink/50 pl-6 space-y-3">
          <p className="text-xl md:text-2xl font-display text-white-dim italic font-medium">
            "Born to be spoiled. Built to drain."
          </p>
          <p className="text-sm text-white-muted font-light leading-relaxed max-w-md">
            Findom española. Toxic Girlfriend Experience. Drenaje sin piedad, humillación con estilo.
            Tu dinero tiene un destino: <span className="text-neon-pink font-semibold">yo.</span>
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex gap-8 border-t border-void-border pt-6">
          <div>
            <div className="text-2xl font-display font-black text-white">{profile.followers_count}+</div>
            <div className="text-[10px] uppercase tracking-widest text-white-muted font-mono">Followers</div>
          </div>
          <div className="w-px bg-void-border" />
          <div>
            <div className="text-2xl font-display font-black text-neon-pink">∞</div>
            <div className="text-[10px] uppercase tracking-widest text-white-muted font-mono">Paypigs</div>
          </div>
          <div className="w-px bg-void-border" />
          <div>
            <div className="text-2xl font-display font-black text-white">0</div>
            <div className="text-[10px] uppercase tracking-widest text-white-muted font-mono">Free Msgs</div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={telegramUrl}
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

      {/* Right Column: Telegram Chat Mockup */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        className="w-full lg:w-5/12 z-10"
      >
        {/* Phone Frame */}
        <div className="relative mx-auto max-w-sm">
          {/* Ambient glow behind phone */}
          <div className="absolute inset-0 bg-neon-pink/10 blur-2xl rounded-[40px] scale-110 pointer-events-none" />
          
          {/* Phone shell */}
          <div className="relative bg-void-mid rounded-[32px] border border-void-border overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 0 60px rgba(255,46,147,0.15), 0 0 120px rgba(255,46,147,0.05)' }}>
            
            {/* Status bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2 text-[10px] text-white-muted font-mono">
              <span>{new Date().getHours()}:{new Date().getMinutes().toString().padStart(2,'0')}</span>
              <div className="w-20 h-4 bg-void rounded-full mx-auto" />
              <div className="flex gap-1">
                <span>●●●</span>
              </div>
            </div>

            {/* Telegram Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-void-border bg-void-surface">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-neon-pink/40">
                <img
                  src={profile.profile_image_url}
                  alt="Lola"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100";
                  }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">Diosa Lola 💘</p>
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

            {/* Chat Area */}
            <div className="h-80 overflow-y-auto px-3 py-4 space-y-2 bg-void no-scrollbar"
              style={{ backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(255,46,147,0.04) 0%, transparent 70%)' }}>
              
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

                {/* Typing indicator */}
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

            {/* Input Area */}
            <div className="flex items-center gap-2 px-3 py-3 border-t border-void-border bg-void-surface">
              <input
                type="text"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escríbele algo a Lola..."
                className="flex-1 bg-void border border-void-border rounded-full px-4 py-2 text-xs text-white placeholder-white-muted/50 focus:outline-none focus:border-neon-pink/40 transition-colors"
              />
              <button
                onClick={handleUserSend}
                className="w-8 h-8 rounded-full bg-neon-pink flex items-center justify-center flex-shrink-0 hover:bg-deep-red transition-colors hover-brat-glow"
              >
                <span className="material-symbols-outlined !text-sm text-white">send</span>
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-[9px] text-white-muted text-center py-2 font-mono">
              ⚡ Simulador. Telegram real → arriba.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
