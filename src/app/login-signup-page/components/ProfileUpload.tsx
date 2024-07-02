import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

type ProfilePicture = {
  id: number;
  src: string;
  alt: string;
};

interface ProfileUploadProps {
  onClose: () => void;
}

const ProfileUpload: React.FC<ProfileUploadProps> = ({ onClose }) => {
  const [selectedPicture, setSelectedPicture] = useState<ProfilePicture | null>(null);

  const profilePictures: ProfilePicture[] = [
    { id: 1, src: '/images/BirdAvatars/AngryEagle.jpg', alt: 'Picture 1' },
    { id: 2, src:  '/images/BirdAvatars/SmartEagle.jpg', alt: 'Picture 2' },
    { id: 3, src:  '/images/BirdAvatars/Penguin.jpg', alt: 'Picture 3' },
    { id: 4, src:  '/images/BirdAvatars/CuteGirl.jpg', alt: 'Picture 4' },
    { id: 5, src:  '/images/BirdAvatars/HappyBird.jpg', alt: 'Picture 5' },
    { id: 6, src:  '/images/BirdAvatars/Sparrow.jpg', alt: 'Picture 6' },
    { id: 7, src:  '/images/BirdAvatars/Sparrow(2).jpg', alt: 'Picture 7' },
    { id: 8, src:  '/images/BirdAvatars/Swift.jpg', alt: 'Picture 8' },
    { id: 9, src:  '/images/BirdAvatars/BlackBird.jpg', alt: 'Picture 9' },
    // Add more profile pictures here
  ];

  const chooseProfilePicture = (picture: ProfilePicture) => {
    setSelectedPicture(picture);
    // You can add more functionality here, like saving the selected picture to user profile
  };

  return (
    <div className='fixed bg-black bg-opacity-30 backdrop-blur-sm w-1/4 inset-0 flex m-auto items-center justify-center'>
      <div className='bg-white p-4 rounded shadow-lg'>
        <div className='flex justify-end'>
          <IoMdClose color='black' size={30} className='cursor-pointer' onClick={onClose} />
        </div>
        
        <p className='text-center'>Choose a profile avatar</p>
        <div className='grid grid-cols-3 gap-4'>
          {profilePictures.map((picture) => (
            <img 
              key={picture.id} 
              src={picture.src} 
              alt={picture.alt} 
              className={`cursor-pointer ${selectedPicture?.id === picture.id ? 'border-2 border-blue-500' : ''}`}
              onClick={() => chooseProfilePicture(picture)}
            />
          ))}
        </div>
        {selectedPicture && (
          <div className='mt-4 text-center'>
            <p>Selected Picture:</p>
            <img src={selectedPicture.src} alt={selectedPicture.alt} className='inline-block w-24 h-24' />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileUpload;
