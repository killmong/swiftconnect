'use client'
import Image from "next/legacy/image";
import Container from "@/common/components/Container";
import Link from "next/link";

const Header = () => {
  const handleClick = () => {
    // You can add any additional logic here if needed
    <Link href='/Landingpage'></Link>; // or use next/router's push method
  };

  return (
    <div className="flex items-center justify-between  font-semibold text-sm leading-6 text-slate-200 bg-slate-900 ">
      <Container>
        <div className="flex flex-row space-x-2 items-center">
          <Image
            src="/images/applogo.png"
            width={30}
            height={30}
            alt="app logo flex"
            className="bg-current rounded-full"
          />
          <p
            className="mx-3 mt-1 logo-font text-base text-blue-400 cursor-pointer"
            onClick={handleClick}
          >
            SwiftConnect
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Header;