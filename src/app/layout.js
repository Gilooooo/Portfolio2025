import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

// Load fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700"], // Add more if needed
});

export const metadata = {
  title: "Angelo Sabornido",
  description: "Portfolio of Angelo Sabornido",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable}`}
    >
      <body className="font-orbitron antialiased">
        {children}
      </body>
    </html>
  );
}
