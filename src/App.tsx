import { useReveal } from '@/hooks/useReveal';
import { Background } from '@/components/Background';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Biosecurity } from '@/components/Biosecurity';
import { Solutions } from '@/components/Solutions';
import { Resources } from '@/components/Resources';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import StewardFlow from '@/components/steward-flow/StewardFlow';
function App() {
  useReveal();

  return (
    <div id="top" className="relative min-h-screen">
      <Background />
      <Header />
      <main>
        <Hero />
        <Services />
        
        {/* Steward Flow Micro-SaaS Tool Section */}
        <section id="steward-flow" className="py-12">
          <StewardFlow />
        </section>

        <Biosecurity />
        <Solutions />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;