'use client'
import React, { ChangeEvent, useState, useEffect } from "react";
import { FaRegImage } from "react-icons/fa";
import Image from "next/image";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';

const Post = () => {
  const [description, setDescription] = useState("");  
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("")

  useEffect(() => {
    if (url) {
      fetch("http://localhost:5000/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token"
        },
        body: JSON.stringify({
          description,
          pic: url
        })
      }).then(res => res.json())
        .then(data => {
          if (data.error) {
            toast.error("error occurred");
          } else {
            toast.success("posted successfully");
          }
        })
        .catch(err => console.log(err));
    }
  }, [url]);

  const postDetails = () => {
    if (!image) {
      toast.error("Please select an image");
      return;
    }
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "qdaruszc");
    data.append("cloud_name", "dpivldhxg");
    fetch("https://api.cloudinary.com/v1_1/dpivldhxg/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => setUrl(data.url))
      .catch(err => console.log(err));
  }; 
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="bg-white py-2 border border-gray-600 my-2 rounded-md">
      <div className="w-full px-2">
        <textarea
          className="w-full h-auto p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Write your post here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <div className="flex flex-row overflow-y-auto items-center justify-center mt-2">
          <div className="max-h-[300px] w-[220px] md:w-[480px] md:max-w-lg ">
            {image && (
              <Image
                width={300}
                height={250}
                layout="responsive"
                objectFit="cover"
                src={URL.createObjectURL(image)}
                alt="Selected"
                className="mt-2 mx-auto items-center object-cover w-full h-auto rounded-md border border-gray-300"
              />
            )}
          </div>
        </div>
        <div className="flex flex-row justify-between mt-2">
          <label htmlFor="file-upload" className="cursor-pointer">
            <FaRegImage size={20} className="bg-gray-50 mx-2 my-2" />
          </label>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <button
            className="border px-2 py-1 rounded-lg hover:bg-sky-400 bg-sky-500"
            onClick={postDetails}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
