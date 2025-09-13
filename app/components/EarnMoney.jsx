import { Download } from "lucide-react";
import React from "react";

import Image from "next/image";
const strategies = [
  {
    title: "Start Small and Learn",
    description:
      "Begin with small investments to understand how the games work.",
  },
  {
    title: "Use Bonuses Wisely",
    description:
      "Don’t waste your welcome or daily bonuses. Save them for games where you have higher winning chances.",
  },
  {
    title: "Focus on Skill-Based Games",
    description:
      "Games like Teen Patti or Poker rely on strategy. If you sharpen your skills, your chances of winning increase.",
  },
  {
    title: "Play Consistently",
    description:
      "Daily logins give you rewards and bonuses, so make sure you play regularly to maximize these benefits.",
  },
  {
    title: "Set a Budget",
    description: "Always decide how much you want to spend before starting.",
  },
  {
    title: "Stay Patient and Calm",
    description:
      "Rushing can lead to mistakes. Staying calm improves decision-making and keeps the game enjoyable.",
  },
];

const EarnMoney = () => {
  return (
    <div className=" text-white p-6 rounded-lg max-w-5xl w-full mx-auto">
      <h2 className="md:text-4xl text-3xl text-green-500 font-bold mb-6 text-center  ">
        Smart Strategies for Winning Big on W567 Game App
      </h2>

      <ul className="space-y-4">
        {strategies.map((item, index) => (
          <li key={index} className="border-b pb-3">
            <h3 className="text-lg font-semibold text-green-600">
              {item.title}
            </h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EarnMoney;
