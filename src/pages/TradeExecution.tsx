import React from 'react';

const brochures = Object.values(
  import.meta.glob('../assets/trade/brochures/*.{png,jpg,jpeg}', {
    eager: true,
    import: 'default',
  }),
) as string[];

const visibleBrochures = brochures.filter((_, index) => index !== 1);

const TradeExecution = () => {
  return (
    <div className="pt-24">
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Trade execution</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">In-store Market Presence</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            The portfolio materials show execution snaps across trade environments, reflecting shelf visibility, product placement, and retail support in both modern trade and general trade.
          </p>
        </div>
      </section>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trade Execution Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleBrochures.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
              >
                <img
                  src={img}
                  alt="trade"
                  className="w-full h-48 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeExecution;
