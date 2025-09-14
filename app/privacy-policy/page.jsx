import React from "react";
export const metadata = {
  title: "Privacy Policy | W567 Game",
  description:
    "Understand how we collect, use, and protect your data at W567 Game.",
  keywords: ["privacy", "policy", "data protection", "W567 Game"],
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy | W567 Game",
    description: "Details on how W567 Game manages and protects your data.",
    url: "https://w567game.cc/privacy-policy",
    siteName: "W567 Game",
    locale: "en_US",
    type: "website",
  },
};
export default function page() {
  return (
    <div className="bg-black text-white px-6 py-10 md:px-20 lg:px-40">
      <h1 className="text-green-500 text-3xl md:text-4xl font-bold mb-8">
        Privacy Policy | W567 Game
      </h1>

      <Section title="Who We Are">
        <p>
          This website is managed and operated by W567 Game. Our official
          website URL is:{" "}
          <a
            className="text-green-500 underline"
            href="https://w567game.cc"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://w567game.cc
          </a>
          .
        </p>
      </Section>

      <Section title="Comments and User Input">
        <p>
          We collect user-submitted data such as name, email, and IP address
          when comments are left on our site. We may use hashed emails with
          Gravatar to show user avatars. View their policy at{" "}
          <a
            className="text-green-500 underline"
            href="https://automattic.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            automattic.com/privacy
          </a>
          .
        </p>
      </Section>

      <Section title="Uploaded Media">
        <p>
          Avoid uploading images with embedded location data (like EXIF GPS) as
          it may be extracted by other users.
        </p>
      </Section>

      <Section title="Cookies">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Comments may store your name/email in cookies for convenience —
            these last for 1 year.
          </li>
          <li>
            A temporary cookie is set on login pages to check if your browser
            accepts cookies.
          </li>
          <li>
            Login/session cookies last for 2 days, or 2 weeks with “Remember
            Me”. Display preferences last 1 year.
          </li>
          <li>
            If you edit or publish an article, a cookie storing post ID will be
            saved for 1 day.
          </li>
        </ul>
      </Section>

      <Section title="Embedded Content">
        <p>
          Articles may include embedded content (e.g., videos, tweets, or
          images). These behave as if you visited the third-party site directly
          and may collect data about you.
        </p>
      </Section>

      <Section title="Data Sharing">
        <p>
          If you initiate a password reset, your IP address may be included in
          the reset email for security reasons.
        </p>
      </Section>

      <Section title="Data Retention">
        <p>
          Comments and related metadata are retained indefinitely. For
          registered users, personal data is stored in their profile and can be
          edited anytime — except for usernames.
        </p>
      </Section>

      <Section title="Your Data Rights">
        <p>
          You may request a copy of your stored personal data or ask us to
          delete it. This excludes data we must retain for legal or
          administrative purposes. Contact us at:{" "}
          <span className="text-green-500 font-semibold">
            admin05@gmail.com
          </span>
          .
        </p>
      </Section>

      <Section title="Where Data Is Sent">
        <p>
          Visitor comments may be processed using automated anti-spam detection
          services.
        </p>
      </Section>

      <div className="mt-10 border-t border-gray-700 pt-6">
        <p className="text-sm text-gray-400">
          © 2025 W567 Game – All Rights Reserved
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
