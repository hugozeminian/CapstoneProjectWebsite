import * as api from "../api/api.js";
import { useState, useRef } from "react";

export default function ImageEditBoxExample({ imageId }) {

  const [selectedImage, setSelectedImage] = useState(null);
  const imageRef = useRef();
  const [message, setMessage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    try {
      if (!selectedImage) {
        setMessage("Please select an image");
        return;
      }

      const formData = new FormData();
      formData.append("imagefile", imageRef.current.files[0]);

      // Make a POST request to your API
      const response = await api.uploadImage(imageId, formData);

      // Handle the response, update state, show message, etc.
      console.log("API Response:", response);
      setMessage("Image uploaded successfully");
    } catch (error) {
      // Handle errors
      console.error("Error uploading image:", error);
      setMessage("Error uploading image");
    }
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Update Image</h1>

          {message && (
            <div className="alert">
              <p>{message}</p>
            </div>
          )}
          <div>
            <input
              ref={imageRef}
              type="file"
              id="imageFile"
              accept=".png, .jpg, .jpeg, .webm"
              onChange={handleImageChange}
            />
            {selectedImage && (
              <div>
                <h3>Selected Image:</h3>
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{ maxWidth: "100%" }}
                />
              </div>
            )}
          </div>
          <button type="submit" className="btn btn-block">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
