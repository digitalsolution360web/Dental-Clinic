"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, MapPin, X } from "lucide-react";

export default function Home() {
  const phonePrimary = "+91 99677 56611";
  const phonePrimaryHref = "tel:+919967756611";
  const phoneSecondary = "+91 9167244898";
  const phoneSecondaryHref = "tel:+919167244898";
  const whatsappNumber = "919967756611";

  // Aliases for variables used in some sections
  const phoneNumberDisplay = phonePrimary;
  const phoneNumberHref = phonePrimaryHref;

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds
    const showTimer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => {
      clearTimeout(showTimer);
    };
  }, []);

   const [loading, setLoading] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget; // safer than e.target
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    treatment: formData.get("treatment"),
    date: formData.get("date"),
  };

  const res = await fetch("/api/appointment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  alert(result.message);

  setLoading(false);
  form.reset();
};

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

      {/* Top Bar Announcement */}
      <div className="bg-gradient-to-r from-[#7cb342] via-[#d4e157] to-[#ffee58] py-2 px-4 text-center">
        <p className="text-[11px] sm:text-sm font-medium text-slate-900">
          <span className="font-black italic italic-bold">Hurry Up!</span> Only a few places available in some services{" "}
          <Link href="#appointment" className="font-bold underline text-blue-800 decoration-blue-800 underline-offset-2">
            Click here
          </Link>{" "}
          to book an appointment now or Call us on{" "}
          <a href={phonePrimaryHref} className="font-bold">
            {phonePrimary}
          </a>
        </p>
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

          {/* Mobile WhatsApp Button */}
          <div className="flex md:hidden shrink-0 ml-2">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-full bg-emerald-600 text-white text-[11px] sm:text-sm font-bold hover:bg-emerald-700 transition-colors whitespace-nowrap shadow-sm shadow-emerald-500/30 flex items-center gap-1.5"
            >
              <svg viewBox="0 0 32 32" className="h-4 w-4 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.482.666 4.81 1.822 6.822L2 30l7.395-1.791A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.41 19.574c-.31.872-1.538 1.596-2.528 1.806-.674.14-1.554.252-4.515-.972-3.787-1.536-6.231-5.376-6.422-5.626-.183-.25-1.54-2.048-1.54-3.906 0-1.858.97-2.772 1.316-3.153.347-.38.756-.476 1.008-.476.252 0 .504.003.724.012.232.01.544-.088.85.65.31.748 1.054 2.606 1.146 2.794.092.188.15.408.03.658-.12.25-.18.407-.356.626-.176.22-.37.49-.528.658-.176.188-.36.39-.154.766.206.376.914 1.508 1.964 2.44 1.35 1.204 2.49 1.576 2.866 1.752.376.176.594.147.812-.088.22-.236.94-1.096 1.19-1.472.25-.376.5-.314.844-.188.344.126 2.19 1.032 2.566 1.22.376.188.628.282.72.438.09.156.09.9-.22 1.772z" />
              </svg>
              WhatsApp
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-200 px-4 py-2 text-sm font-semibold text-emerald-800 transition hover:border-emerald-300 hover:bg-emerald-50 flex items-center gap-2"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-emerald-600" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.482.666 4.81 1.822 6.822L2 30l7.395-1.791A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm7.41 19.574c-.31.872-1.538 1.596-2.528 1.806-.674.14-1.554.252-4.515-.972-3.787-1.536-6.231-5.376-6.422-5.626-.183-.25-1.54-2.048-1.54-3.906 0-1.858.97-2.772 1.316-3.153.347-.38.756-.476 1.008-.476.252 0 .504.003.724.012.232.01.544-.088.85.65.31.748 1.054 2.606 1.146 2.794.092.188.15.408.03.658-.12.25-.18.407-.356.626-.176.22-.37.49-.528.658-.176.188-.36.39-.154.766.206.376.914 1.508 1.964 2.44 1.35 1.204 2.49 1.576 2.866 1.752.376.176.594.147.812-.088.22-.236.94-1.096 1.19-1.472.25-.376.5-.314.844-.188.344.126 2.19 1.032 2.566 1.22.376.188.628.282.72.438.09.156.09.9-.22 1.772z" />
              </svg>
              Chat on WhatsApp
            </a>
            <div className="flex flex-col items-center justify-center bg-emerald-50 border border-emerald-200 rounded-full px-5 py-1.5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-0.5 leading-none">WhatsApp Us</span>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-black tracking-tight text-slate-800 leading-none transition hover:text-emerald-700"
              >
                +91 {whatsappNumber.slice(2, 7)} {whatsappNumber.slice(7)}
              </a>
            </div>
            <a
              href="#appointment"
              className="rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-amber-500/40 transition hover:bg-amber-700"
            >
              📅 Book Consultation
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
              <h1 className="mt-3 text-xl font-semibold leading-tight text-slate-900 sm:text-2xl lg:text-4xl">
                Best Dentist in Andheri East{" "}
                <span className="text-amber-700">Book Your Consultation Today</span>
              </h1>
            </div>

            <p className="max-w-xl text-sm text-slate-600 sm:text-base">
              Trusted by 1,000+ families in Andheri. Expert Periodontist Dr. Poonam Singh offers advanced, gentle dental treatments — from implants to braces — using the latest technology. Walk in comfortable. Walk out smiling.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-amber-500/40 transition hover:bg-amber-700"
              >
                📅 Book Consultation
              </a>
              <a
                href={phonePrimaryHref}
                className="inline-flex items-center justify-center rounded-full border border-amber-200 bg-white px-5 py-3 text-sm font-semibold text-amber-800 shadow-sm transition hover:border-amber-300 hover:bg-amber-50"
              >
                📞 Call / WhatsApp: {phonePrimary}
              </a>
            </div>

            <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-amber-100 text-center text-lg leading-7">
                  😊
                </span>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-amber-100 text-center text-lg leading-7">
                  🦷
                </span>
                <span>Zero Pain Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 rounded-full bg-amber-100 text-center text-lg leading-7">
                  💰
                </span>
                <span>No Hidden Charges</span>
              </div>
            </div>
          </div>

          {/* Quick Appointment Form */}
          <div
            id="appointment"
            className="flex flex-col justify-center rounded-2xl bg-[#B8860B] p-5 shadow-lg shadow-amber-100 ring-1 ring-amber-100 sm:p-6"
          >
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Book Your  Consultation
            </h2>
            <p className="mt-1 text-xs text-amber-50 sm:text-sm">
              Takes 30 seconds. No payment needed. Our team will call you to confirm your slot.
            </p>

            <form
              className="mt-5 space-y-3"
              onSubmit={handleSubmit}
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
                  <option>Others</option>
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
        disabled={loading}
        className="mt-2 flex w-full items-center justify-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white"
      >
        {loading ? "Sending..." : "📅 Reserve My Slot Now"}
      </button>

              <p className="text-[11px] leading-snug text-amber-50">
                Our team will confirm your
                appointment time over call / WhatsApp.
              </p>
            </form>
          </div>
        </section>

        {/* 1.5 Highlights Banner */}
        <section className="mx-auto mt-6 w-full overflow-hidden rounded-2xl bg-[#0f2e54] shadow-md border border-slate-700/50">
          <div className="flex flex-col sm:flex-row divide-y sm:divide-y-0 sm:divide-x divide-slate-600/50">
            {[
              { top: "5-Star", bottom: "Rated Clinic" },
              { top: "10+ Years", bottom: "in Andheri" },
              { top: "MDS Doctor", bottom: "On-Site" },
              { top: "Same-Day", bottom: "Appointments" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex flex-1 flex-col items-center justify-center py-4 px-2 hover:bg-[#153B6A] transition-colors"
              >
                <div className="text-xl sm:text-lg lg:text-2xl font-black tracking-tight text-white mb-0.5">
                  {stat.top}
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.15em] text-slate-300">
                  {stat.bottom}
                </div>
              </div>
            ))}
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
              <span className="text-amber-700">Meet Dr. Poonam Singh -</span>
              Andheri's Trusted Specialist in Implants & Gum Care{" "}

            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              Dr. Poonam Brahmadeen Singh (BDS, MDS — Periodontics & Oral Implantology) has been restoring smiles in Andheri East since 2014. A former Senior Resident at the prestigious MGM Dental College, she specializes in pain-free implants, advanced gum treatments, and complete smile makeovers.  With over a decade of experience and 1,000+ successful procedures, Dr. Singh is known for one thing above all — making even the most anxious patients feel completely at ease.
            </p>


            <div className="grid grid-cols-2 gap-3 pt-1 text-sm">
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                BDS
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                MDS
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                Periodontics
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                Oral Implantology
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                10 Years+
              </div>
              <div className="flex items-center gap-2 font-bold text-slate-700">
                <span className="h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] text-emerald-700 shrink-0">✓</span>
                Ex-MGM Dental College
              </div>
            </div>
            <div className="pt-4">
              <a
                href="#appointment"
                className="group flex flex-col sm:flex-row w-full items-center justify-between gap-4 rounded-3xl bg-slate-900 p-4 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl hover:bg-slate-800"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-inner">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-black text-white sm:text-lg tracking-tight">
                      Book Your Consultation
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-widest text-amber-400 mt-0.5">
                      with Dr. Poonam
                    </p>
                  </div>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-700 text-white transition-transform group-hover:translate-x-1 sm:h-12 sm:w-12 group-hover:bg-amber-500">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
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
                desc: "Missing tooth? Get a permanent, natural-looking implant that lasts a lifetime. No more gaps. No discomfort.",
                icon: "🦷",
                buttonText: "Book Implant Consult"
              },
              {
                title: "Root Canal Treatment (RCT)",
                desc: "Save your natural tooth — no pain, no drama. Our advanced RCT is done in a single visit in most cases.",
                icon: "⚡",
                buttonText: "Get Free Evaluation"
              },
              {
                title: "Braces & Aligners",
                desc: "Crooked teeth? Choose from metal, ceramic, or invisible aligners — all at honest prices, all at your pace.",
                icon: "📏",
                buttonText: "Book Now"
              },
              {
                title: "Teeth Whitening",
                desc: "Look 5 years younger in 60 minutes. Professional-grade whitening — safe, fast, and long-lasting results.",
                icon: "✨",
                buttonText: "Book Now"
              },
              {
                title: "Smile Makeover",
                desc: "Veneers, bonding, contouring — we design the smile you've always wanted, tailored to your face.",
                icon: "💎",
                buttonText: "Book Now"
              },
              {
                title: "Kids Dentistry",
                desc: "Fun, gentle, and anxiety-free dental care for children. Dr. Singh's calming approach makes kids look forward to visits.",
                icon: "👶",
                buttonText: "Book Now"
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col rounded-[2.5rem] bg-[#B8860B] p-6 shadow-sm shadow-amber-100 ring-1 ring-amber-100/70 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-200"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100/20 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-amber-50 font-medium leading-relaxed flex-grow">
                  {item.desc}
                </p>
                <a
                  href="#appointment"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-amber-200 transition-colors"
                >
                  {item.buttonText}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-32 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-amber-50/50 -z-10 blur-[120px] rounded-full"></div>

          <div className="text-center space-y-4 mb-16 relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-amber-800 ring-1 ring-amber-200/50 mb-2">
              Testimonials
            </div>
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tight">
              What Our Patients in <span className="text-amber-700 relative">
                Andheri Say
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-amber-200/60 -z-10 rounded-full"></span>
              </span>
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-[2.5rem] bg-white p-8 sm:p-12 shadow-2xl shadow-slate-200/50 ring-1 ring-slate-100">
              <div className="absolute -top-6 -left-6 text-amber-200 opacity-50 hidden sm:block">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-xl sm:text-2xl font-medium text-slate-700 leading-relaxed italic mb-8">
                  &quot;Got my implant done here — painless and very professional. Dr. Poonam explained everything clearly. Highly recommend to anyone in Andheri!&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 font-black text-xl">
                    S
                  </div>
                  <div className="text-left">
                    <p className="text-base font-black text-slate-900">Suresh K., Chakala</p>
                    <p className="text-sm font-bold text-slate-500">March 2025</p>
                  </div>
                </div>
              </div>
            </div>
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
                  This Month's
                </div>
                <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
                  Exclusive Offers —  <span className="text-amber-700">Only 12 Slots Remaining</span>
                </h2>
                <p className="max-w-xl text-slate-600 font-medium sm:text-lg">
                  We've reserved a limited number of new patient slots this month with these special benefits. Once full, these offers close.
                </p>
              </div>
              <div className="lg:text-right">
                <a
                  href="#appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-4 text-sm font-black text-white shadow-xl shadow-amber-900/10 transition-all duration-300 hover:bg-amber-700 hover:-translate-y-1"
                >
                  Claim Your Offer — Book in 30 Seconds
                  <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Dental Checkup",
                  desc: "Complete oral health evaluation.",
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

        {/* FAQ Section */}
        <section className="mt-32 relative">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100/50 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-amber-800 ring-1 ring-amber-200/50 mb-2">
              Common Questions
            </div>
            <h2 className="text-4xl font-black text-slate-900 sm:text-5xl tracking-tight">
              Frequently Asked <span className="text-amber-700">Questions</span>
            </h2>
          </div>

          <div className="mx-auto max-w-4xl grid gap-4">
            {[
              {
                q: "1. Is the dental consultation really free?",
                a: "Yes — 100% free for new patients. No consultation charges, no hidden fees. Dr. Singh will evaluate your dental health and suggest the best treatment plan, completely at no cost."
              },
              {
                q: "2. Is the treatment painful?",
                a: "We use the latest painless techniques and advanced local anesthesia. Most patients are surprised at how comfortable their procedure is. Pain-free dentistry is our promise."
              },
              {
                q: "3. Are dental implants safe?",
                a: "Absolutely. We use internationally certified implant systems with a very high success rate. Dr. Singh has completed 500+ successful implant procedures."
              },
              {
                q: "4. How long does a root canal take?",
                a: "Most root canals at our clinic are completed in a single visit of 60–90 minutes. Advanced cases may need 2 visits."
              },
              {
                q: "5. Do you treat children?",
                a: "Yes, we have a dedicated kids dentistry setup with a child-friendly environment. Children from age 2 onwards are welcome."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-black text-slate-900 sm:text-lg">
                  {faq.q}
                  <span className="transition duration-300 group-open:-rotate-180 text-amber-600">
                    <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 sm:text-base border-t border-slate-100 pt-4">
                  {faq.a}
                </p>
              </details>
            ))}
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

      {/* Inquiry Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="relative w-full max-w-md bg-[#B8860B] rounded-[2.5rem] shadow-2xl overflow-hidden ring-1 ring-amber-100/20 animate-in zoom-in-95 duration-300 p-6 sm:p-8">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/10 text-white hover:bg-black/20 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Book Your Consultation
            </h2>
            <p className="mt-1 text-xs text-amber-50 sm:text-sm">
              Takes 30 seconds. No payment needed. Our team will call you to confirm your slot.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={handleSubmit}
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="popup-name"
                  className="text-xs font-semibold text-white ml-1"
                >
                  Name
                </label>
                <input
                  id="popup-name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-amber-200/20 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-white/20"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="popup-phone"
                  className="text-xs font-semibold text-white ml-1"
                >
                  Phone Number
                </label>
                <input
                  id="popup-phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-2xl border border-amber-200/20 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-white/20"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="popup-treatment"
                  className="text-xs font-semibold text-white ml-1"
                >
                  Treatment Needed
                </label>
                <div className="relative">
                  <select
                    id="popup-treatment"
                    name="treatment"
                    className="w-full rounded-2xl border border-amber-200/20 bg-white px-4 py-3 text-sm text-slate-900 outline-none appearance-none cursor-pointer focus:ring-4 focus:ring-white/20"
                  >
                    <option value="">Select treatment</option>
                    <option>Dental Implants</option>
                    <option>Root Canal (RCT)</option>
                    <option>Braces &amp; Aligners</option>
                    <option>Teeth Whitening</option>
                    <option>Smile Makeover</option>
                    <option>Kids Dentistry</option>
                    <option>General Checkup / Cleaning</option>
                    <option>Others</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="h-4 w-4 fill-current rotate-180" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="popup-date"
                  className="text-xs font-semibold text-white ml-1"
                >
                  Preferred Date
                </label>
                <input
                  id="popup-date"
                  name="date"
                  type="date"
                  className="w-full rounded-2xl border border-amber-200/20 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-4 focus:ring-white/20"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#00b289] px-5 py-4 text-sm font-black text-white shadow-xl shadow-black/10 transition hover:bg-[#00a17c] active:scale-[0.98]"
              >
               {loading ? "Sending..." : "📅 Reserve My Slot Now"}
              </button>

              <p className="text-[11px] leading-snug text-center text-amber-50/80 font-medium">
                Our team will confirm your appointment time over call / WhatsApp.
              </p>
            </form>
          </div>
        </div>
      )}
    </div >
  );
}
