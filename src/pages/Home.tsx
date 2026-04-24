import React, { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const productBg = "/images/products/pdct-bg.png";

const Home = () => {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);

  const overviewSectionRef = useRef<HTMLElement | null>(null);
  const overviewImageWrapRef = useRef<HTMLDivElement | null>(null);
  const overviewImageRef = useRef<HTMLImageElement | null>(null);

  const slides = useMemo(
    () => [
      {
        image: "/images/hero/1.jpg",
        eyebrow: "Trusted FMCG distribution across Oman",
        title: (
          <>
            Premium <span className="text-brand-red">food brands</span> with
            stronger retail reach.
          </>
        ),
        description:
          "From Bodhini spices and pantry essentials to everyday food products, Masar Al Khaleej helps brands grow across Muscat and Dhofar with disciplined market execution.",
        primaryCta: "/brands",
        secondaryCta: "/contact",
      },
      {
        image: "/images/hero/2.jpg",
        eyebrow: "Home care and consumer products",
        title: (
          <>
            Smarter <span className="text-brand-red">care solutions</span> for
            modern retail shelves.
          </>
        ),
        description:
          "Kovi Care and related household products are supported with sales coverage, distribution planning, and in-store visibility built for Oman’s fast-moving retail market.",
        primaryCta: "/brands",
        secondaryCta: "/contact",
      },
      {
        image: "/images/hero/3.jpg",
        eyebrow: "Coffee, dates and pantry portfolio",
        title: (
          <>
            Curated <span className="text-brand-red">brand portfolios</span>{" "}
            built for everyday demand.
          </>
        ),
        description:
          "From coffee and dates to pantry-led categories, MAK connects quality products with retailers through reliable supply, stronger placement, and consistent follow-through.",
        primaryCta: "/brands",
        secondaryCta: "/contact",
      },
      {
        image: "/images/hero/4.jpg",
        eyebrow: "Reliable supply chain support",
        title: (
          <>
            Faster <span className="text-brand-red">logistics</span>, execution,
            and market movement.
          </>
        ),
        description:
          "Our distribution network supports timely delivery, retail replenishment, and smooth movement of consumer goods across key Oman regions.",
        primaryCta: "/logistics",
        secondaryCta: "/contact",
      },
    ],
    [],
  );

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      subtitleRef.current,
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
    )
      .fromTo(
        titleRef.current,
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power4.out" },
        "-=0.15",
      )
      .fromTo(
        descRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" },
        "-=0.3",
      )
      .fromTo(
        btnRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2",
      );

    gsap.utils.toArray(".reveal").forEach((elem: any) => {
      gsap.fromTo(
        elem,
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elem,
            start: "top 84%",
          },
        },
      );
    });

    if (overviewSectionRef.current && overviewImageRef.current) {
      gsap.to(overviewImageRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: overviewSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, [activeSlide]);

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const [activeProduct, setActiveProduct] = useState(2);

  const products = [
    "/images/products/product-1.webp",
    "/images/products/product-2.webp",
    "/images/products/product-3.webp",
    "/images/products/product-4.webp",
    "/images/products/product-5.webp",
    "/images/products/product-6.jpg",
    "/images/products/product-7.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProduct((prev) => (prev + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="overflow-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt={`Hero slide ${index + 1}`}
              loading={index === activeSlide ? "eager" : "lazy"}
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/15" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28 pb-16">
          <div className="max-w-3xl">
            <p
              ref={subtitleRef}
              className="mb-5 text-[11px] font-bold uppercase tracking-[0.38em] text-brand-red md:text-xs"
            >
              {slides[activeSlide].eyebrow}
            </p>

            <h1
              ref={titleRef}
              className="max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white md:text-6xl xl:text-7xl"
            >
              {slides[activeSlide].title}
            </h1>

            <p
              ref={descRef}
              className="mt-6 max-w-2xl text-sm leading-7 text-white/80 md:text-base md:leading-8"
            >
              {slides[activeSlide].description}
            </p>

            <div ref={btnRef} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to={slides[activeSlide].primaryCta}
                className="group inline-flex items-center justify-center gap-3 bg-brand-red px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-brand-red-dark"
              >
                Explore More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to={slides[activeSlide].secondaryCta}
                className="inline-flex items-center justify-center border border-white/25 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-brand-dark"
              >
                Partner With Us
              </Link>
            </div>

            <div className="mt-10 flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-8 bg-brand-red"
                      : "w-2.5 bg-white/45 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 p-3 text-white backdrop-blur-sm transition hover:bg-black/50 md:flex"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 p-3 text-white backdrop-blur-sm transition hover:bg-black/50 md:flex"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 items-start gap-10 border-t border-b border-brand-dark/8 py-12 text-center lg:grid-cols-4 lg:gap-16">
            <div className="reveal space-y-3">
              <h3 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
                <CountUp end={800} duration={2} />
                <span className="text-brand-red">+</span>
              </h3>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-dark/45 md:text-xs">
                Retailers Covered
              </p>
            </div>

            <div className="reveal space-y-3">
              <h3 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
                <CountUp end={65} duration={2} />
                <span className="text-brand-red">/</span>
                <CountUp end={35} duration={2} />
              </h3>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-dark/45 md:text-xs">
                Modern Trade / General Trade
              </p>
            </div>

            <div className="reveal space-y-3">
              <h3 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
                <CountUp end={2022} duration={2} />
              </h3>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-dark/45 md:text-xs">
                Established in Oman
              </p>
            </div>

            <div className="reveal space-y-3">
              <h3 className="text-4xl font-extrabold tracking-tight text-brand-dark md:text-5xl">
                <CountUp end={2} duration={2} />
              </h3>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-brand-dark/45 md:text-xs">
                Key Regions: Muscat & Dhofar
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={overviewSectionRef}
        className="relative overflow-hidden bg-[#f7f5f1] py-20 md:py-24"
      >
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_center,rgba(0,0,0,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(135deg,transparent_0%,transparent_38%,rgba(0,0,0,0.05)_38%,rgba(0,0,0,0.05)_39%,transparent_39%,transparent_61%,rgba(0,0,0,0.05)_61%,rgba(0,0,0,0.05)_62%,transparent_62%,transparent_100%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="reveal space-y-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-red">
              Company overview
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-brand-dark md:text-4xl xl:text-5xl">
              Building brand presence with{" "}
              <span className="text-brand-red">faster market access.</span>
            </h2>

            <p className="max-w-xl text-base leading-8 text-brand-dark/70 md:text-[17px]">
              Masar Al Khaleej distributes high-quality FMCG products through a
              growing retail network in Oman. The portfolio includes foods,
              beverages, dates, homecare, fragrance, and specialty consumer
              products.
            </p>

            <div className="grid gap-5 pt-3 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white text-brand-red shadow-sm">
                  📈
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">
                    Launch support
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-brand-dark/55">
                    Quick introductions backed by sales, marketing, and retail
                    execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-white text-brand-red shadow-sm">
                  🚚
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-brand-dark">
                    Distribution agility
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-brand-dark/55">
                    Coverage across modern trade, general trade, wholesalers,
                    and institutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={overviewImageWrapRef}
            className="reveal overflow-hidden rounded-md shadow-lg"
          >
            <img
              ref={overviewImageRef}
              src="/images/company.png"
              alt="Company Overview"
              loading="lazy"
              decoding="async"
              className="h-72 w-full scale-[1.03] object-cover sm:h-96 md:h-[500px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-28 overflow-hidden bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${productBg})`,
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-brand-red">
              Explore our products
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1e3a5f] md:text-5xl">
              Discover our product range
            </h2>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="flex items-end justify-center gap-3 md:gap-6">
              {products.map((image, index) => {
                const offset = index - activeProduct;
                const absOffset = Math.abs(offset);

                let styles =
                  "h-28 md:h-40 opacity-30 scale-75 blur-[1px] z-0 hidden sm:block";
                if (absOffset === 2) {
                  styles = "h-32 md:h-44 opacity-40 scale-85 z-0 hidden lg:block";
                }
                if (absOffset === 1) {
                  styles = "h-40 md:h-56 opacity-70 scale-95 z-10";
                }
                if (offset === 0) {
                  styles = "h-56 md:h-80 opacity-100 scale-110 z-20";
                }

                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ease-in-out flex items-end justify-center ${styles}`}
                    onClick={() => setActiveProduct(index)}
                  >
                    <img
                      src={image}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="max-h-full w-full max-w-[220px] object-contain cursor-pointer select-none sm:max-w-[260px] md:max-w-[320px]"
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center gap-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProduct(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeProduct
                      ? "w-7 bg-brand-red"
                      : "w-2 bg-brand-dark/25"
                  }`}
                  aria-label={`Go to product ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f1] py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-brand-red">
              Our Capabilities
            </p>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-brand-dark md:text-4xl">
              Comprehensive Distribution Solutions
            </h2>
            <p className="mt-5 text-base leading-7 text-brand-dark/65">
              We provide end-to-end support for brands looking to penetrate and
              grow in the Omani market.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: Globe,
                title: "Modern Trade Reach",
                text: "65% reach across major chains like Lulu, Al Meera, Spar And Noor.",
              },
              {
                icon: Truck,
                title: "Logistics Excellence",
                text: "Quick product launches enabled by our robust logistics and warehousing infrastructure.",
              },
              {
                icon: ShieldCheck,
                title: "Trade Execution",
                text: "Superior in-store marketing, shelf displays, and promotion management.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group reveal bg-[#ececec] p-8 transition-colors duration-300 hover:bg-brand-red"
              >
                <div className="mb-10 inline-flex h-20 w-20 items-center justify-center bg-white/70 text-brand-red transition-colors duration-300 group-hover:bg-white/15 group-hover:text-white">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight text-brand-dark transition-colors duration-300 group-hover:text-white md:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-6 text-xs leading-7 text-brand-dark/50 transition-colors duration-300 group-hover:text-white/80 md:text-sm">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
