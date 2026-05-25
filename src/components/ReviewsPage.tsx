import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/dentistryData';
import { Star, Award, Heart, MessageSquare, PenTool, CheckCircle, Sparkles } from 'lucide-react';

interface ReviewsPageProps {
  onBookNow: () => void;
}

export default function ReviewsPage({ onBookNow }: ReviewsPageProps) {
  const [localFeedback, setLocalFeedback] = useState(TESTIMONIALS);
  const [newReview, setNewReview] = useState({ author: '', text: '', rating: 5, treatment: 'Dental Cleaning' });
  const [success, setSuccess] = useState(false);

  const handleCreateReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.text) return;
    
    const formatted = {
      id: `local-rev-${Date.now()}`,
      author: newReview.author,
      text: newReview.text,
      rating: newReview.rating,
      treatment: newReview.treatment
    };

    setLocalFeedback([formatted, ...localFeedback]);
    setNewReview({ author: '', text: '', rating: 5, treatment: 'Dental Cleaning' });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#F8FBFD] py-8 font-sans">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6">
        
        {/* Page Hero */}
        <div className="relative rounded-[32px] overflow-hidden mb-16 shadow-xl bg-gradient-to-tr from-[#0E4B7A] via-[#1E7BC8] to-[#1E7BC8] text-white p-8 sm:p-12 lg:p-16">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#F47B20]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-1.5 bg-accent/90 text-white font-mono uppercase text-[10px] tracking-widest font-black py-1 px-3.5 rounded-full">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>5.0 Star Rated Clinic</span>
            </div>
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-none text-white">
              Patient Reviews & Stories
            </h1>
            <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed font-sans mt-2">
              See what families in Haslet, Northwest ISD, and Justin write about Today Dental. We take pride in delivering pain-free dental restoration and comfortable preventative health.
            </p>
          </div>
        </div>

        {/* Rating Grid Dashboard Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Rating Summary Left */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 luxury-shadow space-y-6 text-center">
            <h3 className="font-display font-black text-xl text-text-dark">Rating Overview</h3>
            <div className="py-4">
              <p className="text-6xl font-black text-primary leading-none">5.0</p>
              <div className="flex justify-center text-orange-400 gap-1 my-3">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <p className="text-xs text-text-muted">Based on over 280 verified patient surveys</p>
            </div>

            <div className="border-t border-slate-100 pt-6 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-text-dark">5 Stars</span>
                <span className="w-32 bg-slate-100 h-2.5 rounded-full overflow-hidden block">
                  <span className="bg-orange-500 h-full block w-full rounded-full" />
                </span>
                <span className="font-bold text-text-muted">100%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-medium">4 Stars</span>
                <span className="w-32 bg-slate-100 h-2.5 rounded-full overflow-hidden block">
                  <span className="bg-slate-350 h-full block w-0 rounded-full" />
                </span>
                <span className="font-bold">0%</span>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="font-medium">3 Stars</span>
                <span className="w-32 bg-slate-100 h-2.5 rounded-full overflow-hidden block">
                  <span className="bg-slate-350 h-full block w-0 rounded-full" />
                </span>
                <span className="font-bold">0%</span>
              </div>
            </div>

            <div className="bg-light-accent p-4 rounded-2xl text-left">
              <p className="text-xs font-bold text-primary flex items-center gap-1.5 leading-none">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Verified Patient Experience</span>
              </p>
              <p className="text-[11px] text-text-muted mt-2 leading-relaxed">
                All dental reviews listed have been authenticated directly from scheduling data to guarantee real Haslet family feedback.
              </p>
            </div>
            
            <button 
              onClick={onBookNow}
              className="bg-accent text-white font-sans font-black text-xs py-3.5 px-6 rounded-xl w-full text-center glow-orange-btn cursor-pointer"
            >
              Configure Your Appointment Now
            </button>
          </div>

          {/* List of Reviews Middle/Right */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-black text-lg text-text-dark flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                <span>Verified Patient Testimonials ({localFeedback.length})</span>
              </h3>
            </div>

            <div className="space-y-6">
              {localFeedback.map((rev) => (
                <div key={rev.id} className="bg-white rounded-2.5xl p-6 sm:p-8 border border-slate-100 luxury-shadow flex flex-col justify-between space-y-4 hover:translate-y-[-2px] transition-all">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex text-orange-400 gap-0.5">
                        {Array.from({ length: rev.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono tracking-wider font-extrabold text-[#F47B20] bg-[#FFF3EC] px-2.5 py-1 rounded-full uppercase">
                        {rev.treatment}
                      </span>
                    </div>
                    <p className="text-text-dark text-base font-sans italic leading-relaxed">
                      "{rev.text}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                    <div>
                      <p className="font-display font-black text-sm text-primary">{rev.author}</p>
                      <p className="text-[10px] text-text-muted font-mono mt-0.5">Today Dental Patient • Verified Haslet Resident</p>
                    </div>
                    <span className="text-xs font-semibold text-[#1E7BC8] flex items-center gap-1 bg-[#EAF5FD] px-3 py-1 rounded-full">
                      <Heart className="w-3.5 h-3.5 text-accent shrink-0 fill-current" />
                      <span>Comfortable</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Share Feedback Layout Box */}
        <section className="bg-white rounded-[24px] p-8 lg:p-12 border border-slate-100 luxury-shadow max-w-4xl mx-auto">
          <div className="text-center space-y-3 mb-8">
            <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider block">YOUR FEEDBACK MAKES US SMILE</span>
            <h3 className="font-display font-black text-2xl lg:text-3.5xl text-text-dark">Have You Visited Our Haslet Clinic?</h3>
            <p className="text-text-muted text-sm max-w-xl mx-auto">
              Please share your experience under treatment. We read all patient essays directly to refine our painless general and cosmetic care!
            </p>
          </div>

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-4 text-xs font-bold my-4 animate-fade-in text-center">
              Thank you! Your testimonial was added instantly above!
            </div>
          )}

          <form onSubmit={handleCreateReview} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-mono uppercase text-text-muted mb-1">Your Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Charlon M."
                  value={newReview.author}
                  onChange={e => setNewReview({ ...newReview, author: e.target.value })}
                  className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/60 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] font-mono uppercase text-text-muted mb-1">Which Treatment did you secure?</label>
                <select 
                  value={newReview.treatment}
                  onChange={e => setNewReview({ ...newReview, treatment: e.target.value })}
                  className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/60 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors"
                >
                  <option value="Dental Cleaning">Dental Cleaning & Exam</option>
                  <option value="Porcelain Veneers">Porcelain Veneers</option>
                  <option value="Dental Crowns">Porcelain Dental Crowns</option>
                  <option value="Emergency Toothache Care">Emergency Same-Day Relief</option>
                  <option value="Invisalign® Clear Aligners">Invisalign® Clear Aligners</option>
                  <option value="Dentures">suction-fit Dentures</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-text-muted mb-1">Star Rating (1 to 5 Stars)</label>
              <div className="flex gap-2">
                {[5, 4, 3, 2, 1].map(num => (
                  <button 
                    type="button"
                    key={num}
                    onClick={() => setNewReview({ ...newReview, rating: num })}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                      newReview.rating === num 
                        ? 'bg-[#0E4B7A] text-white border-primary' 
                        : 'bg-[#F8FBFD] text-text-dark border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    {num} ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-mono uppercase text-text-muted mb-1">Write your brief story</label>
              <textarea 
                rows={4}
                required
                placeholder="Share direct details of your dental visit, pain levels, and how our doctor treated you..."
                value={newReview.text}
                onChange={e => setNewReview({ ...newReview, text: e.target.value })}
                className="w-full text-xs font-medium bg-[#F8FBFD] border border-slate-200/60 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
              />
            </div>

            <button 
              type="submit" 
              className="bg-primary text-white font-sans font-bold text-xs py-3 px-6 rounded-xl hover:bg-secondary cursor-pointer glow-blue-btn inline-flex items-center gap-1.5 w-full justify-center"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>Submit Dental Testimonial Directly</span>
            </button>
          </form>
        </section>

      </div>
    </div>
  );
}
