import React, { useState } from "react";
import ImageUploader from "../../../common/image-uploader/ImageUploader";

const DocumentUploader = () => {
  const [images, setImages] = useState([]);

  const handleAddImage = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.substr(0, 5) === "image") {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImages([...images, e.target.result]);
        };
        reader.readAsDataURL(file);
      } else {
        console.error("File is not an image.");
      }
    };
    fileInput.click();
  };
  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
  return (
    <div className="py-2">
      <h6 className="font-light text-xl mb-2">Upload your documents</h6>
      <ImageUploader images={images} onAddImage={handleAddImage} onDeleteImage={handleDeleteImage} />
    </div>
  );
};

export default DocumentUploader;
