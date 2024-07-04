import React from "react";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { GiNestBirds } from "react-icons/gi";
import { FaRegBell } from "react-icons/fa6";
const TopBar = () => {
  return (
    <div className="hidden md:flex  lg:px-96">
      <div className="flex  flex-col px-4  ">
        <Link href="/homePage/Feed">
          <GrHomeRounded
            size={30}
            className="mx-3 hover:bg-slate-600 "
            color="white"
          />
          <p className=" text-gray-50  ">Home</p>
        </Link>
      </div>
      <div className="flex flex-col px-4">
        <Link href='/Explore'><MdOutlineExplore
          size={30}
          className="mx-3 hover:bg-slate-600 "
          color="white"
        />
         <p className="  text-gray-50 ">Explore</p>
        </Link>
      </div>
      <div className="flex flex-col px-4">
        <GiNestBirds
          size={30}
          className="mx-3 hover:bg-slate-600 "
          color="white"
        />
         <p className="">Groups</p>
      </div>

      <div className="flex flex-col px-4">
        <FaRegBell
          size={30}
          className="mx-3 hover:bg-slate-600 "
          color="white"
        />
         <p className="">Activity</p>
      </div>
    </div>
  );
};

export default TopBar;
