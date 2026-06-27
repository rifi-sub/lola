import React from 'react';
import { motion } from 'framer-motion';
import type { LolaProfileData } from '../types/lola';

export const StoriesSection: React.FC<{ data: LolaProfileData }> = ({ data }) => {
  const { profile, tweets } = data;


  // Get the top 2 tweets with the highest engagement
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


  return (
    <section className="py-24 md:py-32 bg-brand-pink-light/10 border-y border-brand-black/5 px-6 md:px-12" id="tweets">
      <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Column: Title */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-28 h-fit">
          <span className="text-[10px] md:text-[11px] uppercase kerning-wide text-brand-pink-dark font-black tracking-widest block mb-4">
            Brat Mindset
          </span>
          <h2 className="text-4xl md:text-5xl font-display italic text-brand-black font-bold">
            Diosa Stories &amp;<br />
            <span className="font-normal not-italic text-brand-pink-dark">Provocaciones</span>
          </h2>
          <div className="h-0.5 bg-brand-pink-dark w-24 mt-8"></div>
          <p className="text-xs text-brand-gray mt-6 max-w-xs leading-relaxed">
            Extractos reales de su cuenta de X (@gifts4lola66). Sin filtros, sin disculpas. Entiende el juego antes de jugar.
          </p>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredTweets.map((tweet, index) => (
            <motion.div
              key={tweet.tweet_id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-6 p-8 bg-white border border-brand-black/5 pink-glow-border transition-all duration-300 flex flex-col justify-between"
            >
              {/* Tweet Text */}
              <p className="text-lg md:text-xl font-display leading-relaxed text-brand-black italic font-medium">
                "{tweet.text.replace(/https:\/\/t\.me\/\S+/g, '').trim()}"
              </p>

              <div className="space-y-4 pt-4 border-t border-brand-black/5">
                {/* Topics Tag Badges */}
                <div className="flex flex-wrap gap-2">
                  {tweet.topics_tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-wider font-bold bg-brand-pink-light text-brand-pink-dark px-2.5 py-1"
                    >
                      #{tag}
                    </span>
                  ))}
                  {tweet.dominance_signal && (
                    <span className="text-[9px] uppercase tracking-wider font-bold bg-brand-black text-white px-2.5 py-1">
                      {tweet.dominance_signal}
                    </span>
                  )}
                </div>

                {/* Profile Details */}
                <div className="flex items-center gap-4">
                  <img
                    className="w-10 h-10 object-cover border border-brand-pink-dark/20"
                    src={profile.profile_image_url}
                    alt={profile.display_name}
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100";
                    }}
                  />
                  <div>
                    <p className="text-[10px] uppercase kerning-wide font-black text-brand-black">
                      {profile.display_name}
                    </p>
                    <p className="text-[9px] uppercase tracking-widest text-brand-gray">
                      @{profile.username}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StoriesSection;
