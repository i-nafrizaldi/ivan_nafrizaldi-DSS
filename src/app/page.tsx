import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import images
import pic1 from "../../public/Group 33756.png";
import pic2 from "../../public/Think about what’s at stake (4) 1.png";

import FeatureItem from "@/components/FeatureItem";
import PricingCard from "@/components/PricingCard";
import ServiceItem from "@/components/ServiceItem";
import giftVoucher from "../../public/Group 12.png";
import testi1 from "../../public/Group 7.png";
import testi2 from "../../public/Group 8.png";
import testi3 from "../../public/Group 9.png";
import person4 from "../../public/Think about what’s at stake (10).png";
import person1 from "../../public/Think about what’s at stake (7).png";
import specialOffer1 from "../../public/Think about what’s at stake (8) 1.png";
import person2 from "../../public/Think about what’s at stake (8).png";
import specialOffer from "../../public/Think about what’s at stake (9) 1.png";
import person3 from "../../public/Think about what’s at stake (9).png";
import threehundred from "../../public/you are the 1.png";

export default function Home() {
  return (
    <div className="bg-[#000435] min-h-screen max-w-[568px] container pt-5 pb-10 flex flex-col gap-4 md:gap-8">
      {/* Header Section */}
      <p className="text-white font-normal text-center text-[15px] md:text-[24px]">
        Admin remote support for{" "}
        <span className="text-myTheme-yellow italic font-bold">
          F&B industry
        </span>
      </p>
      <p className="text-white font-normal text-center text-[11px] md:text-[18px]">
        Are admin tasks taking up{" "}
        <span className="text-myTheme-yellow italic font-semibold">
          too much
        </span>{" "}
        of your{" "}
        <span className="text-myTheme-yellow italic font-semibold">time?</span>{" "}
        Focus on{" "}
        <span className="text-myTheme-yellow italic font-semibold">
          delighting
        </span>{" "}
        your customers while we handle the rest.
      </p>

      {/* Image Section */}
      <div className="relative flex items-center mx-auto w-[301px] h-[181px] md:w-[417px] md:h-[253px]">
        <Image
          alt="pic1"
          src={pic1}
          fill
          className="object-contain"
          quality={80}
          loading="lazy"
        />
      </div>

      {/* Save Time & Boost Efficiency Section */}
      <div className="flex flex-col gap-4">
        <p className="text-white font-normal text-center text-[15px] md:text-[24px]">
          <span className="text-myTheme-yellow italic font-semibold">Save</span>{" "}
          Time &{" "}
          <span className="text-myTheme-yellow italic font-semibold">
            Boost
          </span>{" "}
          Efficiency
        </p>
        <p className="text-white font-normal text-center text-[11px] md:text-[18px]">
          Effortless Administration
        </p>

        <FeatureItem
          title="Let us handle the admin work for you"
          description="While you focus on creating unforgettable dining experiences."
        />
        <FeatureItem
          title="Professional Virtual Assistants"
          description="Specialize in the unique needs of the F&B industry."
        />
        <FeatureItem
          title="Save Time and Streamline Operations"
          description="Effortlessly."
        />
      </div>

      {/* Pricing Section */}
      <div>
        <p className="text-white font-normal text-center text-[11px] md:text-[18px]">
          Affordable Rates
        </p>
        <div className="grid grid-cols-2">
          <div className="relative flex items-center mx-auto w-[186px] h-[186px]">
            <Image
              alt="pic2"
              src={pic2}
              fill
              className="object-contain"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <div>
              <p className="bg-[#F4F40F] px-1 mx-auto text-white bg-opacity-[52%] text-[41px]">
                $5/hour
              </p>
              <p className="text-white font-normal text-center text-[15px] md:text-[18px]">
                Dedicated service
              </p>
            </div>
            <div>
              <p className="bg-[#F4F40F] w-[126px] mx-auto text-white bg-opacity-[52%] text-[41px]">
                $300
              </p>
              <p className="text-white font-normal text-center text-[15px] md:text-[18px]">
                Advance credit to kickstart your journey
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex flex-col gap-4">
        <p className="text-white font-normal text-center text-[15px] md:text-[24px]">
          Service We{" "}
          <span className="text-myTheme-yellow italic font-semibold">
            Offer
          </span>
        </p>

        <ServiceItem
          title="Payroll & HR"
          description="Process salaries, overtime, and CPF contributions. Manage staff records, schedules, and leave applications."
        />
        <ServiceItem
          title="Financial Reporting"
          description="Prepare profit and loss statements. Handle bookkeeping, budgeting, and vendor payments."
        />
        <ServiceItem
          title="Customer Feedback & Social Media Management"
          description="Respond to online reviews and resolve complaints. Handling social media content, respond to online reviews and resolve complaints. Provide actionable insights to improve customer satisfaction."
        />
        <ServiceItem
          title="Inventory Management"
          description="Track stock levels and coordinate procurement. Avoid shortages and reduce waste."
        />
        <ServiceItem
          title="Compliance & Licensing"
          description="Ensure licenses (e.g., food shop, liquor) are up-to-date. Handle regulatory requirements for Singapore’s F&B industry."
        />
        <ServiceItem
          title="Website Maintenance"
          description="Elevate your online presence with professional web design, hosting, and maintenance services. Your website, streamlined and worry-free."
        />
      </div>

      {/* Call to Action Button */}
      <Button className="bg-[#2993FF] w-[240px] h-[68px] rounded-full mx-auto">
        Don't wait - act now!
      </Button>

      {/* Testimonials Section */}
      <div className="flex flex-col">
        <p className="text-white font-normal text-center text-[15px] md:text-[24px]">
          What Did They{" "}
          <span className="text-myTheme-yellow italic font-semibold">Say?</span>
        </p>
        <div className="relative flex items-center my-auto mx-auto w-[366px] h-[108px] md:w-[522px]">
          <Image
            alt="testi1"
            src={testi1}
            fill
            className="object-contain"
            quality={80}
            loading="lazy"
          />
        </div>
        <div className="relative flex items-center my-auto mx-auto w-[366px] h-[108px] md:w-[522px]">
          <Image
            alt="testi2"
            src={testi2}
            fill
            className="object-contain"
            quality={80}
            loading="lazy"
          />
        </div>
        <div className="relative flex items-center my-auto mx-auto w-[366px] h-[108px] md:w-[522px]">
          <Image
            alt="testi3"
            src={testi3}
            fill
            className="object-contain"
            quality={80}
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 my-0">
          <div className="relative mx-auto w-[184px] h-[184px] md:w-[213px] md:h-[213px]">
            <Image
              alt="person1"
              src={person1}
              className="object-contain absolute"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="relative flex mx-auto w-[184px] h-[184px] md:w-[213px] md:h-[213px]">
            <Image
              alt="person2"
              src={person2}
              fill
              className="object-contain"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="relative flex mx-auto w-[184px] h-[184px] md:w-[213px] md:h-[213px]">
            <Image
              alt="person3"
              src={person3}
              fill
              className="object-contain -my-16"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="relative flex mx-auto w-[184px] h-[184px] md:w-[213px] md:h-[213px]">
            <Image
              alt="person4"
              src={person4}
              fill
              className="object-contain -my-16"
              quality={80}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Voucher Section */}
      <div>
        <p className="text-white font-normal text-center text-[15px] md:text-[24px]">
          Act Now and Get a{" "}
          <span className="text-myTheme-yellow italic font-semibold">
            $300 Voucher!
          </span>
        </p>
        <div className="flex flex-row justify-center">
          <div className="relative flex items-end my-auto w-[165px] h-[165px]">
            <Image
              alt="specialOffer"
              src={specialOffer}
              fill
              className="object-contain ml-5"
              quality={80}
              loading="lazy"
            />
          </div>
          <div className="flex items-start">
            <Image
              alt="threehundred"
              src={threehundred}
              className="object-contain -ml-10 w-[314px] h-[165px]"
              quality={80}
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <p className="text-white font-normal text-center text-[15px] md:text-[25px]">
            Voucher
          </p>
          <p className="text-white font-normal text-center text-[11px] md:text-[18px]">
            Redeem your voucher before it’s gone!
          </p>
        </div>
      </div>

      {/* Redeem Button */}
      <Button className="bg-[#2993FF] w-[177px] h-[68px] rounded-full mx-auto">
        Redeem Now!
      </Button>

      {/* Hourly Rate Section */}
      <div>
        <p className="text-white font-bold text-center text-[41px]">$5</p>
        <p className="text-white font-bold text-center text-[15px] md:text-[25px]">
          Hourly Rate
        </p>
        <p className="text-white font-thin text-center text-[11px] md:text-[18px]">
          There’s no better time to offload your admin tasks and focus on
          growing your F&B business.
        </p>
      </div>

      {/* Features Section */}
      <div className="flex flex-col gap-4">
        <FeatureItem
          title="Free Consultation"
          description="Share your challenges, and we’ll create a customized solution."
        />
        <FeatureItem
          title="Quick Onboarding"
          description="We set up workflows and tools tailored to your F&B needs."
        />
        <FeatureItem
          title="Ongoing Support"
          description="Receive regular updates and reports to keep you informed."
        />
        <FeatureItem
          title="Effortless Management"
          description="Our virtual assistants handle your admin work with precision."
        />
      </div>

      {/* Why We're Your Perfect Fit Section */}
      <div>
        <p className="text-white font-normal text-center text-[15px] md:text-[24px]">
          Why We're Your{" "}
          <span className="text-myTheme-yellow italic font-semibold">
            Perfect Fit?
          </span>
        </p>
        <div className="flex flex-col mt-5 gap-4">
          <div className="flex flex-col justify-center px-2 bg-[#656537] w-[310px] h-[52px] md:w-[382px] md:h-[64px]">
            <p className="text-white font-bold italic text-[14px] md:text-[16px]">
              Industry Expertise
            </p>
            <p className="text-white text-[11px] md:text-[14px]">
              Specialized in the unique needs of F&B businesses.
            </p>
          </div>
          <div className="flex flex-col justify-center px-2 bg-[#656537] w-[310px] h-[52px] md:w-[382px] md:h-[64px]">
            <p className="text-white font-bold italic text-[14px] md:text-[16px]">
              Affordable Plans
            </p>
            <p className="text-white text-[11px] md:text-[14px]">$5/hour.</p>
          </div>
          <div className="flex flex-col justify-center px-2 bg-[#656537] w-[310px] h-[52px] md:w-[382px] md:h-[64px]">
            <p className="text-white font-bold italic text-[14px] md:text-[16px]">
              Secure & Reliable
            </p>
            <p className="text-white text-[11px] md:text-[14px]">
              Your data is in safe hands.
            </p>
          </div>
          <div className="flex flex-col justify-center px-2 bg-[#656537] w-[310px] h-[52px] md:w-[382px] md:h-[64px]">
            <p className="text-white font-bold italic text-[14px] md:text-[16px]">
              Flexible Support
            </p>
            <p className="text-white text-[11px] md:text-[14px]">
              Scaled to your business size and demands.
            </p>
          </div>
        </div>
      </div>

      {/* Special Offer Section */}
      <div className="relative flex items-center my-auto mx-auto w-[344px] h-[344px]">
        <Image
          alt="specialOffer1"
          src={specialOffer1}
          fill
          className="object-contain"
          quality={80}
          loading="lazy"
        />
      </div>

      {/* Gift Voucher Section */}
      <div className="relative flex items-center my-auto mx-auto w-[208px] h-[73px]">
        <Image
          alt="giftVoucher"
          src={giftVoucher}
          fill
          className="object-contain"
          quality={80}
          loading="lazy"
        />
      </div>

      {/* Pricing Cards Section */}
      <PricingCard
        title="Admin Support"
        price="$800"
        badgeText="MOST POPULAR"
        backgroundColor="bg-[#2993FF]"
        features={[
          {
            title: "Daily Administrative Tasks",
            items: [
              "Email and calendar management",
              "Scheduling appointments and meetings",
              "Data entry and record-keeping",
            ],
          },
          {
            title: "Document Preparation",
            items: [
              "Creating, formatting, and organizing documents",
              "Preparing reports and presentations",
            ],
          },
          {
            title: "Task Prioritization",
            items: ["Organizing to-do lists", "Ensuring deadlines are met"],
          },
        ]}
      />

      <PricingCard
        title="Email Marketing"
        price="$800"
        badgeText="100% revenue creator"
        backgroundColor="bg-[#FF6B00]"
        features={[
          {
            title: "Email Campaign Setup",
            items: [
              "Designing and copywriting for email templates.",
              "Managing email distribution schedules",
            ],
          },
          {
            title: "List Management",
            items: [
              "Segmenting and organizing email lists",
              "Maintaining a clean database",
            ],
          },
          {
            title: "Campaign Optimization",
            items: [
              "A/B testing for subject lines, CTAs, and visuals",
              "Analyzing campaign performance and generating reports",
            ],
          },
          {
            title: "Automation",
            items: [
              "Setting up email workflows (e.g., welcome series, cart abandonment, promotional offers)",
            ],
          },
        ]}
      />

      <PricingCard
        title="Web Design, Hosting, and Maintenance"
        price="$125"
        badgeText="MOST AFFORDABLE"
        backgroundColor="bg-[#960000]"
        features={[
          {
            title: "Custom Web Design",
            items: [
              "Professional, mobile-responsive website tailored to your brand.",
              "Up to 5 pages included (e.g., Home, About Us, Services, Blog, Contact)",
              "Web Hosting",
              "Super fast speed cloud server",
            ],
          },
          {
            title: "Website Maintenance",
            items: [
              "Monthly updates to ensure functionality and security.",
              "Bug fixes, performance monitoring, and optimization",
              "Anti-virus protection",
              "Adding or updating content as needed",
            ],
          },
          {
            title: "Analytics",
            items: ["Google Analytics setup and monthly traffic reports."],
          },
        ]}
      />

      <PricingCard
        title="Social Media Management"
        price="$800"
        badgeText="BEST VALUE"
        backgroundColor="bg-[#35D36C]"
        features={[
          {
            title: "Content Creation",
            items: [
              "15–20 posts per month, including graphics, captions, and hashtags",
              "Custom content tailored to your brand and audience",
            ],
          },
          {
            title: "Platform Management",
            items: [
              "Managing up to 2 platforms (e.g., Instagram, Facebook, or LinkedIn)",
              "Daily posting and audience engagement",
            ],
          },
          {
            title: "Analytics and Reporting",
            items: [
              "Monitoring performance metrics (likes, shares, clicks)",
              "Monthly reports with insights and recommendations",
            ],
          },
          {
            title: "Community Engagement",
            items: [
              "Responding to comments and messages.",
              "Engaging with followers to build community",
            ],
          },
        ]}
      />
    </div>
  );
}
