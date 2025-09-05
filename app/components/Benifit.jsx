import Image from "next/image";

import React from "react";
import { CircleChevronRight } from "lucide-react";

const gamesData = [
  {
    description:
      "Regular Updates – The app is updated frequently with new games and improvements to keep the experience fresh.",
  },
  {
    description:
      "Lightweight App – It does not take up much storage space, so it runs smoothly even on low-end devices",
  },
  {
    description:
      "Custom Notifications – Players receive alerts about new bonuses, offers, and tournaments directly on their phones.",
  },
  {
    description:
      "Demo Play Option – Some games allow demo play, so you can practice before using real coins.",
  },
  {
    description:
      "Multi-Language Support – The platform supports different languages, making it accessible to more players in Pakistan.",
  },
  {
    description:
      "Fast Loading Speed – Games load quickly without long waiting times, even on average internet connections.",
  },
  {
    description:
      "Built-In Security Tools – Advanced encryption ensures safe transactions and protects your data.",
  },
  {
    description:
      "Variety of Payment Options – From bank transfers to digital wallets, it offers flexible ways to deposit and withdraw.",
  },
  {
    description:
      "Tournaments and Competitions – Special events let players compete for bigger rewards and recognition.",
  },
  {
    description:
      "24/7 Access – The app is available anytime, so you can enjoy your favorite games whenever you want.",
  },
];

const Benifit = () => {
  return (
    <section className="py-16  text-white px-6  max-w-7xl mx-auto  w-full">
      <div className="  flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          P999 Game APP Additional Cool Benefits:
        </h2>

        <div className="space-y-10">
          {gamesData.map((section, index) => (
            <div
              key={index}
              className="bg-[#296d0ea2] border border-green-400 rounded-xl p-6 shadow-md w-full"
            >
              <p className="text-white text-lg mb-4 flex items-center  gap-2">
                {" "}
                <CircleChevronRight /> {section.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifit;
