"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data/social";
import MagicButton from "./MagicButton";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full relative pt-20 pb-10 max-md:-pt-0" id="contact">
      {/* Background grid */}
      <div className="w-full absolute left-0 bottom-0 min-h-96 z-0">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 object-cover"
        />
      </div>

      {/* Content centered over the grid */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-96 text-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today and let’s discuss how I can help you achieve
          your goals.
        </p>
        <a href="mailto:erickbale360@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom section */}
      <div className="relative z-10 flex mt-16 max-md:mt-8 md:flex-row flex-col justify-between items-center px-4">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Erick Lema
        </p>
        <div className="flex items-center md:gap-3 gap-6 max-md:pt-3">
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {info.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
