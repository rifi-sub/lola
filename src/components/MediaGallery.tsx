import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

const TELEGRAM_URL = "https://t.me/+kGMlimodG3k1ZmFk";

// Real photos from /public
const GALLERY_PHOTOS = [
  {
    src: '/lola_beach.jpg',
    caption: 'Lola Haze · Barcelona',
    type: 'photo',
  },
  {
    src: '/lola_feet_football.jpg',
    caption: 'Adoración · Holi 👣',
    type: 'photo',
  },
  {
    src: '/lola_mirror.jpg',
    caption: 'Out of reach',
    type: 'photo',
  },
  {
    src: '/lola_feet_black.jpg',
    caption: 'Trampling & Feet',
    type: 'photo',
  },
  {
    src: '/lola_concert.jpg',
    caption: 'Lola tiene vida. Tú pagas por entrar en ella.',
    type: 'photo',
  },
];

// Cornudo section videos
const CORNUDO_VIDEOS = [
  { src: '/IMG_8207.MP4', poster: '/lola_feet_black.jpg' },
  { src: '/IMG_8210.MP4', poster: '/lola_beach.jpg' },
  { src: '/IMG_8611.MP4', poster: '/lola_mirror.jpg' },
];

export const MediaGallery: React.FC<{ data: LolaProfileData }> = ({ data: _data }) => {
  const [selected, setSelected] = useState<{ src: string; caption: string } | null>(null);

  return (
    <section
      className="relative overflow-hidden"
      id="galeria"
      style={{ background: '#08080A' }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-neon-pink/20 to-transparent" />

      {/* ====== PHOTO GALLERY ====== */}
      <div className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative group overflow-hidden border border-void-border">
              <img
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                src="/lola_beach.jpg"
                alt="Lola Haze"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 font-mono text-[9px] text-neon-pink uppercase tracking-widest">
                // Lola Haze · @Lolahaze66
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
              Una mirada exclusiva a su estilo de vida y dinámicas de poder. Contenido auténtico, sin filtros.
            </p>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-neon-pink/40 text-neon-pink px-12 py-5 text-[11px] uppercase kerning-wide font-black tracking-widest hover:bg-neon-pink hover:text-white transition-all duration-300 hover-brat-glow"
            >
              Ver Contenido Completo →
            </a>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {GALLERY_PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="col-span-12 md:col-span-4 cursor-pointer group"
              onClick={() => setSelected(photo)}
            >
              <div className="border border-void-border overflow-hidden aspect-square relative bg-void-surface">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={photo.src}
                  alt={photo.caption}
                />
                <div className="absolute inset-0 bg-void/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-neon-pink/20 border border-neon-pink/40 rounded-full p-3">
                    <span className="material-symbols-outlined text-white !text-3xl">zoom_in</span>
                  </div>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-wider text-white-muted mt-3 font-semibold font-mono">
                {photo.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ====== CORNUDO SECTION ====== */}
      <div
        className="py-24 md:py-32 px-6 md:px-12 relative"
        style={{ background: 'linear-gradient(to bottom, #08080A 0%, #0A0005 50%, #08080A 100%)' }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-deep-red/30 to-transparent" />
        <div className="max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-deep-red font-mono text-xs">▶</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted border border-void-border px-3 py-1">
                  Dinámicas Especiales
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-display text-white tracking-tight leading-[0.9]">
                Muchos a<br />
                <span className="italic font-normal" style={{ color: '#FF0055', textShadow: '0 0 30px rgba(255,0,85,0.5)' }}>
                  su merced.
                </span>
              </h2>
            </div>
            <p className="max-w-md text-white-muted font-light text-sm leading-relaxed border-l-2 border-deep-red/30 pl-6">
              Tú no eres el único. Nunca lo has sido. Y lo sabes. Eso es exactamente lo que te tiene aquí.
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORNUDO_VIDEOS.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group overflow-hidden border border-void-border bg-void-surface aspect-[9/16] md:aspect-video"
              >
                <video
                  src={video.src}
                  poster={video.poster}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  onMouseEnter={e => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={e => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                />
                <div className="absolute inset-0 bg-void/40 group-hover:bg-transparent transition-colors duration-500 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-neon-pink/20 border border-neon-pink/40 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-white !text-2xl">play_arrow</span>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 font-mono text-[8px] text-neon-pink/60 uppercase tracking-widest">
                  hover para reproducir
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-deep-red/40 text-deep-red px-12 py-4 text-[11px] uppercase kerning-wide font-black hover:bg-deep-red hover:text-white transition-all duration-300"
            >
              Saber más →
            </a>
          </div>
        </div>
      </div>

      {/* Photo Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-void/97 flex flex-col items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 text-white bg-white-ghost hover:bg-neon-pink/20 border border-void-border hover:border-neon-pink/40 p-3 rounded-full transition-all duration-300"
              onClick={() => setSelected(null)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <motion.div
              initial={{ scale: 0.93 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.93 }}
              className="max-w-4xl w-full max-h-[80vh] border border-void-border overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img
                className="max-h-[80vh] max-w-full object-contain mx-auto"
                src={selected.src}
                alt={selected.caption}
              />
            </motion.div>
            <p className="text-neon-pink text-sm font-display italic mt-4">{selected.caption}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default MediaGallery;
