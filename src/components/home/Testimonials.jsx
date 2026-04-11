const testimonials = [
  {
    quote:
      "Finding a caregiver for my mother was a daunting task until we found Carely. The vetting process is truly exceptional.",
    name: "Sarah Jenkins",
    role: "Daughter of client",
    initials: "SJ",
  },
  {
    quote:
      "The sick care team helped us through a very difficult recovery period. Their professionalism was unmatched.",
    name: "David Thompson",
    role: "Patient Husband",
    initials: "DT",
  },
  {
    quote:
      "As a busy parent, having access to such high-quality childcare on short notice has been a complete life-saver.",
    name: "Elena Rodriguez",
    role: "Working Parent",
    initials: "ER",
  },
];
export default function Testimonials() {
  return (
    <section className="py-20 bg-[#fbf8ff]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-14">
          <div className="trust-chip mb-4 mx-auto">
            <span className="material-icons-round text-[0.875rem]">
              format_quote
            </span>
            Voices of Comfort
          </div>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand mb-3">
            Families whose lives
            <span className="text-brand-gradient"> we've touched.</span>
          </h2>
          <p className="text-[#444655]">
            Don't just take our word for it — hear from the families who trust
            Carely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-ambient flex flex-col
                           transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div className="font-serif text-6xl leading-none text-[#224bdd]/15 -mt-2 mb-2">
                "
              </div>
              <p className="text-[#444655] text-[0.9375rem] leading-relaxed mb-6 flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <div
                  className="w-10 h-10 bg-brand-gradient rounded-full flex items-center
                                   justify-center text-white font-bold text-sm flex-shrink-0"
                >
                  {t.initials}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-[0.9375rem] text-[#1a1b24]">
                    {t.name}
                  </p>
                  <p className="text-[#444655] text-[0.8125rem]">{t.role}</p>
                </div>
                <div className="flex gap-px">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-icons-round text-amber-400 text-sm"
                    >
                      star
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
