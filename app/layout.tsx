import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Shefa | Strategic Connections. Sustainable Growth.",
    template: "%s | Shefa",
  },
  description:
    "Shefa partners with business owners and executive teams to solve growth challenges, develop strategic opportunities, and connect them with the right people and resources.",
  metadataBase: new URL("https://shefa.info"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <Header />
        <main id="main-content" className="pt-[60px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
