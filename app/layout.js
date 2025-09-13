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
  keywords: ["W567, W567 game Download, W 567, W567 apk,  W 567 download"],
  title: {
    default: "W567 Game Download APK New Real Earning APP In Pakistan",
    template: "%s | W567",
  },
  description:
    "W567 Game - Play exciting games and earn real cash. Now available for users in Pakistan. Download and start earning today!",
  openGraph: {
    description: "W567 is the best and top game app in pakistan",
    url: "https://www.P999gamepk.pk",
    images: ["https://www.P999gamepk.pk/Images/sn.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    description: "W567  Game Download win real money apk today 2025",
    images: ["https://www.w567game.cc/Images/sn.webp"],
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
