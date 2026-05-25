import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, Smile, RefreshCw } from 'lucide-react';

interface WhyOrangeAndBluePageProps {
  onBookNow: () => void;
}

export default function WhyOrangeAndBluePage({ onBookNow }: WhyOrangeAndBluePageProps) {
  return (
    <div className="min-h-screen bg-[#F8FBFD] py-8 font-sans">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        
        {/* Page Hero */}
        <div className="relative rounded-[32px] overflow-hidden mb-16 shadow-xl bg-gradient-to-tr from-[#0E4B7A] via-[#1E7BC8] to-[#1E7BC8] text-white p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#F47B20]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-[#F47B20] text-white font-mono uppercase text-[10px] tracking-widest font-black py-1 px-3.5 rounded-full animate-bounce-slow">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our True Identity</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              Why We Wear Orange & Blue
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
              At Today Dental of Haslet, our uniform is an authentic statement of our clinical purpose. Discover how our colors define our dedication to patient hospitality, honest pricing, and transparent healthcare.
            </p>
          </div>
        </div>

        {/* The Core Story layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-extrabold text-primary">COMMUNITY CONNECTION</span>
            <h2 className="font-display font-black text-3xl lg:text-4.5xl text-text-dark tracking-tight leading-tight">
              More Than Just a Uniform. It’s Our Covenant.
            </h2>
            <p className="text-text-muted text-base sm:text-lg leading-relaxed">
              When we built Today Dental, we noticed standard dental surgeries felt white, clinical, scary, and sterile. We chose **Deep Marine Blue** and **Energetic Sunrise Orange** because colors change moods, promote relaxation, and inspire natural confidence.
            </p>
            <p className="text-text-muted text-sm sm:text-base leading-relaxed">
              Wearing orange and blue reminds our entire clinical staff of our fundamental core mission daily: to treat you like family, protect your unique enamel structure conservatively, and provide transparent billing without corporate sales pressure.
            </p>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF3EC] text-accent flex items-center justify-center shrink-0">
                <Smile className="w-5 h-5 text-accent" />
              </div>
              <p className="text-xs text-text-muted">
                <strong className="text-text-dark">A Vow of Kindness:</strong> We look out for Northwest ISD pupils and general anxiety sufferers. No rigid protocols—just warm human compassion in Haslet, TX.
              </p>
            </div>
          </div>

          {/* Color Breakdown visual column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* The Blue Vow Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 luxury-shadow border-t-8 border-t-[#0E4B7A] space-y-4">
              <div className="w-12 h-12 bg-sky-100/50 text-[#0E4B7A] rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-[#0E4B7A]" />
              </div>
              <h3 className="font-display font-extrabold text-[#0E4B7A] text-lg">The Blue: Safety & Professional Trust</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Blue matches the clinical rigor of our Texas dental credentials. It stands for sterile medical-grade cleanliness, computer-guided implant dentistry precision, low-radiation safety, and honest transparent billing practices.
              </p>
            </div>

            {/* The Orange Vow Card */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 luxury-shadow border-t-8 border-t-[#F47B20] space-y-4">
              <div className="w-12 h-12 bg-[#FFF3EC]/50 text-accent rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-extrabold text-accent text-lg">The Orange: Human Warmth & Kindness</h3>
              <p className="text-xs text-text-muted leading-relaxed">
                Orange represents the warm Texas sunrise. It is our promise to welcome walk-in toothache emergencies immediately, offer comfortable conscious sedation options, and treat child and grandparent patients like our own actual mothers and fathers.
              </p>
            </div>

          </div>
        </div>

        {/* Visual Callout block with background image */}
        <div className="relative rounded-[32px] overflow-hidden h-[300px] lg:h-[450px] shadow-xl mb-16 border border-white/40">
          <img 
            src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200" 
            alt="Doctor Ryan smiling with patient" 
            className="absolute inset-0 w-full h-full object-cover brightness-[0.45] saturate-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 lg:bottom-12 lg:left-12 max-w-xl text-white space-y-2">
            <h3 className="font-display font-black text-xl lg:text-3xl">Ready for a different dentist experience?</h3>
            <p className="text-white/85 text-xs lg:text-sm">
              We look forward to proving how our community philosophy changes smiles. Same-day walk-ins are loved and secured immediately.
            </p>
            <button 
              onClick={onBookNow}
              className="bg-accent text-white font-sans font-bold text-xs py-3 px-6 rounded-full inline-block mt-4 glow-orange-btn cursor-pointer"
            >
              Secure Free Whitening Exam
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
