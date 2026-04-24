import React from 'react';
import logisticsImage from '../assets/logistics/logisticsmak.png';
import warehouseBg from '../assets/logistics/warehouse.avif';

const Logistics = () => {
  return (
    <div className="pt-24">
      <section
        className="relative bg-cover bg-center py-28"
        style={{ backgroundImage: `url(${warehouseBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center text-white">
          <h1 className="text-4xl font-bold md:text-6xl">
            Logistics & Distribution
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Efficient warehousing, transportation, and supply chain solutions.
          </p>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden shadow-2xl">
            <img
              src={logisticsImage}
              alt="Logistics"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Built for launches</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark md:text-5xl">Sales, stock movement, and delivery working together.</h2>
            <p className="text-lg leading-8 text-brand-dark/70">
              The portfolio highlights logistics as a core capability behind fast product introductions and broad market reach. MAK supports retail readiness through coordinated warehousing, stock management, and delivery execution.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 pt-4">
              <div className="bg-brand-grey p-8">
                <h3 className="text-xl font-extrabold tracking-tight text-brand-dark">Warehousing</h3>
                <p className="mt-3 text-sm leading-7 text-brand-dark/65">Storage and replenishment support for growing brand portfolios.</p>
              </div>
              <div className="bg-brand-grey p-8">
                <h3 className="text-xl font-extrabold tracking-tight text-brand-dark">Delivery Reach</h3>
                <p className="mt-3 text-sm leading-7 text-brand-dark/65">Operational support aligned to retailers in Muscat and Dhofar.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;
