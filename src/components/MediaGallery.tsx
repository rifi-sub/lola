import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LolaProfileData, MediaExample } from '../types/lola';

export const MediaGallery: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const { media_examples } = data.visual_style;
  const [selectedMedia, setSelectedMedia] = useState<MediaExample | null>(null);

  // Filter to keep only photos
  const photos = media_examples.filter(m => m.type === 'photo');

  const getCaption = (description: string): string => {
    if (description.includes('Toxic Girlfriend') || description.includes('GFE') || description.includes('experiencia tóxica')) {
      return 'Toxic GFE · Caos y manipulación consentida';
    }
    if (description.includes('Segunda imagen') || description.includes('tóxica')) {
      return 'Control Mental · El juego empieza aquí';
    }
    if (description.includes('pies') || description.includes('holi')) {
      return 'Adoración Casual · Holi 👣';
    }
    return description;
  };

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
      id="galeria"
      style={{ background: '#08080A' }}
    >
      {/* Section border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent" />

      <div className="max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-20 items-center">
          <div className="w-full md:w-1/2">
            {/* Feature photo */}
            <div className="relative group overflow-hidden">
              <div className="absolute inset-0 bg-neon-pink/10 blur-2xl scale-95 pointer-events-none" />
              <div className="relative border border-void-border overflow-hidden">
                <img
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  src={photos[0]?.media_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"}
                  alt="Brat Girl Aesthetic"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-neon-pink uppercase tracking-widest">
                  // gifts4lola66
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="flex items-center gap-3">
              <span className="text-neon-pink font-mono text-xs">▶</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted border border-void-border px-3 py-1">
                Visual Gallery
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display leading-[0.9] text-white font-bold tracking-tight">
              Contenido &<br />
              <span className="italic font-normal text-neon-pink glow-pink">Visual Essays</span>
            </h2>
            <p className="text-white-muted max-w-md leading-relaxed font-light text-base">
              Una mirada exclusiva a su estilo de vida y dinámicas de poder. Ropa casual sexy,
              momentos cotidianos y contenido que captura la esencia de la Diosa Lola.
            </p>
            <div className="pt-2">
              <a
                href="https://t.me/+z0m5TkR0vCExNDU0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-neon-pink/40 text-neon-pink px-12 py-5 text-[11px] uppercase kerning-wide font-black tracking-widest hover:bg-neon-pink hover:text-white transition-all duration-300 hover-brat-glow"
              >
                Ver Contenido Completo →
              </a>
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.tweet_id + '-' + index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 md:col-span-4 cursor-pointer group"
              onClick={() => setSelectedMedia(photo)}
            >
              <div className="border border-void-border overflow-hidden aspect-square relative bg-void-surface">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-108 transition-all duration-700"
                  src={photo.media_url}
                  alt={photo.description}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500";
                  }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-void/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-neon-pink/20 border border-neon-pink/40 rounded-full p-3">
                    <span className="material-symbols-outlined text-white !text-3xl">zoom_in</span>
                  </div>
                </div>
                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-void to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[9px] font-mono text-neon-pink uppercase tracking-widest">
                    {photo.type} · @{data.profile.username}
                  </p>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-white-muted mt-3 font-semibold font-mono">
                {getCaption(photo.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-void/97 flex flex-col items-center justify-center p-6"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white bg-white-ghost hover:bg-neon-pink/20 border border-void-border hover:border-neon-pink/40 p-3 rounded-full transition-all duration-300"
              onClick={() => setSelectedMedia(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-4xl w-full max-h-[80vh] flex items-center justify-center relative border border-void-border"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                className="max-h-[80vh] max-w-full object-contain"
                src={selectedMedia.media_url}
                alt={selectedMedia.description}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1000";
                }}
              />
            </motion.div>

            {/* Caption */}
            <div className="text-center mt-6 max-w-xl" onClick={(e) => e.stopPropagation()}>
              <p className="text-neon-pink uppercase text-[10px] tracking-widest font-black font-mono mb-2">
                gifts4lola66 · {selectedMedia.type}
              </p>
              <h3 className="text-white text-lg font-display italic">
                {getCaption(selectedMedia.description)}
              </h3>
              <a
                href={selectedMedia.tweet_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white-muted hover:text-neon-pink text-xs mt-3 font-mono transition-colors"
              >
                Ver en X →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default MediaGallery;
