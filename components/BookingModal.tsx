'use client';

import { useEffect } from 'react';
import { getCalApi } from '@calcom/embed-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        theme: 'dark',
        styles: { branding: { brandColor: '#00F0FF' } }, // Use our Holographic Cyan
        hideEventTypeDetails: false,
        layout: 'month_view'
      });
    })();
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl h-[650px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>

        {/* Cal.com Embed */}
        <iframe 
          src="https://cal.com/jarvis-lee-9dxexo/15min?theme=dark" 
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="Book a meeting"
        />
      </div>
    </div>
  );
}
