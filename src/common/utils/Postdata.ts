const postData = async (image: File | null) => {
    if (!image) return null;
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "qdaruszc");

    data.append("cloud_name", "dpivldhxg");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dpivldhxg/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();
      return result.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };


  fetch("http://localhost:5000/api/createPost", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      description,
      imageUrl,
    }),
  });

