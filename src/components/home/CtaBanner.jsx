import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="py-20 bg-[#f3f2ff]">
      <div className="max-w-[1280px] mx-auto px-8 text-center">
        <div className="bg-brand-gradient rounded-3xl p-12 lg:p-16 relative overflow-hidden">
          {/* Blobs */}
          <div className="absolute -top-1/2 -right-8 w-[400px] h-[400px] rounded-full bg-white/8 pointer-events-none" />
          <div className="absolute -bottom-1/2 left-[30%] w-[350px] h-[350px] rounded-full bg-white/5 pointer-events-none" />

          <div className="relative z-10">
            <h2
              className="font-jakarta font-extrabold text-4xl lg:text-5xl tracking-brand
                             text-white leading-[1.15] mb-4"
            >
              Ready to find the perfect care?
            </h2>
            <p className="text-white/75 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Join thousands of families who trust Carely for their most
              precious needs. Safety and peace of mind are just a few clicks
              away.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#224bdd]
                             rounded-xl font-inter font-bold text-[0.9375rem] no-underline
                             transition-all duration-200 hover:-translate-y-0.5
                             hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
              >
                <span className="material-icons-round text-[1.1rem]">
                  rocket_launch
                </span>
                Get Started Free
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/12 text-white
                             rounded-xl font-inter font-semibold text-[0.9375rem] no-underline
                             border border-white/20 transition-all duration-200
                             hover:bg-white/20 hover:-translate-y-0.5"
              >
                Browse Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
