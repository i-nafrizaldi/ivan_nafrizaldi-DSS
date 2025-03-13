import Image from "next/image";
import React from "react";
import like from "../../public/Facebook Like.png";

const FeatureItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-7">
      <div className="relative flex items-center my-auto mx-auto w-[26px] h-[26px] md:w-[35px] md:h-[35px]">
        <Image
          alt="like"
          src={like}
          fill
          className="object-contain"
          quality={80}
          loading="lazy"
        />
      </div>
      <div className="flex flex-col col-span-6 text-[11px] md:text-[18px]">
        <p className="text-myTheme-yellow italic font-semibold">{title}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
