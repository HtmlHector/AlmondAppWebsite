import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import ScrollingCategories from '../components/ScrollingCategories';
import EvaluateQualitySection from '../components/EvaluateQualitySection';
import FeaturesGrid from '../components/FeaturesGrid';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';
import BlogPreview from '../components/BlogPreview';
import DownloadCTA from '../components/DownloadCTA';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <ScrollingCategories />
      <EvaluateQualitySection />
      <FeaturesGrid />
      <Testimonials />
      <PricingSection />
      <BlogPreview />
      <DownloadCTA />
      <Footer />
    </div>
  );
}