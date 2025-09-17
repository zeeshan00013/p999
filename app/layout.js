import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.w567game.cc"),
  title: {
    default: "Download W567 Game APK – Real Cash App pakistan 2025",
    template: "%s | W567 Game",
  },
  description:
    "Download the W567 Game APK – Pakistan’s top real-money casino app. Enjoy slots, cards & more. Safe, fast, and 100% secure earning experience.",
  keywords: [
    "W567 Game",
    "W567 APK Download",
    "W567 Casino App",
    "Earn Money Online Pakistan",
    "Real Money Game 2025",
    "Google best Money Game 2025",
  ],
  openGraph: {
    title: "Download W567 Game – Top Casino App in Pakistan",
    description:
      "Play and earn with W567 – the most trusted real-money casino app in Pakistan. Get the latest APK & start winning today!",
    url: "https://www.w567game.cc",
    images: ["https://www.w567game.cc/Images/w567game.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "W567 Game – Earn Real Money | Download APK Now",
    site: "@yourtwitterhandle",
    description:
      "W567 Game is Pakistan’s most exciting real-money casino app. Download now and start earning securely.",
    images: ["https://www.w567game.cc/Images/w567game.webp"],
  },
  alternates: {
    canonical: "https://www.w567game.cc",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="ri1ib-_5-rZbimw83LJmDVXyi3EQC3TkA39mkTut9Uc"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  bg-[#010101]`}
        cz-shortcut-listen="true"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
