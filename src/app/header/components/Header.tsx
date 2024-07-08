"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Container from "@/common/components/Container";
import { useRouter, usePathname } from "next/navigation";
import TopBar from "@/app/bars/TopBar";
import ProfileUpload from "@/app/homePage/components/ProfileUpload";

const Header = () => {
  const router = useRouter();
  const isHomepage = usePathname();
  const pathname = usePathname();

  // Check if current pathname is not in the exclude

  return (
    <div className="flex items-center justify-between font-semibold text-sm leading-6 text-slate-200 bg-slate-900">
      <Container>
        <div className="flex flex-row space-x-2  justify-between items-center">
          <Image
            src="/images/applogo.png"
            width={30}
            height={30}
            alt="app logo"
            className="bg-current rounded-full"
          />
          <p
            className="mx-3 mt-1  text-base text-blue-400 cursor-pointer"
            onClick={() => router.push("/")}
          >
            SwiftConnect
          </p>

          {isHomepage === "/homePage" && <TopBar />}
          {isHomepage === "/homePage" && <ProfileUpload />}
          
          
        </div>
      </Container>
    </div>
  );
};

export default Header;
