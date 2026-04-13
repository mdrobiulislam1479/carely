import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-[80vh] flex items-center justify-center text-center
                        px-8 py-32 bg-[#fbf8ff] overflow-hidden">
        <div className="absolute -top-1/4 -right-1/10 w-[500px] h-[500px] rounded-full blob-primary pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/10 w-[400px] h-[400px] rounded-full blob-secondary pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-lg">
          <p className="font-jakarta font-black text-[9rem] leading-none tracking-[-0.06em]
                        text-brand-gradient select-none mb-2">
            404
          </p>
          <h1 className="font-jakarta font-bold text-4xl tracking-brand text-[#1a1b24] mb-4">
            Page not <span className="text-brand-gradient">found.</span>
          </h1>
          <p className="text-[#444655] text-lg leading-relaxed mb-10">
            The page you're looking for doesn't exist or may have moved. Let us guide
            you back to the care you need.
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-gradient text-white
                         rounded-xl font-inter font-semibold text-[0.9375rem] no-underline shadow-btn
                         transition-all duration-200 hover:-translate-y-0.5"
            >
              <span className="material-icons-round text-base">home</span>
              Back to Home
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#f3f2ff] text-[#224bdd]
                         rounded-xl font-inter font-semibold text-[0.9375rem] no-underline
                         transition-all duration-200 hover:bg-[#dde1ff] hover:-translate-y-0.5"
            >
              Browse Services
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent text-[#224bdd]
                         rounded-xl font-inter font-semibold text-[0.9375rem] no-underline
                         transition-all duration-200 hover:bg-[#f3f2ff]"
            >
              Get Help
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
