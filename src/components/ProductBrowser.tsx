import React, { useState, useEffect } from "react";

/* ── Lazy glob loaders (NOT eager — images load only when tab is clicked) ── */

const allGlobs = {
  food: {
    bodhini:  import.meta.glob("../assets/products/food/bodhini/*.{png,jpg,jpeg,webp,avif}"),
    moms:     import.meta.glob("../assets/products/food/moms-love-pack/*.{png,jpg,jpeg,webp,avif}"),
    najwa:    import.meta.glob("../assets/products/food/najwa-dates/*.{png,jpg,jpeg,webp,avif}"),
    himalayan:import.meta.glob("../assets/products/food/himalayan-pink-salt/*.{png,jpg,jpeg,webp,avif}"),
  },
  home: {
    bakhoor:  import.meta.glob("../assets/products/home-ambience/bakhoor/*.{png,jpg,jpeg,webp,avif}"),
    kovai:    import.meta.glob("../assets/products/home-ambience/kovai/*.{png,jpg,jpeg,webp,avif,pdf}"),
  },
  fragrance: {
    odora:    import.meta.glob("../assets/products/home-ambience/odora/*.{png,jpg,jpeg,webp,avif}"),
  },
  kitchen: {
    moms:     import.meta.glob("../assets/products/kitchen-essentials/Moms-pack/*.{png,jpg,jpeg,webp,avif}"),
    royal:    import.meta.glob("../assets/products/kitchen-essentials/Royal Pack/*.{png,jpg,jpeg,webp,avif}"),
  },
  household: {
    superware:import.meta.glob("../assets/products/house hold/superware/*.{png,jpg,jpeg,webp,avif}"),
    kula:     import.meta.glob("../assets/products/house hold/kula/*.{png,jpg,jpeg,webp,avif}"),
    atlas:    import.meta.glob("../assets/products/house hold/atlas/*.{png,jpg,jpeg,webp,avif}"),
    glacial:  import.meta.glob("../assets/products/house hold/glacial/*.{png,jpg,jpeg,webp,avif}"),
    stahl:    import.meta.glob("../assets/products/house hold/stahl/*.{png,jpg,jpeg,webp,avif}"),
  },
} as const;

const allLabels = {
  food:      { bodhini: "Bodhini", moms: "Mom's Love Pack", najwa: "Najwa Dates", himalayan: "Himalayan Pink Salt" },
  home:      { bakhoor: "Bakhoor", kovai: "Kovi" },
  fragrance: { odora: "Odora" },
  kitchen:   { moms: "Mom's Pack", royal: "Royal Pack" },
  household: { superware: "Superware", kula: "Kula", atlas: "Atlas", glacial: "Glacial", stahl: "Stahl" },
};

type MainTab = keyof typeof allGlobs;

/* Cache resolved URLs so switching back to a tab doesn't re-fetch */
const imageCache: Record<string, string[]> = {};

async function loadImages(mainTab: MainTab, subTab: string): Promise<string[]> {
  const cacheKey = `${mainTab}__${subTab}`;
  if (imageCache[cacheKey]) return imageCache[cacheKey];

  const loaders = (allGlobs[mainTab] as Record<string, Record<string, () => Promise<any>>>)[subTab];
  if (!loaders) return [];

  const urls = await Promise.all(
    Object.values(loaders).map((fn) => fn().then((m: any) => m.default as string))
  );
  imageCache[cacheKey] = urls;
  return urls;
}

/* ── Component ── */

const ProductBrowser = () => {
  const [mainTab, setMainTab]   = useState<MainTab>("food");
  const [subTab, setSubTab]     = useState("bodhini");
  const [images, setImages]     = useState<string[]>([]);
  const [loading, setLoading]   = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const labels    = allLabels[mainTab] as Record<string, string>;
  const imageOnlyList = images.filter((src) => !src.endsWith(".pdf"));

  /* Load images whenever tab/subtab changes */
  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    loadImages(mainTab, subTab).then((urls) => {
      if (!cancelled) {
        setImages(urls);
        setLoading(false);
      }
    });
    return () => { cancelled = true; };
  }, [mainTab, subTab]);

  /* Lightbox helpers */
  const openLightbox  = (src: string) => { const i = imageOnlyList.indexOf(src); if (i !== -1) setLightboxIndex(i); };
  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((i) => i !== null ? (i - 1 + imageOnlyList.length) % imageOnlyList.length : null);
  const goNext = () => setLightboxIndex((i) => i !== null ? (i + 1) % imageOnlyList.length : null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      closeLightbox();
      if (e.key === "ArrowLeft")   goPrev();
      if (e.key === "ArrowRight")  goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, imageOnlyList.length]);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN TABS */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {([
            { key: "food",      label: "Authentic Food" },
            { key: "home",      label: "Home Ambience" },
            { key: "fragrance", label: "Home Fragrance" },
            { key: "kitchen",   label: "Kitchen Essentials" },
            { key: "household", label: "Household Solutions" },
          ] as { key: MainTab; label: string }[]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                const firstSub = Object.keys(allGlobs[tab.key])[0];
                setMainTab(tab.key);
                setSubTab(firstSub);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 rounded ${mainTab === tab.key ? "bg-red-500 text-white" : "bg-gray-200"}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* SUB TABS */}
        <div className="flex gap-3 flex-wrap mb-10">
          {Object.keys(allGlobs[mainTab]).map((key) => (
            <button
              key={key}
              onClick={() => { setSubTab(key); setLightboxIndex(null); }}
              className={`px-4 py-2 rounded-full text-sm ${subTab === key ? "bg-red-500 text-white" : "bg-gray-200"}`}
            >
              {labels[key]}
            </button>
          ))}
        </div>

        {/* GRID */}
        {loading ? (
          <div className="flex justify-center items-center h-60">
            <div className="w-10 h-10 border-4 border-red-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <p className="text-center text-gray-500">No images found</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, i) =>
              src.endsWith(".pdf") ? (
                <div key={i} className="rounded-xl overflow-hidden shadow flex flex-col">
                  <iframe src={src} className="w-full h-60" title={`pdf-${i}`} />
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs font-semibold py-2 bg-gray-100 hover:bg-red-500 hover:text-white transition"
                  >
                    Open PDF
                  </a>
                </div>
              ) : (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden shadow cursor-zoom-in group relative"
                  onClick={() => openLightbox(src)}
                >
                  <img
                    src={src}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">⊕</span>
                  </div>
                </div>
              )
            )}
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-4 right-5 text-white text-4xl leading-none hover:text-red-400 transition" onClick={closeLightbox}>
            &times;
          </button>
          {imageOnlyList.length > 1 && (
            <button className="absolute left-4 text-white text-4xl px-3 py-2 hover:text-red-400 transition" onClick={(e) => { e.stopPropagation(); goPrev(); }}>
              &#8249;
            </button>
          )}
          <img
            src={imageOnlyList[lightboxIndex]}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          {imageOnlyList.length > 1 && (
            <button className="absolute right-4 text-white text-4xl px-3 py-2 hover:text-red-400 transition" onClick={(e) => { e.stopPropagation(); goNext(); }}>
              &#8250;
            </button>
          )}
          <p className="absolute bottom-4 text-white/60 text-sm">
            {lightboxIndex + 1} / {imageOnlyList.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductBrowser;
