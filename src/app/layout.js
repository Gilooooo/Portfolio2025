import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import LoadingWrapper from "@/_Components/Loading";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const chillax = localFont({
  src: "./fonts/Chillax-Variable.ttf",
  variable: "--font-chillax",
  display: "swap",
});

export const metadata = {
  title: "Angelo Sabornido",
  description: "Portfolio of Angelo Sabornido",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${chillax.variable}`}
    >
      <body className="antialiased" style={{ fontFamily: "var(--font-chillax), 'Century Gothic'" }}>
        <LoadingWrapper>{children}</LoadingWrapper>
      </body>
    </html>
  );
}
