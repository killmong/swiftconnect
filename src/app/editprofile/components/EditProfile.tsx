'use client'
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
    <div className="h-screen background flex justify-center  ">
      <Container>
    <div className="border-2 p-2 border-gray-500 ">
      <h2 className="text-xl text-gray-50 font-bold mb-4">Edit Profile</h2>
      <p className="text-gray-50">Select a Profile Picture:</p>
      <div className="grid grid-cols-3 gap-3">
        {predefinedPics.map((pic, index) => (
          <Image 
          width={50}
          height={50}
            key={index}
            src={pic}
            alt={`Avatar ${index + 1}`}
            className={`w-20 h-20 object-cover rounded-full cursor-pointer border-2 ${
              selectedPic === pic ? "border-blue-500" : "border-transparent"
            }`}
            onClick={() => setSelectedPic(pic)}
          />
        ))}
      </div>
      <div className="border my-5 border-gray-500 rounded-lg ">
      <p  className="text-gray-50 text-center my-2">Selected Picture:</p>
      <Image
      width={50}
      height={50}
        src={selectedPic}
        alt="Selected Avatar"
        className="w-20 h-20 mx-auto rounded-full border-2 border-blue-500"
      />
    </div>
    </div>
    </Container>
    </div>
  );
};

export default EditProfile;
