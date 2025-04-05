import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";

export function ScrollDemo() {
  return (
    <section className="mt-12 mb-20">
      {/* Container Scroll with only the image */}
      <ContainerScroll
        titleComponent={<></>} // Empty title component
      >
        <div className="flex items-center justify-center h-full p-4">
          <div className="flex flex-col items-center">
            <img
              src="https://i.imgur.com/bxOf3E1.jpeg"
              alt="Email Marketing Revenue Growth"
              className="rounded-lg object-cover w-full max-w-[600px] shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "/images/email-marketing-growth-chart.png";
              }}
            />
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Source: Statista, Global Industry Analysts (2022)
            </p>
          </div>
        </div>
      </ContainerScroll>

      {/* Content below the scroll animation */}
      <div className="max-w-4xl mx-auto px-4 text-center -mt-16">
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          Email Isn't Dead. It's Dominating.
        </h2>
        
        <p className="text-lg mt-4 text-muted-foreground max-w-3xl mx-auto">
          Email marketing is expected to hit <strong>$13.7B</strong> in revenue by 2025 — and that's just the beginning.
        </p>
        
        {/* Centered bullet points */}
        <div className="mt-8 inline-block text-left">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 flex-shrink-0 mt-1">✅</span>
              <span>Direct line to decision-makers</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 flex-shrink-0 mt-1">✅</span>
              <span>Unmatched personalization</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 flex-shrink-0 mt-1">✅</span>
              <span>One of the most trusted & measurable marketing channels</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 font-bold mr-3 flex-shrink-0 mt-1">✅</span>
              <span>Still growing year after year</span>
            </li>
          </ul>
        </div>
        
        <p className="italic text-muted-foreground mt-8 mb-12">
          So if email is booming… how do you actually make it work?
        </p>
      </div>
    </section>
  );
}
