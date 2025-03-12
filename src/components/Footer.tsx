import Image from "next/image";
import { FaFacebookF, FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="kontak" className="bg-black text-[#f1efe7] text-sm">
      <div className="container flex flex-col gap-8 py-10 px-4 sm:px-8 md:px-16 items-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <Image
              alt="Logo"
              src={"/logowhite.png"}
              width={130}
              height={130}
              className="object-contain mx-auto"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="font-extrabold mt-2 text-center text-lg sm:text-xl">
            Rental Motor Jogja
          </div>
        </div>
        <div className="max-w-4xl text-sm text-left md:text-center">
          Kami menawarkan pilihan sewa motor dengan harga ramah di kantong,
          cocok untuk Anda yang ingin menjelajahi Jogja. Baik untuk wisata
          kuliner, mengunjungi tempat-tempat bersejarah, atau menjelajahi
          sudut-sudut kota, layanan kami dirancang untuk memudahkan setiap
          perjalanan Anda. Kami menyediakan motor-motor berkualitas seperti
          Honda Scoopy dan Yamaha NMax, semuanya dengan harga yang kompetitif.
          Sewa motor di tempat kami sudah termasuk helm dan jas hujan agar Anda
          tetap nyaman di jalan.
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center text-center">
          <div className="flex gap-2 items-center justify-center">
            <FaLocationDot />
            <p>Muja - Muju, Umbulharjo, Yogyakarta</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <FaPhone />
            <p>+62 895 3295 85854</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <IoLogoWhatsapp />
            <p>+62 895 3295 85854</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <MdEmail />
            <p>rent@babagaragejogja.com</p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
          <div className="flex gap-2 items-center justify-center">
            <FaFacebookF />
            <p>babagaragejogja</p>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <RiInstagramFill />
            <p>babagaragejogja</p>
          </div>
        </div>
        <div className="text-[12px] font-thin text-center">
          © 2024 - 2025, Baba Garage Jogja
          <br />
          All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
