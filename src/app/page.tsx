"use client";

import { useState } from "react";

const CTA_URL = "https://app.3dprintforce.com/login?v=signup";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const FEATURES = [
  {
    title: "Profit Calculator",
    subtitle: "Know your exact profit before you list.",
    body: "Track filament, labor, shipping, and supplies. Set your margin. Get the right price. No guesswork — just numbers you can trust.",
    color: "from-orange-400 to-orange-600",
  },
  {
    title: "Order Management",
    subtitle: "Every order. Every platform. One place.",
    body: "Pull orders from Etsy and Amazon automatically. Track status from New → Printing → Printed → Shipped in one clean dashboard.",
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Filament & Cost Tracking",
    subtitle: "Track every gram. Know every cost.",
    body: "Multi-part and multi-color support built in. Exact filament usage per model. Full cost breakdown per order, every time.",
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Shipping Profiles",
    subtitle: "Stop losing money on shipping.",
    body: "Build shipping profiles once and they apply automatically across all your models and orders. Know your shipping costs before you print.",
    color: "from-green-400 to-green-600",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "I was losing money on almost every Amazon order and didn't know it. 3D PrintForce showed me exactly where my margins were bleeding. Raised my prices 20% the next week.",
    name: "Marcus T.",
    role: "Etsy seller, 12 printers",
  },
  {
    quote:
      "The auto order sync alone saves me 30 minutes a day. I used to copy orders from Etsy into a spreadsheet. Now they just appear and I can focus on printing.",
    name: "Jenna R.",
    role: "Amazon & Etsy seller, 6 printers",
  },
  {
    quote:
      "Finally a tool built by someone who actually sells 3D prints. The filament cost tracking is incredibly accurate. My profit numbers are real now, not guesses.",
    name: "Derek L.",
    role: "Etsy seller, 4 printers",
  },
];

// PLACEHOLDER testimonials — replace with real customer quotes before launch

const STARTER_FEATURES = [
  "Profit calculator",
  "Up to 2 printers",
  "Manual order entry",
  "Basic cost tracking",
  "Filament & supply tracking",
];

const GROWTH_FEATURES = [
  "Everything in Starter",
  "Etsy & Amazon order sync",
  "Unlimited printers",
  "Auto order import",
  "Print queue automation",
  "SimplyPrint integration",
  "Priority support",
];

// TODO: update RUN_BY_HUMAN_URL with Sam's personal page link
const RUN_BY_HUMAN_URL = "/sam";

const FAQS: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is 3D PrintForce?",
    a: "3D PrintForce is an all-in-one order management platform built specifically for 3D print farms. It connects your Etsy shop (more marketplaces coming soon!), tracks print jobs, manages inventory, and calculates real profitability per order.",
  },
  {
    q: "Why do I need 3D PrintForce?",
    a: "If you're running a 3D print farm, you know how painful it is to juggle orders across platforms, track costs in spreadsheets, and guess at your margins. 3D PrintForce replaces all of that with one streamlined workflow — from order to print to profit.",
  },
  {
    q: "Can I cancel my subscription anytime?",
    a: "Yes, absolutely. You can cancel your subscription at any time with no questions asked. Your plan stays active until the end of the current billing period.",
  },
  {
    q: "Do you offer support?",
    a: "Yes! Starter plans include access to our community. Growth plans include email support with faster response times.",
  },
  {
    q: "Who is behind 3D PrintForce?",
    a: (
      <>
        3D PrintForce is a small indie software{" "}
        <a href={RUN_BY_HUMAN_URL} target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600 underline">
          run by a real human
        </a>{" "}
        named Sam.
      </>
    ),
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-orange-500 shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Home() {
  const [annual, setAnnual] = useState(false);

  const starterPrice = annual ? 9 : 15;
  const growthPrice = annual ? 23 : 39;

  return (
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-gray-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="3D PrintForce" className="h-8 w-auto" />
          </a>
          <div className="hidden sm:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href={CTA_URL}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-16 text-center">
        <span className="inline-block text-orange-500 font-semibold text-sm mb-4 tracking-wide uppercase">
          Built for 3D print sellers
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
          Stop running your print farm<br className="hidden sm:block" /> on spreadsheets.
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Track every order, cost, and profit across Etsy and Amazon — automatically.
          The business brain behind 6,200+ print farms.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <a
            href={CTA_URL}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Start 14-Day Free Trial
          </a>
          <a
            href="#features"
            className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-colors bg-white"
          >
            See how it works
          </a>
        </div>
        <p className="text-sm text-gray-400">
          ✓ No credit card required &nbsp;·&nbsp; ✓ 14-day free trial &nbsp;·&nbsp; ✓ Cancel anytime
        </p>

        {/* Dashboard placeholder */}
        <div className="mt-14 mx-auto max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 aspect-video bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 flex items-center justify-center">
          <div className="text-center text-white/80">
            <div className="text-5xl mb-3">📊</div>
            <p className="text-lg font-semibold">Dashboard screenshot coming soon</p>
            <p className="text-sm opacity-70 mt-1">Real screenshots will be added before launch</p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mb-8">
            6,200+ print farms trust 3D PrintForce
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { stat: "6,200+", label: "Active Users" },
              { stat: "$0", label: "Setup Cost" },
              { stat: "14-Day", label: "Free Trial" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-black text-white mb-1">{stat}</div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="bg-[#FBFBFA] py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-[#111827] text-center mb-3">
            Running a print farm without 3D PrintForce is...
          </h2>
          <p className="text-center text-2xl sm:text-3xl font-black mb-14 text-[#111827]">
            <span className="text-[#FF7A28]">chaotic and expensive.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* WITHOUT */}
            <div className="bg-white border border-[#FEF2F2] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-md bg-[#FEF2F2] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#EF4444]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                <span className="font-bold text-[#111827] text-base">Without 3D PrintForce</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Etsy isn't built for order fulfillment. Hard to know what's been printed, what's ready to ship, and what's still waiting.",
                  "Guessing at your profit margin until the end of the month — then being surprised by the number.",
                  "Manually re-calculating listing financials every time you update a price.",
                  "No way to know which orders have been printed and are ready to ship without digging through every order individually.",
                  "No idea which products are actually making you money.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-[#57606D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* WITH */}
            <div className="bg-white border border-[#F0FDF4] rounded-lg p-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-8 rounded-md bg-[#F0FDF4] flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-bold text-[#111827] text-base">With 3D PrintForce</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Every order synced from Etsy and Amazon with a clear status — New, Printing, Printed, Shipped. You always know what's next.",
                  "Real profit per order calculated the moment it comes in — no surprises at the end of the month.",
                  "Update a price once. Every listing recalculates automatically.",
                  "One view shows you exactly what's printed and ready to ship — no digging required.",
                  "Know exactly which listings to scale and which ones to drop.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#57606D] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-[#111827] font-bold text-xl mt-12">
            3D PrintForce is everything your print farm&apos;s business software should have been.
          </p>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">

            {/* LEFT: text */}
            <div className="flex-1 max-w-lg">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-[#FF7A28] border border-[#FF7A28] rounded-full px-3 py-1 mb-6 uppercase">
                🔌 Integrations
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111827] mb-5 leading-tight">
                Connect the tools you already use.
              </h2>
              <p className="text-[#57606D] text-lg leading-relaxed mb-4">
                3D PrintForce works alongside the software that runs your print farm. Connect SimplyPrint to automate your print queue, sync files with Google Drive, and more.
              </p>
              <p className="text-sm text-[#57606D] opacity-70">More integrations coming soon.</p>
            </div>

            {/* RIGHT: integration cards */}
            <div className="flex-1 w-full">
              <div className="relative flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:items-start">

                {/* Card 1: SimplyPrint */}
                <div className="bg-white border border-[#E3E6EB] rounded-xl p-5 flex items-center gap-4 w-full sm:w-56 shadow-sm">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#0D9488] flex items-center justify-center">
                    <span className="text-white font-black text-base leading-none">SP</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#111827] text-sm">SimplyPrint</p>
                    <p className="text-[#57606D] text-xs mt-0.5">Print queue automation</p>
                  </div>
                </div>

                {/* Card 2: Google Drive */}
                <div className="bg-white border border-[#E3E6EB] rounded-xl p-5 flex items-center gap-4 w-full sm:w-56 shadow-sm sm:mt-8">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-white border border-[#E3E6EB] flex items-center justify-center text-2xl">
                    <svg viewBox="0 0 87.3 78" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                      <path d="M43.65 25L29.9 1.2C28.55 2 27.4 3.1 26.6 4.5L1.7 48.4c-.8 1.38-1.2 2.93-1.2 4.5h27.45z" fill="#00ac47"/>
                      <path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5H59.85l5.85 11.2z" fill="#ea4335"/>
                      <path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                      <path d="M59.85 52.9H27.45L13.7 76.7c1.35.8 2.9 1.25 4.5 1.25h50.9c1.6 0 3.15-.45 4.5-1.25z" fill="#2684fc"/>
                      <path d="M73.4 26.45l-12.45-21.6C60.15 3.25 59 2.15 57.65 1.35L43.9 25.15 59.85 53H87.3c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-[#111827] text-sm">Google Drive</p>
                    <p className="text-[#57606D] text-xs mt-0.5">File sync &amp; storage</p>
                  </div>
                </div>

                {/* Card 3: More coming soon */}
                <div className="bg-[#F9FAFB] border border-dashed border-[#D1D5DB] rounded-xl p-5 flex items-center gap-4 w-full sm:w-56 shadow-sm sm:self-end">
                  <div className="shrink-0 w-11 h-11 rounded-lg bg-[#F3F4F6] border border-[#E3E6EB] flex items-center justify-center">
                    <span className="text-[#9CA3AF] font-black text-xl leading-none">+</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#9CA3AF] text-sm">More integrations</p>
                    <p className="text-[#9CA3AF] text-xs mt-0.5">Coming soon</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-4">
            Everything your print farm needs
          </h2>
          <p className="text-gray-500 text-center mb-16 max-w-xl mx-auto">
            Built by a 3D print seller, for 3D print sellers.
          </p>
          <div className="space-y-20">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
              >
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-orange-500 font-semibold mb-4">{f.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed text-lg">{f.body}</p>
                  <a href={CTA_URL} className="inline-block mt-6 text-orange-500 font-semibold hover:text-orange-600 transition-colors">
                    Try it free →
                  </a>
                </div>
                <div className={`flex-1 rounded-2xl bg-gradient-to-br ${f.color} aspect-video flex items-center justify-center shadow-xl`}>
                  <div className="text-center text-white/80">
                    <p className="font-semibold">Screenshot coming soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4">
            Sellers who made the switch
          </h2>
          <p className="text-gray-400 text-center mb-12">Real print farms. Real results.</p>
          {/* PLACEHOLDER — replace with real customer testimonials before launch */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                <Stars />
                <p className="text-gray-300 leading-relaxed mb-5 text-sm">"{t.quote}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 bg-[#FAFAF9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-4">Simple pricing</h2>
          <p className="text-gray-500 text-center mb-8">Start free. Upgrade when you're ready.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mb-12">
            <span className={`text-sm font-medium ${!annual ? "text-gray-900" : "text-gray-400"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-orange-500" : "bg-gray-200"}`}
            >
              <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${annual ? "translate-x-6" : ""}`} />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-gray-900" : "text-gray-400"}`}>
              Annual <span className="text-orange-500 font-semibold">Save 40%</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Starter</h3>
              <p className="text-gray-500 text-sm mb-4">For hobbyists getting started</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-gray-900">${starterPrice}</span>
                <span className="text-gray-400 text-sm">/mo{annual ? " · billed annually" : ""}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {STARTER_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckIcon /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={CTA_URL}
                className="block w-full text-center border-2 border-orange-500 text-orange-500 hover:bg-orange-50 font-bold py-3 rounded-xl transition-colors"
              >
                Start Free Trial
              </a>
            </div>

            {/* Growth */}
            <div className="bg-gray-900 rounded-2xl border-2 border-orange-500 p-8 shadow-xl relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ⭐ Most Popular
              </span>
              <h3 className="text-xl font-bold text-white mb-1">Growth</h3>
              <p className="text-gray-400 text-sm mb-4">For serious sellers scaling up</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">${growthPrice}</span>
                <span className="text-gray-400 text-sm">/mo{annual ? " · billed annually" : ""}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {GROWTH_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={CTA_URL}
                className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
              >
                Start Free Trial
              </a>
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-6">No credit card required. 14-day free trial on Growth.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#FAFAF9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {FAQS.map((faq, i) => (
              <div key={i} className="flex gap-3">
                <div className="shrink-0 mt-0.5">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-orange-400 text-orange-500 font-bold text-xs">?</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-gray-900 py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
            Your print farm deserves better than a spreadsheet.
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Join 6,200+ sellers who track every order, cost, and profit — automatically.
          </p>
          <a
            href={CTA_URL}
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-5 rounded-xl text-xl transition-colors"
          >
            Start Your Free Trial
          </a>
          <p className="text-gray-500 text-sm mt-4">No credit card required. 14-day free trial.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="3D PrintForce" className="h-6 w-auto opacity-60" />
            <span className="text-gray-500 text-sm">
              Run by a real human —{" "}
              <a href="/sam" className="text-gray-400 hover:text-gray-200 underline transition-colors">
                Sam Erickson
              </a>
            </span>
          </div>
          <div className="flex gap-6">
            <a href="https://dev.3dprintforce.com/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="https://dev.3dprintforce.com/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
          </div>
          <p className="text-gray-600 text-xs">© 2025 3D PrintForce LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
