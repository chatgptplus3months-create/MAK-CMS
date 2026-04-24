import React from "react";

const brands = [
  { name: "Bodhini", logo: "/logos/bodhini.jpeg" },
  { name: "King Coffee", logo: "/images/king-coffee.png" },
  { name: "Kovi Care", logo: "/images/brands/kovicare.jpg" },
  { name: "Najwa Dates", logo: "/images/najwa-dates.png" },
  { name: "Mom's Pack", logo: "/images/moms-pack-logo.png" },
  { name: "Mom's Love Packs", logo: "/images/moms-love-packs.png" },
];

const BrandCarousel = () => {
  const loopBrands = [...brands, ...brands];

  return (
    <section className="py-10 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-8">
          Major Brands Handled
        </h3>

        <div className="overflow-hidden">
          <div className="flex w-max animate-brand-scroll gap-6">
            {loopBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="min-w-[220px] h-[120px] rounded-2xl border border-slate-200 bg-white shadow-sm flex flex-col items-center justify-center px-6"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto object-contain mx-auto mb-3"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <p className="text-sm font-semibold text-slate-800 text-center">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
