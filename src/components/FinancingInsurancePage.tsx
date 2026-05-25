import React, { useState } from 'react';
import { ShieldCheck, HelpCircle, Heart, DollarSign, Wallet, Award, Sparkles, AlertCircle } from 'lucide-react';

interface FinancingInsurancePageProps {
  onBookNow: () => void;
}

export default function FinancingInsurancePage({ onBookNow }: FinancingInsurancePageProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const FINANCE_FAQS = [
    {
      q: 'Which PPO dental insurances do you accept?',
      a: 'We accept and file claims with almost all major PPO insurance plans, including Delta Dental, Cigna, MetLife, Aetna, Blue Cross Blue Shield, Guardian, UnitedHealthcare, and more. Our office benefits managers will coordinate with your provider to verify coverage and optimize your payouts.'
    },
    {
      q: 'What if I do not have dental insurance?',
      a: 'If you lack traditional coverage, we offer our own in-house Today Dental Savings Plan! For a flat low annual fee, you receive 2 comprehensive professional cleanings, dental exams, any required x-rays, plus 15%–20% off all dental fillings, crowns, root canals, and cosmetic veneers.'
    },
    {
      q: 'Do you offer monthly payment options?',
      a: 'Absolutely! We partner with CareCredit and helper dental credit institutions to provide interest-free 6-month and 12-month financing helper loans. This breaks complicated crown, orthodontic, or implant reconstructions into small, affordable monthly installments.'
    },
    {
      q: 'Will I see surprise copy fees or hidden lab bills?',
      a: 'Never. One of our primary family vows is absolute financial transparency. We provide a complete written breakdown of any procedural estimates prior to starting any composite filling or root canal therapy. No mechanical upselling, no surprise fees!'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FBFD] py-8 font-sans">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        
        {/* Page Hero */}
        <div className="relative rounded-[32px] overflow-hidden mb-16 shadow-xl bg-gradient-to-tr from-[#0E4B7A] via-[#1E7BC8] to-[#1E7BC8] text-white p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#F47B20]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-accent/90 text-white font-mono uppercase text-[10px] tracking-widest font-black py-1 px-3.5 rounded-full">
              <DollarSign className="w-3.5 h-3.5 animate-pulse" />
              <span>Transparent Pricing Only</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              Financing & Insurance
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans">
              We believe premium dental care must be stress-free and pocket-friendly. Whether you have premium PPO dental insurance or are looking for monthly financing, we coordinate custom terms for Haslet families.
            </p>
          </div>
        </div>

        {/* Primary Benefit Split columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Card 1: PPO Insurance Acceptances */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 luxury-shadow flex flex-col justify-between space-y-6 border-t-8 border-t-[#0E4B7A]">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#EAF5FD] text-[#0E4B7A] rounded-2xl flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-black text-2xl text-text-dark">PPO Dental Insurances</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                We accept and file with almost all major PPO dental insurances. Our front desk coordinates the verification cycle immediately, minimizing your out-of-pocket copays and handling the clinical paperwork on your behalf.
              </p>
              
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2">
                <p className="text-xs font-bold text-text-dark uppercase font-mono tracking-wider">Common Providers Accepted:</p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-text-muted font-medium">
                  <span>✔ Delta Dental PPO</span>
                  <span>✔ Cigna Dental PPO</span>
                  <span>✔ Aetna Dental</span>
                  <span>✔ MetLife Dental</span>
                  <span>✔ Blue Cross Blue Shield</span>
                  <span>✔ Guardian Insurance</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-text-muted flex gap-1.5 items-start bg-sky-200/10 p-3 rounded-xl border border-sky-300/10 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>We do not participate in DHMO or Medicaid plans in order to protect our clinical time allocation standards and high-material quality.</span>
            </p>
          </div>

          {/* Card 2: No-Insurance Savings Plan */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 luxury-shadow flex flex-col justify-between space-y-6 border-t-8 border-t-[#F47B20]">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-[#FFF3EC] text-[#F47B20] rounded-2xl flex items-center justify-center shrink-0">
                <Wallet className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-black text-2xl text-text-dark">Today Savings Plan</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                No insurance? No problem! Our local Membership Plan stands for incredible value. Secure comprehensive exams and routine dental cleanings regularly without paying high insurance premium structures.
              </p>

              <div className="bg-[#FFF3EC]/40 p-4 rounded-xl border border-[#F47B20]/10 space-y-2 text-xs">
                <p className="font-bold text-accent uppercase font-mono tracking-wider">What’s Included in our Membership Vow:</p>
                <div className="space-y-1 text-text-dark font-medium">
                  <p>✔ 2 Professional Scaling Dental Cleanings & Exams yearly (100% Covered)</p>
                  <p>✔ All routine low-radiation digital x-rays (100% Covered)</p>
                  <p>✔ Emergency diagnostic evaluations (100% Covered)</p>
                  <p>✔ 15% - 20% discount on root canals, dental crowns, fills, & veneers</p>
                </div>
              </div>
            </div>

            <button 
              onClick={onBookNow} 
              className="w-full bg-[#0E4B7A] text-white font-sans font-bold text-xs py-3.5 px-6 rounded-xl hover:bg-secondary cursor-pointer glow-blue-btn text-center"
            >
              Learn Savings Plan & Book
            </button>
          </div>

        </div>

        {/* CareCredit Finance Banner */}
        <div className="bg-[#0E4B7A] text-white rounded-3.5xl p-8 lg:p-12 shadow-md flex flex-col lg:flex-row gap-8 items-center justify-between mb-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono tracking-wider text-accent uppercase font-black block">INTEREST-FREE PAYMENT OPTIONS</span>
            <h3 className="font-display font-black text-2xl lg:text-3xl leading-tight">Affordable Care with CareCredit® Options</h3>
            <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
              Break major root canal emergencies, crowns, or orthodontic brackets into comfortable monthly fees starting at 0% APR interest helper loans. We guide your application process instantly during the checkout.
            </p>
          </div>
          <button 
            onClick={onBookNow} 
            className="bg-accent text-white font-sans font-bold text-xs py-4 px-8 rounded-full shadow-lg shrink-0 glow-orange-btn cursor-pointer"
          >
            Apply for CareCredit Helper &rarr;
          </button>
        </div>

        {/* Finance and Insurance FAQ Accordion */}
        <section className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 luxury-shadow">
          <h3 className="font-display font-black text-2xl text-text-dark mb-6 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#1E7BC8]" />
            <span>Financing FAQs</span>
          </h3>

          <div className="space-y-4">
            {FINANCE_FAQS.map((faq, index) => {
              const active = activeFaq === index;
              return (
                <div key={index} className="border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setActiveFaq(active ? null : index)}
                    className="w-full text-left p-5 text-sm font-bold text-text-dark hover:text-primary transition-colors flex justify-between items-center bg-white cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`text-primary transition-transform ${active ? 'rotate-180' : ''}`}>▼</span>
                  </button>
                  {active && (
                    <p className="p-5 text-xs text-text-muted leading-relaxed border-t border-slate-50 bg-slate-50/50">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
