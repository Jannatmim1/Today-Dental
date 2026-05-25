import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock, Send, CheckSquare, Sparkles, Navigation } from 'lucide-react';
import { OFFICE_CONTACT } from '../data/dentistryData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
    serviceInterest: 'general-cleaning'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setTimeout(() => {
        setIsDone(false);
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          message: '',
          serviceInterest: 'general-cleaning'
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#F8FBFD] to-white relative overflow-hidden">
      
      {/* Background radial effects */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-sky-200/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[500px] h-[500px] bg-orange-200/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-[0.25em] font-extrabold text-primary bg-light-accent py-1.5 px-4 rounded-full inline-block">
            VISIT TODAY DENTAL OF HASLET
          </span>
          <h2 className="font-display font-black text-4xl lg:text-5xl text-text-dark tracking-tight mt-4 leading-none">
            Get in Touch With Our Team
          </h2>
          <p className="text-text-muted text-lg mt-4 leading-relaxed">
            Welcome to transparent pricing, warm hospitality, and elite clinical technology. No pressure, just incredible care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-16">
          
          {/* LEFT COLUMN: CONTACT DETAILS & HOURS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-100 luxury-shadow flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-2xl text-text-dark mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <a 
                    href={`tel:${OFFICE_CONTACT.phone}`} 
                    className="flex items-start gap-4 p-4 hover:bg-light-accent rounded-2xl transition-colors group cursor-pointer border border-transparent hover:border-slate-100/50"
                  >
                    <div className="w-10 h-10 rounded-xl bg-light-accent text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-text-muted block uppercase">PHONE CALL OR TEXT</span>
                      <p className="text-lg font-bold text-primary group-hover:text-secondary transition-colors mt-0.5">{OFFICE_CONTACT.phone}</p>
                      <p className="text-xs text-text-muted mt-0.5">Call or text for same-day emergency relief.</p>
                    </div>
                  </a>

                  {/* Location Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl border border-transparent">
                    <div className="w-10 h-10 rounded-xl bg-light-accent text-primary flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-wider text-text-muted block uppercase">HASLET OFFICE ADDRESS</span>
                      <p className="text-base font-bold text-text-dark mt-0.5">{OFFICE_CONTACT.address}</p>
                      <a 
                        href="https://maps.google.com/?q=2412+Avondale+Haslet+Rd+Suite+100+Haslet+TX+76052"
                        target="_blank"
                        rel="referrer"
                        className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1 mt-1.5 cursor-pointer"
                      >
                        <Navigation className="w-3.5 h-3.5" />
                        <span>Get customized driving directions</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Patient Trust Callout */}
              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4 bg-[#EAF5FD]/40 p-4 rounded-2xl">
                <Sparkles className="w-6 h-6 text-[#1E7BC8] shrink-0" />
                <p className="text-xs text-text-muted">
                  <strong className="text-[#182430]">Treating You Like Family:</strong> Honest opinions only. We never suggest or pressure you into cosmetic or reconstructive dental procedures you do not genuinely need.
                </p>
              </div>
            </div>

            {/* Hours Panel */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-4 flex items-center gap-2">
                <Clock className="text-accent w-5 h-5" />
                <span>Office Hours of Operation</span>
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {OFFICE_CONTACT.hours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center text-xs pb-2 border-b border-white/5 last:border-0 last:pb-0">
                    <span className="font-medium text-white/90">{h.day}</span>
                    <span className={h.isClosed ? 'text-red-400 font-semibold uppercase tracking-wider text-[10px]' : 'text-slate-300 font-mono font-medium'}>{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: PREMIUM BOOKING/CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 luxury-shadow h-full flex flex-col justify-between">
              
              <div>
                <h3 className="font-display font-bold text-2xl text-text-dark mb-1 leading-tight flex items-center gap-2">
                  <span>Send a Digital Message</span>
                </h3>
                <p className="text-text-muted text-xs mb-8">We normally answer electronic booking checkups in 10-15 minutes.</p>

                {isDone ? (
                  <div className="bg-green-50 text-green-850 p-6 rounded-2xl border border-green-200 text-sm space-y-2 animate-fade-in my-4">
                    <p className="font-black text-base text-green-800 flex items-center gap-2">
                      <CheckSquare className="w-5 h-5 text-success" />
                      <span>Form Safely Dispatched!</span>
                    </p>
                    <p className="text-xs font-medium text-text-muted">
                      Your query was securely received. Our front office family dental concierges are reviewing same-day calendar slots and will call or text your number {formData.phone} shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* First & Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">First Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.firstName}
                          onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                          placeholder="John"
                          className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/60 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">Last Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.lastName}
                          onChange={e => setFormData({ ...formData, lastName: e.target.value })}
                          placeholder="Doe"
                          className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/60 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">Mobile Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="682-990-2800"
                        className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/60 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Service Interest Categorization */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">What Treatment are you Planning?</label>
                      <select 
                        value={formData.serviceInterest}
                        onChange={e => setFormData({ ...formData, serviceInterest: e.target.value })}
                        className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/60 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      >
                        <option value="general-cleaning">Comprehensive Dental Exam & Cleaning</option>
                        <option value="dental-emergency">Emergency Same-Day Dental Relief</option>
                        <option value="teeth-whitening">Free Professional Teeth Whitening (Promo Offer)</option>
                        <option value="porcelain-crowns">Porcelain Dental Crowns or Fillings</option>
                        <option value="dental-implants">Dental Implants or Reconstruction</option>
                        <option value="invisalign-aligners">Invisalign® Clear Aligners or Braces</option>
                        <option value="other-treatments">Other General & Cosmetic Family Inquiries</option>
                      </select>
                    </div>

                    {/* Message Context */}
                    <div>
                      <label className="block text-[10px] font-mono tracking-widest text-text-muted uppercase mb-1">Is there a toothache, dental worry or notes?</label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe how we can help. e.g. Urgent Saturday availability request, pain, or cleaning cycle."
                        className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/60 rounded-xl px-4 py-3.5 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                      />
                    </div>

                    {/* Form Disclaimer */}
                    <p className="text-[10px] text-text-muted leading-relaxed">
                      By submitting, you agree to receive automated call or text replies to coordinate scheduling with Today Dental. Your confidential medical details remain entirely private.
                    </p>

                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-opacity-95 text-white font-bold text-xs py-4 px-6 rounded-xl inline-flex items-center justify-center gap-2.5 shadow-md glow-orange-btn cursor-pointer transition-all disabled:bg-slate-400"
                    >
                      {isSubmitting ? (
                        <span>Enqueuing slot request...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Dispatch Appointment Request Now</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* FULL-WIDTH INTERACTIVE MAP IN PRE-FOOTER */}
        <div className="w-full rounded-2xl overflow-hidden border border-slate-100 luxury-shadow relative h-[380px] lg:h-[450px]">
          <iframe 
            src={OFFICE_CONTACT.mapsEmbedUrl} 
            title="Today Dental of Haslet Map Location"
            className="w-full h-full border-0 grayscale-[5%] contrast-[105%]"
            allowFullScreen={false} 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-4 left-4 bg-slate-900/90 text-white p-4 rounded-xl max-w-sm border border-slate-800 luxury-shadow hidden sm:block">
            <h4 className="font-display font-black text-sm text-accent">Easy Parking Included</h4>
            <p className="text-[10px] text-slate-350 mt-1 lines-2">Located in Suite 100 on Avondale Haslet Rd, near NW ISD neighborhoods. Accessible handicap parking is right outside the door.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
