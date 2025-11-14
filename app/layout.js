import { Geist, Geist_Mono } from "next/font/google";
import InitialLoader from "./components/InitLoader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gameplayz - Esports Tournaments, Scrims & Team Platform",
  description:
    "Gameplayz is an esports platform where players join tournaments and scrims, build teams, and grow their esports profile. Organizers can host tournaments with automated brackets, payments, and match management.",
  keywords: [
    "esports",
    "esports tournaments",
    "bgmi tournaments",
    "valorant tournaments",
    "scrims",
    "team management",
    "gaming platform",
    "esports India",
    "tournament organizer tools",
    "paid scrims",
    "paid tournaments"
  ],
  authors: [{ name: "Gameplayz" }],
  openGraph: {
    title: "Gameplayz – Play Tournaments & Build Your Esports Profile",
    description:
      "Join esports tournaments, create teams, participate in scrims, or host events with automated brackets and payments.",
    url: "https://gameplayz.in",
    siteName: "Gameplayz",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gameplayz – Esports Tournaments & Scrims",
    description:
      "Join tournaments, form teams, and build your esports career on Gameplayz.",
  },
};

export default function RootLayout({ children }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Gameplayz",
    url: "https://gameplayz.in",
    logo: "https://gameplayz.in/apple-touch-icon.png",
    sameAs: [
      // add socials when ready
    ],
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gameplayz",
    url: "https://gameplayz.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gameplayz.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <InitialLoader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </body>
    </html>
  );
}
