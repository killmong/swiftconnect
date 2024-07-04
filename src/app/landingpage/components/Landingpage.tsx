"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/common/components/Container";
import SliderItem from "./SliderItem";
import BackgroundBeams from "@/common/components/BackgroundBeams";
const LandingPage: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col lg:space-y-5 background landing-page">
      <Container>
        <div className="flex flex-col justify-center h-full items-center text-center ">
          <SliderItem>
            <div className="flex flex-col space-y-2 justify-center items-center">
              <h1 className="text-gray-50 text-4xl md:text-5xl">
                Swiftly Connected
              </h1>
              <p className="text-base text-center md:text-lg text-slate-400 px-10 lg:px-0 lg:w-1/2">
                SwiftConnect seamlessly unites you with instant connections.
                Share updates, capture moments, and effortlessly engage with
                your network
              </p>
            </div>
            <Link
              href="/login-signup-page"
              className="text-white mx-auto px-6 py-3 bg-[#088395] rounded-lg mt-5 outline-none hover:bg-[#37B7C3]"
            >
              Get Started
            </Link>
          </SliderItem>
        </div>
      </Container>
    </div>
  );
};

export default LandingPage;
