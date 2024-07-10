'use client'
import React, { useState } from 'react';
import { FaRegImage } from "react-icons/fa";
import Image from 'next/image';
const Post = () => {
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePost = async () => {
    console.log("Posting:", description);
    console.log("Uploaded Image URL:", imageUrl);
    // Here you can add logic to actually post the data to your backend
  };

  return (
    <div className='bg-white py-2 border border-gray-600 my-2 rounded-md'>
      <div className='w-full px-2'>
        <textarea
          className='w-full h-auto p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          placeholder='Write your post here...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className='w-[480px] h-[640px]'>
        {selectedImage && (
          <Image 
          width={250}
          height={250}
          objectFit='cover'
            src={selectedImage}
            alt="Selected"
            className="mt-2 w-full h-auto rounded-md border border-gray-300"
          />
        )}
        </div>
        <div className='flex flex-row justify-between mt-2'>
          <label htmlFor="file-upload" className="cursor-pointer">
            <FaRegImage size={20} className='bg-gray-50 mx-2 my-2' />
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className='border px-2 py-1 rounded-lg hover:bg-sky-400 bg-sky-500'
            onClick={handlePost}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
