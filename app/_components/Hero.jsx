import React from 'react'

const Hero = () => {
  return (
    <>
      <section className="bg-white lg:grid lg:h-screen ">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-prose text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Boost your sales with
              <strong className="text-primary"> smart shopping solutions</strong>
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Discover seamless online shopping experiences designed to convert
              visitors into loyal customers. Elevate your brand with modern
              design, fast performance, and clear calls to action.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-primary bg-primary px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary-hover"
                href="#"
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero