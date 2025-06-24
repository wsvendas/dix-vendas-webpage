
import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import MarketingSection from '@/components/MarketingSection';
import FunnelSection from '@/components/FunnelSection';
import TrustSection from '@/components/TrustSection';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-dark via-purple-900 to-black">
      {/* Hero Section */}
      <section id="hero" className="relative">
        <HeroSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('testimonials')}
            className="animate-bounce text-white hover:text-purple-secondary transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative">
        <TestimonialsSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('marketing')}
            className="animate-bounce text-white hover:text-purple-secondary transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* Marketing Digital Section */}
      <section id="marketing" className="relative">
        <MarketingSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('funnel')}
            className="animate-bounce text-white hover:text-purple-secondary transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* Funil de Vendas Section */}
      <section id="funnel" className="relative">
        <FunnelSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('trust')}
            className="animate-bounce text-white hover:text-purple-secondary transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="relative">
        <TrustSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('cta')}
            className="animate-bounce text-white hover:text-purple-secondary transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta">
        <CallToAction />
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-primary hover:bg-purple-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default Index;
