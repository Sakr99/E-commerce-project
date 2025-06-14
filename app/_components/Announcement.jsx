import Link from 'next/link';
import React from 'react'

const Announcement = () => {
  return (
    <div>
      <div className="border-b border-gray-200 bg-yellow-50 px-4 py-2 text-gray-900">
        <p className="text-center text-sm font-medium">
          🔥 Summer Sale! Get up to 50% off on selected items.
          <Link
            href="/products"
            className="inline-block underline text-primary ml-1"
          >
            Shop now
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Announcement