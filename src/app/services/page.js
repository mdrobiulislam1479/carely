import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Services',
  description: "Explore Carely's full range of professional caretaking services.",
};

const services = [
  {
    icon: 'elderly',
    title: 'Elderly Care',
    subtitle: 'Dignified Support & Companionship',
    desc: 'Our elderly care service provides comprehensive support while maintaining independence and quality of life. From medication management and mobility assistance to meal preparation, we ensure a safe, nurturing environment.',
    features: ['Customized nutrition & meal plans', 'Medication tracking and alerts', 'Cognitive stimulation activities', 'Light physical therapy support'],
    plans: [
      { name: 'Hourly Support', desc: 'Perfect for errands, meal times, or brief check-ins.', price: 'From $35/hr' },
      { name: 'Daily Immersive Care', desc: 'Full-day dedicated companionship and medical oversight.', price: 'From $280/day' },
    ],
    badge: 'Most Popular',
    cardBg: 'bg-[#dde1ff]',
    iconColor: 'text-[#224bdd]',
    accentColor: 'text-[#224bdd]',
    accentBg: 'bg-[#224bdd]',
  },
  {
    icon: 'child_care',
    title: 'Baby Care',
    subtitle: 'Safe & Nurturing Childcare',
    desc: 'Nurturing and safe environments for your little ones with experienced sitters. Our vetted childcare specialists bring warmth, patience, and certified expertise to every session.',
    features: ['Feeding & nutrition support', 'Educational play activities', 'Sleep routine management', 'Infant first-aid certified'],
    plans: [
      { name: 'Date Night Care', desc: '3–6 hours flexible childcare for special occasions.', price: 'From $45/hr' },
      { name: 'Full-Day Nanny', desc: 'Dedicated full-day care while you focus on work.', price: 'From $350/day' },
    ],
    badge: null,
    cardBg: 'bg-[#90f0ed]/30',
    iconColor: 'text-[#006a69]',
    accentColor: 'text-[#006a69]',
    accentBg: 'bg-[#006a69]',
  },
  {
    icon: 'medical_services',
    title: 'Sick People Care',
    subtitle: 'Recovery & Medical Home Support',
    desc: 'Dedicated medical support and recovery assistance for patients at home. Our nursing-trained caregivers provide post-operative care, chronic disease management, and rehabilitation support.',
    features: ['Post-surgery recovery support', 'Vital sign monitoring', 'Prescription management', 'Communication with medical team'],
    plans: [
      { name: 'Recovery Care', desc: 'Short-term intensive support post-discharge.', price: 'From $55/hr' },
      { name: '24/7 Live-in Care', desc: 'Round-the-clock monitoring and assistance.', price: 'From $850/day' },
    ],
    badge: null,
    cardBg: 'bg-[#e8ddff]',
    iconColor: 'text-[#6448b3]',
    accentColor: 'text-[#6448b3]',
    accentBg: 'bg-[#6448b3]',
  },
  {
    icon: 'favorite',
    title: 'Special Needs Care',
    subtitle: 'Specialized Expert Support',
    desc: 'Specialized care for individuals requiring unique attention and expertise. Our caregivers are trained in autism support, behavioral therapies, and adaptive assistance.',
    features: ['Autism spectrum support', 'Behavioral therapy integration', 'Adaptive care planning', 'Family coordination & training'],
    plans: [
      { name: 'Companion Sessions', desc: 'Therapeutic companionship and social engagement.', price: 'From $60/hr' },
      { name: 'Integrated Support', desc: 'Full-spectrum support with therapy coordination.', price: 'Custom' },
    ],
    badge: null,
    cardBg: 'bg-[#e8ddff]/50',
    iconColor: 'text-[#6448b3]',
    accentColor: 'text-[#6448b3]',
    accentBg: 'bg-[#6448b3]',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-20 bg-[#f3f2ff] relative overflow-hidden">
        <div className="absolute -top-1/3 -right-1/10 w-[600px] h-[600px] rounded-full blob-primary pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="trust-chip mb-4">
            <span className="material-icons-round text-sm">medical_services</span>
            Our Services
          </div>
          <h1 className="font-jakarta font-extrabold text-5xl lg:text-6xl tracking-brand mb-4">
            Elderly Care
            <span className="text-brand-gradient"> Services</span>
          </h1>
          <p className="text-[#444655] text-lg max-w-2xl leading-relaxed mb-6">
            Our elderly care service is designed to provide comprehensive support while maintaining
            independence. Every caregiver is hand-selected to our high-end editorial standards.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: 'verified_user', label: 'Strict background checks' },
              { icon: 'gpp_good', label: 'Full liability coverage' },
              { icon: 'support_agent', label: '24/7 emergency support' },
            ].map((b) => (
              <span key={b.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#dde1ff]
                           text-[#224bdd] rounded-full text-xs font-semibold">
                <span className="material-icons-round text-sm">{b.icon}</span>
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-[#fbf8ff]">
        <div className="max-w-[1280px] mx-auto px-8 flex flex-col gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white rounded-2xl shadow-ambient overflow-hidden flex
                          ${i % 2 === 1 ? 'flex-row-reverse' : 'flex-row'} flex-col md:flex-row`}
            >
              {/* Visual */}
              <div className={`flex-shrink-0 w-full md:w-72 min-h-[220px]
                              flex flex-col items-center justify-center relative overflow-hidden group`}>
                {/* Image overlay container */}
                <div className="absolute inset-0 z-0 group-hover:scale-110 transition-all duration-500">
                  {s.icon === 'elderly' && <img src="/hero_elderly.png" alt="Elderly Care" className="w-full h-full object-cover" />}
                  {s.icon === 'child_care' && <img src="/service_baby.png" alt="Baby Care" className="w-full h-full object-cover" />}
                  {s.icon === 'medical_services' && <img src="/service_medical.png" alt="Medical Care" className="w-full h-full object-cover" />}
                  {s.icon === 'favorite' && <img src="/favorite.jpg" alt="Medical Care" className="w-full h-full object-cover" />}
                  <div className="absolute inset-0 bg-black/30" />
                </div>
                
                <span className={`material-icons-round text-6xl ${s.iconColor} relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-white`}>{s.icon}</span>
                {s.badge && (
                  <span className={`absolute top-4 right-4 inline-flex items-center px-3 py-1
                                   ${s.accentBg} text-white rounded-full text-xs font-bold z-10`}>
                    {s.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 p-10">
                <p className={`${s.accentColor} font-bold text-xs uppercase tracking-[0.05em] mb-1.5`}>
                  {s.subtitle}
                </p>
                <h2 className="font-jakarta font-bold text-2xl mb-3 text-[#1a1b24]">{s.title}</h2>
                <p className="text-[#444655] leading-relaxed mb-6">{s.desc}</p>

                <div className="flex flex-col gap-2.5 mb-6">
                  {s.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className={`material-icons-round text-base ${s.accentColor}`}>check_circle</span>
                      <span className="text-[0.9375rem] text-[#444655]">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  {s.plans.map((p) => (
                    <div key={p.name}
                      className="flex items-center justify-between gap-4 px-5 py-3.5
                                 bg-[#f3f2ff] rounded-xl">
                      <div>
                        <p className="font-bold text-[#1a1b24] text-sm mb-0.5">{p.name}</p>
                        <p className="text-[#444655] text-sm">{p.desc}</p>
                      </div>
                      <span className={`${s.accentColor} font-bold text-sm whitespace-nowrap`}>{p.price}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gradient text-white
                             rounded-xl font-inter font-semibold text-sm no-underline shadow-btn
                             transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span className="material-icons-round text-base">calendar_month</span>
                  Book {s.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Match section */}
      <section className="py-20 bg-[#f3f2ff]">
        <div className="max-w-[960px] mx-auto px-8 text-center">
          <div className="trust-chip mb-4 mx-auto">
            <span className="material-icons-round text-sm">auto_awesome</span>
            The Carely Match Promise
          </div>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand mb-4">
            We don't just match you—
            <span className="text-brand-gradient"> we curate a partnership.</span>
          </h2>
          <p className="text-[#444655] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Our matching algorithm considers personality, hobbies, and specialized medical needs to
            ensure your loved one looks forward to every visit.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gradient text-white
                       rounded-xl font-inter font-semibold no-underline shadow-btn
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="material-icons-round text-lg">rocket_launch</span>
            Start Your Match
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
