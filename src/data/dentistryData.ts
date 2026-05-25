import { Doctor, Service, Testimonial, FAQItem, OfficeHours } from '../types';

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-ryan-anderson',
    name: 'Dr. Ryan Anderson',
    title: 'Lead Dentist & Co-Founder',
    education: 'UT Health San Antonio School of Dentistry',
    bio: 'Dr. Ryan Anderson is dedicated to creating premium, comfortable dental experiences for Haslet families. Recognizing that dental visits can cause anxiety, Dr. Anderson has structured his practice to prioritize painless care, digital dentistry, and modern sedation methods. He specializes in cosmetic dentistry, dental implant placement, and full-service family care. Outside of work, Dr. Ryan loves spending time with his family and volunteering within the Haslet local community.',
    quote: '"Providing elite dentistry means combining warmth, hospitality, and advanced clinical tech so you can smile BIG today!"',
    specialties: ['Cosmetic & Reconstruction', 'Advanced Implantology', 'Sedation Dentistry', 'Family Dental Care'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'dr-andy-legault',
    name: 'Dr. Andy LeGault',
    title: 'Senior Clinical Director',
    education: 'UT Health Science Center & Orthodontics Associate',
    bio: 'Dr. Andy LeGault brings over a decade of rich clinical mastery to Today Dental of Haslet. Focused extensively on comprehensive general practice and orthodontic alignment, Dr. Andy shapes healthy structure and outstanding smiles. He believes that customized treatments are essential and takes time to explain every option. He ensures his patients receive the same top-tier orthodontic care that has changed countless local smiles.',
    quote: '"We treat every child, teenager, and parent who walks through our doors like our very own family."',
    specialties: ['Invisalign® Preferred Provider', 'Adult & Pediatric Orthodontics', 'Restorative Crowns & Bridges'],
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'dr-chad-anderson',
    name: 'Dr. Chad Anderson',
    title: 'Co-Founder & Family Practitioner',
    education: 'Baylor College of Dentistry',
    bio: 'Dr. Chad Anderson co-founded Today Dental with the singular vision of putting human relationships back into the center of dental medicine. For him, preventative health begins with trusting partnerships. He specializes in gentle extractions, preventative cleanings, and digital root canals, ensuring no one has to endure discomfort to keep their natural teeth healthy and strong.',
    quote: '"Our greatest achievement is seeing patients who used to fear the dentist walk in with absolute confidence and ease."',
    specialties: ['Preventative Medicine', 'Endodontics (Root Canals)', 'Geriatric & Pediatric Care'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'dr-minhquan-dao',
    name: 'Dr. Minhquan Dao',
    title: 'Implant & Reconstruction Specialist',
    education: 'Texas A&M College of Dentistry',
    bio: 'Dr. Minhquan Dao is an expert in surgical restorations, complex dental extractions, and implantology. Using cutting-edge 3D bone densitometry and computer-guided surgery, Dr. Dao recreates smiles for individuals struggling with tooth loss. He is deeply committed to high-end dental technologies, continuing digital standards, and presenting multiple flexible financial options for Haslet residents.',
    quote: '"With advanced digital mapping, we can make smile reconstruction faster, safer, and remarkably long-lasting."',
    specialties: ['Computer-Guided Implants', 'Surgical Extractions', 'Wisdom Teeth Removal'],
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600'
  }
];

export const SERVICES: Service[] = [
  // --- GENERAL DENTISTRY ---
  {
    id: 'dental-emergencies',
    title: 'Dental Emergencies',
    shortDesc: 'Same-day urgent relief for toothaches, broken teeth, crowns, or swelling with flexible options.',
    fullDesc: 'If you are experiencing extreme pain, a knocked-out tooth, broken jaw, cracked teeth, or bleeding gums, we offer immediate urgent same-day appointments to relieve your discomfort and save your smile. Do not wait with severe aches; our team can resolve tooth distress immediately.',
    category: 'general',
    highlights: ['Same-day emergency availability', 'Immediate pain mitigation', 'Digital x-rays on the spot', 'Flexible financing plans'],
    faqs: [
      { question: 'What is considered a dental emergency?', answer: 'Severe, constant toothaches, swelling in the face or jaw, an abscess, or a knocked-out or fractured tooth.' },
      { question: 'Do you accept walk-ins for emergency care?', answer: 'Yes! We prioritize same-day emergencies, simply call ahead so we can prepare a room for your immediate relief.' }
    ]
  },
  {
    id: 'dental-cleanings',
    title: 'Dental Cleanings & Exams',
    shortDesc: 'Professional scaling, polishing, and comprehensive checkups for a fresh, healthy mouth.',
    fullDesc: 'Preventative care is the ultimate foundation of a gorgeous smile. Our thorough dental cleaning sessions remove hardened plaque (tartar) that regular brushing cannot reach. Accompanied by low-radiation digital x-rays, our cleanings protect your mouth from periodontal disease.',
    category: 'general',
    highlights: ['Micro-ultrasonic scaling', 'Fluoride enamel defense', 'Periodontal pockets analysis', 'Personalized homecare plan'],
    faqs: [
      { question: 'How often should I get cleanings?', answer: 'We strongly recommend every 6 months to maintain absolute oral hygiene and catch small cavities early.' }
    ]
  },
  {
    id: 'dental-fillings',
    title: 'Dental Fillings',
    shortDesc: 'Enamel-colored composite fillings that repair decay invisibly and restore natural strength.',
    fullDesc: 'We use premium state-of-the-art metal-free composite resins that blend seamlessly with your tooth. These composite fillings chemically bond directly with the tooth structure, restoring structure and functionality with perfect aesthetics and absolute durability.',
    category: 'general',
    highlights: ['Composite tooth-colored material', 'Mercury-free and silver-free', 'Minimally invasive preparation', 'Durable, long-lasting structure'],
    faqs: [
      { question: 'Are composite fillings safe?', answer: 'Absolutely! Tooth-colored composite fillings are exceptionally safe, strong, and highly stable compared to old mercury amalgams.' }
    ]
  },
  {
    id: 'dental-crowns',
    title: 'Dental Crowns',
    shortDesc: 'Premium porcelain caps that reinforce, protect, and seamlessly restore heavily damaged teeth.',
    fullDesc: 'When a tooth is cracked, worn, or severely decayed, a standard filling might not suffice. Our luxury custom porcelain dental crowns act as protective helmets that encapsulate the original tooth, restoring its natural shine, biting power, alignment, and full beauty.',
    category: 'general',
    highlights: ['Premium medical porcelain', 'Perfect color & opacity matching', 'Reinforces compromised structure', 'Custom CAD/CAM layout precision'],
    faqs: [
      { question: 'How long do dentist crowns last?', answer: 'With good flossing, brushing, and regular checkups, premium crowns last 10 to 15 years or more.' }
    ]
  },
  {
    id: 'root-canal-treatment',
    title: 'Root Canal Treatment',
    shortDesc: 'Gentle, modern root canal therapy that relieves nerve pain and saves your natural tooth.',
    fullDesc: 'Contrary to outdated myths, modern root canal treatment is completely painless under proper local anesthetics. By carefully extracting the infected inner dental pulp, disinfecting the internal canal, and sealing it, we eliminate unbearable pressure and completely rescue the tooth.',
    category: 'general',
    highlights: ['Advanced electronic rotary files', 'Completely pain-free local numbing', 'Prevents tooth extraction necessity', 'Capped with strong custom crowns'],
    faqs: [
      { question: 'Is a root canal painful?', answer: 'Not at all! The toothache infection is painful, but the root canal therapy itself actually eliminates that discomfort completely.' }
    ]
  },
  {
    id: 'dentures',
    title: 'Dentures',
    shortDesc: 'Custom-fitted full or partial dentures that restore confidence, speaking, and absolute chewing power.',
    fullDesc: 'Reclaim your complete facial structure and vibrant diet with custom full or partial dentures. Manufactured using premium dental materials, our dentures look indistinguishable from natural gums and teeth, providing a secure, comfortable fit that returns life back to normal.',
    category: 'general',
    highlights: ['Ultra-comfortable suction layout', 'Natural gingival shading', 'Custom acrylics & cobalt options', 'Easy implant-stabilized upgrades'],
    faqs: [
      { question: 'Can I sleep with dentures in?', answer: 'We advise removing your dentures at night to give your jaw tissues a rest and sanitize them thoroughly.' }
    ]
  },
  {
    id: 'sedation-dentistry',
    title: 'Sedation Dentistry',
    shortDesc: 'Relaxing sedation options that make even complex dental visits incredibly stress-free.',
    fullDesc: 'For patients with high dental fear, active gag reflexes, or sensitive nerves, we provide options like nitrous oxide (laughing gas) and oral conscious sedatives. You can drift peacefully through your cavity repairs or wisdom teeth removals with zero memory of the procedure.',
    category: 'general',
    highlights: ['Nitrous oxide calm comfort', 'Oral conscious therapeutic sleep', 'Continual vital tracking', 'Perfect for medical anxiety'],
    faqs: [
      { question: 'Will I be completely unconscious?', answer: 'Normally no. With conscious sedation, you remain awake and able to respond to commands but in a state of deep, peaceful relaxation.' }
    ]
  },

  // --- COSMETIC DENTISTRY ---
  {
    id: 'veneers',
    title: 'Porcelain Veneers',
    shortDesc: 'Ultra-thin custom ceramic shells bonded to your front teeth to design an elite movie-star smile.',
    fullDesc: 'Porcelain veneers are the gold clinical standard of cosmetic dentistry. These razor-thin, incredibly strong ceramic overlays fit masterfully over front teeth to mask dark yellowing, close wide gaps, align minor crookedness, and reshape teeth into symmetry.',
    category: 'cosmetic',
    highlights: ['Premium light-reflecting ceramics', 'Stain-resistant defense', 'Instant smile transformations', 'Requires minimal shaving'],
    faqs: [
      { question: 'How long do porcelain veneers last?', answer: 'Veneers are highly durable and commonly last over 15 years with basic daily flossing and standard cleanings.' }
    ]
  },
  {
    id: 'teeth-whitening',
    title: 'Professional Teeth Whitening',
    shortDesc: 'Elite medical-grade brightening that removes decades of deep staining in a single hour.',
    fullDesc: 'Over-the-counter kits can damage enamel and take months to show results. We provide powerful, clinically safe bleaching gels activated by light grids to lift stubborn coffee, red wine, and smoke stains, boosting your enamel up to 8 shades lighter in one rapid visit.',
    category: 'cosmetic',
    highlights: ['Professional whitening systems', 'Enamel-safe desensitizing guards', 'Immediate dramatic outcomes', 'Take-home kit inclusions available'],
    faqs: [
      { question: 'Does whitening cause sensitivity?', answer: 'We incorporate special clinical desensitizers into our whitening sequence to prevent sharp nerve zaps for a painless whitening process.' }
    ]
  },

  // --- IMPLANTS & WISDOM TEETH ---
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'The ultimate permanent tooth replacement that looks, feels, and acts exactly like a natural tooth root.',
    fullDesc: 'Dental implants are the absolute premium option for replacing missing teeth. Consisting of a biological titanium post embedded in the jawbone and capped with a flawless custom porcelain crown, implants prevent bone shrinkage and restore 100% natural chewing strength.',
    category: 'implants',
    highlights: ['Biomechanically permanent post', 'Bridges gaps without damaging surrounding teeth', 'Saves natural bone density', 'Matches surrounding tooth aesthetics'],
    faqs: [
      { question: 'Am I a candidate for dental implants?', answer: 'If you have good general health and sufficient bone density in your jaw, you are typically an excellent candidate!' }
    ]
  },
  {
    id: 'wisdom-teeth-removal',
    title: 'Wisdom Teeth Removal',
    shortDesc: 'Gentle, preventative extractions of impacted adult molars to safeguard your teeth alignment.',
    fullDesc: 'Impacted or crooked wisdom teeth can pressure surrounding teeth, create localized swelling, lead to painful decay, and disrupt straight orthodontic alignment. Our gentle, sedation-supported extractions eliminate wisdom teeth complications safely and swiftly.',
    category: 'implants',
    highlights: ['Sedation dentistry options', 'Painless surgical extractions', 'Advanced 3D CBCT scans', 'Fast, fully supported healing protocols'],
    faqs: [
      { question: 'What is the recovery timeline like?', answer: 'Most patients return to school or light desk work in 3 to 4 days with proper soft-diet adherence and keeping sites clean.' }
    ]
  },

  // --- Orthodontics ---
  {
    id: 'braces',
    title: 'Modern Braces',
    shortDesc: 'Proven, effective metal or ceramic bracket treatments for flawless alignment and bite correction.',
    fullDesc: 'Orthodontics are much more than a cosmetic update—they correctly align your airway, temporomandibular joint (TMJ), and chewing efficiency. We provide state-of-the-art clear ceramic braces and classic strong metal brackets tailored individually for children, teens, and adults.',
    category: 'orthodontics',
    highlights: ['Solves severe crowdings', 'Aligns openbites, underbites, & overbites', 'Flexible wire options', 'Custom payment options'],
    faqs: [
      { question: 'Are braces just for kids?', answer: 'Absolutely not! Around 1 in 4 of our braces patients is an adult seeking optimal health and dental alignment.' }
    ]
  },
  {
    id: 'invisalign',
    title: 'Invisalign® Clear Aligners',
    shortDesc: 'Removable clear plastic trays that align your profile invisibly without brackets or food restrictions.',
    fullDesc: 'Straighten your teeth without anyone noticing! Invisalign clear aligners are removable thermoplastic trays worn for 22 hours daily. You can pop them out anytime to eat sticky foods, brush easily, and maintain perfect dental health throughout your modern lifestyle alignment.',
    category: 'orthodontics',
    highlights: ['Completely clear and invisible design', 'No metal wires or broken brackets', 'Eat whatever you want', 'Shorter office checkup times'],
    faqs: [
      { question: 'How long does Invisalign take?', answer: 'Average treatment takes about 12 to 18 months, though you will start noticing visible changes in just a few weeks!' }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-charlon',
    author: 'Charlon M.',
    text: 'I cannot say enough good things about Today Dental of Haslet! I have severe anxiety when visiting the dentist, but they made me feel like VIP family immediately. Dr. Ryan and his assistant were incredibly gentle, explained every step, and the procedure was actually completely painless. Thank you so much!',
    rating: 5,
    treatment: 'Dental Crowns'
  },
  {
    id: 'test-lashawna',
    author: 'LaShawna D.',
    text: 'Best family dental group ever! My kids actually ask to go here. They have nice waiting lounges, digital screens above the dentist chairs, and they are incredibly flexible with scheduling our dental cleanings. Dr. Andy LeGault and Dr. Dao were phenomenal and thorough.',
    rating: 5,
    treatment: 'Pediatric Cleanings & Exams'
  },
  {
    id: 'test-melody',
    author: 'Melody H.',
    text: 'Simply outstanding. They got me in on a Saturday morning for an emergency root canal and dental crown when my filling broke. No run-around, no hidden fees, just true care, transparent billing, and a painless relief. I will never go anywhere else!',
    rating: 5,
    treatment: 'Root Canal & Crown Emergency'
  },
  {
    id: 'test-rissa',
    author: 'Rissa L.',
    text: 'I recently finished my Invisalign clear aligner journey here and the transformation is pure magic. I finally love taking photos with wide smiles. The staff is warm and accommodating. If you want high-end dental mastery, this is where you go!',
    rating: 5,
    treatment: 'Invisalign®'
  }
];

export const GENERAL_FAQS: FAQItem[] = [
  { question: 'Do you accept major dental insurance?', answer: 'Yes! We accept and file almost all major PPO insurance plans. Our team will verify your benefits for you to maximize coverage and minimize out-of-pocket costs.' },
  { question: 'What if I do not have dental insurance?', answer: 'We believe premium dental care must be accessible. We provide our own internal Dental Membership Savings Plan and partner with CareCredit and helper loans for interest-free financing options.' },
  { question: 'How quickly can I secure a dental appointment?', answer: 'We offer flexible same-day appointments, especially for emergency pain. You can easily schedule an appointment by booking online or calling our team directly.' },
  { question: 'Is your office handicap and wheelchair accessible?', answer: 'Yes, our modern suite is entirely single-level, wheelchair accessible, and designed for absolute ease of entry and maximum patient comfort.' }
];

export const OFFICE_CONTACT = {
  phone: '682-990-2800',
  textPhone: '682-990-2800',
  address: '2412 Avondale Haslet Rd., Suite 100, Haslet, TX 76052',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3345.545718712076!2d-97.3551528!3d32.9366472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e723223f05db1%3A0xe5f8e5f8f8f8f8f8!2s2412%20Avondale%20Haslet%20Rd%20%23100%2C%20Haslet%2C%20TX%2076052!5e0!3m2!1sen!2sus!4v1684309968765!5m2!1sen!2sus',
  hours: [
    { day: 'Monday', hours: '8:30 AM - 5:30 PM' },
    { day: 'Tuesday', hours: '8:30 AM - 5:30 PM' },
    { day: 'Wednesday', hours: '8:30 AM - 5:30 PM' },
    { day: 'Thursday', hours: '8:30 AM - 5:30 PM' },
    { day: 'Friday', hours: '8:30 AM - 3:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 2:00 PM' },
    { day: 'Sunday', hours: 'Closed', isClosed: true }
  ] as OfficeHours[],
  promotionText: {
    headline: 'FREE Teeth Whitening',
    subHeadline: 'Just ask at your first visit',
    details: 'To welcome you to the Today Dental family, simply ask at your first visit following your first comprehensive dental examination and routine professional teeth cleaning to receive teeth whitening!',
    cta: 'Secure Free Whitening Now'
  }
};
