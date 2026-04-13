import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Story",
  description:
    "Learn about Carely's mission to bring editorial compassion to caretaking.",
};

const pillars = [
  {
    icon: "favorite",
    title: "Compassion",
    desc: "We lead with empathy, ensuring every interaction feels warm, personal, and deeply respectful.",
    bg: "bg-[#90f0ed]/30",
    iconColor: "text-[#006a69]",
  },
  {
    icon: "shield",
    title: "Trust",
    desc: "Our vetting process is rigorous, ensuring that only the most reliable and ethical professionals join our circle.",
    bg: "bg-[#dde1ff]",
    iconColor: "text-[#224bdd]",
  },
  {
    icon: "workspace_premium",
    title: "Excellence",
    desc: "We strive for a premium standard in everything we do, from our digital interface to our bedside manner.",
    bg: "bg-[#e8ddff]",
    iconColor: "text-[#6448b3]",
  },
];

const team = [
  {
    name: "Elena Vance",
    role: "Founder & Creative Director",
    image: "/elena_vance.jpg",
    gradient: "bg-gradient-to-tr from-[#ff7e5f] to-[#feb47b]",
  },
  {
    name: "Julian Thorne",
    role: "Head of Vetting",
    image: "/julian-thorne.jpg",
    gradient: "bg-gradient-to-tr from-[#00c9ff] to-[#92fe9d]",
  },
  {
    name: "Sarah Chen",
    role: "Director of Care Ethics",
    image: "/sarah-chen.jpg",
    gradient: "bg-gradient-to-tr from-[#ff9a9e] to-[#fad0c4]",
  },
  {
    name: "Marcus Reed",
    role: "Community Lead",
    image: "/marcus_reed.jpg",
    gradient: "bg-gradient-to-tr from-[#a1c4fd] to-[#c2e9fb]",
  },
];

const stats = [
  { num: "2019", label: "Founded" },
  { num: "5,000+", label: "Verified Caregivers" },
  { num: "50,000+", label: "Families Served" },
  { num: "4.97★", label: "Average Rating" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-24 bg-[#f3f2ff] relative overflow-hidden">
        <div className="absolute -top-1/4 -right-1/10 w-[600px] h-[600px] rounded-full blob-primary pointer-events-none" />
        <div className="absolute -bottom-1/3 -left-1/10 w-[450px] h-[450px] rounded-full blob-secondary pointer-events-none" />
        <div className="max-w-[1280px] mx-auto px-8 relative z-10 text-center">
          <div className="trust-chip mb-4">
            <span className="material-icons-round text-sm">auto_stories</span>
            Our Story
          </div>
          <h1 className="font-jakarta font-extrabold text-5xl lg:text-6xl tracking-brand mb-5 max-w-5xl mx-auto leading-[1.1]">
            We believe trust is built through{" "}
            <span className="text-brand-gradient">curated connections.</span>
          </h1>
          <p className="text-[#444655] text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            We treat care not as a utility, but as a digital canvas for
            compassion. Every caregiver is hand-selected to meet our high-end
            editorial standards.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gradient text-white
                       rounded-xl font-inter font-semibold text-[0.9375rem] no-underline shadow-btn
                       transition-all duration-200 hover:-translate-y-0.5"
          >
            <span className="material-icons-round text-base">
              arrow_forward
            </span>
            Explore Our Services
          </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1a1b24] py-8">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-jakarta font-extrabold text-3xl text-white tracking-brand mb-1">
                  {s.num}
                </p>
                <p className="text-white/55 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-[#fbf8ff]">
        <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="trust-chip mb-4">
              <span className="material-icons-round text-sm">history</span>
              The Origin
            </div>
            <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand mb-5">
              Our <span className="text-brand-gradient">Story</span>
            </h2>
            <div className="flex flex-col gap-4 text-[#444655] leading-[1.8]">
              <p>
                Carely began with a simple observation: the healthcare world had
                become too cold, too mechanical. We saw platforms that treated
                caregivers as data points and families as transactions.
              </p>
              <p>
                Our mission was to bring the "human" back to the forefront. We
                envisioned a sanctuary where care is treated with the same
                precision and aesthetic thoughtfulness as a high-end editorial
                publication.
              </p>
              <p>
                Today, we are more than just a marketplace — we are a boutique
                agency for the modern world, connecting discerning families with
                caregivers who possess not just the skills, but the soul to make
                a difference.
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="flex justify-center">
            <div className="bg-[#f3f2ff] rounded-3xl p-10 max-w-sm w-full shadow-elevated">
              <div className="bg-white rounded-2xl p-8 text-center shadow-ambient">
                <span className="material-icons-round text-6xl text-[#224bdd]">
                  favorite
                </span>
                <p className="font-jakarta font-semibold text-xl mt-4 text-[#1a1b24]">
                  "A sanctuary for care."
                </p>
                <p className="text-[#444655] text-sm mt-2">
                  Our founding vision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-[#f3f2ff]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-14">
            <div className="trust-chip mb-4 mx-auto">
              <span className="material-icons-round text-sm">foundation</span>
              Our Values
            </div>
            <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand mb-3">
              The Pillars of <span className="text-brand-gradient">Carely</span>
            </h2>
            <p className="text-[#444655]">
              Guided by a philosophy of intentional compassion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-10 text-center shadow-ambient
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div
                  className={`w-18 h-18 ${p.bg} rounded-2xl flex items-center justify-center mx-auto`}
                >
                  <span
                    className={`material-icons-round text-4xl ${p.iconColor}`}
                  >
                    {p.icon}
                  </span>
                </div>
                <h3 className="font-jakarta font-bold text-2xl mt-6 mb-3 text-[#1a1b24]">
                  {p.title}
                </h3>
                <p className="text-[#444655] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-[#fbf8ff]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="text-center mb-14">
            <div className="trust-chip mb-4 mx-auto">
              <span className="material-icons-round text-sm">group</span>
              The Curators
            </div>
            <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand mb-3">
              Meet the <span className="text-brand-gradient">Curators</span>
            </h2>
            <p className="text-[#444655]">
              The visionary team behind the high-end editorial care movement.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 text-center shadow-ambient
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div
                  className={`w-20 h-20 ${t.gradient} rounded-full flex items-center justify-center
                                 font-jakarta font-extrabold text-2xl text-white mx-auto shadow-float`}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="font-jakarta font-semibold text-lg mt-5 mb-1 text-[#1a1b24]">
                  {t.name}
                </h3>
                <p className="text-[#444655] text-sm">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#eeedf9]">
        <div className="max-w-[960px] mx-auto px-8 text-center">
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand mb-4">
            Experience the difference of
            <span className="text-brand-gradient"> curated care.</span>
          </h2>
          <p className="text-[#444655] text-xl mb-8 leading-relaxed">
            Start your journey today and find a caregiver who aligns with your
            values and lifestyle.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gradient text-white
                         rounded-xl font-inter font-semibold no-underline shadow-btn
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="material-icons-round text-lg">
                rocket_launch
              </span>
              Get Started
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#f3f2ff] text-[#224bdd]
                         rounded-xl font-inter font-semibold no-underline
                         transition-all duration-200 hover:bg-[#dde1ff] hover:-translate-y-0.5"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
