// app/about/page.jsx
import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">About Our Store</h1>
      <p className="mb-4 text-gray-700">
        Welcome to our store! We specialize in providing high-quality products
        for our customers with fast shipping and excellent support. Our goal is
        to offer you the best shopping experience online.
      </p>

      <p className="mb-4 text-gray-700">
        Whether you're looking for electronics, fashion, home essentials, or the
        latest gadgets, we've got you covered. Our team is passionate about
        sourcing the best items and ensuring your satisfaction.
      </p>

      <p className="mb-6 text-gray-700">
        Thank you for choosing us. If you have any questions, feel free to{" "}
        <Link href="/contact" className="text-blue-600 underline">
          contact us
        </Link>
        .
      </p>

      <Link
        href="/"
        className="text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded "
      >
        Back to Home
      </Link>
    </main>
  );
};

export default AboutPage;
