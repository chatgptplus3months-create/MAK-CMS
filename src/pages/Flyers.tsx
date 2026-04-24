import React, { useEffect, useState } from 'react';
import { ImageIcon } from 'lucide-react';

type Flyer = {
  title: string;
  image: string;
  description?: string;
  order?: number;
  visible?: boolean;
};

const Flyers = () => {
  const [flyers, setFlyers] = useState<Flyer[]>([]);

  useEffect(() => {
    fetch('/data/flyers.json')
      .then((res) => res.json())
      .then((data) => {
        const sortedFlyers = (data.flyers || [])
          .filter((flyer: Flyer) => flyer.visible !== false)
          .sort((a: Flyer, b: Flyer) => (a.order || 0) - (b.order || 0));

        setFlyers(sortedFlyers);
      })
      .catch(() => setFlyers([]));
  }, []);

  return (
    <div className="pt-24">
      <section className="relative overflow-hidden bg-brand-dark py-24 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-brand-red/40"></div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm uppercase tracking-widest text-white/70">Marketing</p>
          <h1 className="text-4xl font-bold md:text-6xl">Flyers</h1>
          <p className="mx-auto mt-6 max-w-2xl text-white/80">
            Explore our latest flyers, offers and product highlights.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          {flyers.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 p-12 text-center">
              <ImageIcon className="mx-auto mb-4 h-12 w-12 text-gray-400" />
              <h2 className="text-2xl font-bold text-brand-dark">No flyers added yet</h2>
              <p className="mt-3 text-gray-500">Add flyers from the CMS admin panel.</p>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {flyers.map((flyer, index) => (
                <article
                  key={`${flyer.title}-${index}`}
                  className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                      src={flyer.image}
                      alt={flyer.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-brand-dark">{flyer.title}</h2>
                    {flyer.description && (
                      <p className="mt-3 text-sm leading-6 text-gray-600">{flyer.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Flyers;
