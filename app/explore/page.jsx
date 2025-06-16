// app/explore/page.jsx
import React from "react";
import Link from "next/link";

const ExplorePage = () => {
  const categories = [
    { name: "New Arrivals", href: "/products/new" },
    { name: "Best Sellers", href: "/products/best-sellers" },
    { name: "Electronics", href: "/products/electronics" },
    { name: "Clothing", href: "/products/clothing" },
    { name: "Home & Kitchen", href: "/products/home" },
  ];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Explore Our Collections</h1>
      <p className="text-gray-700 mb-6">
        Discover our top categories and handpicked collections to find what
        you're looking for — or explore something new.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.href}
            className="block border p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p className="text-sm text-gray-500">Shop now</p>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <Link
          href="/"
          className="text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded "
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ExplorePage;
