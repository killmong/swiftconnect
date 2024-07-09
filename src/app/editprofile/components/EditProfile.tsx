"use client";
import Container from "@/common/components/Container";
import React, { useState } from "react";
import Image from "next/image";

const predefinedPics = [
  "/images/BirdAvatars/Sparrow.jpg",
  "/images/BirdAvatars/AngryEagle.jpg",
  "/images/BirdAvatars/Swift.jpg",
  "/images/BirdAvatars/Sparrow(2).jpg",
  "/images/BirdAvatars/HappyBird.jpg",
  "/images/BirdAvatars/CuteGirl.jpg",
  "/images/BirdAvatars/Penguin.jpg",
  "/images/BirdAvatars/SmartEagle.jpg",
  "/images/BirdAvatars/BlackBird.jpg",
];

const EditProfile = () => {
  const [selectedPic, setSelectedPic] = useState(predefinedPics[0]);

  return (
    <div className="h-screen background flex justify-center items-center">
      <Container>
        <div className="border-2 p-2 border-gray-500 bg-gray-900 rounded-lg">
          <h2 className="text-xl text-gray-50 font-bold mb-4">Edit Profile</h2>
          <p className="text-gray-50 mb-2">Select a Profile Picture:</p>
          <div className="flex overflow-x-auto space-x-3 pb-4">
            {predefinedPics.map((pic, index) => (
              <div key={index} className="flex-none">
                <Image
                  width={80}
                  height={80}
                  src={pic}
                  alt={`Avatar ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-full cursor-pointer border-2 ${
                    selectedPic === pic
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedPic(pic)}
                />
              </div>
            ))}
          </div>
          <div className="border my-5 border-gray-500 rounded-lg">
            <p className="text-gray-50 text-center my-2">Selected Picture:</p>
            <Image
              width={80}
              height={80}
              src={selectedPic}
              alt="Selected Avatar"
              className="w-20 h-20 mx-auto rounded-full border-2 my-2 border-blue-500"
            />
          </div>

          <div className="border text-gray-50 my-5 border-gray-500 rounded-lg">
            <p className="px-2 py-1">username</p>
            <p className="px-2 py-1">email</p>
            <p className="px-2 py-1">password</p>
          </div>

          <button
            type="submit"
            className="border outline-none bg-sky-500 hover:bg-sky-400 px-3 w-full py-2 text-gray-50 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </Container>
    </div>
  );
};

export default EditProfile;
