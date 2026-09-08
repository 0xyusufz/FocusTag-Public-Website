import { Navbar } from '../components/Navbar';
import { Hero } from '../sections/Hero';
import { TrustStatement } from '../sections/TrustStatement';
import { HowItWorks } from '../sections/HowItWorks';
import { StudentSection } from '../sections/StudentSection';
import { InstitutionSection } from '../sections/InstitutionSection';
import { ProductPreview } from '../sections/ProductPreview';
import { DownloadCTA } from '../sections/DownloadCTA';
import { Footer } from '../sections/Footer';

export function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <TrustStatement />
        <HowItWorks />
        <StudentSection />
        <InstitutionSection />
        <ProductPreview />
        <DownloadCTA />
      </main>

      <Footer />
    </div>
  );
}
