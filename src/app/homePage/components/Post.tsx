'use client'
import React, { useState } from 'react';
import { FaRegImage } from "react-icons/fa";

const Post = () => {
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

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

  const handlePost = () => {
    // Implement your post functionality here
    console.log('Posting:', postText);
    console.log('Selected Image:', selectedImage);
    // Reset state after posting
    setPostText('');
    setSelectedImage(null);
  };

  return (
    <div className='bg-white py-2 border border-gray-600 my-2 rounded-md'>
      <div className='w-full px-2'>
        <textarea
          className='w-full h-auto p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          placeholder='Write your post here...'
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
        />
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected"
            className="mt-2 w-full rounded-md border border-gray-300"
          />
        )}
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
