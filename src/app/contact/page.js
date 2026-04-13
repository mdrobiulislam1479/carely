import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Carely team. We're here to help you find the perfect caretaking solution.",
};

const contactInfo = [
  {
    icon: "email",
    label: "Email",
    value: "support@carely.com",
    sub: "hello@carely.com",
    href: "mailto:support@carely.com",
    bg: "bg-[#dde1ff]",
    iconColor: "text-[#224bdd]",
  },
  {
    icon: "phone",
    label: "Phone",
    value: "+1 (800) 1111-11-1",
    sub: "Mon–Fri, 8AM–8PM EST",
    href: "tel:+18002273591",
    bg: "bg-[#90f0ed]/30",
    iconColor: "text-[#006a69]",
  },
  {
    icon: "location_on",
    label: "HQ Location",
    value: "123 Wellness Way",
    sub: "Suite 400, SF CA 94105",
    href: "#",
    bg: "bg-[#e8ddff]",
    iconColor: "text-[#6448b3]",
  },
  {
    icon: "schedule",
    label: "Office Hours",
    value: "Mon–Fri: 8AM–8PM",
    sub: "Sat–Sun: 10AM–4PM",
    href: null,
    bg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-16 bg-[#f3f2ff] relative overflow-hidden">
        <div className="absolute -top-1/3 -right-1/10 w-[500px] h-[500px] rounded-full blob-primary pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="trust-chip mb-4">
            <span className="material-icons-round text-sm">support_agent</span>
            Get in Touch
          </div>
          <h1 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand mb-4">
            We're here to <span className="text-brand-gradient">help.</span>
          </h1>
          <p className="text-[#444655] text-lg max-w-xl leading-relaxed">
            Whether you have questions about our services or need immediate
            assistance with a caregiver booking, our team is ready to help.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#fbf8ff]">
        <div className="max-w-[1280px] mx-auto px-8">
          {/* Contact info cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            {contactInfo.map((c) => (
              <div
                key={c.label}
                className="bg-white rounded-2xl p-7 shadow-ambient transition-all duration-200
                           hover:-translate-y-1 hover:shadow-elevated"
              >
                <div
                  className={`w-13 h-13 ${c.bg} rounded-[14px] flex items-center justify-center`}
                >
                  <span
                    className={`material-icons-round text-2xl ${c.iconColor}`}
                  >
                    {c.icon}
                  </span>
                </div>
                <p className="text-[0.75rem] font-bold uppercase tracking-[0.05em] text-[#747687] mt-4 mb-1.5">
                  {c.label}
                </p>
                {c.href ? (
                  <a
                    href={c.href}
                    className="font-jakarta font-bold text-base text-[#1a1b24] no-underline hover:text-[#224bdd] transition-colors"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className="font-jakarta font-bold text-base text-[#1a1b24]">
                    {c.value}
                  </p>
                )}
                <p className="text-[#444655] text-xs mt-1">{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Emergency banner */}
          <div
            className="flex flex-wrap items-center gap-5 bg-red-50 border border-red-200/60
                          rounded-2xl px-7 py-5 mb-8"
          >
            <div className="w-11 h-11 bg-red-100 rounded-[12px] flex items-center justify-center flex-shrink-0">
              <span className="material-icons-round text-xl text-red-600">
                emergency
              </span>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[#1a1b24] mb-0.5">
                Need immediate help?
              </p>
              <p className="text-[#444655] text-sm">
                Our priority support line is available <strong>24/7</strong> for
                urgent care emergencies.
              </p>
            </div>
            <a
              href="tel:+18002273591"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-gradient text-white
                         rounded-xl font-inter font-semibold text-sm no-underline shadow-btn
                         transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap"
            >
              <span className="material-icons-round text-base">
                phone_in_talk
              </span>
              Call Now
            </a>
          </div>

          {/* Form + sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
            {/* Form */}
            <div className="bg-white rounded-2xl p-10 shadow-ambient">
              <h2 className="font-jakarta font-bold text-2xl text-[#1a1b24] mb-1.5">
                Send us a message
              </h2>
              <p className="text-[#444655] text-[0.9375rem] mb-8">
                We typically respond within 2 business hours.
              </p>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.04em] text-[#1a1b24]">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="input-brand"
                      placeholder="Sarah"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-[0.04em] text-[#1a1b24]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="input-brand"
                      placeholder="Jenkins"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.04em] text-[#1a1b24]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="input-brand"
                    placeholder="sarah@example.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.04em] text-[#1a1b24]">
                    Subject
                  </label>
                  <select className="input-brand">
                    <option>General Inquiry</option>
                    <option>Booking Support</option>
                    <option>Caregiver Application</option>
                    <option>Billing & Payments</option>
                    <option>Emergency Assistance</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-[0.04em] text-[#1a1b24]">
                    Message
                  </label>
                  <textarea
                    className="input-brand resize-y"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center gap-2 py-4 bg-brand-gradient
                             text-white rounded-xl font-inter font-semibold text-[0.9375rem]
                             border-0 cursor-pointer shadow-btn transition-all duration-200
                             hover:-translate-y-0.5"
                >
                  <span className="material-icons-round text-lg">send</span>
                  Send Message
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-5 lg:sticky lg:top-20">
              {/* Map placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-ambient">
                <div className="bg-[#f3f2ff] h-44 flex flex-col items-center justify-center p-6 text-center">
                  <span className="material-icons-round text-5xl text-[#224bdd]/30">
                    map
                  </span>
                  <p className="text-[#444655] text-sm mt-3 leading-relaxed">
                    123 Wellness Way, Suite 400
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="w-8 h-8 bg-brand-gradient rounded-[8px] flex items-center justify-center
                                     font-jakarta font-extrabold text-sm text-white"
                    >
                      C
                    </span>
                    <span className="font-jakarta font-extrabold text-base text-[#1a1b24] tracking-brand">
                      Carely
                    </span>
                  </div>
                  <p className="text-[#444655] text-sm leading-relaxed">
                    Redefining modern care through compassion, technology, and
                    excellence in service.
                  </p>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-7 shadow-ambient">
                <h3 className="font-jakarta font-semibold text-xl text-[#1a1b24] mb-5">
                  Quick Answers
                </h3>
                {[
                  {
                    q: "How are caregivers vetted?",
                    a: "Every caregiver undergoes multi-step background checks, interviews, and certification audits.",
                  },
                  {
                    q: "How quickly can I find a caregiver?",
                    a: "Many families get matched within 24–48 hours of signing up.",
                  },
                  {
                    q: "Is there a minimum booking?",
                    a: "Our minimum booking is 2 hours. Custom arrangements available for longer-term care.",
                  },
                ].map((faq, i) => (
                  <div
                    key={faq.q}
                    className={`py-4 ${i < 2 ? "border-b border-[#c4c5d8]/25" : ""}`}
                  >
                    <p className="font-semibold text-sm text-[#1a1b24] mb-1">
                      {faq.q}
                    </p>
                    <p className="text-[#444655] text-xs leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
