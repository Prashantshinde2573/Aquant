import React, { useState } from 'react';
import HeaderOption2 from './components/option2/HeaderOption2';
import MobileMenuOption2 from './components/option2/MobileMenuOption2';
import SearchModalOption2 from './components/option2/SearchModalOption2';
import CartDrawerOption2 from './components/option2/CartDrawerOption2';
import InquiryModalOption2 from './components/option2/InquiryModalOption2';
import ProductHeroOption2 from './components/option2/ProductHeroOption2';
import ProductDetailsOption2 from './components/option2/ProductDetailsOption2';
import BathroomConceptsOption2 from './components/option2/BathroomConceptsOption2';
import RelatedProductsOption2 from './components/option2/RelatedProductsOption2';
import FooterOption2 from './components/option2/FooterOption2';

export default function Option2App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-white text-ink antialiased">
      <HeaderOption2
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <MobileMenuOption2
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <SearchModalOption2
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      <CartDrawerOption2
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <InquiryModalOption2
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      <main className="relative min-h-screen bg-white">
        <ProductHeroOption2 onOpenInquiry={() => setIsInquiryOpen(true)} />
        <ProductDetailsOption2 />
        <BathroomConceptsOption2 />
        <RelatedProductsOption2 />
      </main>

      <FooterOption2 />
    </div>
  );
}
