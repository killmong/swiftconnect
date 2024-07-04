import React, { useEffect, useState } from "react";
import Image from "next/image";

export interface Props {
  username: string;
  profilePicture: string;
}

const StoriesItem: React.FC<Props> = ({ username, profilePicture }) => {
  return (
    <div className="flex flex-row border-3   border-sky-500 mr-3 md:mr-6 lg:mr-8">
      <button aria-label={`Story by ${username}`} role="menuitem">
        <div className="relative w-16 h-16 rounded-full overflow-x-auto border-2 border-solid border-[#fff] ">
          <Image
            alt={`${username}'s profile Picture `}
            src={profilePicture}
            className="w-full h-full object-cover"
            height={50}
            width={50}
          />
        </div>
        <div className="text-center text-sm mt-1 text-gray-50 overflow-clip">{username}</div>
      </button>
    </div>
  );
};

export default StoriesItem;