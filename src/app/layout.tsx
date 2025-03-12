import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import Head from "next/head";

const inter = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900", "300", "800"],
});

export const metadata: Metadata = {
  title: "Baba Garage Jogja | Rental Motor Jogja",
  description:
    "Baba Garage Jogja menyediakan rental motor murah di Yogyakarta dengan layanan lengkap seperti helm gratis dan antar jemput.",
  keywords: [
    "Rental motor jogja",
    "sewa motor jogja",
    "Rental motor yogyakarta",
    "sewa motor yogyakarta",
    "baba garage jogja",
    "rental motor murah jogja",
    "sewa motor murah jogja",
    "rental motor terdekat jogja",
    "tempat viral di jogja",
    "wisata jogja",
    "liburan jogja",
    "kuliner jogja ",
  ],
  openGraph: {
    title: "Baba Garage Jogja | Rental Motor Jogja",
    description:
      "Baba Garage Jogja menyediakan rental motor murah di Yogyakarta dengan layanan lengkap seperti helm gratis dan antar jemput.",
    images: [""],
    url: "https://babagaragejogja.com ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Baba Garage Jogja | Rental Motor Jogja</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Baba Garage Jogja",
              description:
                "Rental motor murah di Jogja dengan layanan lengkap seperti helm gratis dan antar jemput.",
              url: "https://babagaragejogja.com",
              telephone: "+62 895 3295 85854",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Muja - Muju, Umbulharjo",
                addressLocality: "Yogyakarta",
                addressCountry: "ID",
              },
              image: "https://babagaragejogja.com/logo.png",
              priceRange: "Rp75.000 - Rp130.000",
              openingHours: "Mo-Su 08:00-20:00",
            }),
          }}
        />
      </Head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
