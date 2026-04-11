const reasons = [
  {
    icon: "verified_user",
    title: "Uncompromising Trust",
    desc: "Every caretaker undergoes rigorous background checks and multi-step interviews to ensure absolute peace of mind.",
  },
  {
    icon: "health_and_safety",
    title: "Safety First Protocols",
    desc: "Real-time tracking, 24/7 support, and insurance coverage for every booking made through our platform.",
  },
  {
    icon: "workspace_premium",
    title: "Verified Expertise",
    desc: "We only onboard caregivers with proven experience and certified skills in their respective fields.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-[#f3f2ff]" id="why-us">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-14">
          <div className="trust-chip mb-4 mx-auto">
            <span className="material-icons-round text-[0.875rem]">
              workspace_premium
            </span>
            Why Choose Carely
          </div>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand">
            Built on trust.
            <span className="text-brand-gradient"> Driven by care.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-8 shadow-ambient transition-all duration-300
                           hover:-translate-y-1 hover:shadow-elevated"
            >
              <div
                className="w-13 h-13 bg-brand-gradient rounded-[14px] flex items-center
                                justify-center shadow-[0_8px_20px_rgba(34,75,221,0.25)]"
              >
                <span className="material-icons-round text-2xl text-white">
                  {r.icon}
                </span>
              </div>
              <h3 className="font-jakarta font-semibold text-xl mt-5 mb-2 text-[#1a1b24]">
                {r.title}
              </h3>
              <p className="text-[#444655] text-[0.9375rem] leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
