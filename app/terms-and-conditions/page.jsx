import React from "react";

export const metadata = {
  title: "Terms & Conditions | W567 Game",
  description: "Read the terms and conditions of W567 Game at w567game.cc.",
  keywords: ["terms", "conditions", "casino", "W567 Game", "legal"],
  robots: "index, follow",
  openGraph: {
    title: "Terms & Conditions | W567 Game",
    description: "Read our rules and guidelines for using W567 Game.",
    url: "https://w567game.cc/terms",
    siteName: "W567 Game",
    locale: "en_US",
    type: "website",
  },
};
export default function page() {
  return (
    <div className="bg-black text-white px-6 py-10 md:px-20 lg:px-40">
      <h1 className="text-green-500 text-3xl md:text-4xl font-bold mb-6">
        Terms & Conditions | W567 Game
      </h1>

      <p className="mb-6">
        Welcome to W567 Game! These terms and conditions govern your use of our
        website, available at{" "}
        <a
          className="text-green-500 underline"
          href="https://w567game.cc"
          target="_blank"
        >
          https://w567game.cc
        </a>
        . By accessing or using this site, you agree to comply with all terms
        outlined here.
      </p>

      <Section title="Terminology">
        <p>
          “User”, “You” and “Your” refer to the individual accessing this site.
          “Company”, “We”, “Our”, and “Us” refer to W567 Game.
        </p>
      </Section>

      <Section title="Cookies">
        <p>
          Our site uses cookies to enhance your experience. By using W567 Game,
          you agree to our use of cookies as outlined in our{" "}
          <a className="text-green-500 underline" href="/privacy-policy">
            Privacy Policy
          </a>
          .
        </p>
      </Section>

      <Section title="Intellectual Property Rights">
        <ul className="list-disc pl-6 space-y-2">
          <li>Republish content</li>
          <li>Sell, rent, or sub-license materials</li>
          <li>Reproduce or duplicate any portion</li>
          <li>Distribute site content without authorization</li>
        </ul>
      </Section>

      <Section title="User Comments">
        <ul className="list-disc pl-6 space-y-2">
          <li>You hold rights to your content</li>
          <li>Content must not violate third-party IP</li>
          <li>Content must not be defamatory, obscene, or illegal</li>
          <li>No spam or unsolicited promotion</li>
        </ul>
      </Section>

      <Section title="Linking to Our Site">
        <p>
          Certain trusted organizations may link to our site without prior
          permission. Links must not mislead or imply false endorsements.
        </p>
      </Section>

      <Section title="Using Our Brand">
        <p>Use of our logo or branding elements requires written permission.</p>
      </Section>

      <Section title="Frames and Embeds">
        <p>You may not embed or frame our pages without prior approval.</p>
      </Section>

      <Section title="Content Liability">
        <p>
          We’re not responsible for external content linked to or from our site.
        </p>
      </Section>

      <Section title="Privacy Policy">
        <p>
          Review our{" "}
          <a className="text-green-500 underline" href="/privacy-policy">
            Privacy Policy
          </a>{" "}
          to understand how your data is handled.
        </p>
      </Section>

      <Section title="Rights Reserved">
        <p>
          We may update these terms or request link removal at any time.
          Continued use indicates agreement.
        </p>
      </Section>

      <Section title="Link Removal Requests">
        <p>
          If you find offensive content or links, you may contact us. We are not
          obligated to remove them but will consider your request.
        </p>
      </Section>

      <Section title="Accuracy of Information">
        <p>
          We do not guarantee the accuracy or completeness of the content on
          this site. Use is at your own risk.
        </p>
      </Section>

      <Section title="Disclaimer">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            No limitation of liability for death or injury due to negligence
          </li>
          <li>No exclusion of liability for fraud</li>
          <li>No exclusion of liability where not permitted by law</li>
        </ul>
      </Section>

      <div className="mt-10 border-t border-gray-700 pt-6">
        <p>
          Contact us at:{" "}
          <span className="text-green-500 font-semibold">
            adminw568@gmail.com
          </span>
        </p>
        <p className="mt-2">
          Back to{" "}
          <a href="/" className="text-green-500 underline">
            Homepage
          </a>
        </p>
        <p className="mt-4 text-sm text-gray-400">
          © W567 Game - All Rights Reserved
        </p>
      </div>
    </div>
  );
}
function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-green-500 text-xl md:text-2xl font-semibold mb-2">
        {title}
      </h2>
      <div className="text-white text-sm md:text-base">{children}</div>
    </div>
  );
}
