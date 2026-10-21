import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare, X, Send, Phone, Mail, CheckCircle2,
  Sparkles, ExternalLink, ArrowRight, CornerDownLeft, Shield, BarChart3, Database
} from 'lucide-react';
import { FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { personalInfo } from '../../constants/data';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actions?: { label: string; action: () => void; icon?: React.ReactNode }[];
}

export default function MessengerWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hola! 👋 I'm Bhagabata. I help teams turn raw data into verified decisions through SQL, Power BI, and DAMA-DMBOK data governance.",
      time: 'Just now',
      actions: [
        {
          label: '💼 Discuss a Job Opportunity',
          action: () => handleSelectTopic('job'),
        },
        {
          label: '📊 Review Power BI Dashboards',
          action: () => handleSelectTopic('powerbi'),
        },
        {
          label: '🗄️ SQL & Data Quality Proof',
          action: () => handleSelectTopic('sql'),
        },
        {
          label: '💬 Chat on WhatsApp',
          action: () => handleOpenWhatsApp('Hi Bhagabata, I reviewed your portfolio and would like to connect!'),
        },
      ],
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-messenger', handleOpen);
    return () => window.removeEventListener('open-messenger', handleOpen);
  }, []);

  const handleSelectTopic = (topic: 'job' | 'powerbi' | 'sql') => {
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (topic === 'job') {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          sender: 'user',
          text: 'I want to discuss an open role or opportunity.',
          time: now,
        },
        {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: 'I am actively open to Data Analyst, Power BI Developer, and Data Governance roles in Bengaluru or Remote. I hold a B.Tech in CSE (CGPA 8.04, Class of 2026) with internship experience at Data Gyan and Gohra Technologies.',
          time: now,
          actions: [
            {
              label: 'Direct Email',
              action: () => window.open(`mailto:${personalInfo.email}?subject=Opportunity%20Inquiry%20for%20Bhagabata%20Brahma`, '_blank'),
              icon: <Mail size={13} />,
            },
            {
              label: 'WhatsApp Chat',
              action: () => handleOpenWhatsApp('Hi Bhagabata, I have an opportunity we would like to discuss with you.'),
              icon: <FaWhatsapp size={13} />,
            },
          ],
        },
      ]);
    } else if (topic === 'powerbi') {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          sender: 'user',
          text: 'Tell me about your Power BI experience.',
          time: now,
        },
        {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: 'I have designed and published 3 production reports using DAX measures, Power Query ETL, and Star Schema modeling. Key projects include the Pizza Sales Performance Analysis ($817.86K revenue, 48.6K rows) and E-Commerce Order Analysis.',
          time: now,
          actions: [
            {
              label: 'View Projects on Page',
              action: () => {
                setIsOpen(false);
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              },
              icon: <BarChart3 size={13} />,
            },
          ],
        },
      ]);
    } else if (topic === 'sql') {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Date.now()),
          sender: 'user',
          text: 'What is your SQL & Data Quality background?',
          time: now,
        },
        {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: 'During my internship at Data Gyan, I profiled and validated 5,000+ B2B customer records across 6 quality categories using 20+ T-SQL queries and Python/pandas deduplication (removing 300+ duplicates) to achieve 98%+ master-data accuracy.',
          time: now,
          actions: [
            {
              label: 'View Experience Details',
              action: () => {
                setIsOpen(false);
                document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
              },
              icon: <Database size={13} />,
            },
          ],
        },
      ]);
    }
  };

  const handleOpenWhatsApp = (customText?: string) => {
    const textToSend = customText || inputMessage || 'Hi Bhagabata, I would like to connect regarding your portfolio.';
    const cleanPhone = personalInfo.phone.replace(/[^0-9]/g, '');
    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleOpenEmail = () => {
    const textToSend = inputMessage || 'Hello Bhagabata, I reviewed your portfolio and would like to get in touch.';
    const url = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Inquiry from Portfolio Visitor')}&body=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank');
  };

  const handleSendCustomMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userText = inputMessage;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        sender: 'user',
        text: userText,
        time: now,
      },
      {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: 'Got it! Click below to send this directly to Bhagabata via WhatsApp or Email:',
        time: now,
        actions: [
          {
            label: 'Send via WhatsApp',
            action: () => handleOpenWhatsApp(userText),
            icon: <FaWhatsapp size={14} />,
          },
          {
            label: 'Send via Email',
            action: () => {
              const url = `mailto:${personalInfo.email}?subject=${encodeURIComponent('Message from Portfolio Visitor')}&body=${encodeURIComponent(userText)}`;
              window.open(url, '_blank');
            },
            icon: <Mail size={14} />,
          },
        ],
      },
    ]);

    setInputMessage('');
  };

  return (
    <>
      {/* Floating Messenger Launcher (Studio Hablemos Style) */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark/90 border border-primary/20 text-xs font-mono text-white/80 shadow-2xl backdrop-blur-md cursor-pointer pointer-events-auto"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available · Hablemos</span>
          </motion.div>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group p-1.5 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 border border-white/20 shadow-[0_0_25px_rgba(0,245,255,0.25)] backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,245,255,0.45)] cursor-pointer"
          aria-label={isOpen ? 'Close Messenger' : 'Open Messenger'}
        >
          <div className="flex items-center gap-2.5 px-3 py-2 rounded-full bg-dark/85">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-primary/40 shrink-0">
              <img src="/profile.png" alt="Bhagabata Brahma" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-dark" />
            </div>

            <div className="flex flex-col text-left pr-1">
              <span className="text-[11px] font-mono text-white/50 leading-none">Messenger</span>
              <span className="text-xs font-heading font-bold text-white group-hover:text-primary transition-colors">
                {isOpen ? 'Close' : 'Hablemos · Chat'}
              </span>
            </div>

            <div className="w-6 h-6 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
              {isOpen ? <X size={13} /> : <MessageSquare size={13} />}
            </div>
          </div>
        </motion.button>
      </div>

      {/* Floating Messenger Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.94 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 w-[94vw] sm:w-[410px] max-h-[82vh] h-[580px] z-50 rounded-2xl overflow-hidden flex flex-col studio-card border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="relative p-4 bg-gradient-to-r from-card-light/90 to-card/90 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-primary/50 shadow-md">
                  <img src="/profile.png" alt="Bhagabata Brahma" className="w-full h-full object-cover" />
                  <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-dark" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-heading font-bold text-sm text-white">{personalInfo.name}</h3>
                    <span className="text-[10px] px-1.5 py-0.2 rounded bg-primary/10 text-primary border border-primary/20 font-mono">
                      Data & BI
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Online · Bengaluru / Remote</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <a
                  href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-colors"
                  title="Direct WhatsApp"
                  aria-label="Direct WhatsApp"
                >
                  <FaWhatsapp size={15} />
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Chat"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Quick Contact Bar */}
            <div className="px-4 py-2 bg-dark/40 border-b border-white/5 flex items-center justify-between text-[11px] font-mono text-white/50">
              <span className="flex items-center gap-1 text-primary/80">
                <Sparkles size={11} /> Response ~within hours
              </span>
              <div className="flex items-center gap-2">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="LinkedIn">
                  <FaLinkedinIn size={12} />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" title="GitHub">
                  <FaGithub size={12} />
                </a>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors" title="Phone">
                  <Phone size={11} />
                </a>
              </div>
            </div>

            {/* Chat Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-sm font-body">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed text-xs sm:text-sm ${
                      m.sender === 'user'
                        ? 'bg-gradient-to-r from-primary/25 to-secondary/25 border border-primary/30 text-white rounded-tr-sm shadow-md'
                        : 'bg-white/5 border border-white/10 text-white/85 rounded-tl-sm backdrop-blur-sm shadow-sm'
                    }`}
                  >
                    <p>{m.text}</p>
                    <div className="mt-1.5 flex justify-end">
                      <span className="text-[10px] font-mono text-white/30">{m.time}</span>
                    </div>
                  </div>

                  {m.actions && m.actions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                      {m.actions.map((act, idx) => (
                        <button
                          key={idx}
                          onClick={act.action}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/8 hover:bg-primary/15 border border-white/12 hover:border-primary/40 text-[11px] font-mono text-white/80 hover:text-primary transition-all duration-200 cursor-pointer shadow-sm"
                        >
                          {act.icon}
                          <span>{act.label}</span>
                          <ArrowRight size={10} className="opacity-50" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input Form */}
            <form onSubmit={handleSendCustomMessage} className="p-3 bg-dark/70 border-t border-white/10">
              <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-1.5 focus-within:border-primary/50 transition-colors">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type a message or question..."
                  className="w-full bg-transparent text-xs text-white placeholder-white/30 outline-none py-1"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="w-7 h-7 rounded-lg bg-primary/20 hover:bg-primary text-primary hover:text-dark disabled:opacity-30 disabled:hover:bg-primary/20 disabled:hover:text-primary flex items-center justify-center transition-all cursor-pointer shrink-0"
                  aria-label="Send Message"
                >
                  <Send size={12} />
                </button>
              </div>

              <div className="flex items-center justify-between gap-2 mt-2 px-1">
                <button
                  type="button"
                  onClick={() => handleOpenWhatsApp()}
                  className="flex-1 py-1 px-2 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-[10px] font-mono text-emerald-400 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FaWhatsapp size={11} /> WhatsApp Direct
                </button>
                <button
                  type="button"
                  onClick={handleOpenEmail}
                  className="flex-1 py-1 px-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/25 text-[10px] font-mono text-primary flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Mail size={11} /> Email Direct
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
