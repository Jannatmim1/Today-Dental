import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Calendar, Phone, CheckCircle2, ChevronRight, Award, Shield, UserCheck, 
  MapPin, Clock, Heart, Star, StarHalf, Play, HelpCircle, ArrowUpRight, Check, CheckCircle
} from 'lucide-react';

import FloatingHeader from './components/FloatingHeader';
import ServiceDetailView from './components/ServiceDetailView';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import ContactForm from './components/ContactForm';
import MeetOurTeamPage from './components/MeetOurTeamPage';
import ReviewsPage from './components/ReviewsPage';
import WhyOrangeAndBluePage from './components/WhyOrangeAndBluePage';
import FinancingInsurancePage from './components/FinancingInsurancePage';
import OrthodonticsPage from './components/OrthodonticsPage';
import ImplantsWisdomTeethPage from './components/ImplantsWisdomTeethPage';
import { SERVICES, DOCTORS, TESTIMONIALS, GENERAL_FAQS, OFFICE_CONTACT } from './data/dentistryData';
import { Service } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', date: '', time: '09:00', note: '' });

  // Auto scroll testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectService = (serviceId: string) => {
    setActiveServiceId(serviceId);
    setCurrentPage(`service-${serviceId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePage = (pageId: string) => {
    if (pageId === 'home') {
      setActiveServiceId(null);
      setCurrentPage('home');
    } else if (pageId.startsWith('service-')) {
      const sId = pageId.replace('service-', '');
      setActiveServiceId(sId);
      setCurrentPage(pageId);
    } else {
      setActiveServiceId(null);
      setCurrentPage(pageId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveServiceId(null);
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 120);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingStep(2);
    setTimeout(() => {
      setBookingStep(1);
      setShowBookingModal(false);
      setBookingForm({ name: '', phone: '', date: '', time: '09:00', note: '' });
    }, 4500);
  };

  const currentService = SERVICES.find(s => s.id === activeServiceId);

  // Office Gallery Pictures
  const GALLERY_PHOTOS = [
    { url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600', caption: 'High-End Dental Operatory Suit' },
    { url: 'https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=600', caption: 'Comfortable Hospitality Lobby Areas' },
    { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600', caption: 'State of the Art Digital Implant Centers' },
    { url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600', caption: 'Low-Radiation Modern Digital X-Ray Suites' },
    { url: 'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=600', caption: 'Advanced Computer-Guided Dental Surgery Modules' },
    { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600', caption: 'Sanitized Treatment & Checkup Lounges' }
  ];

  return (
    <div className="min-h-screen bg-bg-base text-text-dark selection:bg-secondary/20 font-sans">
      
      {/* Dynamic Floating Glass Header */}
      <FloatingHeader 
        onNavigatePage={handleNavigatePage}
        currentPage={currentPage}
      />

      {/* RENDER DYNAMIC SUBPAGE BASED ON ROUTE STATE */}
      {currentPage === 'meet-our-team' ? (
        <MeetOurTeamPage 
          onBookNow={() => setShowBookingModal(true)} 
          onNavigateContact={() => handleNavigatePage('contact')} 
        />
      ) : currentPage === 'reviews' ? (
        <ReviewsPage 
          onBookNow={() => setShowBookingModal(true)} 
        />
      ) : currentPage === 'why-orange-and-blue' ? (
        <WhyOrangeAndBluePage 
          onBookNow={() => setShowBookingModal(true)} 
        />
      ) : currentPage === 'financing-insurance' ? (
        <FinancingInsurancePage 
          onBookNow={() => setShowBookingModal(true)} 
        />
      ) : currentPage === 'orthodontics' ? (
        <OrthodonticsPage 
          onSelectService={handleSelectService}
          onBookNow={() => setShowBookingModal(true)} 
        />
      ) : currentPage === 'implants-wisdom-teeth' ? (
        <ImplantsWisdomTeethPage 
          onSelectService={handleSelectService}
          onBookNow={() => setShowBookingModal(true)} 
        />
      ) : currentPage === 'contact' ? (
        <div className="py-8 bg-[#F8FBFD]">
          {/* Custom Contact page header block */}
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 mb-12">
            <div className="relative rounded-[32px] overflow-hidden shadow-xl bg-gradient-to-tr from-[#0E4B7A] via-[#1E7BC8] to-[#1E7BC8] text-white p-8 sm:p-12 lg:p-16">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#F47B20]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative max-w-3xl space-y-6">
                <div className="inline-flex items-center gap-1.5 bg-accent/90 text-white font-mono uppercase text-[10px] tracking-widest font-black py-1 px-3.5 rounded-full">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Haslet Premium Location</span>
                </div>
                <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
                  Contact Today Dental of Haslet
                </h1>
                <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans mt-2">
                  We look forward to welcoming you into our clinical family. Walk-ins are accepted and treated immediately. Give us a call or send a digital booking request below.
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      ) : currentPage.startsWith('service') && activeServiceId && currentService ? (
        <ServiceDetailView 
          service={currentService}
          onBack={() => handleNavigatePage('home')}
          onBookNow={() => setShowBookingModal(true)}
        />
      ) : (
        <>
          {/* ================= HERO SECTION ================= */}
          <section id="hero" className="relative pt-6 sm:pt-12 pb-24 lg:pb-36 overflow-hidden">
            
            {/* Elegant Floating Background Mesh Gradient */}
            <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-tr from-sky-200/40 via-blue-50/20 to-transparent rounded-full blur-[110px] pointer-events-none" />
            <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-indigo-50/30 rounded-full blur-[90px] pointer-events-none" />

            <div className="max-w-[1360px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* HERO LEFT CONTENT */}
                <div className="lg:col-span-6 flex flex-col justify-center space-y-8 animate-fade-in">
                  
                  {/* Decorative welcome tag */}
                  <div className="inline-flex items-center gap-2 bg-light-accent border border-primary/25 text-primary py-1.5 px-4 rounded-full w-fit">
                    <Sparkles className="w-3.5 h-3.5 text-accent animate-spin-slow" />
                    <span className="font-sans font-bold text-xs tracking-wider uppercase select-none">
                      Love Your Dentist in Haslet, TX
                    </span>
                  </div>

                  {/* High Contrast Cinematic Heading */}
                  <div className="space-y-4">
                    <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-text-dark tracking-tight leading-tight">
                      Smile <span className="text-secondary">BIG</span> Today
                    </h1>
                    <p className="font-display font-bold text-2xl lg:text-3.5xl text-primary tracking-tight italic leading-snug">
                      “We’ll Treat You Like Family”
                    </p>
                  </div>

                  {/* Supporting Copy */}
                  <p className="text-text-muted text-lg lg:text-xl leading-relaxed max-w-xl">
                    Experience elite dental care crafted around your comfort. From painless same-day emergencies and routine cleanings to modern implants, veneers, and clear aligners—you are fully covered under one luxurious roof.
                  </p>

                  {/* CTA Engagement Grid */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button 
                      onClick={() => setShowBookingModal(true)}
                      className="bg-accent text-white font-sans font-extrabold text-sm py-4.5 px-8 rounded-full transition-all text-center glow-orange-btn shadow-md cursor-pointer flex items-center justify-center gap-2"
                      id="hero-book-cta"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment Online</span>
                    </button>
                    
                    <a 
                      href={`tel:${OFFICE_CONTACT.phone}`} 
                      className="bg-white border-2 border-primary/20 text-text-dark font-sans font-extrabold text-sm py-4.5 px-8 rounded-full transition-all text-center hover:border-primary/80 flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow"
                    >
                      <Phone className="w-4 h-4 text-primary" />
                      <span>Call Now: {OFFICE_CONTACT.phone}</span>
                    </a>
                  </div>

                  {/* Direct Contact & Locations references */}
                  <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-text-muted border-t border-slate-100">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{OFFICE_CONTACT.address}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Same-Day Appointments Welcomed</span>
                    </span>
                  </div>
                </div>

                {/* HERO RIGHT MEDIA SYSTEM */}
                <div className="lg:col-span-6 relative mt-6 lg:mt-0">
                  <div className="relative w-full h-[380px] sm:h-[480px] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1000" 
                      alt="Modern Smiling Family with Happy Teeth"
                      className="absolute inset-0 w-full h-full object-cover brightness-[0.9] saturate-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Modern hospital light overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  </div>

                  {/* Overlaid Floating Glass Badges */}
                  <div className="absolute -top-6 -left-6 bg-white/94 luxury-glass rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs animate-bounce-slow">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-accent flex items-center justify-center shrink-0">
                      <Star className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-text-dark">Elite 5-Star Experience</p>
                      <p className="text-[10px] text-text-muted mt-0.5">Exceptional service is our fundamental vow.</p>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -right-6 bg-slate-900/96 text-white rounded-2xl p-4 shadow-xl border border-slate-800 flex items-center gap-3.5 max-w-xs transition-transform hover:scale-103">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold text-accent leading-none">Same Day Availability</p>
                      <p className="text-[10px] text-slate-300 mt-1 lines-2">Toothache emergencies matched on the spot.</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* FLOATING TRUST CARDS BANNER GRID */}
            <div id="trust-cards" className="max-w-[1360px] mx-auto px-6 mt-20">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { title: 'Dental Emergencies', caption: 'Urgent Same Day Care', desc: 'Broken crowns or acute nerve toothaches.' },
                  { title: 'Preventative Exams', caption: 'Comprehensive Cleanings', desc: 'Thorough scaler protection for your family.' },
                  { title: 'Invisalign® Aligners', caption: 'Orthodontics Style', desc: 'Clear alignments with removable plastics.' },
                  { title: 'Porcelain Veneers', caption: 'Cosmetic Dentistry', desc: 'Movie-star smiles designed individually.' },
                  { title: 'Computer Implants', caption: 'Tooth Implants & Surgery', desc: 'Permanent root tooth replacements.' },
                  { title: 'Sedation Dentistry', caption: 'Calm & Pain-Free Rest', desc: 'Nitrous oxide and Conscious slumber care.' }
                ].map((tc, i) => (
                  <div key={i} className="bg-white p-5 rounded-2.5xl border border-slate-100 luxury-shadow hover:translate-y-[-4px] transition-transform flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-mono font-black text-accent tracking-widest uppercase block mb-1">{tc.caption}</span>
                      <h4 className="font-display font-extrabold text-sm text-text-dark leading-tight">{tc.title}</h4>
                    </div>
                    <p className="text-[11px] text-text-muted mt-3">{tc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </section>

          {/* ================= WHY CHOOSE TODAY DENTAL SECTION ================= */}
          <section id="why-choose" className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
            <div className="max-w-[1360px] mx-auto px-6">
              
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                <div className="w-full lg:w-1/2">
                  <span className="text-xs font-mono tracking-[0.25em] font-extrabold text-primary bg-[#EAF5FD] py-1.5 px-4 rounded-full">
                    CHOOSE COMFORT & TRUST
                  </span>
                  <h2 className="font-display font-black text-4xl lg:text-5xl text-text-dark tracking-tight leading-none mt-4">
                    Personalized Dental Plans, Family Warmth
                  </h2>
                </div>
                <div className="w-full lg:w-1/2">
                  <p className="text-text-muted text-base lg:text-lg leading-relaxed">
                    Most dental offices feel like mechanics assemblies. At Today Dental of Haslet, we focus closely on your stress levels, financial bounds, and aesthetic expectations to structure care that respects your autonomy.
                  </p>
                </div>
              </div>

              {/* Grid with custom illustrations & details */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Treating You Like Family',
                    icon: <Heart className="w-6 h-6 text-[#F47B20]" />,
                    desc: 'We never suggest over-engineered restorative procedures. If a minor composite filling is suitable, we explain it transparently without upselling.'
                  },
                  {
                    title: 'Same-Day Flexible Timing',
                    icon: <Clock className="w-6 h-6 text-[#1E7BC8]" />,
                    desc: 'Work around busy school calendars or urgent structural emergencies. We offer rapid Saturday slots and weekday bookings to match your agenda.'
                  },
                  {
                    title: 'Digital Restorative High-Tech',
                    icon: <Award className="w-6 h-6 text-[#25B36A]" />,
                    desc: 'From low-radiation digital imaging and modern rotary root canals to high-precision implant layouts, clinical accuracy makes treatments safer.'
                  },
                  {
                    title: 'Comprehensive Clear Pricing',
                    icon: <Shield className="w-6 h-6 text-[#0E4B7A]" />,
                    desc: 'No hidden copays, arbitrary lab fees, or mysterious quotes. We work directly with your PPO provider or our saving membership plans.'
                  },
                  {
                    title: 'Comfort Sedation Modules',
                    icon: <UserCheck className="w-6 h-6 text-[#F47B20]" />,
                    desc: 'Nitrous oxide and oral therapy choices alleviate extreme childhood or dental block fear. Every procedure is a fully relaxed, gentle dream.'
                  },
                  {
                    title: 'Elite Patient Satisfaction',
                    icon: <Star className="w-6 h-6 text-[#1E7BC8]" />,
                    desc: 'Hundreds of real-world testimonies across Texas validate that our dental procedures really feel like a comfortable hospitality visit.'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-[#F8FBFD] p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm border border-slate-100/50 mb-6 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-text-dark mb-3">{item.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* ================= FULL-SERVICE DENTISTRY SHOWCASE ================= */}
          <section id="services" className="py-24 bg-[#F8FBFD]">
            <div className="max-w-[1360px] mx-auto px-6">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-mono tracking-[0.2em] font-extrabold text-[#1E7BC8] uppercase bg-white py-1.5 px-4 rounded-full border border-slate-100">
                  FULL-SERVICE REPERTOIRE
                </span>
                <h2 className="font-display font-black text-4xl lg:text-5xl text-text-dark tracking-tight mt-4 leading-none">
                  Advanced Dentistry and Oral Alignments
                </h2>
                <p className="text-text-muted text-sm mt-4">
                  Explore major categories. Select individual procedures below for a comprehensive review of outlines, FAQs, lists, and dedicated doctor reviews.
                </p>
              </div>

              {/* Service Categories Accordions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {[
                  { category: 'general', title: 'General & Family Dentistry', color: 'border-l-[#0E4B7A]' },
                  { category: 'cosmetic', title: 'Cosmetic Dentistry', color: 'border-l-[#F47B20]' },
                  { category: 'implants', title: 'Implants & Wisdom Teeth', color: 'border-l-[#1E7BC8]' },
                  { category: 'orthodontics', title: 'Orthodontics & Style Alignment', color: 'border-l-[#25B36A]' }
                ].map((cat, idx) => {
                  const items = SERVICES.filter(s => s.category === cat.category);
                  return (
                    <div key={idx} className={`bg-white rounded-3xl p-8 border-l-8 ${cat.color} border-slate-100 shadow-md`}>
                      <h3 className="font-display font-black text-xl text-text-dark mb-4">{cat.title}</h3>
                      <p className="text-xs text-text-muted mb-6">Comprehensive therapies provided with elite hospital standards.</p>
                      
                      <div className="space-y-3">
                        {items.map((srv) => (
                          <div 
                            key={srv.id}
                            onClick={() => handleSelectService(srv.id)}
                            className="bg-[#F8FBFD] p-4.5 rounded-2xl hover:bg-light-accent border border-transparent hover:border-[#1E7BC8]/15 cursor-pointer flex justify-between items-center group transition-colors"
                          >
                            <div>
                              <h4 className="font-sans font-bold text-sm text-text-dark group-hover:text-[#0E4B7A] transition-colors">{srv.title}</h4>
                              <p className="text-[11px] text-text-muted mt-0.5 max-w-sm truncate">{srv.shortDesc}</p>
                            </div>
                            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm shrink-0">
                              <ArrowUpRight className="w-4 h-4" />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ================= PRACTICE STORY & PHILOSOPHY ================= */}
          <section id="story" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1360px] mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                
                {/* Images left */}
                <div className="lg:col-span-5 relative">
                  <div className="relative w-full h-[400px] sm:h-[500px] rounded-[36px] overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" 
                      alt="Dental clinical discussion"
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-2.5xl max-w-xs shadow-xl ring-8 ring-white">
                    <p className="font-display font-extrabold text-lg leading-tight">Treating You Like family is Our True Identity</p>
                    <p className="text-xs text-white/80 mt-2">No corporate quotas, no sales pitches. Honest, direct medical diagnosis with compassion.</p>
                  </div>
                </div>

                {/* Content Right */}
                <div className="lg:col-span-7 space-y-6">
                  <span className="text-xs font-mono uppercase tracking-widest font-extrabold text-primary">
                    OUR PRACTICE STORY
                  </span>
                  <h2 className="font-display font-black text-4xl lg:text-5xl text-text-dark tracking-tight leading-tight">
                    Today Dental of Haslet Philosophy
                  </h2>
                  <p className="text-text-muted text-base lg:text-lg leading-relaxed">
                    Founded with the fundamental objective of redefining community dentistry across Haslet, TX, we focus heavily on comfortable hospitable architecture, painless treatments, and comprehensive procedures.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-[#F8FBFD] rounded-2xl border border-slate-100">
                      <h4 className="font-display font-extrabold text-sm text-text-dark mb-1">Local Haslet Integration</h4>
                      <p className="text-xs text-text-muted">Proudly supporting NW ISD schools, sports leagues & family charities.</p>
                    </div>
                    <div className="p-5 bg-[#F8FBFD] rounded-2xl border border-slate-100">
                      <h4 className="font-display font-extrabold text-sm text-text-dark mb-1">Strict Enamel Preservation</h4>
                      <p className="text-xs text-text-muted">We preserve your original teeth wherever possible using conservative therapies.</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-black text-primary">682-990-2800</p>
                      <p className="text-[10px] uppercase font-mono tracking-wider text-text-muted mt-0.5">Direct Haslet Line</p>
                    </div>
                    <button 
                      onClick={() => handleNavigateSection('contact')}
                      className="bg-[#0E4B7A] text-white font-semibold text-xs py-3 px-6 rounded-full cursor-pointer hover:bg-secondary transition-colors"
                    >
                      Book Online Form &rarr;
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ================= TEAM SECTION REDESIGN ================= */}
          <section id="team" className="py-24 bg-[#F8FBFD]">
            <div className="max-w-[1360px] mx-auto px-6">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-mono tracking-[0.2em] font-extrabold text-primary bg-white py-1.5 px-4 rounded-full border border-slate-100 uppercase">
                  MEET OUR ELITE CLINICAL TEAM
                </span>
                <h2 className="font-display font-black text-4xl lg:text-5xl text-text-dark tracking-tight mt-4 leading-none">
                  Dental Masters Focused on Family Comfort
                </h2>
                <p className="text-text-muted text-sm mt-4">
                  Learn about our clinicians, academic accomplishments, certifications, and philosophy.
                </p>
              </div>

              {/* GRID OF INTACT PORTRAIT CARDS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {DOCTORS.map((doc) => (
                  <div key={doc.id} className="bg-white rounded-3xl overflow-hidden border border-slate-100 luxury-shadow flex flex-col justify-between group">
                    <div className="relative h-[250px] overflow-hidden">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 scale-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                      <div className="absolute top-3 left-3 bg-[#182430]/80 backdrop-blur-sm text-accent font-mono text-[9px] font-extrabold py-1 px-2.5 rounded-full">
                        {doc.education.includes('UT') ? 'TX DENTIST' : 'CLINICIAN'}
                      </div>
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="font-display font-black text-lg text-text-dark">{doc.name}</h3>
                        <p className="text-xs text-primary font-semibold font-sans mt-0.5">{doc.title}</p>
                        <p className="text-[10px] text-text-muted font-mono mt-1">{doc.education}</p>
                      </div>

                      <p className="text-xs text-text-muted leading-relaxed line-clamp-4">{doc.bio}</p>

                      <div className="border-t border-slate-50 pt-4">
                        <span className="text-[10px] text-primary uppercase font-mono block tracking-widest font-bold mb-1.5">SPECIALTIES:</span>
                        <div className="flex flex-wrap gap-1 leading-none">
                          {doc.specialties.map((s, i) => (
                            <span key={i} className="text-[9px] bg-sky-200/20 text-[#1E7BC8] px-2 py-0.5 rounded-full font-medium">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MASONRY OFFICE GALLERY */}
              <div className="mt-20 pt-16 border-t border-slate-100">
                <div className="text-center max-w-xl mx-auto mb-10">
                  <h4 className="font-display font-extrabold text-xl text-text-dark uppercase tracking-tight">Our Modern Haslet Office Facilities</h4>
                  <p className="text-xs text-text-muted mt-1">See how we shape comforting healthcare spaces equipped with clean dental systems.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {GALLERY_PHOTOS.map((photo, i) => (
                    <div 
                      key={i} 
                      onClick={() => setLightboxImage(photo.url)}
                      className="group relative rounded-2.5xl overflow-hidden h-[160px] sm:h-[190px] cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img 
                        src={photo.url} 
                        alt={photo.caption} 
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4" />
                      <div className="absolute bottom-3 left-3 text-white text-[11px] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        {photo.caption} &rarr;
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* ================= PATIENT TRANSFORMATION SLIDER ================= */}
          <section id="transformations" className="py-24 bg-white border-t border-b border-indigo-50/45">
            <div className="max-w-[1360px] mx-auto px-6">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-mono tracking-[0.2em] font-extrabold text-primary bg-light-accent py-1.5 px-4 rounded-full uppercase">
                  BEFORE / AFTER SUCCESS STORIES
                </span>
                <h2 className="font-display font-black text-4xl lg:text-5xl text-text-dark tracking-tight mt-4 leading-none">
                  Real Transformations, Authentic Radiance
                </h2>
                <p className="text-text-muted text-sm mt-3">
                  Slide left and right with mouse or hand touch to preview clinical smile alignments. No Photoshop or stock filters applied.
                </p>
              </div>

              {/* Slider comparative container */}
              <BeforeAfterSlider 
                beforeImg="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?auto=format&fit=crop&q=80&w=1000"
                afterImg="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000"
                title="Interactive Smile Alignment Transformation"
                description="This patient underwent custom porcelain veneer restorations and minor cosmetic gingival margins correction. It closed severe tooth spacing, resolved deep-set coffee yellowing, and constructed perfect visual symmetry. She now enjoys ultimate smile confidence in her daily lifestyle!"
              />

            </div>
          </section>

          {/* ================= TESTIMONIALS SECTION ================= */}
          <section id="testimonials" className="py-24 bg-[#F8FBFD] relative overflow-hidden">
            <div className="max-w-[1360px] mx-auto px-6">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                
                {/* Metrics Left */}
                <div className="lg:col-span-5 space-y-8">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] font-extrabold text-[#1E7BC8] bg-white py-1 px-3.5 rounded-full border border-slate-100">
                      PATIENT SATISFACTION METRICS
                    </span>
                    <h2 className="font-display font-black text-4xl lg:text-5.5xl text-text-dark tracking-tight mt-4 leading-tight">
                      Reviewed as the Best Dental Office in Haslet
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-5 rounded-2.5xl border border-slate-100/50 shadow-sm text-center">
                      <p className="text-4xl font-black text-primary">5.0</p>
                      <div className="flex justify-center text-orange-400 my-1">
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                        <Star className="w-3 h-3 fill-current" />
                      </div>
                      <p className="text-[10px] text-text-muted font-mono font-bold uppercase tracking-wider mt-1.5">GOOGLE REVIEW RATING</p>
                    </div>

                    <div className="bg-white p-5 rounded-2.5xl border border-slate-100/50 shadow-sm text-center">
                      <p className="text-4xl font-black text-accent">Same-Day</p>
                      <p className="text-[10px] text-text-muted font-mono font-bold uppercase tracking-wider mt-1.5">URGENCY WORKFLOWS</p>
                      <p className="text-[9px] text-[#25B36A] font-semibold mt-0.5">Quick pain relief focus</p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-900 text-white rounded-3xl border border-slate-800">
                    <h5 className="font-display font-bold text-sm text-accent uppercase tracking-wider mb-2">Our Standard Core Vows:</h5>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-success shrink-0" />
                        <span>Treating You Like family always</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-success shrink-0" />
                        <span>No hidden high commercial quotas</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-success shrink-0" />
                        <span>Sedation-supported calm procedures</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Reviews Carousel Right */}
                <div className="lg:col-span-7">
                  <div className="relative bg-white rounded-3.5xl p-8 lg:p-10 border border-slate-100 luxury-shadow h-[320px] flex flex-col justify-between overflow-hidden">
                    
                    {/* Animated Testimonial Element */}
                    <div className="animate-fade-in space-y-4">
                      {/* Rating star widgets */}
                      <div className="flex text-orange-400">
                        {Array.from({ length: TESTIMONIALS[testimonialIndex].rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      
                      <p className="text-text-dark text-base lg:text-lg leading-relaxed font-sans italic">
                        "{TESTIMONIALS[testimonialIndex].text}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-5">
                      <div>
                        <p className="font-display font-black text-sm text-primary">{TESTIMONIALS[testimonialIndex].author}</p>
                        <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider mt-0.5">
                          Treatment received: {TESTIMONIALS[testimonialIndex].treatment}
                        </p>
                      </div>

                      {/* Manual Carousel selectors */}
                      <div className="flex gap-2">
                        {TESTIMONIALS.map((t, idx) => (
                          <button 
                            key={t.id} 
                            onClick={() => setTestimonialIndex(idx)}
                            className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                              idx === testimonialIndex ? 'bg-[#0E4B7A]' : 'bg-slate-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* ================= FREE TEETH WHITENING PROMO SECTION ================= */}
          <section id="promotions" className="py-24 bg-white">
            <div className="max-w-[1360px] mx-auto px-6">
              
              {/* Giant elegant campaign card layout with responsive split image design */}
              <div className="bg-gradient-to-tr from-primary via-secondary to-[#1E7BC8] text-white rounded-[32px] shadow-2xl relative overflow-hidden border border-white/10 max-w-5xl mx-auto">
                <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#F47B20]/15 rounded-full blur-3xl pointer-events-none" />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14">
                  {/* Left: Text Content Column */}
                  <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
                    <div className="inline-flex items-center gap-1.5 bg-[#F47B20] text-white font-mono uppercase text-[10px] tracking-widest font-black py-1 px-4 rounded-full">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                      <span>SPECIAL CAMPAIGN PROMOTION</span>
                    </div>
                    
                    <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight text-white animate-fade-in">
                      {OFFICE_CONTACT.promotionText.headline}
                    </h2>
                    
                    <p className="font-sans font-bold text-accent text-lg sm:text-xl">
                      {OFFICE_CONTACT.promotionText.subHeadline}
                    </p>

                    <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-xl">
                      {OFFICE_CONTACT.promotionText.details}
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <button 
                        onClick={() => handleNavigateSection('contact')}
                        className="bg-accent text-white font-sans font-extrabold text-sm py-4 px-10 rounded-full shadow-lg glow-orange-btn cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
                        id="promo-cta-btn"
                      >
                        {OFFICE_CONTACT.promotionText.cta} &rarr;
                      </button>
                      <p className="text-[10px] text-white/55 sm:max-w-xs leading-tight">
                        Conditions apply. Exam & routine dental cleanings are required. Simply ask during your first visit!
                      </p>
                    </div>
                  </div>

                  {/* Right: Premium Image Column */}
                  <div className="lg:col-span-5 order-1 lg:order-2 w-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white/10 aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] w-full max-h-[320px] sm:max-h-[380px] lg:max-h-none">
                      <img 
                        src="https://i.pinimg.com/736x/34/2c/c7/342cc740feca7cc553c51d1c035e1516.jpg" 
                        alt="Today Dental Teeth Whitening Promotion"
                        className="w-full h-full object-cover saturate-[1.05] brightness-[1.03] hover:scale-[1.02] transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        id="promo-main-img"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* ================= ACCORDION GENERAL FAQ SECTION ================= */}
          <section id="faqs" className="py-24 bg-[#F8FBFD] border-t border-slate-100">
            <div className="max-w-[1360px] mx-auto px-6">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-mono tracking-[0.2em] font-extrabold text-primary bg-white py-1.5 px-4 rounded-full border border-slate-100 uppercase">
                  TRANSPARENT ANSWERS ALWAYS
                </span>
                <h2 className="font-display font-black text-4xl lg:text-5xl text-text-dark tracking-tight mt-4 leading-none">
                  Frequently Asked Questions
                </h2>
                <p className="text-text-muted text-sm mt-3">
                  We maintain radical procedural transparency. Find answers below regarding pricing, insurance, scheduling, and accessibility.
                </p>
              </div>

              {/* Premium accordion widgets with seamless transition states */}
              <div className="max-w-3xl mx-auto space-y-4">
                {GENERAL_FAQS.map((faq, i) => {
                  const isActive = activeFaqIndex === i;
                  return (
                    <div 
                      key={i} 
                      className={`bg-white rounded-2xl border transition-all duration-300 ${
                        isActive ? 'border-primary/45 shadow-md' : 'border-slate-100/80 hover:border-slate-200'
                      }`}
                    >
                      <button 
                        onClick={() => setActiveFaqIndex(isActive ? null : i)}
                        className="w-full text-left py-5 px-6 flex justify-between items-center group font-display font-bold text-sm lg:text-base text-text-dark cursor-pointer mt-0"
                      >
                        <span>{faq.question}</span>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center bg-[#EAF5FD] text-primary transition-transform duration-300 ${
                          isActive ? 'rotate-180' : ''
                        }`}>
                          <ChevronRight className="w-3.5 h-3.5 rotate-95" />
                        </span>
                      </button>

                      {isActive && (
                        <div className="px-6 pb-5 text-xs text-text-muted leading-relaxed border-t border-slate-50 pt-3 animate-fade-in">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </section>

          {/* ================= CONTACT SECTION WITH MAPS & FORM ================= */}
          <ContactForm />

          {/* ================= PRE-FOOTER CALL TO ACTION ================= */}
          <section id="pre-footer-cta" className="py-16 bg-[#F8FBFD] border-t border-slate-100">
            <div className="max-w-[1360px] mx-auto px-6">
              <div className="bg-gradient-to-r from-[#0E4B7A] via-[#1E7BC8] to-[#1E7BC8] rounded-[32px] p-8 lg:p-12 text-white flex flex-col lg:flex-row justify-between items-center gap-8 shadow-xl">
                <div>
                  <h3 className="font-display font-black text-2xl lg:text-3xl tracking-tight leading-none">Ready to Experience Beautiful Dentistry?</h3>
                  <p className="text-slate-200 text-xs mt-3">Schedule your same-day family cleaning or secure teeth whitening today.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                  <button 
                    onClick={() => setShowBookingModal(true)}
                    className="bg-accent text-white font-sans font-bold text-xs py-4 px-8 rounded-full text-center glow-orange-btn cursor-pointer"
                  >
                    Book Online Right Now
                  </button>
                  <a 
                    href={`tel:${OFFICE_CONTACT.phone}`} 
                    className="bg-white/10 border border-white/25 text-white font-sans font-bold text-xs py-4 px-8 rounded-full text-center hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    Call Us: {OFFICE_CONTACT.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* ================= LUXURY FOOTER ================= */}
      <footer className="bg-slate-950 text-white pt-20 pb-8 border-t border-slate-800">
        <div className="max-w-[1360px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-[#0E4B7A] to-[#1E7BC8] rounded-full flex items-center justify-center text-white font-extrabold text-sm">
                T
              </div>
              <span className="font-display font-extrabold text-lg leading-none tracking-tight">
                TODAY<span className="text-accent">DENTAL</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Redefining dental medicine across Haslet, Justin, Keller, and Northwest ICD with comfort, hospitality care, and pristine clinical precision. “We’ll Treat You Like Family.”
            </p>
            <div className="flex text-orange-400 items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="text-white text-xs font-bold font-sans ml-1">5.0 Star Rated Office</span>
            </div>
          </div>

          {/* Col 2: Major services */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#F47B20]">Our Services</h4>
            <div className="grid grid-cols-1 gap-2 text-xs text-slate-400">
              {SERVICES.slice(0, 7).map(s => (
                <button 
                  key={s.id} 
                  onClick={() => handleSelectService(s.id)}
                  className="hover:text-white transition-colors text-left w-fit cursor-pointer"
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Secondary services & links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-primary">Alignments & Cosmetic</h4>
            <div className="grid grid-cols-1 gap-2 text-xs text-slate-400">
              {SERVICES.slice(7).map(s => (
                <button 
                  key={s.id} 
                  onClick={() => handleSelectService(s.id)}
                  className="hover:text-white transition-colors text-left w-fit cursor-pointer"
                >
                  {s.title}
                </button>
              ))}
              <button 
                onClick={() => handleNavigateSection('promotions')} 
                className="hover:text-[#F47B20] text-accent transition-colors font-bold text-left w-fit cursor-pointer"
              >
                Free Teeth Whitening Promo
              </button>
            </div>
          </div>

          {/* Col 4: Reach out */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#F47B20]">Haslet Contact</h4>
            <p className="text-xs text-slate-400 line-clamp-2">
              {OFFICE_CONTACT.address}
            </p>
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400 block">General Office Line:</span>
              <a href={`tel:${OFFICE_CONTACT.phone}`} className="text-base font-extrabold text-white block hover:underline">
                {OFFICE_CONTACT.phone}
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA BAR CODES */}
        <div className="max-w-[1360px] mx-auto px-6 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-500 font-medium">
          <p>
            &copy; 2026 Today Dental of Haslet. All rights reserved. “We'll Treat You Like Family” is a registered service mark.
          </p>
          <div className="flex gap-4">
            <button className="hover:text-white transition-colors cursor-pointer">Privacy Policy</button>
            <span>•</span>
            <button className="hover:text-white transition-colors cursor-pointer">Compliance Access</button>
            <span>•</span>
            <button className="hover:text-white transition-colors cursor-pointer">WCAG Compliant</button>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX PORTFOLIO POPUP */}
      {lightboxImage && (
        <div 
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 bg-slate-950/94 z-50 flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          <div className="relative max-w-4xl max-h-[85vh]">
            <img src={lightboxImage} alt="Office Facility Lightbox" className="rounded-2xl max-w-full max-h-[80vh] object-contain shadow-2xl border-4 border-slate-800" referrerPolicy="no-referrer" />
            <p className="text-center text-xs text-slate-400 mt-3 font-medium">Click anywhere to close full screen facility showcase</p>
          </div>
        </div>
      )}

      {/* BOOKING CALENDAR DIALOG MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-[28px] max-w-lg w-full p-8 border border-slate-100 luxury-shadow relative">
            <button 
              onClick={() => { setShowBookingModal(false); setBookingStep(1); }}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-text-dark flex items-center justify-center transition-colors cursor-pointer"
            >
              &times;
            </button>

            {bookingStep === 2 ? (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-green-100 text-[#25B36A] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-2xl text-text-dark">Calendar Tentatively Secured!</h3>
                <p className="text-xs text-text-muted max-w-sm mx-auto leading-relaxed">
                  We have successfully held the calendar date <strong className="text-text-dark">{bookingForm.date}</strong> at <strong className="text-text-dark">{bookingForm.time}</strong> for <strong className="text-text-dark">{bookingForm.name}</strong>.
                </p>
                <p className="text-[11px] text-accent font-semibold bg-light-accent p-3 rounded-xl">
                  One of our dental schedulers will call or text your phone <strong className="text-primary">{bookingForm.phone}</strong> in exactly 15 minutes to confirm alignment details.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-tr from-[#0E4B7A] to-[#1E7BC8] rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-lg text-text-dark leading-none">Schedule Appointment</h3>
                    <p className="text-[11px] text-text-muted mt-1 leading-none">Treating You Like Family is Our Guarantee</p>
                  </div>
                </div>

                <form onSubmit={handleModalSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-text-muted mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={bookingForm.name}
                      onChange={e => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full text-xs font-semibold bg-[#F8FBFD] border border-slate-200/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Cell Phone Number */}
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-text-muted mb-1">Cell Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="682-990-2800"
                      value={bookingForm.phone}
                      onChange={e => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full text-xs font-semibold bg-[#F8FBFD] border border-slate-200/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider uppercase text-text-muted mb-1">Requested Date</label>
                      <input 
                        type="date" 
                        required
                        value={bookingForm.date}
                        min={new Date().toISOString().split('T')[0]}
                        onChange={e => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full text-xs font-semibold bg-[#F8FBFD] border border-slate-200/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-mono tracking-wider uppercase text-text-muted mb-1">Prefered Hour Slot</label>
                      <select 
                        value={bookingForm.time}
                        onChange={e => setBookingForm({ ...bookingForm, time: e.target.value })}
                        className="w-full text-xs font-semibold bg-[#F8FBFD] border border-slate-200/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      >
                        <option value="09:00">09:00 AM Slot</option>
                        <option value="10:30">10:30 AM Slot</option>
                        <option value="12:00">12:00 PM Slot</option>
                        <option value="14:00">02:00 PM Slot</option>
                        <option value="15:30">03:30 PM Slot</option>
                        <option value="17:00">05:00 PM Slot</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-text-muted mb-1">Toothache or General Details</label>
                    <textarea 
                      placeholder="e.g. Schedule checking cleaning or urgent aching molars"
                      rows={2}
                      value={bookingForm.note}
                      onChange={e => setBookingForm({ ...bookingForm, note: e.target.value })}
                      className="w-full text-xs font-semibold bg-[#F8FBFD] border border-slate-200/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <p className="text-[10px] text-text-muted leading-tight">
                    By confirming, you authorize Today Dental of Haslet to secure these slots temporarily.
                  </p>

                  <button 
                    type="submit" 
                    className="w-full bg-accent text-white font-sans font-extrabold text-xs py-4 rounded-xl shadow-md glow-orange-btn cursor-pointer text-center"
                  >
                    Send Confidential Session Booking Request &rarr;
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
