import React from 'react';
import { SERVICES } from '../data/dentistryData';
import { Award, CheckCircle2, ShieldCheck, Star, Calendar, ArrowRight, Play } from 'lucide-react';

interface OrthodonticsPageProps {
  onSelectService: (serviceId: string) => void;
  onBookNow: () => void;
}

export default function OrthodonticsPage({ onSelectService, onBookNow }: OrthodonticsPageProps) {
  // We extract orthodontic services: braces, invisalign
  const orthoServices = SERVICES.filter(s => s.id === 'braces' || s.id === 'invisalign');

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
              <span>Perfect Alignment Vows</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              Orthodontics & Smile Alignment
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans mt-2">
              Straighten your smile, improve your airway, and maximize your bite comfort today. We specialize in both traditional metal/ceramic braces and contemporary Invisalign® clear aligners.
            </p>
          </div>
        </div>

        {/* Orthodontic Services Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {orthoServices.map((service) => (
            <div key={service.id} className="bg-white rounded-[32px] p-8 border border-slate-100 luxury-shadow flex flex-col justify-between space-y-8 hover:translate-y-[-4px] transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] bg-sky-100 text-primary font-mono tracking-wider font-extrabold px-3 py-1 rounded-full uppercase">
                    {service.id === 'invisalign' ? 'Clear Aligners' : 'Traditional Braces'}
                  </span>
                  <div className="flex text-orange-400 gap-0.5">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                <h3 className="font-display font-black text-2xl text-text-dark">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{service.shortDesc}</p>
                <p className="text-text-muted text-xs leading-relaxed">{service.fullDesc}</p>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3">
                  <span className="text-[10px] text-[#0E4B7A] uppercase font-mono tracking-wider font-bold block">Clinical Highlights Include:</span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {service.highlights.map((hlt, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-text-dark">
                        <CheckCircle2 className="w-4.5 h-4.5 text-success shrink-0" />
                        <span>{hlt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onClick={() => onSelectService(service.id)}
                  className="text-xs text-primary font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Detailed Treatment FAQs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button 
                  onClick={onBookNow}
                  className="bg-[#0E4B7A] text-white font-sans font-bold text-xs py-2.5 px-6 rounded-xl hover:bg-secondary cursor-pointer glow-blue-btn"
                >
                  Reserve Alignment Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Orthodontic Treatment Steps Timeline */}
        <section className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 luxury-shadow mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-display font-black text-2xl text-text-dark">Aligning Process Timeline</h3>
            <p className="text-xs text-text-muted mt-1">What to expect when securing teeth whitening or aligners in Haslet.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { num: '01', title: '3D Laser Scan & Map', desc: 'We take high-speed discomfort-free digital scans of your original teeth structure.' },
              { num: '02', title: 'Custom Dentist Draft', desc: 'Our lead doctors compute precise computer-guided wire tension steps.' },
              { num: '03', title: 'Brackets or Trays Fitting', desc: 'Secure custom ceramic blocks or crystal clear Invisalign aligner trays fitting safely.' },
              { num: '04', title: 'Retainer Final Support', desc: 'Keep beautiful results permanent using our premium clinical retainer guards.' }
            ].map((step, idx) => (
              <div key={idx} className="p-5 bg-[#F8FBFD] rounded-2.5xl space-y-3 relative hover:bg-white hover:shadow-md transition-colors border border-slate-100">
                <span className="text-3xl font-black text-sky-200 block font-mono">{step.num}</span>
                <h4 className="font-display font-extrabold text-sm text-text-dark">{step.title}</h4>
                <p className="text-[11px] text-text-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
