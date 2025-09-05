"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import lucky1011 from "../Images/p9991.webp";
import lucky1012 from "../Images/p9992.webp";
import lucky1013 from "../Images/p9993.webp";
import lucky1014 from "../Images/p9994.webp";
import lucky1015 from "../Images/p9995.webp";
import lucky1016 from "../Images/p9996.webp";
import lucky1017 from "../Images/p9997.webp";
import lucky1018 from "../Images/p9998.webp";
import lucky1019 from "../Images/p9999.webp";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomCarousel() {
  const images = [
    { src: lucky1011, alt: "p999 app " },
    { src: lucky1012, alt: "p999 download" },
    { src: lucky1013, alt: "p999 apk " },
    { src: lucky1014, alt: "p999  new app" },
    { src: lucky1015, alt: "p999  game" },
    { src: lucky1016, alt: "p999  game apk" },
    { src: lucky1017, alt: "p999  " },
    { src: lucky1018, alt: "p999 new game" },
    { src: lucky1019, alt: "p999  apk download" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mt-10 px-4 sm:px-6 text-white max-w-7xl mx-auto">
      <div className="">
        <h2 className="text-3xl font-bold   text-center mb-12">Screenshoots</h2>

        <div className="relative overflow-hidden rounded-xl shadow-lg mt-6">
          <div className="relative w-full ">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={500}
              height={600}
              className="object-contain transition-all duration-500"
              priority
            />
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-4 bg-black/40 p-2 rounded-full hover:bg-black/60 transition z-10"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-4 bg-black/40 p-2 rounded-full hover:bg-black/60 transition z-10"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-[#f0c059]" : "bg-white/30"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
