import React from "react";

const ServiceItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-7">
      <div className="flex flex-col col-span-6 text-[11px] md:text-[18px]">
        <p className="text-myTheme-yellow italic font-semibold">{title}</p>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};
export default ServiceItem;
