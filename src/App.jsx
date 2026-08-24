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
      {/* Route Switcher Floating Pill */}
      <div
        className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full border border-ink/30 bg-white shadow-2xl backdrop-blur-xl ring-1 ring-black/5"
        style={{ zIndex: 9999, padding: '6px' }}
      >
        <button
          type="button"
          onClick={() => navigateTo('option1')}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold transition-all duration-200 cursor-pointer ${
            currentRoute === 'option1'
              ? 'bg-ink text-white shadow-md scale-105'
              : 'text-ink/70 hover:text-ink hover:bg-ink/10'
          }`}
          style={{ fontFamily: 'var(--font-mulish)', fontWeight: 700 }}
          title="Option 1"
          aria-label="Option 1"
        >
          1
        </button>
        <button
          type="button"
          onClick={() => navigateTo('option2')}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-bold transition-all duration-200 cursor-pointer ${
            currentRoute === 'option2'
              ? 'bg-ink text-white shadow-md scale-105'
              : 'text-ink/70 hover:text-ink hover:bg-ink/10'
          }`}
          style={{ fontFamily: 'var(--font-mulish)', fontWeight: 700 }}
          title="Option 2"
          aria-label="Option 2"
        >
          2
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
