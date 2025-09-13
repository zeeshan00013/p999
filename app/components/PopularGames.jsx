// components/PopularGames.jsx
const popularGames = [
  {
    category: "Slot Games",
    description:
      "These are simple yet exciting games where players can spin reels for instant rewards.",
    games: ["Classic Fruit Slots", "Lucky Spin Wheel", "Mega Jackpot Slots"],
  },
  {
    category: "Card Games",
    description:
      "Perfect for players who enjoy strategy and skill-based games.",
    games: ["Teen Patti", "Poker Star", "Rummy Challenge"],
  },
  {
    category: "Casino Style Games",
    description: "For those who love the thrill of real casino tables at home.",
    games: ["Roulette Royal", "Blackjack Pro", "Baccarat Deluxe"],
  },
  {
    category: "Arcade Games",
    description:
      "Light-hearted games that are easy, colorful, and fun for all ages.",
    games: ["Bubble Shooter", "Fish Hunter", "Candy Match"],
  },
  {
    category: "Multiplayer Games",
    description:
      "Interactive games where friends and families can compete together.",
    games: ["Ludo Battle", "Snakes and Ladders", "Chess Arena"],
  },
  {
    category: "Special Jackpot Games",
    description:
      "Games designed to give players a chance at big prizes with small investments.",
    games: ["Daily Lucky Draw", "Golden Spin", "Mystery Box"],
  },
];

const PopularGames = () => {
  return (
    <div className=" text-white p-6 rounded-lg max-w-5xl mx-auto">
      <h2 className="md:text-4xl text-3xl text-green-500 font-bold mb-6 text-center  ">
        Top and Popular Game List of W567 Game APK
      </h2>
      <p className="mb-8 text-center">
        W567 has a rich collection of games that suits every type of player. It
        offers variety under different categories, ensuring players have
        multiple choices. Following are some of its popular categories available
        here.
      </p>

      {popularGames.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-semibold text-green-600">
            {section.category}
          </h3>
          <p className="mb-2">{section.description}</p>
          <ul className="list-disc list-inside pl-4">
            {section.games.map((game, idx) => (
              <li key={idx}>{game}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PopularGames;
