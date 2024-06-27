"use client";

import ShimmerButton from "@/components/magicui/shimmer-button";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <div className="py-8">
          <h1 className="mt-10 scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            About MagicUI
          </h1>
          <p className="leading-6 [&:not(:first-child)]:mt-6">
            MagicUI is a revolutionary tool designed to simplify the creation of
            beautiful, responsive, and interactive web pages. Whether
            you&apos;re a beginner or a seasoned developer, MagicUI offers a
            wide range of components and customization options to suit your
            needs.
          </p>

          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Key Features
          </h3>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-left inline-block">
            <li>Customizable components</li>
            <li>Responsive design</li>
            <li>Easy integration</li>
            <li>Rich documentation</li>
          </ul>

          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Get Started
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            To start using MagicUI, visit the official website and explore the
            comprehensive documentation and examples.
          </p>

          <div className="mt-8 relative z-10 flex items-center justify-center">
            <Link href="https://magicui.design/" target="_blank">
              <ShimmerButton className="shadow-xl">
                <span className="whitespace-pre-wrap text-base font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                  Visit MagicUI
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
