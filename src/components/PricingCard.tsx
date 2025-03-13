import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";

const PricingCard = ({
  title,
  price,
  badgeText,
  backgroundColor,
  features,
}: {
  title: string;
  price: string;
  badgeText: string;
  backgroundColor: string;
  features: { title: string; items: string[] }[];
}) => (
  <div className="bg-white mx-auto max-w-[344px] min-h-[220px] md:min-w-[380px] md:min-h-[220px] flex flex-col">
    <div className={`${backgroundColor} h-[92px] grid grid-cols-3`}>
      <div className="col-span-2 flex flex-col">
        <div>
          <p className="bg-[#FFCC00] w-fit py-1 px-5 text-[13px] font-bold">
            {badgeText}
          </p>
        </div>
        <div className="px-5 text-white text-[20px] md:text-[24px] justify-center my-auto">
          {title}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[24px] md:text-[35px] font-bold text-white">
          {price}
        </p>
        <p className="text-[14px] md:text-[18px] text-white">/month</p>
      </div>
    </div>
    <div className="p-3 gap-3 flex flex-col justify-between min-h-[128px]">
      <Accordion type="single" collapsible className="w-[320px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <div className="text-[15px] flex flex-col gap-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <p className="font-bold">{feature.title}</p>
                  <ul>
                    {feature.items.map((item, i) => (
                      <li key={i} className="font-thin">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        variant={"outline"}
        className="outline-[#2993FF] outline text-[#2993FF] mx-auto w-[294px]"
      >
        Select this plan
      </Button>
    </div>
  </div>
);
export default PricingCard;
