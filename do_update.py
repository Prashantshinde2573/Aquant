import re

with open('src/components/ProductHero.jsx', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update state hooks if not present
if 'selectedFinish' not in code:
    code = code.replace(
        'const [quantity, setQuantity] = useState(1);',
        'const [quantity, setQuantity] = useState(1);
  const [selectedFinish, setSelectedFinish] = useState("Gold");
  const [isWishlisted, setIsWishlisted] = useState(false);'
    )

# 2. Find position of the right column start
pos_start = code.rfind('<div className="flex flex-col">')
pos_end = code.rfind('</ul></div></div></div></section>')

if pos_end != -1:
    pos_end += len('</ul></div>')

print('pos_start:', pos_start, 'pos_end:', pos_end)

new_right_col = """<div className="flex flex-col">
        {/* Category & Share Row */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/60 lg:text-[12px]">
            STONE FREE-STANDING BASINS
          </p>
          <button
            type="button"
            aria-label="Share product"
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'Astraea Carrara', url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Product link copied to clipboard!');
              }
            }}
            className="inline-flex items-center gap-2 rounded-xl border border-ink/30 bg-transparent px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink hover:bg-ink/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
            </svg>
            <span>SHARE</span>
          </button>
        </div>

        {/* Product Title */}
        <h1 className="mt-2 font-display text-[40px] leading-[1.05] tracking-tight text-ink sm:text-[48px] lg:text-[56px]">
          Astraea Carrara
        </h1>

        {/* Item Code */}
        <p className="mt-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/60 lg:text-[12px]">
          ITEM CODE · 9272
        </p>

        {/* Short Description */}
        <p className="mt-6 text-[14px] leading-relaxed text-ink/75 lg:text-[15px]">
          Hand-carved Carrara Marble. Naturally unique, pressure-tested, and made to order.
        </p>

        {/* Price Row */}
        <div className="mt-7 flex flex-wrap items-baseline gap-3">
          <span className="font-display text-[34px] font-normal leading-none text-ink sm:text-[38px] lg:text-[44px]">
            ₹4,75,000
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink/50 lg:text-[12px]">
            MRP · INCL. TAXES
          </span>
        </div>

        {/* Finish Selector Section */}
        <div className="mt-7">
          <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/60">
            FINISH
          </label>
          <p className="mt-1 text-[13px] font-medium text-ink">
            {selectedFinish}
          </p>

          <div className="mt-3 flex items-center gap-3">
            {/* Gold Swatch */}
            <button
              type="button"
              onClick={() => setSelectedFinish('Gold')}
              title="Gold Finish"
              aria-label="Select Gold finish"
              className={}
              style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f3e5ab 50%, #aa7c11 100%)'
              }}
            />

            {/* Rose Gold Swatch */}
            <button
              type="button"
              onClick={() => setSelectedFinish('Rose Gold')}
              title="Rose Gold Finish"
              aria-label="Select Rose Gold finish"
              className={}
              style={{
                background: 'linear-gradient(135deg, #b76e79 0%, #e8c5c8 50%, #8c4a52 100%)'
              }}
            />

            {/* Chrome Swatch */}
            <button
              type="button"
              onClick={() => setSelectedFinish('Chrome')}
              title="Chrome Finish"
              aria-label="Select Chrome finish"
              className={}
              style={{
                background: 'linear-gradient(135deg, #e0e0e0 0%, #ffffff 50%, #9e9e9e 100%)'
              }}
            />
          </div>
        </div>

        {/* Quantity Section */}
        <div className="mt-7">
          <label className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/60 mb-2">
            QUANTITY
          </label>
          <div className="inline-flex items-center rounded-xl border border-ink/40 bg-transparent px-3 py-1.5">
            <button
              type="button"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="grid h-8 w-8 place-items-center rounded-lg text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
              </svg>
            </button>
            <span className="w-10 text-center text-[15px] font-medium tabular-nums text-ink">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity(q => q + 1)}
              aria-label="Increase quantity"
              className="grid h-8 w-8 place-items-center rounded-lg text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Wishlist Button */}
          <button
            type="button"
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-ink px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-white shadow-sm transition-all duration-200 hover:bg-ink/90 active:scale-[0.99]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={isWishlisted ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </svg>
            <span>{isWishlisted ? 'WISHLISTED' : 'ADD TO WISHLIST'}</span>
          </button>

          {/* Download Brochure Button */}
          <button
            type="button"
            onClick={() => {
              window.open('/catalogs-brochures', '_blank');
            }}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-ink bg-transparent px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-ink transition-all duration-200 hover:bg-ink/5 active:scale-[0.99]"
          >
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
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" x2="12" y1="15" y2="3"></line>
            </svg>
            <span>DOWNLOAD BROCHURE</span>
          </button>
        </div>

        {/* Contact Links List */}
        <div className="mt-8 divide-y divide-ink/20 border-t border-b border-ink/20">
          <a
            href="tel:18002677797"
            className="group flex items-center justify-between py-4.5 transition-colors hover:opacity-80"
          >
            <span className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-ink shrink-0" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              PHONE CONSULTATION
            </span>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.12em] text-ink/70 group-hover:text-ink">
              1800 267 7797
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-ink/60 group-hover:text-ink" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </a>

          <a
            href="/experience-centres"
            className="group flex items-center justify-between py-4.5 transition-colors hover:opacity-80"
          >
            <span className="inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="text-ink shrink-0" aria-hidden="true">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              NEAREST SHOWROOM
            </span>
            <span className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[0.12em] text-ink/70 group-hover:text-ink">
              6 CENTRES
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-ink/60 group-hover:text-ink" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </span>
          </a>
        </div>
      </div>"""

code = code[:pos_start] + new_right_col + code[pos_end:]

with open('src/components/ProductHero.jsx', 'w', encoding='utf-8') as f:
    f.write(code)

print('SUCCESS!')
