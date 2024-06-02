import React, { useState } from "react";
import ImageUploader from "../../common/image-uploader/ImageUploader";

const documentCategory = [
  {
    key: "legal",
    title: "Legal Documents",
  },
  {
    key: "boardMembers",
    title: "Board Members",
  },
];

const Docs = () => {
  const [images, setImages] = useState([]);

  const handleAddImage = (file, category) => {
    setImages((prevImages) => [
      ...prevImages,
      { file, category: category?.key },
    ]);
  };


  const handleDeleteImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      {documentCategory?.map((category) => {
        return (
          <div key={category?.key}>
            <h1 className="text-base font-normal my-2">{category?.title}</h1>
            <ImageUploader
              images={images
                ?.filter((i) => i?.category === category?.key)
                ?.map((im) => im?.file)}
              onAddImage={(img) => handleAddImage(img, category)}
              onDeleteImage={handleDeleteImage}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Docs;
