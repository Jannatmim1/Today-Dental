import React from 'react';
import { DOCTORS } from '../data/dentistryData';
import { Award, GraduationCap, Heart, Sparkles, BookOpen, Clock, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface MeetOurTeamPageProps {
  onBookNow: () => void;
  onNavigateContact: () => void;
}

export default function MeetOurTeamPage({ onBookNow, onNavigateContact }: MeetOurTeamPageProps) {
  return (
    <div className="min-h-screen bg-[#F8FBFD] py-8 font-sans">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        
        {/* Page Hero */}
        <div className="relative rounded-[32px] overflow-hidden mb-16 shadow-xl bg-gradient-to-tr from-[#0E4B7A] via-[#1E7BC8] to-[#1E7BC8] text-white p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#F47B20]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-accent/90 text-white font-mono uppercase text-[10px] tracking-widest font-black py-1 px-3.5 rounded-full">
              <Award className="w-3.5 h-3.5" />
              <span>Haslet's Trusted Leaders</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              Meet Our Dental Masters
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
              Get to know the highly trained specialists of Today Dental of Haslet. Our clinicians combine extensive clinical training with a gentle, family-first approach to make every appointment stress-free.
            </p>
          </div>
        </div>

        {/* Philosophy Callout Card */}
        <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 luxury-shadow mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-14 h-14 rounded-2xl bg-light-accent text-primary flex items-center justify-center shrink-0">
            <Heart className="w-7 h-7 text-accent" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-text-dark mb-2">Our Human-Centric Clinical Philosophy</h3>
            <p className="text-text-muted text-sm leading-relaxed">
              We became dentists to heal smiles and build lasting local friendships, not to meet dynamic corporate treatment quotas. When you consult with our team, you receive direct, honest diagnostic truths. If a standard preventative cleaning is all you require, that is exact details of what we will tell you.
            </p>
          </div>
        </div>

        {/* Detailed Team Roster Profile Cards */}
        <div className="space-y-16">
          {DOCTORS.map((doc, idx) => (
            <div 
              key={doc.id} 
              id={doc.id}
              className={`bg-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-100 luxury-shadow flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch transition-transform hover:translate-y-[-4px] duration-300 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Doctor Headshot Frame */}
              <div className="w-full lg:w-2/5 shrink-0 relative rounded-2.5xl overflow-hidden h-[300px] lg:h-auto min-h-[380px] shadow-md">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="absolute inset-0 w-full h-full object-cover saturate-[1.03]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 text-white bg-slate-950/80 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase border border-white/10">
                  {doc.title}
                </div>
              </div>

              {/* Doctor Bio and Highlights Content */}
              <div className="flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <h2 className="font-display font-black text-2xl sm:text-3xl text-text-dark">{doc.name}</h2>
                      <p className="text-sm text-primary font-bold">{doc.title}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-text-muted bg-slate-50 px-3.5 py-1.5 rounded-full border border-slate-100">
                      <GraduationCap className="w-4 h-4 text-primary" />
                      <span className="font-mono font-semibold">{doc.education}</span>
                    </div>
                  </div>

                  <p className="text-text-muted text-sm leading-relaxed whitespace-pre-wrap">{doc.bio}</p>

                  <div className="bg-[#EAF5FD]/50 border border-[#1E7BC8]/10 rounded-2xl p-5 italic text-sm text-[#0E4B7A] font-medium leading-relaxed">
                    {doc.quote || `"${doc.name} is dedicated to putting Haslet families at peaceful ease."`}
                  </div>
                </div>

                {/* Specialties and Skills */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <span className="text-[10px] text-primary uppercase font-mono tracking-widest font-extrabold flex items-center gap-1.5 mb-2">
                    <BookOpen className="w-3.5 h-3.5 text-accent" />
                    <span>Specialized clinical areas of focus:</span>
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {doc.specialties.map((spec, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="text-xs bg-sky-100 text-[#0E4B7A] px-4 py-1.5 rounded-full font-bold shadow-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action CTA for Doctor */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={onBookNow} 
                    className="bg-primary text-white font-sans font-bold text-xs py-3 px-6 rounded-xl hover:bg-secondary transition-colors glow-blue-btn text-center cursor-pointer"
                  >
                    Schedule with {doc.name.split(' ')[1]} &rarr;
                  </button>
                  <button 
                    onClick={onNavigateContact} 
                    className="bg-white border border-slate-200 text-text-dark hover:border-primary font-sans font-medium text-xs py-3 px-6 rounded-xl text-center cursor-pointer"
                  >
                    Office Location & Map
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Credentials Accordion Standard section */}
        <section className="mt-24 pt-16 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F47B20] font-black">CONTINUOUS EDUCATION VOW</span>
            <h3 className="font-display font-black text-2xl lg:text-3xl text-text-dark mt-2 tracking-tight">Academic Safety Standard</h3>
            <p className="text-xs text-text-muted mt-2">
              Our dental clinicians accumulate over 100 combined hours of continuing clinical education annually. This guarantees safe digital treatments for your gums, enamel, and teeth structure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2.5xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-[#EAF5FD] text-primary rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                01
              </div>
              <h4 className="font-display font-bold text-sm text-text-dark mb-2">Texas Dental Board</h4>
              <p className="text-xs text-text-muted">Fully certified and active active members of the Texas Dental Association and ADA.</p>
            </div>
            <div className="bg-white p-6 rounded-2.5xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-[#EAF5FD] text-primary rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                02
              </div>
              <h4 className="font-display font-bold text-sm text-text-dark mb-2">Hospital Sanitation</h4>
              <p className="text-xs text-text-muted">Rigorous compliance with OSHA and CDC biological room sanitation standards.</p>
            </div>
            <div className="bg-white p-6 rounded-2.5xl border border-slate-100 shadow-sm text-center">
              <div className="w-10 h-10 bg-[#EAF5FD] text-primary rounded-xl flex items-center justify-center mx-auto mb-4 font-bold">
                03
              </div>
              <h4 className="font-display font-bold text-sm text-text-dark mb-2">Digital Modernization</h4>
              <p className="text-xs text-text-muted">Equipped with 3D CBCT bone mapping and electronic rotary dental files.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
