import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

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
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}