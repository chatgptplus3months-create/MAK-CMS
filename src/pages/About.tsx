import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImage from '../assets/about/aboutcover.png';
import aboutCover from '../assets/products/cover.jpg';
import BrandCarousel from '../components/BrandCarousel';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.utils.toArray('.reveal').forEach((elem: any) => {
      gsap.fromTo(elem, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: elem, start: 'top 82%' } });
    });
  }, []);

  return (
    <div className="pt-24">
      <section
        className="relative flex h-[60vh] min-h-[400px] items-center justify-center bg-cover bg-center text-center md:h-[70vh]"
        style={{
          backgroundImage: `url(${aboutCover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 px-6 text-white">
          <h1 className="text-4xl font-extrabold md:text-6xl">
            About Us
          </h1>
          <p className="mt-4 text-sm text-white/85 md:text-lg">
            Delivering premium FMCG brands with strong distribution across Oman.
          </p>
        </div>
      </section>

      <section className="bg-white pt-16 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <section className="py-20">
            <div className="max-w-7xl mx-auto grid items-center gap-12 px-6 md:grid-cols-2">
              <div>
                <img
                  src="/images/hero-bodhini.jpg"
                  alt="About"
                  className="h-full w-full rounded-xl object-cover shadow-lg"
                />
              </div>

              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.2em] text-red-500">
                  Established in 2022
                </p>

                <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
                  A focused distributor for brands entering and expanding in Oman.
                </h2>

                <p className="mb-4 text-slate-600">
                  Masar Al Khaleej is a leading distributor of high-quality FMCG products in Oman.
                </p>

                <p className="text-slate-600">
                  With a broad network covering modern trade, general trade, wholesalers, and institutions,
                  the business supports brand launches and reliable market service.
                </p>
              </div>
            </div>
          </section>

          <BrandCarousel />
        </div>
      </section>

      <section className="bg-brand-grey py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mb-14 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Vision & values</p>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">Excellence, sustainability, and continuous innovation.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="reveal bg-white p-10 shadow-xl">
              <h3 className="text-2xl font-extrabold tracking-tight text-brand-dark">Vision</h3>
              <p className="mt-5 text-base leading-8 text-brand-dark/70">
                Drive growth by delivering exceptional value to partners and customers while fostering a future that is environmentally conscious and forward-looking.
              </p>
            </div>
            <div className="reveal bg-white p-10 shadow-xl">
              <h3 className="text-2xl font-extrabold tracking-tight text-brand-dark">Values</h3>
              <p className="mt-5 text-base leading-8 text-brand-dark/70">
                Prioritising employees, partners, customers, and the wider community as equally important pillars that shape every business decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
