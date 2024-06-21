"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="py-8">
      <div className="container">
        <h1 className="text-2xl font-bold pb-4">Introduction</h1>
        <p>
          Create magical landing pages with components that you can copy and
          paste into your apps. Magic UI is a collection of re-usable components
        </p>
        <div className="py-4">
          <Link
            href="https://magicui.design/"
            target="_blank"
            className="text-blue-500 underline"
          >
            visit
          </Link>
        </div>
      </div>
    </section>
  );
}
