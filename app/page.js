"use client";
import { useState } from "react";
import Image from "next/image";
import BetBanner from "../public/w567game.webp";
import Features from "./components/Features";
import Carousel from "./components/Caurosel";
import Conclusion from "./components/Conclusion";
import FAQs from "./components/Faqs";
import { DownloadIcon } from "lucide-react";
import Rules from "./components/Rules";
import HowToPlay from "./components/HowToPlay";
import EarnMoney from "./components/EarnMoney";
import Link from "next/link";
import Benifit from "./components/Benifit";
import PopularGames from "./components/PopularGames";
import BonusesAndEarnings from "./components/Bonuses";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTOC = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="flex flex-col  justify-center space-y-5 text-white  text-start">
      <section className="">
        <div className="max-w-7xl mx-auto flex flex-col text-center items-center justify-between gap-10 p-5 px-6">
          <div className="flex-1 max-w-3xl">
            <h1 className="text-3xl  md:text-5xl leading-tight mb-6 text-green-500">
              W567 Game Download APK - New Real Earning APK Pakistan{" "}
            </h1>
            <p className="text-lg ">
              W567 game is one of the newest and latest casino apps for players
              in Pakistan. It is designed to provide both entertainment and
              earning opportunities, making it stand out in the world of online
              games. Whether you are someone who loves card games, slot
              machines, or multiplayer challenges, it has something for
              everyone. Its wide collection of games ensures that players never
              get bored, and updated regularly to keep the excitement alive.
            </p>
            <a
              href="https://w567.game/?dl=ebhwd6"
              className="inline-flex items-center justify-center bg-green-600 hover:bg-emerald-700 text-white text-lg font-semibold px-8 py-3 rounded-md shadow-md transition mt-5 gap-2 w-full"
            >
              DOWNLOAD <DownloadIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="px-10">
        <div className="max-w-xl mx-auto border border-green-500">
          <div className="bg-white text-green-600 font-semibold text-lg px-6 py-3 border-b border-green-500 flex justify-between">
            <span>App Name</span>
            <span>w567 Game</span>
          </div>

          <div className="bg-white text-green-600 px-6 py-3 border-b border-green-500 flex justify-between">
            <span className="font-bold">Publisher</span>
            <span>W567 Game</span>
          </div>

          <div className="bg-white text-green-600 px-6 py-3 border-b border-green-500 flex justify-between">
            <span className="font-bold">Category</span>
            <span>Casino, Betting</span>
          </div>

          <div className="bg-white text-green-600 px-6 py-3 border-b border-green-500 flex justify-between">
            <span className="font-bold">Version</span>
            <span>Latest</span>
          </div>

          <div className="bg-white text-green-600 px-6 py-3 flex justify-between">
            <span className="font-bold">Size</span>
            <span>6 MB</span>
          </div>
        </div>
      </section>
      <section className="text-white max-w-5xl text-center mx-auto px-6">
        <p className="text-lg">
          In addition, W567 Game Download APK is easy to install and works
          smoothly on Android and iOS devices. It is also built with
          user-friendly navigation, so even beginners can understand the system
          without much effort. Unlike many complicated platforms, it on
          simplicity while still delivering a professional gaming experience.
          This balance of ease and quality is what makes it appealing to a wide
          audience.
        </p>
      </section>
      <section className="flex items-center justify-center">
        <div>
          <Image src={BetBanner} alt="Download W567 Game" width={900} />
        </div>
      </section>

      <section className="text-white max-w-5xl mx-auto px-6">
        <div className=" flex flex-col items-center justify-center  text-center mt-6 space-y-4  px-6">
          <h2 className="text-3xl  font-semibold md:text-4xl leading-13  text-green-500">
            What is W567 Game APK?
          </h2>
          <p className="md:text-xl ">
            <Link href={"https://w567game.cc"} className="m-1 underline">
              W567 Game
            </Link>{" "}
            App is best and well-known casino that combines fun, entertainment,
            and earning opportunities in one place. Moreover, It offers a wide
            range of games, including slots, card games, arcade options, and
            multiplayer challenges, so every player can find something they
            enjoy. Thus, it is designed with a simple and user-friendly
            interface, making it easy for beginners to start without confusion.
          </p>
          <p className="md:text-xl mt-1 ">
            At the same time, it provides exciting features like bonuses,
            loyalty rewards, and quick earning options for regular players. With
            secure payments, fast withdrawals, and reliable customer support, it
            has built trust among users. Overall, it is more than just a game
            it’s a safe and rewarding space for online entertainment in
            Pakistan.
          </p>
        </div>
      </section>
      <section className="text-white max-w-5xl mx-auto px-6 mt-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-green-500">
            Having Trouble with W567 Game? Here’s How to Fix It
          </h2>
          <p className="text-lg mt-4">
            If youre experiencing performance issues while playing{" "}
            <strong>W567 Game</strong>, youre not alone. Below are the most
            frequent problems users face — and the steps to solve them quickly.
          </p>
        </div>

        {/* Issue 1 */}
        <div className="bg-green-900 rounded-lg p-6 mb-6 shadow-md">
          <h3 className="text-xl font-semibold text-green-300 mb-2">
            🐢 Issue: Game Runs Slowly or Lags
          </h3>
          <p className="mb-2">
            Is W567 Game feeling sluggish or skipping frames during gameplay?
            This can take the fun out of your experience.
          </p>
          <h4 className="text-green-400 font-semibold mb-1">💡 How to Fix:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>Close all background apps to free up RAM and CPU.</li>
            <li>Lower the in-game graphics settings to improve performance.</li>
            <li>
              Switch to a stable and fast Wi-Fi or mobile data connection.
            </li>
            <li>
              Use a phone cleaning tool to remove junk files and optimize device
              speed.
            </li>
          </ul>
        </div>

        <div className="bg-green-900 rounded-lg p-6 mb-6 shadow-md">
          <h3 className="text-xl font-semibold text-green-300 mb-2">
            ❄️ Issue: Game Freezes or Shuts Down Unexpectedly
          </h3>
          <p className="mb-2">
            Does your W567 Game app crash suddenly or freeze mid-game? Heres how
            to stabilize it.
          </p>
          <h4 className="text-green-400 font-semibold mb-1">💡 How to Fix:</h4>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Install the latest version of W567 Game from the official site to
              ensure bug fixes.
            </li>
            <li>Clear the app’s cache from your phone’s app settings.</li>
            <li>
              Reboot your device to refresh system memory and background
              processes.
            </li>
            <li>
              Make sure your device has enough internal storage (at least 1GB
              free space recommended).
            </li>
          </ul>
        </div>
      </section>

      <Features />
      <Carousel />

      <Benifit />
      <PopularGames />
      <BonusesAndEarnings />
      <EarnMoney />

      <HowToPlay />
      <Rules />
      <Conclusion />

      <FAQs />
    </main>
  );
}
