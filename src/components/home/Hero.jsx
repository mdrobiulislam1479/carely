"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-30 lg:pt-50 overflow-hidden bg-[#fbf8ff]">
      <div className="absolute -top-1/5 -right-1/10 w-[650px] h-[650px] rounded-full blob-primary pointer-events-none" />
      <div className="absolute -bottom-1/4 -left-1/10 w-[500px] h-[500px] rounded-full blob-secondary pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="trust-chip mb-6 animate-fade-up">
            <span className="material-icons-round text-[0.875rem]">
              verified
            </span>
            100% Verified Caretakers
          </div>

          <h1 className="font-jakarta font-extrabold text-5xl lg:text-6xl tracking-brand leading-[1.1] mb-5 animate-fade-up [animation-delay:0.1s]">
            Care that feels
            <span className="text-brand-gradient block">like family.</span>
          </h1>

          <p className="text-[#444655] text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up [animation-delay:0.2s]">
            Experience the gold standard in boutique caretaking. Verified
            professionals dedicated to providing compassionate, high-end
            editorial care.
          </p>

          <div className="flex justify-center lg:justify-start flex-wrap gap-4 mb-12 animate-fade-up [animation-delay:0.3s]">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gradient text-white rounded-xl font-inter font-semibold"
            >
              <span className="material-icons-round">search</span>
              Find a Caregiver
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f3f2ff] text-[#224bdd] rounded-xl font-inter font-semibold"
            >
              Our Story
            </Link>
          </div>

          <div className="flex justify-center lg:justify-start gap-10 pt-8 border-t border-[rgba(196,197,216,0.3)] animate-fade-up [animation-delay:0.4s]">
            {[
              { num: "5,000+", label: "Verified Caretakers" },
              { num: "98%", label: "Satisfaction Rate" },
              { num: "24/7", label: "Support Available" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-jakarta font-extrabold text-2xl text-[#224bdd]">
                  {s.num}
                </p>
                <p className="text-[#444655] text-sm font-medium mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:flex justify-center items-center">
          <div className="relative z-0 w-full max-w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-float">
            <img
              src="/hero_elderly.png"
              alt="Caregiver"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -top-8 -left-16 flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 shadow-elevated animate-float">
            <span className="material-icons-round text-xl text-[#224bdd]">
              shield
            </span>
            <div>
              <p className="font-semibold text-xs">Top-tier Safety</p>
              <p className="text-[10px] text-[#444655]">Fully insured</p>
            </div>
          </div>

          <div className="absolute -bottom-4 -right-8 flex items-center gap-2.5 bg-white rounded-2xl px-4 py-3 shadow-elevated animate-float-delay">
            <span className="material-icons-round text-xl text-[#006a69]">
              favorite
            </span>
            <div>
              <p className="font-semibold text-xs">Care with Heart</p>
              <p className="text-[10px] text-[#444655]">Compassionate pros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
