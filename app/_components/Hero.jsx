import Link from 'next/link';
import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
        <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <div >
              <p className="text-4xl font-bold text-white sm:text-5xl">
                Boost your sales with
              </p>
              <p className="text-primary text-2xl font-bold sm:text-3xl ">
                smart shopping solutions
              </p>
            </div>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Discover seamless online shopping experiences designed to convert
              visitors into loyal customers. Elevate your brand with modern
              design, fast performance, and clear calls to action.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                href="/products"
                className="inline-block rounded-full bg-primary  px-12 py-3 text-sm font-medium text-white transition hover:bg-primary-hover focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero