import { DownloadIcon } from "lucide-react";
import Head from "next/head";

export const metadata = {
  title: "About Us | W567 Game",
  description:
    "Learn more about W567 Game, our goals, services, and how we aim to deliver authentic and helpful gaming content.",
  keywords: ["w567 about", "conditions", "W567 Game", "legal Info"],
  robots: "index, follow",
  openGraph: {
    title: "About Us | W567 Game",
    description: "About us page tell you who we are w567game",
    url: "https://www.w567game.cc/about-us",
    siteName: "W567 Game",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.w567game.c/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
      <div className="bg-black text-white px-6 py-10 md:px-20 lg:px-40">
        <h1 className="text-green-500 text-3xl md:text-4xl font-bold mb-8">
          About Us | W567 Game
        </h1>
        <Section>
          <a
            href="https://w567.game/?dl=ebhwd6"
            className="inline-flex items-center justify-center bg-green-600 hover:bg-emerald-700 text-white text-lg font-semibold px-8 py-3 rounded-md shadow-md transition mt-5 gap-2 w-full"
          >
            DOWNLOAD <DownloadIcon />
          </a>
        </Section>
        <Section title="Welcome to W567 Game">
          <p>
            Hello and welcome! We’re thrilled to have you here and appreciate
            your interest in learning more about W567 Game. In today’s digital
            world, people rely heavily on online platforms for entertainment,
            information, and solutions. We created W567 Game to be a reliable
            source of updated and trustworthy gaming content — especially for
            users in Pakistan.
          </p>
        </Section>

        <Section title="Our Mission">
          <p>
            With so much misinformation and fake content online, our goal is to
            offer 100% original, safe, and user-friendly content. We’re
            committed to helping you find genuine gaming resources, updates, and
            opportunities to explore new games.
          </p>
        </Section>

        <Section title="What We Do">
          <p>
            W567 Game is centered around the **gaming niche**, offering details
            about mobile games, downloads, real-earning opportunities, and the
            latest updates. Whether you're new to gaming or an experienced
            player, we aim to keep you informed and engaged with fresh content.
          </p>
          <p className="mt-4">
            While gaming is our primary focus, we also share content across
            other categories to provide a broader experience. Visit our{" "}
            <a href="/" className="text-green-500 underline">
              homepage
            </a>{" "}
            to explore all available sections.
          </p>
        </Section>

        <Section title="Stay Connected">
          <p>
            You can stay updated with the latest posts and announcements by
            subscribing via email or following us on our social platforms. All
            links are available on the homepage. We encourage you to join our
            growing community!
          </p>
        </Section>

        <Section title="Why We Built W567 Game">
          <p>
            Many users spend hours looking for genuine information — and often
            land on unreliable sites. W567 Game was built to change that. Our
            mission is simple: **provide clean, clear, and valuable content**
            that actually helps.
          </p>
        </Section>

        <Section title="Message from the Admin">
          <p>
            Hi, I’m Soumya — the founder of W567 Game. From my experience
            online, I noticed that most people struggle to find honest
            information. That’s why I created this platform: to offer **100%
            legit and accurate content** that users can trust. It’s my dream to
            build a trusted resource, and I thank you for being part of that
            journey.
          </p>
        </Section>

        <Section title="Contact Information">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="text-green-500 font-semibold">Name:</span> Soumya
            </li>
            <li>
              <span className="text-green-500 font-semibold">Email:</span>{" "}
              adminw567@gmail.com
            </li>
            <li>
              <span className="text-green-500 font-semibold">Facebook:</span>{" "}
              Not shared
            </li>
            <li>
              <span className="text-green-500 font-semibold">Twitter:</span> Not
              shared
            </li>
            <li>
              <span className="text-green-500 font-semibold">Instagram:</span>{" "}
              Not shared
            </li>
          </ul>
          <p className="mt-4">
            For suggestions, questions, or any feedback, feel free to reach out
            via the above contact info or by using the
            <a href="/contact" className="text-green-500 underline ml-1">
              Contact Us
            </a>{" "}
            page.
          </p>
        </Section>

        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-400">
            © 2025 W567 Game – All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-green-500 text-xl md:text-2xl font-semibold mb-2">
        {title}
      </h2>
      <div className="text-white text-sm md:text-base space-y-2">
        {children}
      </div>
    </div>
  );
}
