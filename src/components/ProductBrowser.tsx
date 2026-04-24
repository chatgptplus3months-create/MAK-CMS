import React, { useMemo, useState } from "react";

type ProductItem = {
  src: string;
  category: string;
};

const foodImages = Object.values(
  import.meta.glob("../assets/products/food/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
  })
) as string[];

const homeAmbienceImages = Object.values(
  import.meta.glob("../assets/products/home-ambience/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
  })
) as string[];

const kitchenImages = Object.values(
  import.meta.glob("../assets/products/kitchen-essentials/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
  })
) as string[];

console.log(kitchenImages);

const householdImages = Object.values(
  import.meta.glob("../assets/products/household-solutions/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    import: "default",
  })
) as string[];

const imagesMap = {
  food: foodImages,
  "home-ambience": homeAmbienceImages,
  "kitchen-essentials": kitchenImages,
  "household-solutions": householdImages,
} as const;

const categoryLabels: Record<string, string> = {
  food: "Authentic Food",
  "home-ambience": "Home Ambience",
  "kitchen-essentials": "Kitchen Essentials",
  "household-solutions": "Household Solutions",
};

const categoryOrder = [
  "food",
  "home-ambience",
  "kitchen-essentials",
  "household-solutions",
] as const;

const ProductBrowser = () => {
  const productsByCategory = useMemo(() => {
    const grouped = Object.fromEntries(
      Object.entries(imagesMap).map(([category, images]) => [
        category,
        images.map((src) => ({
          src,
          category,
        })),
      ]),
    ) as Record<string, ProductItem[]>;

    return grouped;
  }, []);

  const categories = categoryOrder.filter((category) => productsByCategory[category]);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "food");

  const activeProducts = productsByCategory[activeCategory] || [];

  return (
    <section className="py-20 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-10">
        <aside className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 h-fit">
          <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-3">
            Catalog
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Product Browser
          </h2>

          <div className="space-y-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition ${
                  activeCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>
        </aside>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-red-500 mb-3">
            {categoryLabels[activeCategory] || activeCategory}
          </p>

          <h3 className="text-4xl font-bold text-slate-900 mb-8">
            Quality Selection
          </h3>

          {activeProducts.length === 0 ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-10 text-slate-500">
              No images found in this category.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {activeProducts.map((product, index) => (
                <div
                  key={`${product.category}-${index}`}
                  className="bg-white rounded-3xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition"
                >
                  <div className="rounded-2xl overflow-hidden bg-slate-100 aspect-square">
                    <img
                      src={product.src}
                      alt=""
                      className="w-full h-full object-contain p-4 hover:scale-105 transition"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductBrowser;
