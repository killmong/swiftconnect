import React from "react";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { GiNestBirds } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa6";
const TopBar = () => {
  return (
    <div className="hidden md:flex p-4 lg:px-96">
      <div className="flex  flex-col px-4  ">
        <Link href="/homePage/Feed">
          <GrHomeRounded
            size={20}
            className="mx-3 hover:bg-slate-600 hover:border-2 "
            color="white"
          />
        </Link>
      </div>
      <div className="flex flex-col px-4">
        <Link href='/Explore'><MdOutlineExplore
          size={20}
          className="mx-3 hover:bg-slate-600 "
          color="white"
        />
         </Link>
      </div>
      <div className="flex flex-col px-4">
      <Link href='/Explore'><GiNestBirds
          size={20}
          className="mx-3 hover:bg-slate-600 "
          color="white"
        /></Link>
         </div>

      <div className="flex flex-col px-4">
      <Link href='/Explore'><FaRegBell
          size={20}
          className="mx-3 hover:bg-slate-600 "
          color="white"
        /></Link>
         </div>
    </div>
  );
};

export default TopBar;
