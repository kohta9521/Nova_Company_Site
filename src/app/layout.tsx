import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const appUrl = process.env.NEXT_PUBLIC_APP_URL;
const title = "NEO TOKYO PROJCET | 公式ホームページ";
const description =
  "バッククラウン度に関わらず、すべての人に価値を提供する。全く新しい世界を皆さんにお届けします。";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    url: appUrl,
    siteName: title,
    images: [
      {
        url: `${appUrl}/images/logo.png`,
        width: 240,
        height: 80,
        alt: title,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: `summary`,
    title,
    description,
    creator: "@lone_rogrammer",
    images: [`${appUrl}/images/logo.jpg`],
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
