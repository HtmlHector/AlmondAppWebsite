import Navbar from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ProductShowcase from '../components/ProductShowcase';
import FeaturesSection from '../components/FeaturesGrid';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFFFFE]">
      <Navbar />
      <HeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
