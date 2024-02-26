import { useState } from "react";
import EditButton from "./EditButton";



function ImageExample() {

  const baseURL = `${import.meta.env.VITE_API_BASE_URL}/api/`
  const endpoint = 'images/'
  const imageId = 'image1'
  const fullURL = baseURL.concat(endpoint, imageId);

  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <>
      <div>
        <h1>Use Image Example</h1>
      </div>
      <div className="photo-profile">
        {imageLoaded ? (
          <>
            <img
              src={fullURL}
              alt="User Profile"
              className="profile-image"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(false)} />
            <EditButton imageId={imageId} />
          </>

        ) : (
          <p>Image not found</p>
        )}
      </div>
    </>
  );
}
export default ImageExample;
