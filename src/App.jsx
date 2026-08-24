import React, { useState } from 'react';
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

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-ink antialiased">
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
    </div>
  );
}
