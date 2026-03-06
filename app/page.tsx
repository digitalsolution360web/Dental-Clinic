"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, MapPin } from "lucide-react";

export default function Home() {
  const phonePrimary = "+91 99677 56611";
  const phonePrimaryHref = "tel:+919967756611";
  const phoneSecondary = "+91 9167244898";
  const phoneSecondaryHref = "tel:+919167244898";
  const whatsappNumber = "919967756611";

  // Aliases for variables used in some sections
  const phoneNumberDisplay = phonePrimary;
  const phoneNumberHref = phonePrimaryHref;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky Bottom Bar – mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center border-t border-slate-200 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.08)] md:hidden">
        {/* Get Free Support */}
        <a
          href="#appointment"
          className="flex flex-1 items-center justify-center gap-2 bg-blue-600 px-4 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          Book Appointment
        </a>
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center border-l border-slate-200 px-6 py-4 transition hover:bg-green-50"
        >
          <svg viewBox="0 0 32 32" className="h-7 w-7" xmlns="http://www.w3.org/2000/svg">
            <path fill="#25D366" d="M16 2C8.268 2 2 8.268 2 16c0 2.482.666 4.81 1.822 6.822L2 30l7.395-1.791A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.41 19.574c-.31.872-1.538 1.596-2.528 1.806-.674.14-1.554.252-4.515-.972-3.787-1.536-6.231-5.376-6.422-5.626-.183-.25-1.54-2.048-1.54-3.906 0-1.858.97-2.772 1.316-3.153.347-.38.756-.476 1.008-.476.252 0 .504.003.724.012.232.01.544-.088.85.65.31.748 1.054 2.606 1.146 2.794.092.188.15.408.03.658-.12.25-.18.407-.356.626-.176.22-.37.49-.528.658-.176.188-.36.39-.154.766.206.376.914 1.508 1.964 2.44 1.35 1.204 2.49 1.576 2.866 1.752.376.176.594.147.812-.088.22-.236.94-1.096 1.19-1.472.25-.376.5-.314.844-.188.344.126 2.19 1.032 2.566 1.22.376.188.628.282.72.438.09.156.09.9-.22 1.772z" />
          </svg>
        </a>
        {/* Call */}
        <a
          href={phonePrimaryHref}
          aria-label="Call us"
          className="flex items-center justify-center border-l border-slate-200 px-6 py-4 transition hover:bg-blue-50"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-blue-600" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.26.2 2.47.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
          </svg>
        </a>
      </div>

      {/* Navbar – no links, only actions */}
      <header className="border-b border-amber-100 bg-white/80 backdrop-blur sticky top-0 z-40">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 lg:px-8 lg:py-5">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="relative h-9 w-9 sm:h-11 sm:w-11 shrink-0 flex overflow-hidden rounded-full bg-amber-50 ring-2 ring-amber-300">
              <Image
                src="/logo.png"
                alt="Andheri Dental Clinic logo"
                fill
                className="object-contain"
              />
            </Link>
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="leading-tight min-w-0 hidden sm:block">
              <p className="text-[11px] sm:text-sm font-semibold uppercase tracking-wide text-amber-700 truncate sm:whitespace-normal">
                Andheri Dental Clinic
              </p>
            </Link>
          </div>

          {/* Mobile Phone Number */}
          <div className="flex md:hidden shrink-0 ml-2">
            <a
              href={phonePrimaryHref}
              className="px-3 py-1.5 rounded-full bg-amber-600 text-white text-[11px] sm:text-sm font-bold hover:bg-amber-700 transition-colors whitespace-nowrap shadow-sm shadow-amber-500/30"
            >
              {phonePrimary}
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={phonePrimaryHref}
              className="rounded-full border border-amber-200 px-4 py-2 text-sm font-semibold text-amber-800 transition hover:border-amber-300 hover:bg-amber-50"
            >
              📞 Call Now
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-green-500/40 transition hover:bg-green-600"
            >
              💬 WhatsApp
            </a>
            <a
              href="#appointment"
              className="rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-amber-500/40 transition hover:bg-amber-700"
            >
              📅 Book Appointment
            </a>
          </div>
        </div>
      </header >

      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-8 lg:px-8 lg:pb-24 lg:pt-12">
        {/* 1. Hero + Quick Appointment Form */}
        <section className="relative grid gap-10 overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-white to-amber-100 p-6 shadow-sm shadow-amber-100 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:p-10">
          {/* Background hero image */}
          <div className="pointer-events-none absolute inset-y-0 right-[-10%] -z-10 hidden opacity-40 sm:block lg:right-0">
            <div className="relative h-full w-[60%] min-w-[260px]">
              <Image
                src="/pic1.webp"
                alt="Smiling dental patient"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-2 self-start rounded-2xl sm:rounded-full bg-amber-100 px-3 py-2 sm:py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-200">
              <span className="flex items-center gap-1">⭐ 5★ Rated Dental Clinic</span>
              <span className="hidden sm:block h-1 w-1 rounded-full bg-emerald-300" />
              <span className="flex items-center gap-1">10+ Years Experience</span>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                Andheri East • Mumbai
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Pain-Less &amp; Advanced Dental Treatment in{" "}
                <span className="text-amber-700">Andheri East</span>
              </h1>
            </div>

            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Providing gentle, modern dental care with advanced technology and
              a focus on comfort. From routine checkups to complete smile
              makeovers, we care for your entire family.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/40 transition hover:bg-amber-700"
              >
                📅 Book Free Consultation
              </a>
              <a
                href={phonePrimaryHref}
                className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-amber-800 shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
              >
                📞 Call Now: {phonePrimary}
              </a>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-amber-100 text-center text-lg leading-7">
                  😊
                </span>
                <span>1000+ Happy Patients</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-amber-100 text-center text-lg leading-7">
                  🦷
                </span>
                <span>Painless &amp; gentle treatments</span>
              </div>
            </div>
          </div>

          {/* Quick Appointment Form */}
          <div
            id="appointment"
            className="flex flex-col justify-center rounded-2xl bg-[#B8860B] p-5 shadow-lg shadow-amber-100 ring-1 ring-amber-100 sm:p-6"
          >
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Book Your Free Consultation
            </h2>
            <p className="mt-1 text-xs text-amber-50 sm:text-sm">
              Share a few details and our team will call you to confirm your
              appointment.
            </p>

            <form
              className="mt-5 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-medium text-white"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-amber-100 transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="phone"
                  className="text-xs font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-amber-100 transition placeholder:text-slate-400 focus:border-amber-400 focus:ring-2"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="treatment"
                  className="text-xs font-medium text-white"
                >
                  Treatment Needed
                </label>
                <select
                  id="treatment"
                  name="treatment"
                  className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-amber-100 transition focus:border-amber-400 focus:ring-2"
                >
                  <option value="">Select treatment</option>
                  <option>Dental Implants</option>
                  <option>Root Canal (RCT)</option>
                  <option>Braces &amp; Aligners</option>
                  <option>Teeth Whitening</option>
                  <option>Smile Makeover</option>
                  <option>Kids Dentistry</option>
                  <option>General Checkup / Cleaning</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="date"
                  className="text-xs font-medium text-white"
                >
                  Preferred Date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  className="w-full rounded-xl border border-amber-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-amber-100 transition focus:border-amber-400 focus:ring-2"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-500/40 transition hover:bg-emerald-600"
              >
                📅 Book Free Consultation
              </button>

              <p className="text-[11px] leading-snug text-amber-50">
                No charges for consultation. Our team will confirm your
                appointment time over call or WhatsApp.
              </p>
            </form>
          </div>
        </section>

        {/* 2. About Clinic - Screenshot Matching Layout */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_minmax(0,1fr)] items-start">
          {/* Left: Doctor Biography */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 ring-1 ring-emerald-200">
              🦷 Expert Specialist
            </div>
            <h2 className="text-2xl font-black text-slate-900 sm:text-3xl leading-tight">
              At the heart of Andheri Dental Clinic is{" "}
              <span className="text-amber-700">Dr. Poonam Singh.</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              At the heart of Andheri Dental Clinic is Dr. Poonam Brahmadeen Singh, a dedicated Periodontist and Oral Implantologist with a passion for creating healthy, beautiful smiles. With her advanced qualifications (BDS, MDS) and a deep-seated expertise in gum treatments, dental implants, and full-mouth rehabilitation, Dr. Singh goes beyond just treating teeth—she restores confidence.
            </p>
            <p className="text-sm leading-relaxed text-slate-500">
              She is known for her warm, calming demeanor, making even the most anxious patients feel at ease. Believing in a partnership with her patients, Dr. Singh prioritizes clear communication and personalized care plans, ensuring every treatment is tailored for long-term health and well-being. Her commitment is to provide you with a dental experience that is as comfortable as it is transformative.
            </p>
            <div className="grid gap-3 sm:grid-cols-3 pt-1">
              <div className="rounded-2xl bg-amber-50/80 p-4 shadow-sm border border-amber-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Experience</p>
                <p className="mt-1 text-xl font-black text-slate-900">10+ Years</p>
                <p className="mt-1 text-[11px] text-slate-500 font-black">Trusted dental care in Andheri East</p>
              </div>
              <div className="rounded-2xl bg-amber-50/80 p-4 shadow-sm border border-amber-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Technology</p>
                <p className="mt-1 text-xl font-black text-slate-900">Digital X-Ray</p>
                <p className="mt-1 text-[11px] text-slate-500 font-black">Modern, low-radiation imaging</p>
              </div>
              <div className="rounded-2xl bg-amber-50/80 p-4 shadow-sm border border-amber-100">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Comfort</p>
                <p className="mt-1 text-xl font-black text-slate-900">Painless Care</p>
                <p className="mt-1 text-[11px] text-slate-500 font-black">Gentle, patient-friendly approach</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-1 text-sm">
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                Periodontics Specialist
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                Oral Implantology Expert
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <div className="flex-1 rounded-2xl bg-amber-50 border border-amber-100 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-700">Education</p>
                <p className="mt-1 text-sm font-bold text-slate-900">M.D.S. in Periodontics &amp; Oral Implantology</p>
              </div>
              <div className="flex-1 rounded-2xl bg-amber-50 border border-amber-100 p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-700">Experience</p>
                <p className="mt-1 text-sm font-bold text-slate-900">Ex-Senior Resident, MGM Dental College</p>
              </div>
            </div>
          </div>

          {/* Right: Doctor Image Card */}
          <div className="relative group self-start w-full">
            <div className="absolute -inset-3 rounded-[3rem] bg-amber-200/40 blur-2xl group-hover:bg-amber-300/40 transition-colors"></div>
            <div className="relative h-96 sm:h-[520px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-amber-100 bg-white">
              <Image
                src="/dr-img.png"
                alt="Dr. Poonam Singh"
                fill
                className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/85 to-transparent p-6 sm:p-8">
                <p className="text-xl font-black text-white">Dr. Poonam Singh</p>
                <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-0.5">Periodontist &amp; Oral Implantologist (BDS, MDS)</p>
              </div>
            </div>
          </div>
        </section>


        <section className="mt-24">
          <h2 className="text-center text-3xl font-black text-slate-900">
            Treatments We Offer
          </h2>
          <p className="mt-2 text-center text-sm text-slate-500 font-bold uppercase tracking-widest">
            Complete dental solutions for you and your family.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Dental Implants",
                desc: "Replace missing teeth with natural-looking, long-lasting implants.",
                icon: "🦷"
              },
              {
                title: "Root Canal Treatment (RCT)",
                desc: "Save damaged teeth with painless, advanced root canal procedures.",
                icon: "⚡"
              },
              {
                title: "Braces & Aligners",
                desc: "Straighten your teeth with metal, ceramic or clear aligners.",
                icon: "📏"
              },
              {
                title: "Teeth Whitening",
                desc: "Get a brighter smile with safe and effective whitening.",
                icon: "✨"
              },
              {
                title: "Smile Makeover",
                desc: "Design your dream smile with veneers, bonding and more.",
                icon: "💎"
              },
              {
                title: "Kids Dentistry",
                desc: "Gentle treatments specially designed for children.",
                icon: "👶"
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group rounded-[2.5rem] bg-[#B8860B] p-6 shadow-sm shadow-amber-100 ring-1 ring-amber-100/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-200"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100/20 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-amber-50 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>




        {/* 5. Special Offers */}
        <section className="mt-32 relative">
          <div className="rounded-[3rem] bg-gradient-to-br from-amber-50 via-white to-amber-100 px-6 py-12 sm:px-12 sm:py-16 shadow-xl shadow-amber-900/5 overflow-hidden ring-1 ring-amber-100/50">
            <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl -z-10"></div>

            <div className="relative flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-end z-10">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-800 ring-1 ring-amber-200/50">
                  Exclusive Benefits
                </div>
                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                  Special Offers <span className="text-amber-700">This Month</span>
                </h2>
                <p className="max-w-xl text-slate-600 font-medium sm:text-lg">
                  Limited-time opportunities to prioritize your oral health with expert care and modern technology.
                </p>
              </div>
              <div className="lg:text-right">
                <a
                  href="#appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-amber-900/10 transition-all duration-300 hover:bg-amber-700 hover:-translate-y-1"
                >
                  Grab Offer & Book Slot
                  <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Free Dental Checkup",
                  desc: "Complete oral health evaluation at zero consultation cost.",
                  img: "/IMG_8415 2.JPG.jpeg",
                  tag: "NEW PATIENT"
                },
                {
                  title: "20% Off Whitening",
                  desc: "Brighten your smile with safe, professional grade treatment.",
                  img: "/IMG_8437 2.JPG.jpeg",
                  tag: "BRIGHTER SMILE"
                },
                {
                  title: "Free X-Ray with RCT",
                  desc: "Precision digital X-ray included with target treatments.",
                  img: "/IMG_8448 2.JPG.jpeg",
                  tag: "ADVANCED CARE"
                }
              ].map((offer, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col rounded-[2.5rem] bg-white p-3 shadow-lg ring-1 ring-amber-100/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-900/10"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-[2rem]">
                    <Image
                      src={offer.img}
                      alt={offer.title}
                      fill
                      className="object-cover object-center transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-amber-600 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-white shadow-lg">
                        {offer.tag}
                      </span>
                    </div>
                  </div>

                  <div className="px-4 py-6 text-center space-y-2">
                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-xl shadow-inner mb-2">
                      🎁
                    </div>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-bold">
                      {offer.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-[11px] font-black uppercase tracking-widest text-slate-400">
              * Terms and conditions apply • Valid until end of the month
            </p>
          </div>
        </section>

        {/* 6. Premium Redesigned Gallery - Full Image Visibility */}
        <section className="mt-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-amber-50/50 -z-10 blur-[120px] rounded-full"></div>

          <div className="text-center space-y-4 mb-16 relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-amber-800 ring-1 ring-amber-200/50 mb-2">
              Our Showcase
            </div>
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tight">
              World-Class <span className="text-amber-700 relative">
                Gallery
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-200/60 -z-10 rounded-full"></span>
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
              Experience our commitment to excellence through these glimpses of our facility and care.
            </p>
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/neww.jpeg", alt: "Advanced Dental Care" },
                { src: "/doc.jpeg", alt: "Clinical Excellence" },
                { src: "/neww1.jpeg", alt: "Modern Clinical Setup" },
                { src: "/neww2.jpeg", alt: "Expert Dental Procedures" },
                { src: "/neww3.jpeg", alt: "Patient Comfort Room" },
                { src: "/neww4.jpeg", alt: "Specialized Equipment" },
                { src: "/neww5.jpeg", alt: "Compassionate Care" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100 transition-all duration-700 hover:-translate-y-2 hover:shadow-premium aspect-[4/3]"
                >
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xl font-black text-white leading-tight drop-shadow-md">
                          {item.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Location & Contact */}
        <section className="mt-32 grid gap-12 lg:grid-cols-[1.1fr_minmax(0,1fr)]">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 ring-1 ring-slate-200 mb-4 self-start">
              📍 Find Us
            </div>
            <h2 className="text-3xl font-black text-slate-900 sm:text-5xl leading-tight">
              Visit Our Clinic in <br />
              <span className="text-amber-700">Andheri East</span>
            </h2>
            <p className="mt-4 text-slate-600 font-medium leading-relaxed">
              Conveniently located on Mahakali Caves Rd, Chakala. Easy access via public transport with dedicated patient assistance.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-3xl bg-[#B8860B] p-6 shadow-sm border border-amber-100/50">
                <p className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Full Address</p>
                <p className="text-sm font-bold text-white leading-relaxed">
                  Shop no. 9, Ground Floor, Moonlight C.H.S. Ltd, New Mahakali Caves Rd, Chakala, Andheri East, Mumbai, Maharashtra 400093
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-[#B8860B] p-6 shadow-sm border border-amber-100/50">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Direct Contact</p>
                  <a href={phonePrimaryHref} className="text-lg font-black text-white hover:text-amber-100 transition-colors">
                    {phonePrimary}
                  </a>
                </div>
                <div className="rounded-3xl bg-[#B8860B] p-6 shadow-xl border border-amber-100/50">
                  <p className="text-[10px] font-black uppercase tracking-widest text-white mb-2">Working Hours</p>
                  <p className="text-sm font-bold text-white">Mon – Sat: 10AM–2PM, 5PM–9PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-hidden rounded-[3rem] bg-slate-200 shadow-2xl border-4 border-white">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60317.023644241635!2d72.860899!3d19.115815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91e5825d75f%3A0x5d9cba987ddf0a74!2sAndheri%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1772121242731!5m2!1sen!2sin"
              className="h-full w-full border-0 grayscale active:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* 7. Final CTA */}
        <section className="mt-32 relative px-4">
          <div className="rounded-[3rem] bg-[#B8860B] px-6 py-16 text-center text-white shadow-[0_30px_60px_-15px_rgba(180,83,9,0.4)] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)] pointer-events-none"></div>

            <h2 className="text-3xl font-black sm:text-5xl leading-tight max-w-3xl mx-auto">
              Ready to Transform <br />
              <span className="text-amber-300 italic">Your Smile?</span>
            </h2>
            <p className="mt-6 text-amber-100 font-bold max-w-xl mx-auto uppercase tracking-widest text-sm">
              Limited free consultation slots available this week.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-sm font-black text-amber-900 shadow-xl transition-all hover:bg-amber-50 hover:-translate-y-1"
              >
                📅 Book Appointment Now
              </a>
              <a
                href={phonePrimaryHref}
                className="inline-flex items-center justify-center rounded-full border-2 border-amber-400 bg-transparent px-10 py-5 text-sm font-black text-white transition-all hover:bg-amber-600 hover:-translate-y-1"
              >
                📞 Speak with Doctor
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
              {/* <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                Free Consultation
              </div> */}
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                WhatsApp Support
              </div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-amber-400"></span>
                Easy EMI Options
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t border-slate-800 bg-slate-900 text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-24">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-amber-500/10 ring-2 ring-amber-500/20 p-2">
                  <Image
                    src="/logo.png"
                    alt="Andheri Dental Clinic logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="text-xl font-black text-amber-400 uppercase tracking-tight">
                    Andheri Dental Clinic
                  </p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
                    Painless Excellence Since 2014
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-sm">
                Dedicated to providing world-class dental care using the latest technology and a compassionate, patient-first approach.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">
                Visit Us
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                <address className="text-sm font-bold leading-relaxed text-slate-400 not-italic">
                  Shop no. 9, Ground Floor,<br />
                  Moonlight C.H.S. Ltd, Chakala,<br />
                  Andheri East, Mumbai 400093
                </address>
              </div>
              <div className="pt-4 space-y-3">
                <a href={phonePrimaryHref} className="flex items-center gap-3 text-sm font-black text-amber-400 hover:text-amber-300 transition-all hover:translate-x-1">
                  <Phone className="h-4 w-4" /> {phonePrimary}
                </a>
                <a href={phoneSecondaryHref} className="flex items-center gap-3 text-sm font-black text-slate-400 hover:text-white transition-all hover:translate-x-1">
                  <Phone className="h-4 w-4" /> {phoneSecondary}
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/andheri_dental_clinic_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center transition-all hover:bg-gradient-to-tr hover:from-purple-600 hover:to-orange-500 hover:scale-110 shadow-lg hover:shadow-orange-500/20"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61578273000643"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center transition-all hover:bg-blue-600 hover:scale-110 shadow-lg hover:shadow-blue-600/20"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://youtube.com/@andheridentalclinic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-xl bg-slate-800 flex items-center justify-center transition-all hover:bg-red-600 hover:scale-110 shadow-lg hover:shadow-red-600/20"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
              <div className="pt-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-600">
                  © {new Date().getFullYear()} ANDHERI DENTAL CLINIC.
                </p>
                <p className="text-[10px] font-bold text-slate-700 mt-1">
                  DESIGNED FOR EXCELLENCE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div >
  );
}
