import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send, Mail, Phone, MapPin, CheckCircle2,
  ArrowUpRight, Loader2, MessageSquare,
  Sparkles, Clock,
} from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';
import { personalInfo } from '../../constants/data';
import SectionTitle from '../ui/SectionTitle';

const ACCENT = '#00F5FF';
const SECOND = '#8B5CF6';

const inputBase =
  'w-full bg-[#070B14] border border-white/8 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-200 font-mono';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 7000);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 1800);
  };

  const contactItems = [
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      accent: '#00F5FF',
    },
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      accent: '#8B5CF6',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
      accent: '#10B981',
    },
    {
      icon: <Clock size={18} />,
      label: 'Availability',
      value: 'Open to full-time roles',
      href: null,
      accent: '#F59E0B',
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub size={18} />,
      href: personalInfo.github,
      label: 'GitHub',
      accent: '#fff',
    },
    {
      icon: <FaLinkedinIn size={18} />,
      href: personalInfo.linkedin,
      label: 'LinkedIn',
      accent: '#0A66C2',
    },
    {
      icon: <Mail size={18} />,
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
      accent: '#00F5FF',
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Ambient glows */}
      <div
        className="absolute bottom-0 left-1/4 w-72 h-72 md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[140px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,245,255,0.05), transparent)' }}
      />
      <div
        className="absolute top-0 right-1/4 w-64 h-64 md:w-[400px] md:h-[400px] rounded-full blur-[90px] md:blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.05), transparent)' }}
      />

      <div className="section-container relative z-10">
        <SectionTitle title="Get In Touch" subtitle="Let's Connect & Collaborate" />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">

          {/* ── LEFT PANEL ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <div className="mb-8">
              <h3 className="font-heading text-2xl font-bold text-white mb-3 leading-snug">
                Let's{' '}
                <span
                  className="font-extrabold"
                  style={{
                    background: `linear-gradient(90deg, ${ACCENT}, ${SECOND})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Build Something
                </span>{' '}
                Together
              </h3>
              <p className="text-white/45 leading-relaxed text-sm max-w-md">
                Whether you're looking to hire a Data Analyst, collaborate on a data project,
                or simply connect — I'd love to hear from you. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3 mb-8">
              {contactItems.map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl p-3.5 transition-all duration-200 group cursor-default"
                  style={{
                    background: 'rgba(7,11,20,0.6)',
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                  whileHover={{
                    borderColor: item.accent + '35',
                    background: `${item.accent}06`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${item.accent}14`, border: `1px solid ${item.accent}28` }}
                  >
                    <span style={{ color: item.accent }}>{item.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-mono text-white/25 uppercase tracking-widest mb-0.5">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-white/70 font-medium hover:text-white transition-colors truncate block"
                        style={{ fontFamily: 'monospace' }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-white/70 font-medium font-mono truncate">{item.value}</div>
                    )}
                  </div>
                  {item.href && (
                    <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 shrink-0 transition-colors" />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <div className="text-[10px] font-mono text-white/25 uppercase tracking-widest mb-3">
                Find me on
              </div>
              <div className="flex gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-200"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: 'rgba(255,255,255,0.5)',
                    }}
                    whileHover={{
                      background: `${s.accent}14`,
                      borderColor: s.accent + '40',
                      color: '#fff',
                      y: -2,
                    }}
                  >
                    <span style={{ opacity: 0.8 }}>{s.icon}</span>
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-center gap-2 mt-8 px-3 py-2.5 rounded-xl w-fit"
              style={{ background: 'rgba(0,245,255,0.05)', border: '1px solid rgba(0,245,255,0.15)' }}>
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.6 }}
              />
              <span className="text-[11px] font-mono text-white/40">
                Usually responds within <span className="text-cyan-400 font-semibold">24 hours</span>
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT PANEL — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(7,11,20,0.9)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
              }}
            >
              {/* Form header */}
              <div
                className="flex items-center gap-3 px-6 py-4 border-b"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}
              >
                <div
                  className="p-2 rounded-lg"
                  style={{ background: `${ACCENT}14`, border: `1px solid ${ACCENT}28` }}
                >
                  <MessageSquare size={15} style={{ color: ACCENT }} />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-heading">Send a Message</div>
                  <div className="text-[10px] font-mono text-white/25">All fields marked * are required</div>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-green-400/60">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-green-400"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  />
                  Online
                </div>
              </div>

              <div className="p-6">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-14 text-center gap-5"
                    >
                      <motion.div
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)' }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle2 size={36} className="text-emerald-400" />
                      </motion.div>
                      <div>
                        <h4 className="font-heading font-bold text-white text-xl mb-2">Message Sent! 🎉</h4>
                        <p className="text-white/45 text-sm max-w-xs leading-relaxed">
                          Thank you for reaching out! Bhagabata will get back to you within 24 hours.
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400/70">
                        <Sparkles size={11} /> Response expected soon
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      {/* Name + Email row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        {[
                          { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'Your full name', required: true },
                          { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'your@email.com', required: true },
                        ].map((f) => (
                          <div key={f.id}>
                            <label
                              htmlFor={f.id}
                              className="block text-[10px] font-mono uppercase tracking-widest mb-1.5 transition-colors duration-200"
                              style={{ color: focused === f.id ? ACCENT : 'rgba(255,255,255,0.3)' }}
                            >
                              {f.label}
                            </label>
                            <input
                              id={f.id}
                              name={f.id}
                              type={f.type}
                              required={f.required}
                              placeholder={f.placeholder}
                              value={(form as Record<string, string>)[f.id]}
                              onChange={handleChange}
                              onFocus={() => setFocused(f.id)}
                              onBlur={() => setFocused(null)}
                              className={inputBase}
                              style={{
                                borderColor: focused === f.id ? `${ACCENT}50` : undefined,
                                boxShadow: focused === f.id ? `0 0 0 2px ${ACCENT}12` : undefined,
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-[10px] font-mono uppercase tracking-widest mb-1.5 transition-colors duration-200"
                          style={{ color: focused === 'phone' ? ACCENT : 'rgba(255,255,255,0.3)' }}
                        >
                          Phone (Optional)
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={form.phone}
                          onChange={handleChange}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused(null)}
                          className={inputBase}
                          style={{
                            borderColor: focused === 'phone' ? `${ACCENT}50` : undefined,
                            boxShadow: focused === 'phone' ? `0 0 0 2px ${ACCENT}12` : undefined,
                          }}
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-[10px] font-mono uppercase tracking-widest mb-1.5 transition-colors duration-200"
                          style={{ color: focused === 'message' ? ACCENT : 'rgba(255,255,255,0.3)' }}
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell me about your project, opportunity, or just say hello..."
                          value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          className={`${inputBase} resize-none`}
                          style={{
                            borderColor: focused === 'message' ? `${ACCENT}50` : undefined,
                            boxShadow: focused === 'message' ? `0 0 0 2px ${ACCENT}12` : undefined,
                          }}
                        />
                        <div className="text-right text-[10px] font-mono text-white/20 mt-1">
                          {form.message.length}/500
                        </div>
                      </div>

                      {/* Submit button */}
                      <motion.button
                        type="submit"
                        disabled={submitting}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold font-mono text-dark transition-all duration-300 disabled:cursor-not-allowed"
                        style={{
                          background: submitting
                            ? 'rgba(0,245,255,0.4)'
                            : `linear-gradient(90deg, ${ACCENT}, ${SECOND})`,
                          boxShadow: submitting ? 'none' : `0 0 30px ${ACCENT}30`,
                        }}
                        whileHover={submitting ? {} : { scale: 1.02, boxShadow: `0 0 40px ${ACCENT}40` }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {submitting ? (
                          <>
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}>
                              <Loader2 size={16} />
                            </motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={15} /> Send Message
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
