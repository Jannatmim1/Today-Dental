import React, { useState, useEffect } from 'react';
import { 
  Phone, Calendar, MapPin, ChevronDown, Clock, Search, Menu, X, 
  Sparkles, ShieldCheck, Heart, User, Star, CreditCard, ChevronRight,
  Smile, Activity, Layers, Grid, Info, Compass, HelpCircle
} from 'lucide-react';
import { SERVICES, OFFICE_CONTACT } from '../data/dentistryData';

interface FloatingHeaderProps {
  onNavigatePage: (page: string) => void;
  currentPage: string;
}

export default function FloatingHeader({ onNavigatePage, currentPage }: FloatingHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'team' | 'locations' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [mobileTeamExpanded, setMobileTeamExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (pageId: string) => {
    onNavigatePage(pageId);
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-primary text-white text-[11px] border-b border-white/5 relative z-50">
        <div className="max-w-[1360px] mx-auto px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>{OFFICE_CONTACT.address}</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 font-medium text-white/85">
              <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Mon-Thu: 8:30am-5:30pm | Fri: 8:30am-3pm | Sat: 8am-2pm</span>
            </span>
          </div>
          <div className="flex items-center gap-5 font-bold">
            <a 
              href={`tel:${OFFICE_CONTACT.phone}`} 
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
            >
              <Phone className="w-3 h-3 text-accent animate-pulse" />
              <span>{OFFICE_CONTACT.phone}</span>
            </a>
            <span className="text-white/20 hidden xs:inline">|</span>
            <button 
              onClick={() => handleLinkClick('contact')} 
              className="hidden xs:inline hover:underline cursor-pointer text-accent"
            >
              Free Teeth Whitening Exam Promo &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Main Floating Transparent Header container */}
      <header className={`sticky top-0 w-full transition-all duration-300 z-45 px-4 sm:px-6 py-4`}>
        <div className={`max-w-[1360px] mx-auto rounded-full transition-all duration-400 relative ${
          isScrolled 
            ? 'luxury-glass shadow-xl py-3 px-6 border border-white/80' 
            : 'bg-white/94 luxury-glass shadow-md py-4 px-8 border border-slate-100'
        }`}>
          <div className="flex items-center justify-between">
            
            {/* Logo Unit */}
            <div 
              onClick={() => handleLinkClick('home')} 
              className="flex items-center gap-2 cursor-pointer group"
              id="header-logo-container"
            >
              <img 
                src="https://haslet.todaydental.com/wp-content/themes/charlie-child/images/logo.webp"
                alt="Today Dental Logo"
                className="h-9 transition-transform duration-300 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Desktop Center Menu Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              
              {/* Home */}
              <button 
                onClick={() => handleLinkClick('home')}
                className={`font-sans font-bold text-xs uppercase tracking-wide cursor-pointer transition-colors ${
                  currentPage === 'home' ? 'text-primary border-b-2 border-primary/20 pb-0.5' : 'text-text-dark hover:text-primary'
                }`}
              >
                Home
              </button>

              {/* Our Team Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('team')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className={`font-sans font-bold text-xs uppercase tracking-wide flex items-center gap-1 cursor-pointer transition-colors py-2 ${
                  ['meet-our-team', 'reviews', 'why-orange-and-blue'].includes(currentPage) ? 'text-primary' : 'text-text-dark hover:text-primary'
                }`}>
                  <span>Our Team</span>
                  <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                </button>
                {activeMegaMenu === 'team' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[300px] bg-white rounded-[24px] p-5 border border-slate-100 shadow-2xl z-50 animate-fade-in space-y-2">
                    <button 
                      onClick={() => handleLinkClick('meet-our-team')}
                      className="flex items-center gap-3 p-2.5 hover:bg-light-accent rounded-xl text-left w-full transition-all cursor-pointer"
                    >
                      <User className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-text-dark">Meet Our Team</p>
                        <p className="text-[10px] text-text-muted">Meet lead specialists & clinicians</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleLinkClick('reviews')}
                      className="flex items-center gap-3 p-2.5 hover:bg-light-accent rounded-xl text-left w-full transition-all cursor-pointer"
                    >
                      <Star className="w-4 h-4 text-accent shrink-0 fill-current" />
                      <div>
                        <p className="text-xs font-bold text-text-dark">Reviews</p>
                        <p className="text-[10px] text-text-muted">5-star patient surveys & feedback</p>
                      </div>
                    </button>

                    <button 
                      onClick={() => handleLinkClick('why-orange-and-blue')}
                      className="flex items-center gap-3 p-2.5 hover:bg-light-accent rounded-xl text-left w-full transition-all cursor-pointer"
                    >
                      <Smile className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-text-dark">Why Orange & Blue</p>
                        <p className="text-[10px] text-text-muted">Our core warmth & family mission</p>
                      </div>
                    </button>
                  </div>
                )}
              </div>

              {/* Mega Menu Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setActiveMegaMenu('services')}
                onMouseLeave={() => setActiveMegaMenu(null)}
              >
                <button className={`font-sans font-bold text-xs uppercase tracking-wide flex items-center gap-1 cursor-pointer transition-colors py-2 ${
                  currentPage.startsWith('service') || ['implants-wisdom-teeth', 'orthodontics'].includes(currentPage) ? 'text-primary' : 'text-text-dark hover:text-primary'
                }`}>
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                </button>
                
                {activeMegaMenu === 'services' && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[760px] bg-white rounded-[32px] p-8 border border-slate-100 shadow-2xl z-50 grid grid-cols-4 gap-6 animate-fade-in">
                    
                    {/* Column 1: Cosmetic Dentistry */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                        <Star className="w-4 h-4 text-accent shrink-0" />
                        <h4 className="font-display font-bold text-[11px] uppercase tracking-wider text-primary">Cosmetic Dentistry</h4>
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <button 
                            onClick={() => handleLinkClick('service-veneers')} 
                            className="text-xs text-text-muted hover:text-primary transition-all text-left block w-full cursor-pointer py-1 hover:translate-x-1"
                          >
                            Dental Veneers
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleLinkClick('service-teeth-whitening')} 
                            className="text-xs text-text-muted hover:text-primary transition-all text-left block w-full cursor-pointer py-1 hover:translate-x-1"
                          >
                            Teeth Whitening
                          </button>
                        </li>
                      </ul>
                    </div>

                    {/* Column 2: General & Family */}
                    <div className="space-y-4 col-span-2">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                        <Smile className="w-4 h-4 text-[#25B36A] shrink-0" />
                        <h4 className="font-display font-bold text-[11px] uppercase tracking-wider text-primary">General & Family Dentistry</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                        <button 
                          onClick={() => handleLinkClick('service-dental-cleanings')} 
                          className="text-xs text-text-muted hover:text-primary transition-all text-left block w-full cursor-pointer py-1 hover:translate-x-1"
                        >
                          Dental Cleanings
                        </button>
                        <button 
                          onClick={() => handleLinkClick('service-dental-emergencies')} 
                          className="text-xs text-text-muted hover:text-primary transition-all text-left block w-full cursor-pointer py-1 hover:translate-x-1"
                        >
                          Dental Emergencies
                        </button>
                        <button 
                          onClick={() => handleLinkClick('service-dental-fillings')} 
                          className="text-xs text-text-muted hover:text-primary transition-all text-left block w-full cursor-pointer py-1 hover:translate-x-1"
                        >
                          Dental Fillings
                        </button>
                        <button 
                          onClick={() => handleLinkClick('service-dental-crowns')} 
                          className="text-xs text-text-muted hover:text-primary transition-all text-left block w-full cursor-pointer py-1 hover:translate-x-1"
                        >
                          Dental Crowns
                        </button>
                        <button 
                          onClick={() => handleLinkClick('service-root-canal-treatment')} 
                          className="text-xs text-text-muted hover:text-primary transition-all text-left block w-full cursor-pointer py-1 hover:translate-x-1"
                        >
                          Root Canal Treatment
                        </button>
                        <button 
                          onClick={() => handleLinkClick('service-dentures')} 
                          className="text-xs text-text-muted hover:text-primary transition-all text-left block w-full cursor-pointer py-1 hover:translate-x-1"
                        >
                          Dentures
                        </button>
                      </div>
                    </div>

                    {/* Column 3: Implants, Wisdom & Orthodontics */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                        <Activity className="w-4 h-4 text-primary shrink-0" />
                        <h4 className="font-display font-bold text-[11px] uppercase tracking-wider text-primary">Advanced Surgeries</h4>
                      </div>
                      <ul className="space-y-3">
                        <li>
                          <button 
                            onClick={() => handleLinkClick('implants-wisdom-teeth')} 
                            className="bg-[#EAF5FD] text-[#0E4B7A] p-2 rounded-xl text-left block w-full cursor-pointer hover:bg-primary hover:text-white transition-all"
                          >
                            <p className="text-[11px] font-bold">Implants & Wisdom Teeth</p>
                            <p className="text-[9px] opacity-80">Reconstruction surgery</p>
                          </button>
                        </li>
                        <li>
                          <button 
                            onClick={() => handleLinkClick('orthodontics')} 
                            className="bg-[#FFF3EC] text-accent p-2 rounded-xl text-left block w-full cursor-pointer hover:bg-accent hover:text-white transition-all"
                          >
                            <p className="text-[11px] font-bold">Orthodontics & Braces</p>
                            <p className="text-[9px] opacity-80">Braces & Invisalign®</p>
                          </button>
                        </li>
                      </ul>
                    </div>

                  </div>
                )}
              </div>

              {/* Financing & Insurance */}
              <button 
                onClick={() => handleLinkClick('financing-insurance')}
                className={`font-sans font-bold text-xs uppercase tracking-wide cursor-pointer transition-colors ${
                  currentPage === 'financing-insurance' ? 'text-primary' : 'text-text-dark hover:text-primary'
                }`}
              >
                Financing
              </button>

              {/* Contact */}
              <button 
                onClick={() => handleLinkClick('contact')}
                className={`font-sans font-bold text-xs uppercase tracking-wide cursor-pointer transition-colors ${
                  currentPage === 'contact' ? 'text-primary' : 'text-text-dark hover:text-primary'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3.5">
              <a 
                href={`tel:${OFFICE_CONTACT.phone}`} 
                className="border-2 border-primary/20 hover:border-primary text-primary font-sans font-bold text-xs py-2 px-4 rounded-full transition-colors h-10 flex items-center shrink-0 cursor-pointer"
              >
                Call: {OFFICE_CONTACT.phone}
              </a>
              <button 
                onClick={() => handleLinkClick('contact')}
                className="bg-accent text-white font-sans font-extrabold text-xs py-2 px-5 rounded-full inline-flex items-center gap-1.5 h-10 glow-orange-btn shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>
            </div>

            {/* Mobile Actions Trigger togglers */}
            <div className="flex lg:hidden items-center gap-2">
              <a 
                href={`tel:${OFFICE_CONTACT.phone}`} 
                className="bg-light-accent text-primary p-2 rounded-full hover:bg-sky-200/30 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 bg-slate-100 rounded-full text-text-dark hover:bg-slate-200 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Accordion Nav Menu */}
        {mobileMenuOpen && (
          <div className="mt-2.5 mx-2 bg-white rounded-[28px] border border-slate-100 luxury-shadow p-6 space-y-6 lg:hidden animate-fade-in relative z-50">
            
            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 pb-2 border-b border-slate-50">
              <a 
                href={`tel:${OFFICE_CONTACT.phone}`} 
                className="flex items-center justify-center gap-1.5 bg-light-accent text-primary font-bold text-xs py-3 rounded-xl cursor-pointer"
              >
                <Phone className="w-4 h-4 shrink-0" />
                <span>Call Now info</span>
              </a>
              <button 
                onClick={() => handleLinkClick('contact')}
                className="flex items-center justify-center gap-1.5 bg-accent text-white font-bold text-xs py-3 rounded-xl glow-orange-btn cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Doctor</span>
              </button>
            </div>

            {/* Primary accordion navigation tree */}
            <div className="space-y-3 font-semibold text-sm">
              <button 
                onClick={() => handleLinkClick('home')}
                className="w-full text-left py-2 border-b border-slate-100 text-text-dark hover:text-primary cursor-pointer block"
              >
                Home
              </button>

              {/* Mobile Our Team Collapsible */}
              <div className="border-b border-slate-100 py-1">
                <button 
                  onClick={() => setMobileTeamExpanded(!mobileTeamExpanded)}
                  className="w-full flex justify-between items-center py-1.5 text-text-dark hover:text-primary cursor-pointer text-left font-semibold"
                >
                  <span>Our Team</span>
                  <ChevronRight className={`w-4 h-4 text-slate-350 transition-transform ${mobileTeamExpanded ? 'rotate-90' : ''}`} />
                </button>
                {mobileTeamExpanded && (
                  <div className="pl-4 py-2 space-y-2.5 text-xs text-text-muted font-bold transition-all">
                    <button onClick={() => handleLinkClick('meet-our-team')} className="w-full text-left py-1 hover:text-primary block cursor-pointer">• Meet Our Team</button>
                    <button onClick={() => handleLinkClick('reviews')} className="w-full text-left py-1 hover:text-primary block cursor-pointer">• Patient Reviews</button>
                    <button onClick={() => handleLinkClick('why-orange-and-blue')} className="w-full text-left py-1 hover:text-primary block cursor-pointer">• Philosophy: Orange & Blue</button>
                  </div>
                )}
              </div>

              {/* Mobile Services Collapsible */}
              <div className="border-b border-slate-100 py-1">
                <button 
                  onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                  className="w-full flex justify-between items-center py-1.5 text-text-dark hover:text-primary cursor-pointer text-left font-semibold"
                >
                  <span>Services</span>
                  <ChevronRight className={`w-4 h-4 text-slate-350 transition-transform ${mobileServicesExpanded ? 'rotate-90' : ''}`} />
                </button>
                {mobileServicesExpanded && (
                  <div className="pl-4 py-2 space-y-3.5 text-xs text-text-muted font-bold border-l border-slate-50 mt-1">
                    <div>
                      <p className="text-[10px] text-accent uppercase font-mono mb-1 tracking-wider">Cosmetic Dentistry</p>
                      <button onClick={() => handleLinkClick('service-veneers')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2">• Dental Veneers</button>
                      <button onClick={() => handleLinkClick('service-teeth-whitening')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2">• Teeth Whitening</button>
                    </div>

                    <div>
                      <p className="text-[10px] text-[#25B36A] uppercase font-mono mb-1 tracking-wider">General Care</p>
                      <button onClick={() => handleLinkClick('service-dental-cleanings')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2">• Dental Cleanings</button>
                      <button onClick={() => handleLinkClick('service-dental-emergencies')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2">• Dental Emergencies</button>
                      <button onClick={() => handleLinkClick('service-dental-fillings')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2">• Dental Fillings</button>
                      <button onClick={() => handleLinkClick('service-dental-crowns')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2">• Dental Crowns</button>
                      <button onClick={() => handleLinkClick('service-root-canal-treatment')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2">• Root Canals</button>
                      <button onClick={() => handleLinkClick('service-dentures')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2">• Dentures</button>
                    </div>

                    <div>
                      <p className="text-[10px] text-primary uppercase font-mono mb-1 tracking-wider">Complex Treatments</p>
                      <button onClick={() => handleLinkClick('implants-wisdom-teeth')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2 font-black">• Implants & Wisdom Teeth</button>
                      <button onClick={() => handleLinkClick('orthodontics')} className="w-full text-left py-1.5 hover:text-primary cursor-pointer block pl-2 font-black">• Orthodontics & Braces</button>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleLinkClick('financing-insurance')}
                className="w-full text-left py-2 border-b border-slate-100 text-text-dark hover:text-primary cursor-pointer block"
              >
                Financing & Insurance
              </button>

              <button 
                onClick={() => handleLinkClick('contact')}
                className="w-full text-left py-2 border-b border-slate-100 text-text-dark hover:text-primary cursor-pointer block"
              >
                Contact
              </button>
            </div>

          </div>
        )}
      </header>
    </>
  );
}
