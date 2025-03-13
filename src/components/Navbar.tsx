import Image from "next/image";
import logo from "../../public/digi-02 1.png";
import sale from "../../public/Think about what’s at stake (7) 1.png";

const Navbar = () => {
  return (
    <div className="z-50 h-16 md:h-[81px] bg-[#12CE15] grid grid-cols-3">
      {/* Logo */}
      <div className="relative flex items-center my-auto mx-auto w-[97px] h-[30px] md:w-[308px] md:h-[94px]">
        <Image
          alt="Logo"
          src={logo}
          fill
          className="object-contain"
          quality={80}
          loading="lazy"
        />
      </div>

      {/* Text */}
      <div className="w-[105px] flex items-center mx-auto">
        <p className="font-black text-[16px] md:text-[30px] text-center">
          CLAIM $300 VOUCHER!!!
        </p>
      </div>

      {/* Sale Image */}
      <div className="relative flex items-center mx-auto w-[60px] h-[60px] md:w-[90px] md:h-[90px]">
        <Image
          alt="sale"
          src={sale}
          fill
          className="object-contain"
          quality={80}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Navbar;
