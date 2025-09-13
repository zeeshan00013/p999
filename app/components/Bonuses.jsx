// components/BonusesAndEarnings.jsx

const bonusItems = [
  {
    title: "Welcome Bonus",
    description:
      "Earn free coins right after registration to start your journey without extra spending.",
  },
  {
    title: "Daily Login Rewards",
    description: "Collect coins every day just by logging into your account.",
  },
  {
    title: "Winning Games",
    description:
      "Play and win in slots, card games, or arcade challenges to earn direct rewards.",
  },
  {
    title: "Jackpot Prizes",
    description:
      "Try your luck in jackpot games that offer big winnings with small bets.",
  },
  {
    title: "Referral Program",
    description:
      "Invite friends to join and earn coins or bonuses whenever they register.",
  },
  {
    title: "Loyalty Points",
    description:
      "Collect points for consistent play and exchange them for coins or rewards later.",
  },
  {
    title: "Special Events",
    description:
      "Participate in tournaments and seasonal competitions for larger prize pools.",
  },
  {
    title: "Daily Missions",
    description:
      "Complete simple in-game tasks to earn extra coins and bonuses.",
  },
  {
    title: "Promotional Offers",
    description:
      "Take advantage of limited-time offers and exclusive discounts for more rewards.",
  },
  {
    title: "Fast Withdrawals",
    description:
      "Cash out your earnings quickly and enjoy real benefits from your gameplay.",
  },
];

const BonusesAndEarnings = () => {
  return (
    <div className=" text-white p-6 rounded-lg max-w-5xl mx-auto w-full">
      <h2 className="md:text-4xl text-3xl text-green-500 font-bold mb-6 text-center">
        Best Bonuses and Earning Opportunities of W567 Game Download App
      </h2>

      <ul className="space-y-4">
        {bonusItems.map((item, index) => (
          <li key={index} className="border-b pb-3">
            <h3 className="text-xl font-semibold text-green-600">
              {item.title}
            </h3>
            <p className="text-lg">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BonusesAndEarnings;
