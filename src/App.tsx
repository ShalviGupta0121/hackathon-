import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  ChevronDown, 
  Lightbulb, 
  Github, 
  Twitter, 
  Linkedin, 
  Cpu,
  Globe,
  Shield,
  Zap,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}

interface Prize {
  title: string;
  amount: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

interface TimelineItem {
  date: string;
  event: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface Track {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FAQItem {
  question: string;
  answer: string;
}

// --- Data ---
const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'FAQ', href: '#faq' },
];

const prizes: Prize[] = [
  { 
    title: 'Winner', 
    amount: '₹1,50,000', 
    description: 'Cash prize + Premium Subscriptions + Mentorship', 
    icon: <Trophy className="w-8 h-8" />,
    color: 'from-yellow-400 to-orange-500'
  },
  { 
    title: 'Runner Up', 
    amount: '₹1,00,000', 
    description: 'Cash prize + Swag Kits + Internship Opportunities', 
    icon: <Trophy className="w-8 h-8 text-slate-300" />,
    color: 'from-slate-300 to-slate-500'
  },
  { 
    title: 'Second Runner Up', 
    amount: '₹50,000', 
    description: 'Cash prize + Cloud Credits + Certificates', 
    icon: <Trophy className="w-8 h-8 text-orange-400" />,
    color: 'from-orange-400 to-orange-700'
  },
];

const timeline: TimelineItem[] = [
  { date: 'March 1, 2026', event: 'Registration Starts', status: 'completed' },
  { date: 'March 25, 2026', event: 'Registration Ends', status: 'current' },
  { date: 'April 5, 2026', event: 'Hackathon Begins', status: 'upcoming' },
  { date: 'April 7, 2026', event: 'Final Pitch & Results', status: 'upcoming' },
];

const tracks: Track[] = [
  { 
    title: 'AI & Machine Learning', 
    description: 'Build intelligent solutions that solve real-world problems using LLMs, Computer Vision, or Predictive Analytics.', 
    icon: <Cpu className="w-6 h-6" /> 
  },
  { 
    title: 'Web3 & Blockchain', 
    description: 'Decentralize the future with DeFi, NFTs, or DAO governance tools.', 
    icon: <Globe className="w-6 h-6" /> 
  },
  { 
    title: 'Cybersecurity', 
    description: 'Create tools for threat detection, privacy preservation, or secure authentication.', 
    icon: <Shield className="w-6 h-6" /> 
  },
  { 
    title: 'Open Innovation', 
    description: 'Have a wild idea that doesn\'t fit elsewhere? This track is for you. Surprise us!', 
    icon: <Zap className="w-6 h-6" /> 
  },
];

const faqs: FAQItem[] = [
  { question: 'Who can participate?', answer: 'Students, professionals, and enthusiasts from all backgrounds are welcome. You can participate individually or in teams of 2-4 members.' },
  { question: 'Is there a registration fee?', answer: 'No, Devcation Delhi 2026 is completely free for all participants.' },
  { question: 'What is the team size?', answer: 'Minimum 2 and maximum 4 members per team.' },
  { question: 'Will it be online or offline?', answer: 'This is a hybrid event. The initial rounds are online, while the grand finale will be held at a premium venue in Delhi.' },
];

const hackathonIdeas = [
  "A decentralized social network for local communities.",
  "An AI-powered mental health companion for students.",
  "A real-time carbon footprint tracker for e-commerce purchases.",
  "A smart parking system using computer vision and IoT.",
  "A platform for verified micro-donations to local charities.",
  "An AR-based indoor navigation system for large hospitals.",
  "A gamified learning platform for cybersecurity awareness.",
  "A blockchain-based supply chain tracker for organic food.",
];

// --- Components ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-display font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentIdea, setCurrentIdea] = useState(hackathonIdeas[0]);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateIdea = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * hackathonIdeas.length);
      setCurrentIdea(hackathonIdeas[randomIndex]);
      setIsGenerating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-grid">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-dark border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                <Code2 className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">DEVCATION <span className="text-brand-primary">2026</span></span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                    activeSection === item.href.substring(1) ? 'text-brand-primary' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button className="px-6 py-2.5 bg-brand-primary hover:bg-brand-primary/90 text-white rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-primary/20">
                Register Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-300">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-dark border-t border-white/5 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-lg font-medium text-slate-300 hover:text-brand-primary"
                  >
                    {item.label}
                  </a>
                ))}
                <button className="w-full px-6 py-3 bg-brand-primary text-white rounded-xl font-semibold">
                  Register Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">April 5-7, 2026 • New Delhi</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-display font-black mb-6 tracking-tighter"
            >
              WHERE SPEED, SKILL, <br />
              AND <span className="text-gradient">CODE CONVERGE</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Join 500+ developers, designers, and innovators for 48 hours of intense building, 
              learning, and networking in the heart of India's capital.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto px-10 py-4 bg-brand-primary text-white rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-brand-primary/30">
                Register Now
              </button>
              <button className="w-full sm:w-auto px-10 py-4 glass text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                View Details
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {[
                { label: 'Prize Pool', value: '₹3L+' },
                { label: 'Participants', value: '500+' },
                { label: 'Hours', value: '48' },
                { label: 'Tracks', value: '4' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionTitle subtitle="Devcation Delhi is more than just a hackathon. It's a platform for the next generation of builders to showcase their talent.">
                About the Event
              </SectionTitle>
              <div className="space-y-6 text-slate-400 text-lg">
                <p>
                  Devcation Delhi 2026 brings together the brightest minds in technology to solve 
                  pressing challenges across various domains. Whether you're a seasoned developer 
                  or a curious beginner, there's a place for you here.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: <Users className="text-brand-primary" />, text: 'Team size: 2-4' },
                    { icon: <MapPin className="text-brand-primary" />, text: 'Location: New Delhi' },
                    { icon: <Calendar className="text-brand-primary" />, text: 'Duration: 48 Hours' },
                    { icon: <Trophy className="text-brand-primary" />, text: '₹3L+ Prizes' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 glass p-4 rounded-2xl">
                      {item.icon}
                      <span className="text-sm font-medium text-slate-200">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
                <img 
                  src="https://picsum.photos/seed/hackathon/800/800" 
                  alt="Hackathon" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-2xl">
                <div className="text-4xl font-bold text-brand-primary">100+</div>
                <div className="text-sm text-slate-400">Universities Represented</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prize Pool Section */}
      <section id="prizes" className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Compete for a massive prize pool and recognition from top tech companies.">
            Prize Pool
          </SectionTitle>

          <div className="grid md:grid-cols-3 gap-8">
            {prizes.map((prize, i) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass p-8 rounded-3xl relative group overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${prize.color}`} />
                <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                  {prize.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{prize.title}</h3>
                <div className={`text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r ${prize.color}`}>
                  {prize.amount}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {prize.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-slate-500 italic">+ Special track prizes and surprise bounties to be announced during the event!</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Mark your calendars for the key milestones of Devcation Delhi 2026.">
            Event Timeline
          </SectionTitle>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:text-right">
                    {i % 2 === 0 ? (
                      <div className="glass p-6 rounded-2xl md:ml-auto md:max-w-md">
                        <div className="text-brand-primary font-bold mb-1">{item.date}</div>
                        <h4 className="text-xl font-bold">{item.event}</h4>
                      </div>
                    ) : null}
                  </div>
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-slate-950 ${
                      item.status === 'completed' ? 'bg-brand-accent' : 
                      item.status === 'current' ? 'bg-brand-primary animate-pulse' : 'bg-slate-800'
                    }`}>
                      {item.status === 'completed' && <CheckCircle2 className="w-6 h-6 text-white" />}
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    {i % 2 !== 0 ? (
                      <div className="glass p-6 rounded-2xl md:max-w-md">
                        <div className="text-brand-primary font-bold mb-1">{item.date}</div>
                        <h4 className="text-xl font-bold">{item.event}</h4>
                      </div>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Choose a track that excites you and build something extraordinary.">
            Hackathon Tracks
          </SectionTitle>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track, i) => (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{track.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {track.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovative Feature: Idea Generator */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 -skew-y-3" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="glass p-12 rounded-[3rem] text-center border-brand-primary/20">
            <div className="inline-flex p-3 rounded-2xl bg-brand-primary/20 text-brand-primary mb-6">
              <Lightbulb className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">Stuck for an idea?</h2>
            <p className="text-slate-400 mb-10">Our AI-powered (simulated) generator can help spark your creativity!</p>
            
            <div className="min-h-[120px] flex items-center justify-center mb-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIdea}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl md:text-3xl font-medium text-white italic"
                >
                  {isGenerating ? "Consulting the digital oracle..." : `"${currentIdea}"`}
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={generateIdea}
              disabled={isGenerating}
              className="px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              Generate New Idea
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Everything you need to know about the event.">
            Frequently Asked Questions
          </SectionTitle>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl group overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-slate-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-24 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Our Partners</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-center">
                <div className="h-12 w-32 bg-white/10 rounded-lg animate-pulse" />
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-slate-500">Interested in sponsoring? <a href="#" className="text-brand-primary underline">Download Prospectus</a></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
                <Code2 className="text-white w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold tracking-tight uppercase">Devcation Delhi</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
            </div>

            <div className="text-slate-500 text-sm">
              © 2026 Devcation Delhi. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
