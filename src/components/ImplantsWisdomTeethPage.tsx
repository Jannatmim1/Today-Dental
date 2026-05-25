import React from 'react';
import { SERVICES } from '../data/dentistryData';
import { Award, CheckCircle2, ShieldCheck, Star, ArrowRight, Play } from 'lucide-react';

interface ImplantsWisdomTeethPageProps {
  onSelectService: (serviceId: string) => void;
  onBookNow: () => void;
}

export default function ImplantsWisdomTeethPage({ onSelectService, onBookNow }: ImplantsWisdomTeethPageProps) {
  // We extract dental-implants and wisdom-teeth-removal services
  const implantServices = SERVICES.filter(s => s.id === 'dental-implants' || s.id === 'wisdom-teeth-removal');

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
              <span>Surgical Restorations</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              Implants & Wisdom Teeth
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans mt-2">
              Restore your complete chewing power and safeguard your surrounding jaw shape permanently. We provide advanced titanium replacement roots and gentle sedation-supported extractions.
            </p>
          </div>
        </div>

        {/* Implant & Surgical Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {implantServices.map((service) => (
            <div key={service.id} className="bg-white rounded-[32px] p-8 border border-slate-100 luxury-shadow flex flex-col justify-between space-y-8 hover:translate-y-[-4px] transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] bg-sky-100 text-primary font-mono tracking-wider font-extrabold px-3 py-1 rounded-full uppercase">
                    {service.id === 'dental-implants' ? 'Implantology' : 'Oral Extractions'}
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
                  Reserve Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Surgical Infrastructure and Luxury details */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[32px] p-8 lg:p-12 shadow-xl flex flex-col md:flex-row gap-8 items-center justify-between">
          <div className="space-y-4 max-w-2xl">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#F47B20] font-extrabold block">CLINICAL SAFETY EXCELLENCE</span>
            <h3 className="font-display font-bold text-2xl">Advanced 3D CBCT Digital Scans</h3>
            <p className="text-slate-350 text-xs sm:text-sm leading-relaxed">
              We never guess regarding nerve locations or thin cortical bone levels. Using high-precision three-dimensional bone mapping, we draft implant and wisdom extraction paths before the procedure starts. This stands for absolute accuracy, smaller cuts, and rapid 4-day healing timelines!
            </p>
          </div>
          <div className="flex gap-4 shrink-0">
            <button 
              onClick={onBookNow}
              className="bg-accent hover:bg-opacity-95 text-white font-sans font-bold text-xs py-3.5 px-6 rounded-xl glow-orange-btn cursor-pointer"
            >
              Request Free Consultation Exam
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
