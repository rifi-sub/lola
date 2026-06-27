import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LolaProfileData, MediaExample } from '../types/lola';

export const MediaGallery: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const { media_examples } = data.visual_style;
  const [selectedMedia, setSelectedMedia] = useState<MediaExample | null>(null);

  // Filter to keep only photos
  const photos = media_examples.filter(m => m.type === 'photo');

  // Format developer metadata into elegant brat captions
  const getProductionCaption = (description: string): string => {
    if (description.includes("promocionando Toxic Girlfriend Experience") || description.includes("GFE")) {
      return "Toxic Girlfriend Experience: Caos y drama consentido";
    }
    if (description.includes("Segunda imagen") || description.includes("experiencia tóxica")) {
      return "Manipulación & Control Mental: El principio del juego";
    }
    if (description.includes("pies") || description.includes("holi")) {
      return "Adoración Casual: Holi 👣";
    }
    return description;
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden bg-white" id="galeria">

      {/* Gallery Header */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-24 items-center">
        <div className="w-full md:w-1/2">
          {/* Big Editorial Photo representing the visual essays */}
          <div className="relative group overflow-hidden border border-brand-black/10">
            <div className="absolute top-4 left-4 -right-4 -bottom-4 border-2 border-brand-pink-dark/20 -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-500"></div>
            <img
              className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              src={photos[0]?.media_url || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000"}
              alt="Brat Girl Aesthetic"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000";
              }}
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <span className="text-[10px] md:text-[11px] uppercase kerning-wide text-brand-pink-dark font-black tracking-widest bg-brand-pink-light/60 px-4 py-2 inline-block">
            VISUAL GALLERY
          </span>
          <h2 className="text-5xl md:text-7xl font-display leading-[1.1] text-brand-black font-bold tracking-tight">
            Contenido Reciente &amp;<br />
            <span className="italic font-normal text-brand-pink-dark">Visual Essays</span>
          </h2>
          <p className="text-brand-gray max-w-md leading-relaxed font-light text-base">
            Una mirada exclusiva a su estilo de vida y dinámicas de poder. Ropa casual sexy, pies, tributos y momentos cotidianos que capturan la esencia de Lola.
          </p>
          <div className="pt-4">
            <a
              href="https://t.me/gifts4lola66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-brand-black px-12 py-5 text-[11px] uppercase kerning-wide font-black tracking-widest hover:bg-brand-black hover:text-white transition-all duration-300 hover:scale-105"
            >
              Ver Galería Completa
            </a>
          </div>
        </div>
      </div>

      {/* Grid Layout conforming to Stitch template columns */}
      <div className="grid grid-cols-12 gap-8 items-center mt-12">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.tweet_id + '-' + index}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="col-span-12 md:col-span-4 cursor-pointer group"
            onClick={() => setSelectedMedia(photo)}
          >
            <div className="border border-brand-black/5 bg-brand-pink-light/10 overflow-hidden aspect-square relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                src={photo.media_url}
                alt={photo.description}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=500";
                }}
              />
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="material-symbols-outlined text-white !text-4xl">zoom_in</span>
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-brand-gray mt-3 font-semibold">
              {getProductionCaption(photo.description)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Media Modal Overlay */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-brand-black/95 flex flex-col items-center justify-center p-6"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
              onClick={() => setSelectedMedia(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Media Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="max-w-4xl w-full max-h-[80vh] flex items-center justify-center relative overflow-hidden border border-white/10"
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

            {/* Media Description */}
            <div className="text-center mt-6 max-w-xl" onClick={(e) => e.stopPropagation()}>
              <p className="text-brand-pink-dark uppercase text-[10px] tracking-widest font-black mb-2">
                gifts4lola66 / {selectedMedia.type}
              </p>
              <h3 className="text-white text-lg font-display italic">
                {getProductionCaption(selectedMedia.description)}
              </h3>
              <a
                href={selectedMedia.tweet_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white/50 hover:text-white text-xs mt-3 underline transition-colors"
              >
                Ver Tweet Original
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default MediaGallery;
