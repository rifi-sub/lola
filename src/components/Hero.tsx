import React from 'react';
import { motion } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';


interface HeroProps {
  data: LolaProfileData;
}

export const Hero: React.FC<HeroProps> = ({ data }) => {
  const { profile } = data;
  const telegramUrl = "https://t.me/+z0m5TkR0vCExNDU0"; // Diosa Lola Telegram link

  // Splitting bio text by newlines
  const bioLines = profile.bio.split('\n');

  return (
    <section
      id="inicio"
      className="relative pt-32 pb-24 md:pt-48 md:pb-36 px-6 md:px-12 max-w-[1600px] mx-auto min-h-screen flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-16"
    >
      {/* Left Column: Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full lg:w-5/12 space-y-8 md:space-y-12 z-10"
      >
        <span className="text-[10px] md:text-[11px] uppercase kerning-wide text-brand-pink-dark font-black tracking-widest bg-brand-pink-light/60 px-4 py-2 inline-block">
          {profile.username} / BRAT STYLE
        </span>
        
        <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] leading-[0.95] font-display text-brand-black tracking-tighter">
          Spanish<br />
          <span className="italic font-normal pl-8 md:pl-20 text-brand-pink-dark">
            Brat.
          </span>
        </h1>

        <div className="space-y-6 max-w-md border-l-2 border-brand-pink-dark/30 pl-6">
          <p className="text-xl md:text-2xl font-display font-medium text-brand-black italic">
            "Born to be spoiled. Built to drain."
          </p>
          <div className="text-sm md:text-base font-light text-brand-gray leading-relaxed space-y-2">
            {bioLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-brand-black text-white px-8 py-5 text-[11px] uppercase kerning-wide font-bold hover:bg-brand-pink-dark hover:text-white transition-all duration-300 hover-brat-glow"
          >
            Entrar al Caos Tóxico
          </a>
          <a
            href="#gfe"
            className="text-center border border-brand-black/20 text-brand-black px-8 py-5 text-[11px] uppercase kerning-wide font-bold hover:border-brand-black transition-all duration-300"
          >
            Saber Más
          </a>
        </div>
      </motion.div>

      {/* Right Column: Hero Image Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        className="w-full lg:w-6/12 relative group"
      >
        {/* Background Decorative Pink Frame */}
        <div className="absolute top-4 left-4 -right-4 -bottom-4 border-2 border-brand-pink-dark/40 -z-10 group-hover:top-2 group-hover:left-2 group-hover:-right-2 group-hover:-bottom-2 transition-all duration-700"></div>
        
        {/* Main Image Container */}
        <div className="relative overflow-hidden border border-brand-black/10 bg-brand-pink-light/20 aspect-[4/5] md:aspect-[4/3] lg:aspect-[4/5] w-full flex items-center justify-center">
          <img
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out group-hover:scale-105"
            src={profile.profile_image_url}
            alt={profile.display_name}
            onError={(e) => {
              // Fallback to high quality placeholder if the X image is broken/unavailable
              e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000";
            }}
          />
          
          {/* Overlay Tag */}
          <div className="absolute bottom-6 right-6 bg-brand-black text-white px-4 py-2 text-[9px] uppercase tracking-widest kerning-wide">
            Verificada 💘
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Hero;
