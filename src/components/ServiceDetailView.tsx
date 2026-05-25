import React, { useState } from 'react';
import { Calendar, Phone, CheckCircle2, ChevronRight, MessageSquare, ArrowLeft, ShieldCheck, Heart, User, Clock, Star, MapPin } from 'lucide-react';
import { Service, Doctor } from '../types';
import { DOCTORS, OFFICE_CONTACT } from '../data/dentistryData';

interface ServiceDetailViewProps {
  service: Service;
  onBack: () => void;
  onBookNow: () => void;
}

export default function ServiceDetailView({ service, onBack, onBookNow }: ServiceDetailViewProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  // Match category with an image
  let bgImage = 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200';
  if (service.category === 'cosmetic') {
    bgImage = 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200';
  } else if (service.category === 'orthodontics') {
    bgImage = 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200';
  } else if (service.id === 'dental-emergencies') {
    bgImage = 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&q=80&w=1200';
  } else if (service.category === 'implants') {
    bgImage = 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200';
  }

  // Highlight 1 doctor to spotlight
  const spotlightDoc = DOCTORS[Math.abs(service.title.charCodeAt(0)) % DOCTORS.length];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', note: '' });
    }, 4000);
  };

  return (
    <article className="min-h-screen bg-[#F8FBFD] py-4 lg:py-8 font-sans">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb & Navigation Back */}
        <nav className="flex items-center gap-2 text-xs font-medium text-text-muted mb-8 w-fit bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
          <button 
            onClick={onBack} 
            className="hover:text-primary transition-colors inline-flex items-center gap-1 font-bold cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="capitalize">{service.category} Dentistry</span>
          <ChevronRight className="w-3 h-3 text-slate-300" />
          <span className="text-primary font-semibold">{service.title}</span>
        </nav>

        {/* Premium Service Hero Frame */}
        <div className="relative rounded-3xl overflow-hidden h-[300px] lg:h-[450px] mb-12 shadow-xl border border-white/40">
          <img 
            src={bgImage} 
            alt={service.title} 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.45] saturate-[1.1]"
            referrerPolicy="no-referrer"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          
          <div className="absolute left-6 right-6 bottom-6 lg:left-12 lg:right-12 lg:bottom-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1 bg-accent/90 text-white font-mono uppercase text-[10px] tracking-widest font-extrabold px-3 py-1 rounded-full mb-3">
                <ShieldCheck className="w-3 h-3" />
                <span>Today Dental Certified</span>
              </div>
              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-6xl text-white tracking-tight drop-shadow-sm">
                {service.title}
              </h1>
              <p className="text-white/90 text-base lg:text-xl font-medium max-w-xl mt-3 leading-relaxed drop-shadow-sm">
                {service.shortDesc}
              </p>
            </div>
            <button 
              onClick={onBookNow} 
              className="bg-accent hover:bg-opacity-95 text-white font-bold text-sm py-4 px-8 rounded-full shadow-lg glow-orange-btn shrink-0 w-full md:w-auto text-center cursor-pointer"
            >
              Request Appointment Online
            </button>
          </div>
        </div>

        {/* Main Columns Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Complete Content & Story */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Primary Explanation Box */}
            <section className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 luxury-shadow">
              <h2 className="font-display font-bold text-2xl lg:text-3xl text-text-dark mb-6 leading-tight flex items-center gap-3">
                <Heart className="w-7 h-7 text-primary" />
                <span>About this Treatment</span>
              </h2>
              <p className="text-text-muted text-lg leading-relaxed mb-6 whitespace-pre-wrap">
                {service.fullDesc}
              </p>
              
              <div className="bg-light-accent border border-primary/10 rounded-2xl p-6 mt-8">
                <h4 className="font-display font-semibold text-primary text-sm uppercase tracking-wider mb-3">
                  Why Families Choose Today Dental of Haslet:
                </h4>
                <p className="text-text-dark text-sm leading-relaxed font-medium">
                  At Today dental, we preserve the highest clinical safety standards. We treat you like family, ensuring absolutely no surprise copays, providing gentle, patient-centered techniques, and offering fully customized sedation levels to ease dental anxiety.
                </p>
              </div>
            </section>

            {/* Treatment Highlights Grid */}
            <section className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 luxury-shadow">
              <h3 className="font-display font-bold text-2xl text-text-dark mb-6">
                Core Clinical Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text-dark font-semibold text-sm">{h}</p>
                      <p className="text-text-muted text-xs mt-1">High-end hospital safety protocols always applied.</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Specific FAQ Section */}
            <section className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 luxury-shadow">
              <h3 className="font-display font-bold text-2xl text-text-dark mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-primary" />
                <span>Frequently Asked Questions</span>
              </h3>
              <div className="space-y-4">
                {service.faqs.map((faq, idx) => (
                  <details key={idx} className="group border border-slate-100 rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex items-center justify-between font-display font-bold text-sm lg:text-base text-text-dark cursor-pointer">
                      <span>{faq.question}</span>
                      <span className="transition-transform group-open:rotate-180 text-primary">
                        <ChevronRight className="w-4 h-4 rotate-90" />
                      </span>
                    </summary>
                    <p className="text-text-muted text-sm leading-relaxed mt-3 border-t border-slate-100/50 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Dedicated Dentist Spotlight on this Service */}
            <section className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col md:flex-row gap-8 items-center">
              <img 
                src={spotlightDoc.image} 
                alt={spotlightDoc.name} 
                className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover shrink-0 border-2 border-white/50 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F47B20] font-extrabold block mb-1">
                  DOCTOR IN THE SPOTLIGHT
                </span>
                <h3 className="font-display font-bold text-2xl">{spotlightDoc.name}</h3>
                <p className="text-white/80 text-xs font-mono mb-4">{spotlightDoc.education}</p>
                <p className="text-white/90 text-sm leading-relaxed italic mb-4">
                  {spotlightDoc.quote || `"${spotlightDoc.name} is deeply committed to delivering elite restoration and preventative therapy for patients in Haslet."`}
                </p>
                <span className="text-[11px] bg-white/20 px-3 py-1 rounded-full text-white font-medium">
                  Specializes in: {spotlightDoc.specialties[0]}
                </span>
              </div>
            </section>
          </div>

          {/* RIGHT: FLOATING STICKY BOOKING PANEL */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-6">
            
            {/* Contact Panel Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-light-accent flex items-center justify-center text-primary">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display font-extrabold text-[#182430] text-sm leading-none">Instant Appointment</h4>
                  <p className="text-[11px] text-text-muted mt-1">Same-day availability for pain relief</p>
                </div>
              </div>

              {submitted ? (
                <div className="bg-green-50 text-green-700 text-xs p-4 rounded-2xl border border-green-200 animate-fade-in">
                  <p className="font-bold">Thank You!</p>
                  <p className="mt-1">Your request for {service.title} was submitted. One of our family dental concierges will call you at your number in 15 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-text-muted mb-1">YOUR FULL NAME</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-text-muted mb-1">YOUR CONTACT PHONE</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="682-990-2800"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-text-muted mb-1">PREFERENCE OR TOOTHACHE DETAIL</label>
                    <textarea 
                      placeholder="e.g. Schedule checking cleaning or urgent aching front teeth"
                      rows={3}
                      value={formData.note}
                      onChange={e => setFormData({ ...formData, note: e.target.value })}
                      className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/80 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 bg-primary text-white font-bold text-xs rounded-xl hover:bg-secondary transition-colors glow-blue-btn cursor-pointer"
                  >
                    Quick-Book {service.title} &rarr;
                  </button>
                </form>
              )}

              <div className="border-t border-slate-100 mt-5 pt-4 text-center">
                <p className="text-[11px] text-text-muted">Prefer human talk? Call now:</p>
                <a href={`tel:${OFFICE_CONTACT.phone}`} className="font-display font-extrabold text-primary text-lg mt-1 hover:underline flex items-center justify-center gap-1.5">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>{OFFICE_CONTACT.phone}</span>
                </a>
              </div>
            </div>

            {/* Quick Trust Statistics Mini Panel */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-6 border border-slate-800 shadow-md">
              <h5 className="font-display font-bold text-sm text-accent uppercase tracking-widest block mb-4">Patient Security</h5>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 text-[#F47B20] shrink-0 flex items-center justify-center">
                    <Star className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">5-Star Reviewed</p>
                    <p className="text-[10px] text-white/65 mt-0.5">Hundreds of exceptional verified local reviews from Haslet & Northwest ISD families.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0 flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Same-Day Urgencies</p>
                    <p className="text-[10px] text-white/65 mt-0.5">Walk in or call us. We prevent untreated nerve pains from disrupting your sleep.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 shrink-0 flex items-center justify-center">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">Approach like Family</p>
                    <p className="text-[10px] text-white/65 mt-0.5">No mechanical treatments. Honest clinical explanations directly from our lead doctors.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </article>
  );
}
