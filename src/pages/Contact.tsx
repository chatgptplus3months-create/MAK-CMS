import React from 'react';
import { Phone, Mail, MapPin, User } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24">
      <section className="bg-brand-grey py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Get in touch</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-brand-dark md:text-7xl">Contact</h1>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">Partner with Masar Al Khaleej.</h2>
            <p className="text-lg leading-8 text-brand-dark/70">
              For brand distribution, retail support, and Oman market entry discussions, reach out directly to the focal contact below.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center bg-brand-red text-white"><User className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">Focal Point</p><p className="mt-2 text-2xl font-extrabold text-brand-dark">Sumesh Madhavan</p><p className="mt-1 text-brand-dark/60">Managing Director - FMCG Distribution Sales & Marketing</p></div></div>
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center bg-brand-red text-white"><Phone className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">Phone</p><p className="mt-2 text-2xl font-extrabold text-brand-dark">+968 92457875</p></div></div>
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center bg-brand-red text-white"><Mail className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">Email</p><p className="mt-2 text-2xl font-extrabold text-brand-dark break-all">sumesh@masaralkhaleejint.com</p></div></div>
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center bg-brand-red text-white"><User className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">Contact Person</p><p className="mt-2 text-2xl font-extrabold text-brand-dark">Jobi K Pailie</p></div></div>
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center bg-brand-red text-white"><Phone className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">Phone</p><p className="mt-2 text-2xl font-extrabold text-brand-dark">+968 78011383</p></div></div>
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center bg-brand-red text-white"><Mail className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">Email</p><p className="mt-2 text-2xl font-extrabold text-brand-dark break-all">joby@masaralkhaleejint.com</p></div></div>
              <div className="flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center bg-brand-red text-white"><MapPin className="h-5 w-5" /></div><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-red">Location</p><p className="mt-2 text-2xl font-extrabold text-brand-dark">Muscat, Sultanate of Oman</p></div></div>
            </div>
          </div>

          <div className="bg-brand-dark p-12 text-white shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Business focus</p>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight">What MAK supports</h3>
            <ul className="mt-8 space-y-4 text-white/75 leading-7">
              <li>• New brand onboarding in Oman</li>
              <li>• Modern trade and general trade distribution</li>
              <li>• In-store trade execution and merchandising</li>
              <li>• Launch coordination and route-to-market planning</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
