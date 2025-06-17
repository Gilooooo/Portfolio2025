import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Angelo Sabornido",
  description: "Portfolio of Angelo Sabornido",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable}`}>
      <body
        className="font-mono antialiased"
      >
  
        {children}
      </body>
    </html>
  );
}
