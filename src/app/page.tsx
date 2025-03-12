"use client";
import { MotorcycleCard, motorcycles } from "@/components/Catalogue";
import Faq from "@/components/Faq";
import HowToRent from "@/components/HowToRent";
import Jumbotron from "@/components/Jumbotron";
import TimeToRent from "@/components/TimeToRent";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash.substr(1);
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-HSZ2BDVHC4";
    script.async = true;
    document.head.appendChild(script);

    const scriptConfig = document.createElement("script");
    scriptConfig.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-HSZ2BDVHC4');
  `;
    document.head.appendChild(scriptConfig);
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-16 lg:gap-28 pb-20 px-4 sm:px-8">
      {/* JUMBOTRON */}
      <Jumbotron />

      <div
        id="unit-kami"
        className="flex flex-col items-center container md:gap-10 gap-6 scroll-mt-24"
      >
        <h1 className="text-4xl md:text-[80px] font-bold">Unit Kami</h1>
        <p className="w-full sm:w-3/4 lg:w-1/2 md:text-center text-left text-sm md:text-lg">
          Kami menyediakan berbagai motor matic yang nyaman, termasuk model
          populer seperti Honda Scoopy, Honda Beat, Honda Vario, Honda PCX, dan
          Yamaha NMax. Proses sewa motor di tempat kami sangat mudah dan
          terjangkau. Semua paket sewa sudah termasuk helm gratis dan jas hujan
          untuk kenyamanan berkendara Anda.
        </p>
      </div>

      <MotorcycleCard />

      <div
        id="cara-rental"
        className="flex flex-col items-center container md:gap-10 gap-6 scroll-mt-24"
      >
        <h1 className="text-4xl md:text-[80px] font-bold">Cara Rental</h1>
        <p className="w-full sm:w-3/4 lg:w-1/2 text-left md:text-center text-sm md:text-lg">
          Apakah Anda hanya berlibur beberapa hari atau tinggal selama sebulan,
          kami memiliki paket sewa motor yang fleksibel di Jogja. Untuk Anda
          yang tinggal lebih lama, seperti digital nomad atau pekerja jarak
          jauh, paket sewa jangka panjang kami sangat cocok. Sedangkan untuk
          wisatawan, kami menyediakan sewa motor harian hingga mingguan dengan
          layanan antar dan jemput motor di seluruh wilayah Jogja Kota.
        </p>
      </div>

      <HowToRent />

      <div
        id="faq"
        className="flex flex-col items-center container md:gap-10 gap-6 scroll-mt-24"
      >
        <h1 className="text-4xl md:text-[80px] font-bold">FAQ</h1>
        <p className="w-full sm:w-3/4 lg:w-1/2 text-left md:text-center text-sm md:text-lg">
          Mengendarai motor adalah cara terbaik untuk menikmati keindahan Jogja.
          Semua motor kami dirawat secara berkala untuk memastikan perjalanan
          Anda lancar dan menyenangkan. Baik untuk melintasi jalan kota maupun
          jalan kecil di kampung, motor kami siap menemani eksplorasi Anda tanpa
          kendala.
        </p>
      </div>

      <Faq />

      <TimeToRent />
    </div>
  );
}
