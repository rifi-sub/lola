import React from 'react';
import { motion } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

export const StoriesSection: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const { profile, tweets } = data;

  // Get the top 2 tweets with the highest engagement from relevant categories
  const filteredTweets = [...tweets]
    .filter(t =>
      t.topics_tags.includes('findom') ||
      t.topics_tags.includes('humillación') ||
      t.topics_tags.includes('control mental') ||
      t.topics_tags.includes('porn addiction') ||
      t.topics_tags.includes('toxic gfe')
    )
    .sort((a, b) => b.metrics.like_count - a.metrics.like_count)
    .slice(0, 2);

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  return (
    <section
      className="py-24 md:py-32 px-6 md:px-12 relative overflow-hidden"
      id="tweets"
      style={{ background: 'linear-gradient(to bottom, #08080A 0%, #050508 50%, #08080A 100%)' }}
    >
      {/* Top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-neon-pink/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">

        {/* Left Column: Title */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-28 h-fit">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-neon-pink font-mono text-xs">▶</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white-muted border border-void-border px-3 py-1">
              Brat Mindset
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display italic text-white font-bold mb-2">
            Diosa Stories &<br />
            <span className="font-normal not-italic text-neon-pink glow-pink">Provocaciones</span>
          </h2>
          <div className="h-px bg-gradient-to-r from-neon-pink/50 to-transparent w-32 mt-8 mb-6" />
          <p className="text-xs text-white-muted leading-relaxed max-w-xs">
            Extractos reales de su cuenta de X{' '}
            <a href="https://x.com/gifts4lola66" target="_blank" rel="noopener noreferrer"
              className="text-neon-pink hover:underline">
              @gifts4lola66
            </a>
            . Sin filtros, sin disculpas. Entiende el juego antes de jugar.
          </p>

          {/* Social stats */}
          <div className="mt-8 space-y-3">
            <div className="flex items-center gap-3 text-xs">
              <span className="text-neon-pink font-display font-black text-lg">{profile.followers_count}</span>
              <span className="text-white-muted font-mono uppercase tracking-widest text-[9px]">seguidores en X</span>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="text-white font-display font-black text-lg">∞</span>
              <span className="text-white-muted font-mono uppercase tracking-widest text-[9px]">víctimas confirmadas</span>
            </div>
          </div>
        </div>

        {/* Right Column: Tweet Cards */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredTweets.map((tweet, index) => (
            <motion.div
              key={tweet.tweet_id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative glass border border-void-border rounded-xl p-7 flex flex-col justify-between group hover:border-neon-pink/30 transition-all duration-500 overflow-hidden"
            >
              {/* Terminal header bar */}
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-deep-red/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-neon-pink/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <span className="font-mono text-[9px] text-white-muted ml-2 uppercase tracking-widest">
                  @{profile.username} · {tweet.tweet_id.slice(-6)}
                </span>
              </div>

              {/* Tweet Text */}
              <blockquote className="text-base md:text-lg font-display leading-relaxed text-white italic font-medium flex-1 mb-5">
                "{tweet.text.replace(/https:\/\/t\.me\/\S+/g, '').trim()}"
              </blockquote>

              <div className="space-y-4 pt-4 border-t border-void-border">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tweet.topics_tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-wider font-bold font-mono bg-neon-pink/10 text-neon-pink border border-neon-pink/20 px-2.5 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                  {tweet.dominance_signal && (
                    <span className="text-[9px] uppercase tracking-wider font-bold font-mono bg-white-ghost text-white-dim border border-white/10 px-2.5 py-1">
                      ⚡ {tweet.dominance_signal}
                    </span>
                  )}
                </div>

                {/* Profile + Metrics Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-neon-pink/30">
                      <img
                        className="w-full h-full object-cover"
                        src={profile.profile_image_url}
                        alt={profile.display_name}
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100";
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white">{profile.display_name}</p>
                      <p className="text-[9px] font-mono text-white-muted">
                        {formatDate(tweet.created_at)}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center gap-3 text-[9px] font-mono text-white-muted">
                    <span className="flex items-center gap-1">
                      <span className="text-neon-pink">♥</span>
                      {tweet.metrics.like_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>↻</span>
                      {tweet.metrics.retweet_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>👁</span>
                      {tweet.metrics.view_count}
                    </span>
                  </div>
                </div>

                {/* View on X link */}
                <a
                  href={tweet.tweet_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[9px] font-mono text-white-muted hover:text-neon-pink transition-colors duration-300"
                >
                  Ver en X →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StoriesSection;
