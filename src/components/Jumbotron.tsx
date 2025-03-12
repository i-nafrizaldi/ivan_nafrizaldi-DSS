// "use client";
// import React from "react";
// import { Button } from "./ui/button";

// const Jumbotron = () => {
//   return (
//     <>
//       <div className=" relative bg-bannerImg bg-cover bg-no-repeat w-full bg-center h-[600px] ">
//         <div className="w-full absolute inset-0 bg-black bg-opacity-50"></div>
//         {/* content */}
//         <div className="relative z-10 container flex flex-col h-full text-white justify-center gap-4">
//           <h1 className="text-[100px] font-extrabold">
//             Motoran Seru di <span className="text-myTheme-red">JOGJA</span>
//           </h1>
//           <p className=" text-2xl font-thin">
//             Keliling Jogja jadi lebih seru bareng motor kami,
//             <br /> teman setia buat nikmatin setiap sudut kota istimewa!
//           </p>
//           <div>
//             <Button
//               className="bg-myTheme-red text-xl font-bold h-14"
//               onClick={() =>
//                 window.open(
//                   "https://wa.me/62895329585854?text=Saya%20mau%20sewa%20motornya%2C%20boleh%20minta%20informasi%20lebih%20lanjut%20ya%2C%20Kak%3F",
//                   "_blank"
//                 )
//               }
//             >
//               Booking Sekarang!
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Jumbotron;

"use client";
import React from "react";
import { Button } from "./ui/button";

const Jumbotron = () => {
  return (
    <>
      <div className="relative bg-bannerImg bg-cover bg-no-repeat w-full bg-center h-[600px] md:h-[600px] sm:h-[400px]">
        <div className="w-full absolute inset-0 bg-black bg-opacity-50"></div>
        {/* content */}
        <div className="relative z-10 container flex flex-col h-full text-white justify-center gap-4 px-4 sm:px-8 md:px-16">
          <h1 className="md:text-[100px] font-extrabold sm:text-[80px] text-5xl line-clamp-3 text-center md:text-left">
            Motoran Seru di <span className="text-myTheme-red">JOGJA</span>
          </h1>
          <p className="md:text-2xl font-thin sm:text-xl text-center md:text-left">
            Keliling Jogja jadi lebih seru bareng motor kami,
            <br /> teman setia buat nikmatin setiap sudut kota istimewa!
          </p>
          <div className="text-center md:text-left">
            <Button
              className="bg-myTheme-red text-xl font-bold h-14 sm:w-full md:w-auto"
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

export default Jumbotron;
