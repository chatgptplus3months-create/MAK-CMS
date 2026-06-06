import React, { useState } from "react";

const flyerModules = import.meta.glob(
  "../assets/trade/flyers/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const brochureModules = import.meta.glob(
  "../assets/trade/brochures/*.{png,jpg,jpeg}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const flyers = Object.values(flyerModules);
const brochures = Object.values(brochureModules);

const TradeExecution = () => {
  const [activeTab, setActiveTab] = useState<"flyers" | "brochures">("flyers");
  const activeImages = activeTab === "flyers" ? flyers : brochures;

  return (
    <div className="pt-24">
      <section className="bg-brand-dark py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">
            Trade execution
          </p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight md:text-7xl">
            In-store Market Presence
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/70">
            The portfolio materials show execution snaps across trade
            environments, reflecting shelf visibility, product placement, and
            retail support in both modern trade and general trade.
          </p>
        </div>
      </section>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            Trade Execution Gallery
          </h2>

          <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-6 mb-12">
            {(["flyers", "brochures"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition ${activeTab === tab ? "border-brand-dark bg-brand-dark text-white" : "border-gray-300 bg-white text-gray-700 hover:border-brand-dark hover:text-brand-dark"}`}
              >
                {tab === "flyers" ? "Flyers" : "Our Displays"}
              </button>
            ))}
          </div>

          {activeImages.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 p-12 text-center">
              <p className="text-lg font-semibold text-brand-dark">
                No {activeTab} found
              </p>
              <p className="mt-3 text-gray-500">
                Add images into src/assets/trade/{activeTab}.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {activeImages.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                      src={src}
                      alt={`${activeTab}-${index + 1}`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TradeExecution;
