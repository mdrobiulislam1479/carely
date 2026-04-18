import Link from "next/link";

export const metadata = {
  title: "Sign Up",
  description:
    "Create your Carely account and access the finest caretaking services for your family.",
};

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
      fill="#4285F4"
    />
    <path
      d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
      fill="#34A853"
    />
    <path
      d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
      fill="#FBBC05"
    />
    <path
      d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z"
      fill="#EA4335"
    />
  </svg>
);

export default function RegisterPage() {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left */}
        <div className="bg-brand-gradient relative overflow-hidden hidden lg:flex items-center px-16 py-20">
          <div className="absolute -top-1/4 -right-1/5 w-[400px] h-[400px] rounded-full bg-white/8 pointer-events-none" />
          <div className="absolute -bottom-1/4 -left-1/8 w-[350px] h-[350px] rounded-full bg-white/5 pointer-events-none" />
          <div className="relative z-10 max-w-md">
            <Link
              href="/"
              className="flex items-center gap-2.5 no-underline mb-12"
            >
              <span
                className="w-10 h-10 bg-white/15 border-2 border-white/30 rounded-[12px]
                               flex items-center justify-center font-jakarta font-extrabold text-xl text-white"
              >
                C
              </span>
              <span className="font-jakarta font-extrabold text-xl text-white tracking-brand">
                Carely
              </span>
            </Link>
            <h2 className="font-jakarta font-bold text-4xl text-white leading-[1.2] mb-4">
              Professional care, curated for your loved ones.
            </h2>
            <p className="text-white/75 text-base leading-relaxed mb-8">
              Experience a sanctuary of trust and compassion. We connect
              families with high-end editorial caretaking services designed for
              peace of mind.
            </p>
            <div className="flex flex-col gap-3.5 mb-10">
              {[
                { icon: "star", text: "Premium caregiver matching" },
                { icon: "verified", text: "Rigorous vetting process" },
                { icon: "favorite", text: "Compassionate care philosophy" },
              ].map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/15 rounded-[8px] flex items-center justify-center flex-shrink-0">
                    <span className="material-icons-round text-white text-base">
                      {f.icon}
                    </span>
                  </div>
                  <span className="text-white/85 text-[0.9375rem]">
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 border border-white/15 rounded-2xl p-6">
              <p className="text-white/90 italic leading-relaxed mb-4 text-[0.9375rem]">
                "The registration was seamless. Within days I had a wonderful
                caregiver for my children."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center font-bold text-white text-sm">
                  E
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">
                    Elena Rodriguez
                  </p>
                  <p className="text-white/60 text-xs">Working Parent</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right – form */}
        <div className="flex items-center justify-center px-8 py-16 bg-[#fbf8ff]">
          <div className="w-full max-w-[460px]">
            <h1 className="font-jakarta font-bold text-3xl text-[#1a1b24] mb-2">
              Join our community
            </h1>
            <p className="text-[#444655] text-[0.9375rem] mb-8">
              Create your high-end caretaking account.
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
                  placeholder="hello@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.04em] text-[#1a1b24]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="input-brand"
                  placeholder="+880 1234-567890"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.04em] text-[#1a1b24]">
                  Password
                </label>
                <input
                  type="password"
                  className="input-brand"
                  placeholder="Min. 8 characters"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.04em] text-[#1a1b24]">
                  I am a
                </label>
                <select className="input-brand">
                  <option>Family / Care-seeker</option>
                  <option>Professional Caregiver</option>
                </select>
              </div>

              <Link
                href="/login"
                className="w-full flex justify-center items-center gap-2 py-4 bg-brand-gradient
                           text-white rounded-xl font-inter font-semibold text-[0.9375rem]
                           no-underline shadow-btn transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="material-icons-round text-lg">person_add</span>
                Create Account
              </Link>

              <div className="flex items-center">
                <div className="flex-1 h-px bg-[#c4c5d8]/50" />
                <span className="text-xs text-[#444655] px-3 whitespace-nowrap">
                  or sign up with
                </span>
                <div className="flex-1 h-px bg-[#c4c5d8]/50" />
              </div>

              <button
                type="button"
                className="flex items-center justify-center gap-3 w-full py-3.5 bg-white
                           border-[1.5px] border-[#c4c5d8] rounded-xl font-inter text-[0.9375rem]
                           font-semibold text-[#1a1b24] cursor-pointer transition-all duration-200
                           hover:border-[#224bdd] hover:bg-[#f3f2ff]"
              >
                <GoogleIcon />
                Continue with Google
              </button>
            </form>

            <p className="text-center mt-6 text-sm text-[#444655]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#224bdd] font-semibold no-underline hover:underline"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
