import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToxicExperienceSection } from './components/ToxicExperienceSection';
import { TributesSection } from './components/TributesSection';
import { StoriesSection } from './components/StoriesSection';
import { MediaGallery } from './components/MediaGallery';
import { Footer } from './components/Footer';

// Static JSON import
import lolaDataRaw from './data/lola_profile.json';
import type { LolaProfileData } from './types/lola';


// Cast the raw imported JSON data to our TS Interface
const lolaData = lolaDataRaw as LolaProfileData;

function App() {
  return (
    <div className="relative min-h-screen bg-void text-white antialiased selection:bg-neon-pink selection:text-white overflow-x-hidden">
      
      {/* Editorial Navigation */}
      <Navbar data={lolaData} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero data={lolaData} />

        {/* Toxic Girlfriend Experience Section */}
        <ToxicExperienceSection data={lolaData} />

        {/* Tributes & Findom Section */}
        <TributesSection data={lolaData} />

        {/* Tweets / Stories Section */}
        <StoriesSection data={lolaData} />

        {/* Media & Portfolio Gallery */}
        <MediaGallery data={lolaData} />
      </main>

      {/* Footer */}
      <Footer data={lolaData} />
    </div>
  );
}

export default App;
