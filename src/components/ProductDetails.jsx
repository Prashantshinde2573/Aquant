import React, { useState } from 'react';

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('specifications');

  const tabs = [
    { id: 'specifications', label: 'Specifications' },
    { id: 'technical-drawings', label: 'Technical Drawings' },
    { id: 'care-warranty', label: 'Care + Warranty' }
  ];

  const specificationsData = [
    {
      label: 'Material',
      value: 'Premium Carrara Marble, known for its elegant white background with subtle grey veining.'
    },
    {
      label: 'Aesthetic Appeal',
      value: 'Offers a luxurious and timeless look, enhancing bathroom décor.'
    },
    {
      label: 'Size',
      value: '460 x 430 x 850 mm – a compact yet stylish design suitable for various spaces.'
    },
    {
      label: 'Durability',
      value: 'Naturally strong and resistant to wear, ensuring long-lasting beauty.'
    },
    {
      label: 'Finish',
      value: 'Smooth, polished surface for a refined appearance.'
    },
    {
      label: 'Versatility',
      value: 'Complements both classic and modern bathroom interiors.'
    },
    {
      label: 'Uniqueness',
      value: 'Each piece has distinct veining, making every basin one of a kind.'
    },
    {
      label: 'Ease of Maintenance',
      value: 'Requires regular sealing and gentle cleaning to preserve its elegance.'
    }
  ];

  const technicalDrawingsData = [
    {
      title: 'Technical Drawing Of Code 9272',
      url: 'https://www.aquantindia.com/product_files/9272/9272.pdf',
      icon: '/file-icons/pdf.png',
      download: true
    },
    {
      title: '9272 DWG',
      url: 'https://www.aquantindia.com/product_files/9272/9272.dwg',
      icon: '/file-icons/dwg.png',
      download: true
    },
    {
      title: '9272 FBX',
      url: 'https://www.aquantindia.com/product_files/9272/9272.fbx',
      icon: '/file-icons/fbx.png',
      download: true
    },
    {
      title: '9272 SKP',
      url: 'https://www.aquantindia.com/product_files/9272/9272.skp',
      icon: '/file-icons/skp.png',
      download: true
    }
  ];

  const careWarrantyData = [
    {
      title: 'Product Warranty',
      url: 'https://www.aquantindia.com/warranty',
      external: true
    },
    {
      title: 'Customer Care & Warranty Information',
      url: '/customer-support',
      external: true
    },
    {
      title: 'Care & Maintenance Guide',
      url: '/care-maintenance',
      external: true
    }
  ];

  return (
    <section className="relative w-full bg-[#F5EEE8]">
      <div className="mx-auto w-full max-w-[1280px] px-5 py-12 lg:px-16 lg:py-20">
        {/* Navigation Tabs with Gilda Display Typography and Animated Underline */}
        <div
          role="tablist"
          aria-label="Product Details Tabs"
          className="flex border-b border-ink/15 overflow-x-auto [scrollbar-width:none] justify-start sm:justify-center gap-8 lg:gap-14 pb-1"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: '"Gilda Display", Georgia, Cambria, "Times New Roman", Times, serif',
                  fontSize: '22px',
                  lineHeight: '24.2px',
                  textAlign: 'center',
                  color: isActive ? 'var(--color-ink, #0d0d0d)' : 'rgba(13, 13, 13, 0.45)',
                  margin: '8px 0px 0px 0px',
                  cursor: 'crosshair',
                  transition: 'all 0.3s ease'
                }}
                className="relative pb-3 whitespace-nowrap group focus:outline-none"
              >
                {tab.label}
                {/* Animated Underline Indicator */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-ink transition-transform duration-300 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                    }`}
                />
              </button>
            );
          })}
        </div>

        {/* Tab 1: Specifications */}
        {activeTab === 'specifications' && (
          <div
            role="tabpanel"
            id="panel-specifications"
            aria-labelledby="tab-specifications"
            className="mt-8 lg:mt-10 animate-fade-in"
          >
            <div className="divide-y divide-ink/15 border border-ink/15 px-5 lg:px-8">
              {specificationsData.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-baseline py-4 lg:py-5 gap-2 sm:gap-8"
                >
                  <div className="w-full sm:w-1/3 text-[11px] lg:text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/60">
                    {item.label}
                  </div>
                  <div className="w-full sm:w-2/3 text-[13px] lg:text-[14px] leading-relaxed text-ink">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Technical Drawings */}
        {activeTab === 'technical-drawings' && (
          <div
            role="tabpanel"
            id="panel-technical-drawings"
            aria-labelledby="tab-technical-drawings"
            className="mt-8 lg:mt-10 animate-fade-in"
          >
            <div className="divide-y divide-ink/15 border border-ink/15 px-5 lg:px-8">
              {technicalDrawingsData.map((doc, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 lg:py-5 gap-4 group"
                >
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Download ${doc.title}`}
                    aria-label={`Download ${doc.title}`}
                    className="text-[13px] lg:text-[14px] font-medium text-ink transition-colors hover:text-ink/70 flex-1"
                  >
                    {doc.title}
                  </a>
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Download ${doc.title}`}
                    aria-label={`Download ${doc.title}`}
                    className="flex h-9 w-9 items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105"
                  >
                    <img
                      src={doc.icon}
                      alt={`Download ${doc.title}`}
                      className="h-8 w-auto max-h-8 object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Care + Warranty */}
        {activeTab === 'care-warranty' && (
          <div
            role="tabpanel"
            id="panel-care-warranty"
            aria-labelledby="tab-care-warranty"
            className="mt-8 lg:mt-10 animate-fade-in"
          >
            <div className="divide-y divide-ink/15 border border-ink/15 px-5 lg:px-8">
              {careWarrantyData.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-4 lg:py-5 gap-4 group"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${item.title}`}
                    aria-label={`View ${item.title}`}
                    className="text-[13px] lg:text-[14px] font-medium text-ink transition-colors hover:text-ink/70 flex-1"
                  >
                    {item.title}
                  </a>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`View ${item.title}`}
                    aria-label={`View ${item.title}`}
                    className="grid h-9 w-9 place-items-center text-ink/60 transition-colors group-hover:text-ink hover:text-ink"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
