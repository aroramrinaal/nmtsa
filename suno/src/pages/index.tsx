import Footer from '../components/Footer'
import {
  HeroSection,
  ImpactStatsSection,
  ProgramHighlightsSection,
  ServicesSection,
  TherapyFeatureSection,
} from '../components/landing-page/LandingPageSections'
import Navbar from '../components/Navbar'

export default function NMTSALandingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <HeroSection />
        <ProgramHighlightsSection />
        <TherapyFeatureSection />
        <ImpactStatsSection />
        <ServicesSection />
      </main>

      <Footer />
    </div>
  )
}
