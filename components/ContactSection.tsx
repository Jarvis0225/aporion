"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";

export default function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mvgwbzwq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden py-20" id="contact">
      {/* Background Gradient Blob */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00F0FF]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-4xl mx-auto px-6 z-10">
        
        {/* Header */}
        <div className="text-center flex flex-col items-center" style={{ marginBottom: '120px' }}>
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-bold text-white tracking-tight" style={{ marginBottom: '40px' }}>
            Get in Touch
          </h2>
          <p className="text-zinc-400 max-w-4xl mx-auto text-lg leading-relaxed">
            Ready to transform your business? Contact us today for a free consultation.
          </p>
        </div>

        {/* Centered Form Container */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8 md:p-12 flex flex-col gap-6">
            
            {/* First name and Last name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text"
                name="name"
                placeholder="First name"
                required
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-6 py-4 text-lg text-white placeholder:text-zinc-500 focus:border-[#00F0FF] focus:ring-0 outline-none transition-all"
              />
              <input 
                type="text"
                name="company"
                placeholder="Last name"
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-6 py-4 text-lg text-white placeholder:text-zinc-500 focus:border-[#00F0FF] focus:ring-0 outline-none transition-all"
              />
            </div>

            {/* Email */}
            <input 
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-6 py-4 text-lg text-white placeholder:text-zinc-500 focus:border-[#00F0FF] focus:ring-0 outline-none transition-all"
            />

            {/* Phone */}
            <input 
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-6 py-4 text-lg text-white placeholder:text-zinc-500 focus:border-[#00F0FF] focus:ring-0 outline-none transition-all"
            />

            {/* Message */}
            <textarea
              name="message"
              rows={6}
              placeholder="Tell us about your business..."
              required
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg px-6 py-4 text-lg text-white placeholder:text-zinc-500 focus:border-[#00F0FF] focus:ring-0 outline-none transition-all resize-none"
            />

            {/* Submit Button */}
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-gradient-to-r from-[#7C3AED] to-[#3B82F6] text-white font-bold text-lg py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : status === 'error' ? 'Error - Try Again' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsBookingOpen(false)}
          />
          <div className="relative w-full max-w-4xl h-[650px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
            <button 
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            <iframe 
              src="https://cal.com/jarvis-lee-9dxexo/15min?theme=dark" 
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Book a meeting"
            />
          </div>
        </div>
      )}
    </section>
  );
}
