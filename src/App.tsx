import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToxicExperienceSection } from './components/ToxicExperienceSection';
import { PresencialSection } from './components/PresencialSection';
import { TributesSection } from './components/TributesSection';
import { StoriesSection } from './components/StoriesSection';
import { MediaGallery } from './components/MediaGallery';
import { Footer } from './components/Footer';

// Static JSON import
import lolaDataRaw from './data/lola_profile.json';
import type { LolaProfileData } from './types/lola';

const lolaData = lolaDataRaw as LolaProfileData;

function App() {
  return (
    <div className="relative min-h-screen bg-void text-white antialiased selection:bg-neon-pink selection:text-white overflow-x-hidden">

      <Navbar data={lolaData} />

      <main>
        {/* Hero — Lola Haze, chat simulator, real description */}
        <Hero data={lolaData} />

        {/* Toxic GFE — Dinámicas, TGE, Terapias, Blackmail */}
        <ToxicExperienceSection data={lolaData} />

        {/* Presencial — Barcelona, cashmeets, sesiones, likes/dislikes */}
        <PresencialSection />

        {/* Tributos — Drenómetro + Leaderboard */}
        <TributesSection data={lolaData} />

        {/* Stories — Top tweets de @Lolahaze66 */}
        <StoriesSection data={lolaData} />

        {/* Gallery — Fotos reales + vídeos cornudo */}
        <MediaGallery data={lolaData} />
      </main>

      <Footer data={lolaData} />
    </div>
  );
}

export default App;
