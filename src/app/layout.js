import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Star Interior",
  description: "Modern and premium interior design solutions for your home and office.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${hankenGrotesk.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}