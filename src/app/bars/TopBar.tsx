import React from "react";
import Link from "next/link";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore } from "react-icons/md";
import { GiNestBirds } from "react-icons/gi";
import { MdGroups2 } from "react-icons/md";
import Tooltip from "@/common/utils/Tooltip";
const TopBar = () => {
  return (
    <div className=" flex flex-row  justify-center bg-slate-900 py-1  ">
      <div className="flex  flex-col px-4  ">
      <Tooltip message="Home">
        <Link href='/HomePage'>
        <GrHomeRounded size={30} className="mx-3 hover:bg-slate-600 "  color="white" /> 
        
        </Link></Tooltip>
      
      </div>
      <div className="flex flex-col px-4">
      <Tooltip message="Explore">
        <MdOutlineExplore size={30} className="mx-3 hover:bg-slate-600 " color="white"  />
        </Tooltip>
         </div>
      <div className="flex flex-col px-4">
      <Tooltip message="Groups">
        <MdGroups2 size={30} className="mx-3 hover:bg-slate-600 " color="white" />
        </Tooltip>
        </div>

      <div className="flex flex-col px-4">
      <Tooltip message="Activity">
        <GiNestBirds size={30}className="mx-3 hover:bg-slate-600 " color="white" />
        </Tooltip>
        </div>
    </div>
  );
};

export default TopBar;
