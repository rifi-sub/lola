import React from 'react';
import { motion } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

export const TributesSection: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const telegramUrl = "https://t.me/+z0m5TkR0vCExNDU0";
  const kinks = data.content_summary.fetishes_and_kinks;


  return (
    <section className="py-24 md:py-32 bg-white px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden" id="tributos">

      {/* Introduction Row */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-24 items-center">
        {/* Left Side: Editorial Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative group"
        >
          <div className="absolute top-4 left-4 -right-4 -bottom-4 border-2 border-brand-black/20 -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-500"></div>
          <div className="aspect-[4/5] overflow-hidden bg-brand-pink-light/20 border border-brand-black/10">
            <img
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              src="https://pbs.twimg.com/media/HKic9vtXYAAP7tU?format=jpg&name=large" // Premium visual context for luxury/gifts
              alt="Spoiled Lifestyle Reference"
            />
          </div>
        </motion.div>

        {/* Right Side: Copywriting & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 space-y-8"
        >
          <span className="text-[10px] md:text-[11px] uppercase kerning-wide text-brand-pink-dark font-black tracking-widest bg-brand-pink-light/60 px-4 py-2 inline-block">
            BUILT TO DRAIN
          </span>

          <h2 className="text-4xl md:text-6xl font-display leading-[1.1] text-brand-black font-bold">
            Tributa Inútil.<br />
            <span className="italic font-normal text-brand-pink-dark">Pay to Exist.</span>
          </h2>

          <p className="text-brand-gray max-w-lg leading-relaxed font-light text-base md:text-lg">
            No respondo mensajes gratis. Mi tiempo es oro y tu dinero me pertenece. Si quieres mi atención, demuestra tu valor a través de un tributo. Los sumisos obedecen sin rechistar; el drenaje es tu único propósito.
          </p>

          {/* Quick Findom Rules list */}
          <div className="space-y-4 pt-4 border-t border-brand-black/10">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-brand-pink-dark mt-0.5">check_circle</span>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-brand-black">Tributo de Entrada</h4>
                <p className="text-xs text-brand-gray">Obligatorio antes de enviar un primer mensaje en Telegram. De lo contrario, bloqueo inmediato.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined text-brand-pink-dark mt-0.5">check_circle</span>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-brand-black">Drenaje de Fin de Semana</h4>
                <p className="text-xs text-brand-gray">Sesiones intensivas de drenaje financiero para mantener a los paypigs bajo control mental.</p>
              </div>
            </div>
          </div>

          {/* Kinks tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {kinks.map(k => (
              <span key={k} className="text-[9px] uppercase tracking-wider font-bold text-brand-pink-dark bg-brand-pink-light/40 px-2 py-0.5 border border-brand-pink-dark/10">
                {k}
              </span>
            ))}
          </div>

          <div className="pt-6">
            <a
              href={telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-black text-brand-black hover:bg-brand-black hover:text-white px-12 py-5 text-[11px] uppercase kerning-wide font-black tracking-widest transition-all duration-300 hover:scale-105 hover-brat-glow"
            >
              Iniciar Tributo (Telegram)
            </a>
          </div>
        </motion.div>
      </div>


      {/* 3-Column Visual Grid / Dynamic Layout from Stitch */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-brand-black/10">
        <div className="space-y-4">
          <div className="aspect-video overflow-hidden bg-brand-pink-light/10 border border-brand-pink-dark/15">
            <img
              src="https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=600"
              alt="Cash Tribute reference"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h4 className="font-display font-bold text-xl text-brand-black">01 / Drenaje</h4>
          <p className="text-xs text-brand-gray font-light">Vacía tu cuenta bancaria y sé testigo de cómo la Diosa Lola se consiente con tus tributos.</p>
        </div>

        <div className="space-y-4">
          <div className="aspect-video overflow-hidden bg-brand-pink-light/10 border border-brand-pink-dark/15">
            <img
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=600"
              alt="Princess shoes reference"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h4 className="font-display font-bold text-xl text-brand-black">02 / Adoración</h4>
          <p className="text-xs text-brand-gray font-light">Sumisión extrema, humillación consentida de tus vicios y obsesiones más oscuras.</p>
        </div>

        <div className="space-y-4">
          <div className="aspect-video overflow-hidden bg-brand-pink-light/10 border border-brand-pink-dark/15">
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=600"
              alt="Shopping reference"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <h4 className="font-display font-bold text-xl text-brand-black">03 / Caprichos</h4>
          <p className="text-xs text-brand-gray font-light">Regalos directos, compras de wishlist y caprichos de brat princess financiados por ti.</p>
        </div>
      </div>
    </section>
  );
};
export default TributesSection;
