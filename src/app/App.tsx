import { SiteLayout } from '../components/layout/SiteLayout';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { ValuesSection } from '../sections/ValuesSection';
import { AmbitionsSection } from '../sections/AmbitionsSection';
import { ContactSection } from '../sections/ContactSection';

export function App() {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <AmbitionsSection />
      <ContactSection />
    </SiteLayout>
  );
}
