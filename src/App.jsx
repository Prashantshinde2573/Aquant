import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import SearchModal from './components/SearchModal';
import CartDrawer from './components/CartDrawer';
import InquiryModal from './components/InquiryModal';
import ProductHero from './components/ProductHero';
import ProductDetails from './components/ProductDetails';
import BathroomConcepts from './components/BathroomConcepts';
import RelatedProducts from './components/RelatedProducts';
import Footer from './components/Footer';

// Independent Option 2 Page
import Option2App from './Option2App';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname.toLowerCase();
    const search = window.location.search.toLowerCase();
    const hash = window.location.hash.toLowerCase();

    if (path.includes('option2') || path.includes('option-2') || search.includes('option=2') || hash.includes('option2')) {
      return 'option2';
    }
    return 'option1';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('option2') || path.includes('option-2') || search.includes('option=2') || hash.includes('option2')) {
        setCurrentRoute('option2');
      } else {
        setCurrentRoute('option1');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route) => {
    if (route === 'option2') {
      window.history.pushState({}, '', '/option2');
      setCurrentRoute('option2');
    } else {
      window.history.pushState({}, '', '/');
      setCurrentRoute('option1');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-ink antialiased">
      {/* Route Switcher Floating Floating Pill */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-1 rounded-full border border-ink/20 bg-white/95 px-2 py-1.5 shadow-lg backdrop-blur-md">
        <button
          type="button"
          onClick={() => navigateTo('option1')}
          className={`rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
            currentRoute === 'option1'
              ? 'bg-ink text-white shadow-xs'
              : 'text-ink/60 hover:text-ink hover:bg-ink/5'
          }`}
        >
          Option 1 (Main)
        </button>
        <button
          type="button"
          onClick={() => navigateTo('option2')}
          className={`rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-200 ${
            currentRoute === 'option2'
              ? 'bg-ink text-white shadow-xs'
              : 'text-ink/60 hover:text-ink hover:bg-ink/5'
          }`}
        >
          Option 2
        </button>
      </div>

      {currentRoute === 'option2' ? (
        <Option2App />
      ) : (
        <>
          <Header
            onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
            onOpenSearch={() => setIsSearchOpen(true)}
            onOpenCart={() => setIsCartOpen(true)}
          />

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          />

          <SearchModal
            isOpen={isSearchOpen}
            onClose={() => setIsSearchOpen(false)}
          />

          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />

          <InquiryModal
            isOpen={isInquiryOpen}
            onClose={() => setIsInquiryOpen(false)}
          />

          <main className="relative min-h-screen bg-white">
            <ProductHero onOpenInquiry={() => setIsInquiryOpen(true)} />
            <ProductDetails />
            <BathroomConcepts />
            <RelatedProducts />
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}
