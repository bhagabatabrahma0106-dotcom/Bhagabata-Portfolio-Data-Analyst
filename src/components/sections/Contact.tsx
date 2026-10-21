import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Mail, Phone, MapPin, CheckCircle2,
  ArrowUpRight, MessageSquare, Sparkles, Clock
} from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../../constants/data';

const ACCENT = '#00F5FF';
const SECOND = '#8B5CF6';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sentAction, setSentAction] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Inquiry from ${form.name || 'Visitor'}`;
    const body = `Hi Bhagabata,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n`;
    window.open(`mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
    setSentAction('Email draft opened in your mail app!');
    setTimeout(() => setSentAction(null), 6000);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');
    const text = `Hi Bhagabata, I'm ${form.name || 'reaching out from your portfolio'}.\n${form.message ? `Message: ${form.message}` : ''}`;
    window.open(`https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
    setSentAction('WhatsApp chat opened with your message!');
    setTimeout(() => setSentAction(null), 6000);
  };

  const openMessenger = () => {
    window.dispatchEvent(new CustomEvent('open-messenger'));
  };

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: 'Email Direct',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      accent: '#00F5FF',
    },
    {
      icon: <FaWhatsapp size={18} />,
      label: 'WhatsApp Chat',
      value: personalInfo.phone,
      href: `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=Hi%20Bhagabata,%20I%20would%20like%20to%20connect!`,
      accent: '#10B981',
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone Call',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      accent: '#8B5CF6',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      accent: '#F59E0B',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden studio-grid">
      {/* Background ambient accents */}
      <div
        className="absolute top-0 right-1/4 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06), transparent)' }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.05), transparent)' }}
      />

      <div className="section-container relative z-10">
        {/* Studio Editorial Header (Inspired by onlines.com.ar Closing Invitation) */}
        <div className="mb-14 border-b border-white/10 pb-8 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-primary uppercase tracking-[0.25em] mb-2.5 font-semibold">
              <Sparkles size={13} />
              <span>Section 10 // Contact & Opportunities</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              let's turn your data into <br className="hidden sm:inline" />
              <span className="text-gradient">verified decisions.</span>
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-end gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Actively Interviewing · Class of 2026</span>
            </span>
            <button
              onClick={openMessenger}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 hover:bg-primary/20 border border-primary/30 text-xs font-mono text-primary transition-all cursor-pointer shadow-sm"
            >
              <MessageSquare size={13} />
              <span>Open Studio Messenger</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Communication Hub */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="studio-card rounded-2xl p-6 border border-white/10">
              <h3 className="font-heading font-bold text-lg text-white mb-2">Direct Contact Channels</h3>
              <p className="text-xs sm:text-sm text-white/50 font-mono mb-6 leading-relaxed">
                Reach out for full-time Data Analyst roles, Power BI dashboard development, or data governance projects.
              </p>

              <div className="space-y-3">
                {contactItems.map((item) => {
                  const content = (
                    <div
                      className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/8 hover:border-white/20 transition-all duration-200 group"
                    >
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border"
                        style={{
                          background: `${item.accent}12`,
                          borderColor: `${item.accent}30`,
                          color: item.accent,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] font-mono text-white/40 uppercase">{item.label}</div>
                        <div className="text-xs sm:text-sm font-semibold text-white/90 truncate group-hover:text-primary transition-colors">
                          {item.value}
                        </div>
                      </div>
                      {item.href && <ArrowUpRight size={14} className="text-white/30 group-hover:text-primary shrink-0" />}
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-white/40">Profiles</span>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={14} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-primary/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                  <a
                    href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Pre-filled Dispatch Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="studio-card rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-heading font-bold text-lg text-white">Send a Quick Message</h3>
                  <p className="text-xs font-mono text-white/40 mt-0.5">
                    Opens directly in your email client or WhatsApp with your text prefilled.
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Send size={14} />
                </div>
              </div>

              {sentAction && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-2">
                  <CheckCircle2 size={14} />
                  <span>{sentAction}</span>
                </div>
              )}

              <form className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-dark/60 border border-white/10 focus:border-primary/50 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-white/60 mb-1.5 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      className="w-full bg-dark/60 border border-white/10 focus:border-primary/50 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-white/60 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Bhagabata, we're hiring a Data Analyst / Power BI Developer..."
                    className="w-full bg-dark/60 border border-white/10 focus:border-primary/50 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/20 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Two Clear Authentic Dispatch Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSendEmail}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-dark font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-[0_0_20px_rgba(0,245,255,0.25)] cursor-pointer"
                  >
                    <Mail size={14} />
                    <span>Send via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <FaWhatsapp size={15} />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                <p className="text-[10px] font-mono text-white/35 text-center mt-2">
                  Direct authentic actions. No fake bot promises. Connects immediately to Bhagabata Brahma.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
