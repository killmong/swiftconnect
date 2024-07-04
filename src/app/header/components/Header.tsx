"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Container from "@/common/components/Container";
import { useRouter,usePathname } from "next/navigation";
import { Context } from "@/common/components/UserContext";
import TopBar from "@/app/bars/TopBar";

const Header = () => {
  const { userDetails } = useContext(Context); // Changed profilePicture to userDetails
  const router = useRouter();
  const isHomepage = usePathname()  ;

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
            className="mx-3 mt-1 logo-font text-base text-blue-400 cursor-pointer"
            onClick={() => router.push("/")}
          >
            SwiftConnect
          </p>

          {isHomepage === '/homePage' && <TopBar />}

          {/* Conditionally render username and profile picture */}
          {userDetails && (
            <div>
              <p className="text-gray-50">{userDetails.username}</p>
              <Image
                src={userDetails.profilePicture}
                width={30}
                height={30}
                alt="profile picture"
                className="rounded-full"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
