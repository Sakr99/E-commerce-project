// app/contact/page.jsx
import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <p className="text-gray-700 mb-4">
        We'd love to hear from you! Whether you have a question about your
        order, products, or anything else — our team is ready to answer all your
        questions.
      </p>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Your message..."
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:ring-black"
          ></textarea>
        </div>

        <button
          type="submit"
          className=" text-white px-4 py-2 rounded bg-primary hover:bg-primary-hover transition"
        >
          Send Message
        </button>
      </form>

      <div className="mt-6">
        <Link href="/" className="text-white underline">
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default ContactPage;
