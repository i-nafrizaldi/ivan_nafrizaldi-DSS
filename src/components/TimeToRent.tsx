"use client";
import { Button } from "./ui/button";

const TimeToRent = () => {
  return (
    <>
      <div className="relative bg-bannerImg1 bg-cover bg-no-repeat w-full bg-top h-[700px] md:h-[900px]">
        <div className="w-full absolute inset-0 bg-black bg-opacity-50"></div>
        {/* content */}
        <div className="relative z-10 container flex flex-col h-full justify-center gap-4 px-4">
          <div className="flex flex-col gap-8 bg-white px-6 py-8 w-full md:w-[700px] rounded-xl mx-auto">
            <p className="font-extrabold text-[30px] sm:text-[40px] text-center">
              Saatnya Sewa Motor!
            </p>
            <p className="md:text-center text-sm md:text-lg text-left">
              Pesan Motor Anda Hari Ini! Sedang mencari penawaran terbaik? Lihat
              daftar harga sewa motor kami secara online atau hubungi kami
              langsung untuk kemudahan pemesanan. Dengan layanan kami, Anda akan
              menemukan motor rental yang andal untuk berbagai kebutuhan, baik
              untuk berkeliling kota, menjelajahi tempat wisata, atau sekadar
              menikmati gaya hidup santai di Jogja.
            </p>

            <Button
              className="bg-myTheme-red text-xl font-bold h-14"
              onClick={() =>
                window.open(
                  "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motornya%2C%20boleh%20minta%20informasi%20lebih%20lanjut%20ya%2C%20Kak%3F",
                  "_blank"
                )
              }
            >
              Booking Sekarang!
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeToRent;
