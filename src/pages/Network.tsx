import React from 'react';
import CountUp from '../components/CountUp';

const Network = () => {
  return (
    <div className="pt-24">
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Coverage</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">Distribution Network</h1>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="border border-brand-dark/10 bg-brand-grey p-10 lg:col-span-2">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
                Current market scenario
              </p>
              <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-dark">
                Oman retail is heavily driven by modern trade and promotions.
              </h2>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="bg-white p-8 shadow-lg">
                  <div className="text-5xl font-extrabold text-brand-dark">
                    <CountUp end={65} suffix="%" />
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-dark/45">
                    Modern Trade
                  </p>
                  <p className="mt-4 text-sm leading-7 text-brand-dark/65">
                    Including Lulu, Ramee, Al Meera, and Makkah Hyper.
                  </p>
                </div>

                <div className="bg-white p-8 shadow-lg">
                  <div className="text-5xl font-extrabold text-brand-dark">
                    <CountUp end={35} suffix="%" />
                  </div>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-dark/45">
                    General Trade
                  </p>
                  <p className="mt-4 text-sm leading-7 text-brand-dark/65">
                    Supported by neighbourhood stores and major GT accounts across Oman.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark p-10 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
                Regional reach
              </p>

              <div className="mt-8 space-y-8">
                <div>
                  <div className="text-5xl font-extrabold">
                    <CountUp end={500} />
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                    Retailers in Muscat
                  </p>
                </div>

                <div>
                  <div className="text-5xl font-extrabold">
                    <CountUp end={300} />
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                    Retailers in Salalah / Dhofar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Network;
