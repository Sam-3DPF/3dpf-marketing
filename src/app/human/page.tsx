import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Run by a Human — 3D PrintForce",
  description: "3D PrintForce is bootstrapped indie software run by Sam Erickson, a real 3D print seller.",
};

export default function HumanPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Simple nav */}
      <nav className="border-b border-gray-100 px-6 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="3D PrintForce" className="h-8 w-auto" />
        </Link>
      </nav>

      {/* Content */}
      <main className="flex-1 max-w-2xl mx-auto px-6 py-20 w-full">
        <p className="text-xs font-bold tracking-widest uppercase text-center mb-4">
          Run by a{" "}
          <span className="text-orange-500">Human</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 text-center mb-12">
          Hi! I&apos;m Sam, I run 3D PrintForce.
        </h1>

        <p className="text-sm font-bold tracking-widest uppercase text-gray-900 text-center mb-8">
          3D PrintForce is bootstrapped indie software.
        </p>

        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
          <p>
            I am trying to wear all the hats around here. There&apos;s no customer success team or board
            of directors: just me, working on a project I strongly believe in. Email asking for help
            onboarding? You&apos;ll get a response from me. Have a bug report or a feature request?
            You&apos;ll get a response from me. You talk to a human, not a robot.
          </p>
          <p>
            I run my own 3D print farm and built 3D PrintForce because I needed it myself. Every
            feature comes from real experience managing orders, tracking costs, and trying to figure out
            which products are actually profitable. If you have ideas or feedback, I&apos;d love to hear
            from you.
          </p>
        </div>

        <p className="text-center text-sm text-gray-400 italic mt-16">
          &ldquo;Run by a human&rdquo; is inspired by{" "}
          <a
            href="https://jmduke.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600 transition-colors"
          >
            Justin Duke
          </a>{" "}
          and{" "}
          <a
            href="https://dominik-sobe.de"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600 transition-colors"
          >
            Dominik Sobe
          </a>
        </p>
      </main>

      <footer className="border-t border-gray-100 px-6 py-6 text-center">
        <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back to 3D PrintForce
        </Link>
      </footer>
    </div>
  );
}
