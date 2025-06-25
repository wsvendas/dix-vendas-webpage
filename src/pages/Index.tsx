
import { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ReferencesSection from '@/components/ReferencesSection';
import VideoSection from '@/components/VideoSection';
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

  // Componente de seta animada personalizada
  const AnimatedArrow = () => (
    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-green-accent to-teal-accent rounded-full blur opacity-75 animate-pulse"></div>
      <div className="relative bg-black/80 p-3 rounded-full backdrop-blur-sm border border-green-accent/50 animate-bounce">
        <ArrowDown size={32} className="text-green-accent" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Efeitos de fundo neon globais */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-green-accent/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-secondary/25 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="relative">
        <HeroSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('testimonials')}
            className="hover:scale-110 transition-transform duration-300"
          >
            <AnimatedArrow />
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative">
        <TestimonialsSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('references')}
            className="hover:scale-110 transition-transform duration-300"
          >
            <AnimatedArrow />
          </button>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="relative">
        <ReferencesSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('video')}
            className="hover:scale-110 transition-transform duration-300"
          >
            <AnimatedArrow />
          </button>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="relative">
        <VideoSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('marketing')}
            className="hover:scale-110 transition-transform duration-300"
          >
            <AnimatedArrow />
          </button>
        </div>
      </section>

      {/* Marketing Digital Section */}
      <section id="marketing" className="relative">
        <MarketingSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('funnel')}
            className="hover:scale-110 transition-transform duration-300"
          >
            <AnimatedArrow />
          </button>
        </div>
      </section>

      {/* Funil de Vendas Section */}
      <section id="funnel" className="relative">
        <FunnelSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('trust')}
            className="hover:scale-110 transition-transform duration-300"
          >
            <AnimatedArrow />
          </button>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="relative">
        <TrustSection />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('cta')}
            className="hover:scale-110 transition-transform duration-300"
          >
            <AnimatedArrow />
          </button>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="cta">
        <CallToAction />
      </section>

      {/* Scroll to Top Button com efeito neon */}
      {showScrollTop && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-secondary to-green-accent rounded-full blur opacity-75 animate-pulse"></div>
          <button
            onClick={scrollToTop}
            className="relative bg-black/80 hover:bg-black/90 text-white p-4 rounded-full shadow-2xl transition-all duration-300 border border-purple-secondary/50 backdrop-blur-sm hover:scale-110"
          >
            <ArrowUp size={24} className="text-purple-secondary" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
