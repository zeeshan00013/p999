import React from "react";
const features = [
  {
    title: "Exciting Game Collection",
    description:
      "It offers a large variety of games, ranging from slot machines and card games to multiplayer challenges. Each category features unique graphics, themes, and rewards, keeping the gameplay fresh and engaging.",
  },
  {
    title: "Quick Earning",
    description:
      "Players can start small and still have a chance to win significant rewards in a short time. Fast and smooth transactions make it easy to access your earnings without delays.",
  },
  {
    title: "Amazing Bonuses and Rewards",
    description:
      "New players receive a welcome bonus, while regular users enjoy daily rewards, referral bonuses, and loyalty programs that increase winning chances without extra spending.",
  },
  {
    title: "Easy Navigation",
    description:
      "The P999 Game app interface is simple and user-friendly. Clear buttons and well-arranged categories help even first-time users navigate easily and start playing quickly.",
  },
  {
    title: "Secure Payments",
    description:
      "The platform uses advanced encryption to ensure safe and reliable transactions for both deposits and withdrawals, giving players peace of mind.",
  },
  {
    title: "Active Helpline",
    description:
      "Customer support is responsive and available to help with registration, deposits, and gameplay issues, ensuring a smooth experience for all users.",
  },
  {
    title: "Multi-Player Experience",
    description:
      "Compete with friends or players nationwide in thrilling multiplayer matches that bring fun and interaction to a new level.",
  },
  {
    title: "Easy and Free Registration",
    description:
      "Creating an account is free and only takes a few minutes. Just provide basic information and start playing instantly.",
  },
  {
    title: "Fast Deposits and Quick Withdrawals",
    description:
      "Deposits reflect immediately, and withdrawals are processed quickly, so you can enjoy your winnings without waiting.",
  },
];

const Features = () => {
  return (
    <section className="py-16  text-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Key Features of P999 Game Download APK Earning App
        </h2>

        <div className="grid gap-8 grid-cols-1 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#08600e] rounded-xl p-6 border border-green-400 hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-white text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
