import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  emailAddress: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, emailAddress }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Collaboration Inquiry from ${formData.name} (${formData.brand})`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nBrand: ${formData.brand}\n\nMessage:\n${formData.message}`;
    
    // Open mailto with pre-filled fields
    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Close modal after initiating mail client
    setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', brand: '', message: '' });
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-lg p-8 rounded-sm shadow-2xl transform rotate-1 border-2 border-gray-100 animate-in fade-in zoom-in duration-300">
        {/* Tape */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-10 bg-white/40 border border-white/50 shadow-sm -rotate-2 backdrop-blur-sm z-10"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors p-1 hover:bg-gray-100 rounded-full"
        >
          <X size={24} />
        </button>

        <h2 className="text-4xl font-hand font-bold text-gray-900 mb-2">Let's Create Together</h2>
        <p className="text-gray-500 mb-8 font-hand text-xl border-b border-dashed border-gray-200 pb-4">Tell me about your project idea!</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-hand text-lg font-bold text-gray-700 mb-1">Your Name</label>
            <input 
              required
              type="text" 
              className="w-full border-b-2 border-gray-200 bg-gray-50/50 px-3 py-2 focus:border-pink-600 focus:bg-white focus:outline-none transition-colors font-sans text-gray-800 placeholder-gray-400"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div>
                <label className="block font-hand text-lg font-bold text-gray-700 mb-1">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full border-b-2 border-gray-200 bg-gray-50/50 px-3 py-2 focus:border-pink-600 focus:bg-white focus:outline-none transition-colors font-sans text-gray-800 placeholder-gray-400"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
             </div>
             <div>
                <label className="block font-hand text-lg font-bold text-gray-700 mb-1">Brand / Company</label>
                <input 
                  type="text" 
                  className="w-full border-b-2 border-gray-200 bg-gray-50/50 px-3 py-2 focus:border-pink-600 focus:bg-white focus:outline-none transition-colors font-sans text-gray-800 placeholder-gray-400"
                  placeholder="Awesome Brand Inc."
                  value={formData.brand}
                  onChange={(e) => setFormData({...formData, brand: e.target.value})}
                />
             </div>
          </div>

          <div>
            <label className="block font-hand text-lg font-bold text-gray-700 mb-1">Message</label>
            <textarea 
              required
              rows={4}
              className="w-full border-2 border-gray-200 bg-gray-50/50 p-3 focus:border-pink-600 focus:bg-white focus:outline-none transition-colors font-sans resize-none rounded-sm text-gray-800 placeholder-gray-400"
              placeholder="I'm interested in a dedicated video for my product..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-gray-900 text-white font-hand font-bold text-xl py-4 mt-2 shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1)] transition-all flex justify-center items-center gap-3 border-2 border-gray-900"
          >
            <Send size={20} />
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
};
