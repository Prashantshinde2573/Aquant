import React, { useState } from 'react';

export default function InquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    message: 'I am interested in Astraea Carrara (SKU: 9272).'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white p-6 md:p-8 shadow-2xl transition-all">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 grid h-8 w-8 place-items-center text-ink hover:text-ink/60 transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 className="font-display text-2xl text-ink">Thank You!</h3>
            <p className="mt-2 text-sm text-ink/70">Your inquiry for Astraea Carrara has been sent. Our team will contact you shortly.</p>
          </div>
        ) : (
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/60">Product Inquiry</span>
            <h2 className="mt-1 font-display text-2xl text-ink">Astraea Carrara</h2>
            <p className="text-xs text-ink/60">SKU: 9272 | Carrara Marble</p>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="mt-1.5 w-full border border-ink/20 px-3.5 py-2.5 text-sm outline-none focus:border-ink"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="mt-1.5 w-full border border-ink/20 px-3.5 py-2.5 text-sm outline-none focus:border-ink"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="mt-1.5 w-full border border-ink/20 px-3.5 py-2.5 text-sm outline-none focus:border-ink"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-[0.08em] text-ink">Message</label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1.5 w-full border border-ink/20 px-3.5 py-2.5 text-sm outline-none focus:border-ink resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-2 flex h-11 w-full items-center justify-center bg-ink text-xs font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-90"
              >
                Send Request
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
