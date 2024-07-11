import React from "react";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { FaCrow } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
const Feed = () => {
  return (
    <div className="block max-w-xs  md:max-w-2xl lg:max-w-2xl">
      <div className="background rounded shadow-md">
        <div className="flex flex-col lg:px-6  py-4 border  border-gray-700 shadow-2xl rounded-lg  ">
          <div className="flex py-1  flex-row">
            <Image
              alt="user profile"
              height={40}
              src='/images/BirdAvatars/Sparrow.jpg'
              width={40}
              className="items-start rounded-full"
            /> 
            <div className="flex px-2  flex-col">
              <p className="text-gray-50 text-xs">
                {" "}
                Gourav<span className="px-1 text-xs"> 29 min ago</span>{" "}
              </p>
              <p className="text-xs text-gray-50">India</p>{" "}
            </div>
          </div>
          <div className="flex py-2 flex-col">
            
            <div className="py-2">
              <p className="text-gray-50 text-xs m-auto">
                Gourav{" "}
                <span className="px-2">
                  {" "}
                  Explore the unraveling world of animations Bringing stories to
                  life, one frame at a time! 🎥✨{" "}
                </span>
                <span className="text-gray-500">
                  #AnimationMagic #AnimatorLife #FrameByFrame #CreativeProcess
                  #ArtInMotion #AnimatedArt #wanderlust
                </span>
              </p>
              {/* <div className="flex flex-row py-1">
              <BiLike size={22} color="white" className="mx-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg" />
              <FaCrow color="white" size={22} className="mx-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg"/>
              <IoIosShareAlt color="white" size={22} className="mx-1 cursor-pointer hover:bg-gray-500 hover:rounded-lg"/>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
