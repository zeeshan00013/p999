"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import lucky1011 from "../Images/w1.webp";
import lucky1012 from "../Images/w2.webp";
import lucky1013 from "../Images/w3.webp";
import lucky1014 from "../Images/w4.webp";
import lucky1015 from "../Images/w5.webp";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomCarousel() {
  const images = [
    { src: lucky1011, alt: "W567 app " },
    { src: lucky1012, alt: "W567 download" },
    { src: lucky1013, alt: "W567 apk " },
    { src: lucky1014, alt: "W567  new app" },
    { src: lucky1015, alt: "W567  game" },
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
      <div>
        <h3 className="text-xl font-bold mt-6">User Reviews:</h3>
        <div className=" p-4 my-2 rounded">
          ⭐⭐⭐⭐⭐
          <p>
            <strong>Adeel R.</strong> – "Smooth and fast withdrawals! My fav
            earning app."
          </p>
        </div>
        <div className=" p-4 my-2 rounded">
          ⭐⭐⭐⭐☆
          <p>
            <strong>Sana K.</strong> – "Great game variety. Especially love the
            Aviator mode."
          </p>
        </div>
      </div>
    </section>
  );
}
