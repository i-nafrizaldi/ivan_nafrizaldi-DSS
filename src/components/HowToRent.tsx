import Image from "next/image";
import Link from "next/link";

const HowToRent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <div className="hidden md:block w-full h-[300px] md:h-[500px] relative rounded-r-[150px] overflow-hidden">
        <Image
          alt=""
          src={"/Salinan surfing.png"}
          fill
          className="object-cover object-center"
          loading="lazy"
          quality={80}
        />
      </div>
      <div className="flex flex-col gap-14 my-auto">
        <div className="flex gap-8 items-center">
          <div className="md:w-14 md:h-14 w-10 h-10 rounded-full bg-slate-900 text-white justify-center flex items-center font-semibold text-lg">
            01
          </div>
          <div className="flex items-center font-semibold md:text-2xl">
            Tentukan Tanggalnya
          </div>
        </div>
        <div className="flex gap-8 items-center md:ml-[100px] ml-0">
          <div className="md:w-14 md:h-14 w-10 h-10 rounded-full bg-slate-900 text-white justify-center flex items-center font-semibold text-lg">
            02
          </div>
          <div className="flex items-center font-semibold md:text-2xl">
            Pilih Motornya
          </div>
        </div>
        <div className="flex gap-8 items-center md:ml-[200px] ml-0">
          <div className="md:w-14 md:h-14 w-10 h-10 rounded-full bg-slate-900 text-white justify-center flex items-center font-semibold text-lg">
            03
          </div>
          <div className="flex items-center font-semibold md:text-2xl">
            Tentukan Lokasi Pengantaran
          </div>
        </div>

        <div className="flex gap-8 items-center md:ml-[300px] ml-0">
          <div className="md:w-14 md:h-14 w-10 h-10 rounded-full bg-slate-900 text-white justify-center flex items-center font-semibold text-lg">
            04
          </div>
          <Link
            href={
              "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motornya%2C%20boleh%20minta%20informasi%20lebih%20lanjut%20ya%2C%20Kak%3F"
            }
            className="flex items-center text-myTheme-red hover:text-red-500 font-semibold md:text-2xl"
          >
            Chat baba garage jogja
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToRent;
