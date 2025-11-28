import React, { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      // You need to replace these with your actual EmailJS credentials
      const serviceId = 'service_xv97hoa'; // Replace with your Service ID
      const templateId = 'template_ts6f5yt'; // Replace with your Template ID
      const publicKey = 'saswoSDWifOxeh2NR'; // Replace with your Public Key

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        brand: formData.brand || 'N/A',
        message: formData.message,
        to_email: emailAddress,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', brand: '', message: '' });

      // Close modal after 2 seconds
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 2000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block font-hand text-lg font-bold text-gray-700 mb-1">Brand / Company</label>
              <input
                type="text"
                className="w-full border-b-2 border-gray-200 bg-gray-50/50 px-3 py-2 focus:border-pink-600 focus:bg-white focus:outline-none transition-colors font-sans text-gray-800 placeholder-gray-400"
                placeholder="Awesome Brand Inc."
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
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
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 p-4 bg-green-50 border-2 border-green-200 rounded-sm">
              <CheckCircle className="text-green-600" size={20} />
              <p className="text-green-800 font-hand text-lg">Message sent successfully! 🎉</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 p-4 bg-red-50 border-2 border-red-200 rounded-sm">
              <AlertCircle className="text-red-600" size={20} />
              <p className="text-red-800 font-hand text-lg">Error sending message. Please try again.</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white font-hand font-bold text-xl py-4 mt-2 shadow-[4px_4px_0px_0px_rgba(236,72,153,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(236,72,153,1)] transition-all flex justify-center items-center gap-3 border-2 border-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0px_0px_rgba(236,72,153,1)]"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Enviando...
              </>
            ) : (
              <>
                <Send size={20} />
                Send Inquiry
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
