import React from 'react';
import { motion } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

export const ToxicExperienceSection: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const gfeTelegramUrl = "https://t.me/+D91Mh70fnqczYjZk";
  const themes = data.content_summary.main_themes;


  // Content for the packages based on Lola's themes
  const services = [
    {
      num: '01 / Drama',
      title: 'Manipulación & Caos',
      desc: 'Relaciones tóxicas, infidelidades simuladas, drama diario, audios provocadores y mensajes diseñados para desestabilizar tu mente.',
      ctaText: 'Entrar al Caos'
    },
    {
      num: '02 / Control',
      title: 'Mental Control',
      desc: 'Terapia de adicción al porno con shaming directo. Te enseño a depender únicamente de mí, a través de sesiones y límites borrados.',
      ctaText: 'Iniciar Terapia'
    },
    {
      num: '03 / Drenaje',
      title: 'Financial Domination',
      desc: 'Dinámicas de sumisión financiera. Tributos espontáneos en vivo, drenaje de cuentas y adoración exclusiva a tu Diosa.',
      ctaText: 'Tributar Ahora'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-brand-pink-light/35 px-6 md:px-12" id="gfe">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] md:text-[11px] uppercase kerning-wide text-brand-pink-dark font-black tracking-widest block mb-4">
              The Reality Show
            </span>
            <h2 className="text-4xl md:text-6xl font-display text-brand-black tracking-tight leading-none">
              Toxic Girlfriend<br />
              <span className="italic text-brand-pink-dark font-normal">Experience.</span>
            </h2>
          </div>
          <div className="max-w-sm space-y-4">
            <p className="text-brand-black/60 font-light text-sm md:text-base leading-relaxed border-l border-brand-pink-dark/40 pl-6">
              "¿Quieres una novia perfecta? Entonces esto no es para ti." <br />
              Fotos, vídeos, audios, celos, control y puro desorden consentido.
            </p>
            <div className="flex flex-wrap gap-2 pl-6">
              {themes.slice(0, 4).map(t => (
                <span key={t} className="text-[9px] uppercase tracking-wider font-bold text-brand-pink-dark bg-brand-pink-light px-2 py-0.5">
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </div>


        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-brand-black/10">
          {services.map((svc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 md:p-12 border-b md:border-b-0 md:border-r last:border-r-0 border-brand-black/10 group hover:bg-white transition-all duration-700 relative overflow-hidden"
            >
              <span className="text-[10px] font-bold text-brand-pink-dark tracking-widest mb-12 block">
                {svc.num}
              </span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-brand-black mb-6 group-hover:italic group-hover:pl-4 group-hover:text-brand-pink-dark transition-all duration-500">
                {svc.title}
              </h3>
              <p className="text-sm font-light text-brand-gray leading-relaxed mb-12 min-h-[80px]">
                {svc.desc}
              </p>
              
              <a
                href={gfeTelegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b-2 border-brand-black pb-1 text-[10px] uppercase kerning-wide font-black tracking-widest text-brand-black hover:text-brand-pink-dark hover:border-brand-pink-dark transition-all duration-300"
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
