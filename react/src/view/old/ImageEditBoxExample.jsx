import * as api from "../../api/api.js";
import { useState, useRef } from "react";

export default function ImageEditBoxExample({ }) {

  const generalCardRef = "test-general-card";
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
////////////////////eh esse aqui/////////////////////////////////
      const data = {
        page: "home",
        section: "section2_phrase",
        reference: "section1_carousel-section2_cards-01",
        title: "bride",
        description: "this is a new photo of a bride",
        video: null,
        date_info: "2024-03-30",
        time_info: "",
        location_info: null,
        eticket_link: null
      };
      

      const formData = new FormData();

      for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          formData.append(key, data[key]);
        }
      }
      formData.append("imagefile", imageRef.current.files[0]);
////////////////////////fim///////////////////////////////////////


///////////////////pode deletar/////////////

      // const formData = new FormData();    
      // formData.append("page", "home");
      // formData.append("section", "test-section");
      // formData.append("reference", generalCardRef); //temporary
      // formData.append("title", "bride");
      // formData.append("description", "this is a new photo of a bride");
      // formData.append("video", null);
      // formData.append("date_info", "2024-03-30");
      // formData.append("time_info","" );
      // formData.append("location_info", null);
      // formData.append("eticket_link", null);
      // formData.append("imagefile", imageRef.current.files[0]);


      // Make a POST request to your API
      const response = await api.uploadImage(generalCardRef, formData);

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
