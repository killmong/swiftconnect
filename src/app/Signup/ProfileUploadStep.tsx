import React, { useState, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";
import { useWizard } from "react-use-wizard";
import { Context } from "@/common/components/UserContext";
import InputField from "@/common/components/InputField";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

type ProfilePicture = {
  id: number;
  src: string;
  alt: string;
};

const profilePictures: ProfilePicture[] = [
  { id: 1, src: "/images/BirdAvatars/AngryEagle.jpg", alt: "Picture 1" },
  { id: 2, src: "/images/BirdAvatars/SmartEagle.jpg", alt: "Picture 2" },
  { id: 3, src: "/images/BirdAvatars/Penguin.jpg", alt: "Picture 3" },
  { id: 4, src: "/images/BirdAvatars/CuteGirl.jpg", alt: "Picture 4" },
  { id: 5, src: "/images/BirdAvatars/HappyBird.jpg", alt: "Picture 5" },
  { id: 6, src: "/images/BirdAvatars/Sparrow.jpg", alt: "Picture 6" },
  { id: 7, src: "/images/BirdAvatars/Sparrow(2).jpg", alt: "Picture 7" },
  { id: 8, src: "/images/BirdAvatars/Swift.jpg", alt: "Picture 8" },
  { id: 9, src: "/images/BirdAvatars/BlackBird.jpg", alt: "Picture 9" },
  // Add more profile pictures here
];

const ProfileUploadStep: React.FC = () => {
  const router = useRouter();
  const { updateUserDetails, updateProfile } = useContext(Context);
  const { previousStep, nextStep } = useWizard();
  const [selectedPicture, setSelectedPicture] = useState<ProfilePicture | null>(
    null
  );
  const { control, handleSubmit } = useForm();

  const chooseProfilePicture = (picture: ProfilePicture) => {
    setSelectedPicture(picture);
    updateProfile(picture.src);
  };

  const onSubmit = (data: any) => {
    updateUserDetails(data);
    router.push("/homePage");
  };

  return (
    <form className="lg:px-32 px-3">
      <div className="flex justify-end">
        <IoMdClose
          color="black"
          size={30}
          className="cursor-pointer"
          onClick={previousStep}
        />
      </div>

      <p className="text-center">Choose a profile avatar</p>
      <div className="grid grid-cols-4 gap-1">
        {profilePictures.map((picture) => (
          <Image
            key={picture.id}
            src={picture.src}
            alt={picture.alt}
            width={50}
            height={50}
            className={`cursor-pointer ${
              selectedPicture?.id === picture.id ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => chooseProfilePicture(picture)}
          />
        ))}
      </div>

      {selectedPicture && (
        <div className="mt-4 text-center">
          <p className="text-gray-50">Selected Picture:</p>
          <Image
            src={selectedPicture.src}
            alt={selectedPicture.alt}
            width={50}
            height={50}
            className="inline-block w-24 h-24"
          />
        </div>
      )}

      <div className="flex flex-row justify-between mt-4">
        <button
          type="button"
          onClick={previousStep}
          className="mr-3 px-4 py-2 bg-gray-500 rounded-md hover:bg-red-500 text-white"
        >
          Back
        </button>
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="px-4 py-2 bg-blue-500 hover:bg-sky-600 text-white rounded"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProfileUploadStep;
