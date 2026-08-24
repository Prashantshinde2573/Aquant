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
      <div className="mx-auto w-full max-w-[960px] px-5 py-12 lg:px-16 lg:py-20">
        {/* Navigation Tabs (Pill Style from designer-wash-basins-aquant-sanitaryware) */}
        <div
          role="tablist"
          aria-label="Product Details Tabs"
          className="flex gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden justify-start sm:justify-center lg:gap-3.5"
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
                className={`shrink-0 inline-flex items-center rounded-full px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 cursor-pointer lg:px-6 lg:py-3 lg:text-[12px] ${
                  isActive
                    ? 'bg-ink text-white shadow-sm'
                    : 'border border-ink/20 text-ink/70 hover:border-ink hover:text-ink bg-transparent'
                }`}
                style={{ fontFamily: 'var(--font-mulish)' }}
              >
                {tab.label}
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
                  <div className="w-full sm:w-1/3 font-sans text-[14px] font-bold capitalize tracking-[0.02em] text-ink" style={{ fontFamily: "var(--font-mulish)", fontWeight: 700 }}>
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
                <a
                  key={index}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Download ${doc.title}`}
                  aria-label={`Download ${doc.title}`}
                  className="flex items-center justify-between py-4 lg:py-5 gap-4 group transition-colors hover:text-ink/80"
                >
                  {/* Left: Icon in front of text + Text */}
                  <div className="flex items-center gap-4 min-w-0">
                    <img
                      src={doc.icon}
                      alt={doc.title}
                      style={{ height: '32px', width: 'auto' }}
                      className="max-h-8 object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
                    />
                    <span className="text-[13px] lg:text-[14px] font-medium text-ink truncate">
                      {doc.title}
                    </span>
                  </div>

                  {/* Right: Download Icon */}
                  <div className="grid h-8 w-8 place-items-center text-ink/60 transition-colors group-hover:text-ink shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M12 15V3"></path>
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <path d="m7 10 5 5 5-5"></path>
                    </svg>
                  </div>
                </a>
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
