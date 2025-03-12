import Head from "next/head";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const motorcycles = [
  {
    image: "/beat-black.png",
    name: "Honda Beat 110",
    description:
      "Pilihan tepat untuk berkendara harian yang hemat dan praktis.Motor ringan dengan desain modern yang cocok untuk perjalanan didalam kota.",
    price: "Rp75.000 / Hari",
    link: "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motor%20Honda%20Beat.%20Mohon%20informasi%20lebih%20lanjut%20ya%2C%20Kak.",
  },
  {
    image: "/scoopy-red-2023.jpg",
    name: "Honda Scoopy 110",
    description:
      "Nikmati berkendara dengan motor yang responsif dan lincah dibawah kendali penuh Anda, Rasakan kenyamanan yang membuat perjalanan Anda semakin menyenangkan dan seru!",
    price: "Rp90.000 / Hari",
    link: "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motor%20Honda%Scoopy.%20Mohon%20informasi%20lebih%20lanjut%20ya%2C%20Kak.",
  },
  {
    image: "/fazzio-black1.png",
    name: "Yamaha Fazzio 125",
    description:
      "Desain unik dan tampilan stylish untuk pengalaman berkendara yang lebih menyenangkan. Dilengkapi teknologi terbaru seperti lampu LED dan kunci remote untuk tingkat kenyamanan baru.",
    price: "Rp90.000 / Hari",
    link: "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motor%20Yamaha%20Fazzio.%20Mohon%20informasi%20lebih%20lanjut%20ya%2C%20Kak.",
  },
  {
    image: "/new-vario-black.png",
    name: "Honda Vario 125",
    description:
      "Berkendara lebih bertenaga dengan motor yang tangguh dan irit bahan bakar. Tampil sporty dengan teknologi canggih yang meningkatkan kenyamanan Anda.",
    price: "Rp90.000 / Hari",
    link: "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motor%20Honda%20Vario%20125.%20Mohon%20informasi%20lebih%20lanjut%20ya%2C%20Kak.",
  },
  {
    image: "/new-vario-black.png",
    name: "Honda Vario 150",
    description:
      "Motor premium dengan performa maksimal untuk perjalanan harian yang nyaman. Desain elegan dipadukan dengan fitur modern seperti kunci pintar dan lampu LED.",
    price: "Rp110.000 / Hari",
    link: "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motor%20Honda%20Vario%20150.%20Mohon%20informasi%20lebih%20lanjut%20ya%2C%20Kak.",
  },
  {
    image: "/pcx-black.png",
    name: "Honda PCX 160",
    description:
      "Rasakan pengalaman berkendara di level yang lebih superior dan elegan! Desain premium dengan performa berkendara yang lebih baik serta teknologi dan fitur keamanan terbaru.",
    price: "Rp130.000 / Hari",
    link: "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motor%20Honda%20PCX%20160.%20Mohon%20informasi%20lebih%20lanjut%20ya%2C%20Kak.",
  },
];

export const MotorcycleCard = () => {
  const productSchema = motorcycles.map((product) => ({
    "@type": "Product",
    name: product.name,
    image: `https://babagaragejogja.com${product.image}`, // Adjust with your domain
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price.replace("Rp", "").replace(" / Hari", "").trim(),
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      url: product.link,
    },
  }));

  return (
    <>
      <Head>
        {/* Add JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": productSchema,
            }),
          }}
        />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 container">
        {motorcycles.map((motorcycle, index) => (
          <Card
            key={index}
            className="mb-8 sm:mb-16 md:mb-24 bg-white rounded-lg overflow-hidden"
          >
            <CardContent className="flex flex-col gap-6 sm:gap-8 p-4 sm:p-6">
              <div className="w-full h-[300px] sm:h-[400px] relative">
                <Image
                  alt={motorcycle.name}
                  src={motorcycle.image}
                  fill
                  className="object-center object-contain"
                  loading="lazy"
                  quality={80}
                />
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center">
                {motorcycle.name}
              </h1>

              <p className="text-sm sm:text-base text-center text-gray-700">
                {motorcycle.description}
              </p>

              <p className="text-lg sm:text-xl font-semibold text-center text-myTheme-red">
                {motorcycle.price}
              </p>

              <Button
                className="bg-myTheme-red text-white font-semibold p-2 w-full sm:w-48 mx-auto"
                onClick={() => window.open(motorcycle.link, "_blank")}
              >
                Booking Sekarang!
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};