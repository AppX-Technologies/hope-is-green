import React, { useState } from "react";
import { IoCamera } from "react-icons/io5";
/**
 * A component for uploading and displaying a circular profile picture.
 *
 * Props:
 * - src: The source URL of the image to display initially.
 * - onChange: A callback function that is triggered when a new image is selected.
 * - size: Optional. The size (width and height) of the circular image in pixels.
 * - alt: Optional. Alternative text for the image.
 */
function CircularImageUpload({
  src,
  onChange,
  height = 80,
  width = 80,
  alt = "Profile Picture",
  fallBackImage = "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1114445501.jpg",
}) {
  // Local state to manage the displayed image
  const [imageSrc, setImageSrc] = useState(src);

  // Handle changes to the file input
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
        if (onChange) {
          onChange(file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative inline-block">
      <div className="absolute right-0 bottom-2 cursor-pointer rounded-full bg-white p-1 border">
        <IoCamera />
      </div>

      {/* Image preview */}
      <img
        src={imageSrc || fallBackImage}
        alt={alt}
        className={`rounded-full object-cover cursor-pointer border border-gray-200`}
        style={{
          height,
          width,
        }}
        onClick={() => document.getElementById("myfile").click()}
      />
      {/* Hidden file input */}
      <input
        type="file"
        id="myfile"
        style={{ display: "none" }}
        onChange={handleImageChange}
        accept="image/*"
      />
    </div>
  );
}

export default CircularImageUpload;
