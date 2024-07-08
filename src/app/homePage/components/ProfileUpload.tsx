import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProfileUpload: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative">
      <button id="avatarButton" onClick={toggleDropdown} className="ms-8 focus:outline-none ">
        <Image
          className="w-10 h-10 rounded-full cursor-pointer"
          src="/images/Profileholder.png"
          alt="User dropdown"
          width={24}
          height={24}
        />
      </button>

      <div id="userDropdown" className={`z-10 ${dropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute mt-2 right-0`}>
        
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
          <li>
            <Link href="/editprofile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit profile
            </Link>
          </li>
        </ul>
        <div className="py-1">
          <Link href="/signout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpload;
