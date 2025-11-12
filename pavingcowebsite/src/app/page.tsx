'use client';
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Professional Paving That Lasts
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            We deliver quality asphalt and concrete solutions for residential and commercial projects. On time. On budget.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold mb-12">What We Do</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-400">Asphalt Paving</h4>
              <p className="text-slate-300">Durable driveways, parking lots, and roadways built to withstand the elements.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-400">Concrete Work</h4>
              <p className="text-slate-300">Precise concrete installations for patios, sidewalks, and heavy-duty surfaces.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3 text-blue-400">Maintenance & Repairs</h4>
              <p className="text-slate-300">Sealcoating and repairs to extend the life of your existing pavement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Why Quality Paving Matters</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Poor paving leads to costly repairs and safety hazards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Professional work adds property value and curb appeal</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 font-bold">✓</span>
                <span>10+ year warranties protect your investment</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-700 h-80 rounded-lg flex items-center justify-center text-slate-500 overflow-hidden">
            <Image src="/pavingcrew.png" alt="Professional Paving Work" width={300} height={200} className="object-cover object-center w-full h-full"/>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-blue-600 border-y border-blue-500">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold mb-12">Trusted by Hundreds</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <p>Average Rating</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">12 yrs</div>
              <p>In Business</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p>Licensed & Insured</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Pave Your Project?</h2>
        <p className="text-xl text-slate-300 mb-8">Get a free quote today. No obligation.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded font-semibold transition">
              Request Quote
            </button>
          </Link>
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded font-semibold transition">
            (555) 123-4567
          </button>
        </div>
      </section>
    </div>
  );
}