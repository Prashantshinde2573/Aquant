import React from 'react';

export default function CartDrawerOption2({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity" onClick={onClose}></div>
      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-white p-6 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-ink/15 pb-4">
              <h2 className="font-display text-xl text-ink">Your Cart</h2>
              <button onClick={onClose} className="text-ink hover:text-ink/60 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="py-12 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto text-ink/30 mb-3">
                <circle cx="8" cy="21" r="1"></circle>
                <circle cx="19" cy="21" r="1"></circle>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
              </svg>
              <p className="text-sm uppercase tracking-wider text-ink/70">Your cart is currently empty.</p>
            </div>
          </div>

          <div className="border-t border-ink/15 pt-4">
            <button onClick={onClose} className="w-full bg-ink py-3 text-xs uppercase tracking-[0.14em] text-white hover:opacity-90 transition-opacity">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
