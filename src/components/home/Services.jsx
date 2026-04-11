import Link from "next/link";

const services = [
  {
    icon: "child_care",
    title: "Baby Care",
    desc: "Nurturing and safe environments for your little ones with experienced sitters.",
    bg: "bg-[#90f0ed]/30",
    iconColor: "text-[#006a69]",
    href: "/services",
  },
  {
    icon: "elderly",
    title: "Elderly Care",
    desc: "Dignified support and companionship for seniors in the comfort of home.",
    bg: "bg-[#dde1ff]",
    iconColor: "text-[#224bdd]",
    href: "/services",
  },
  {
    icon: "medical_services",
    title: "Sick People Care",
    desc: "Dedicated medical support and recovery assistance for patients at home.",
    bg: "bg-[#e8ddff]",
    iconColor: "text-[#6448b3]",
    href: "/services",
  },
  {
    icon: "favorite",
    title: "Special Needs",
    desc: "Specialized care for individuals requiring unique attention and expertise.",
    bg: "bg-[#ffdad6]/50",
    iconColor: "text-[#ba1a1a]",
    href: "/services",
  },
];
export default function Services() {
  return (
    <section className="py-20 bg-[#fbf8ff]" id="services">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-14">
          <div className="trust-chip mb-4 mx-auto">
            <span className="material-icons-round text-[0.875rem]">
              medical_services
            </span>
            Our Services
          </div>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand mb-4">
            Care crafted for
            <span className="text-brand-gradient"> every need.</span>
          </h2>
          <p className="text-[#444655] text-lg max-w-lg mx-auto">
            Our mission is to curate professional caretaking that feels like
            family, combining modern technology with human warmth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 shadow-ambient flex flex-col
                               transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <div
                className={`w-13 h-13 ${s.bg} rounded-[14px] flex items-center justify-center`}
              >
                <span
                  className={`material-icons-round text-2xl ${s.iconColor}`}
                >
                  {s.icon}
                </span>
              </div>
              <h3 className="font-jakarta font-semibold text-xl mt-5 mb-2 text-[#1a1b24]">
                {s.title}
              </h3>
              <p className="text-[#444655] text-[0.9375rem] leading-relaxed mb-5 flex-1">
                {s.desc}
              </p>
              <Link
                href={s.href}
                className="inline-flex items-center gap-1.5 text-[#224bdd] font-semibold
                                 text-sm no-underline transition-all duration-200 hover:gap-3"
              >
                Learn more
                <span className="material-icons-round text-base">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
