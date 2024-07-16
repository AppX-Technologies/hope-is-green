import React from "react";
import { BiSolidTrashAlt } from "react-icons/bi";
import { RiImageAddFill } from "react-icons/ri";

function ImageUploader({ images, onAddImage, onDeleteImage }) {
  return (
    <div className="flex items-center justify-start space-x-4">
      {images.map((image, index) => (
        <div key={index} className="relative cursor-pointer w-24 h-24">
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${image})` }}
          />
          <button
            onClick={() => onDeleteImage(index)}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-bold opacity-0 hover:opacity-100 transition-opacity"
          >
            <BiSolidTrashAlt size={20} className="" />
          </button>
        </div>
      ))}
      <button
        onClick={onAddImage}
        className="w-24 h-24 bg-gray-100 rounded-md border border-dashed border-gray-300 hover:border-gray-400  flex items-center justify-center text-2xl font-bold text-gray-400 hover:text-gray-500 hover:bg-gray-200 transition-colors"
      >
        <RiImageAddFill size={30} />
      </button>
    </div>
  );
}

export default ImageUploader;
