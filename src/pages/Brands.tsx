import React from 'react';
import brandCover from '../assets/brands/coverimagbrand.png';
import ProductBrowser from '../components/ProductBrowser';

const Brands = () => {
  return (
    <div className="pt-24">
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: `url(${brandCover})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative mx-auto max-w-7xl px-6 text-center text-white">
          <p className="mb-4 text-sm uppercase tracking-widest">Portfolio</p>

          <h1 className="text-4xl font-bold md:text-6xl">
            Brands We Support
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Current distribution brands include Bodhini Foods, King Coffee,
            Mom&apos;s Pack, Najwa Dates and more.
          </p>
        </div>
      </section>

      <ProductBrowser />

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6"></div>
      </section>
    </div>
  );
};

export default Brands;
