import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Mail, User, Facebook } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fname: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fname || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ fname: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-black text-white px-6 sm:px-12 relative border-t border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/30">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Do you like to meet Me
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-lg mx-auto">
            Send Prakash Thapa a message to connect, collaborate, or talk about programming and technology.
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Contact Form Container */}
        <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-20 h-20 bg-green-500/20 border border-green-500/40 text-green-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-neutral-300 max-w-md mx-auto text-sm sm:text-base">
                Your message has been sent successfully. Prakash will get back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-sm transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-300 flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-red-500" />
                  <span>Full Name</span>
                </label>
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm font-medium"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-300 flex items-center space-x-1.5">
                  <Mail className="w-3.5 h-3.5 text-red-500" />
                  <span>Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm font-medium"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-300 flex items-center space-x-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-red-500" />
                  <span>Message</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write message.."
                  required
                  className="w-full px-4 py-3.5 bg-neutral-950 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-sm font-medium resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-extrabold uppercase tracking-wider rounded-xl shadow-lg transition-all duration-200 hover:shadow-red-600/30 flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social connection link */}
          <div className="mt-10 pt-8 border-t border-neutral-800 text-center flex flex-col items-center justify-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-neutral-400">
              Connect Directly
            </span>
            <a
              href={PERSONAL_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 rounded-full transition-all duration-200 text-sm font-bold"
            >
              <Facebook className="w-4 h-4" />
              <span>Facebook Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
