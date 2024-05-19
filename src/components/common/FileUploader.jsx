import React from "react";

const FileUploader = ({ files, onChange }) => {
  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    onChange([...files, ...newFiles]);
  };

  return (
    <div className="">
      <label className="block">
        <span className="sr-only">Choose files</span>
        <input
          type="file"
          className="block w-full text-sm text-transparent
                     file:mr-4 file:py-1 file:px-2
                     file:rounded-md file:border file:border-gray-200
                     file:text-sm file:font-normal
                     file:bg-purple-50 file:text-gray-500
                     hover:file:bg-purple-100"
          onChange={handleFileChange}
        />
      </label>
      <div className="flex flex-col gap-2 my-2">
        {files.map((file, index) => (
          <div
            key={index}
            className="flex gap-2 items-center text-gray-700 font-light"
          >
            {index + 1}. {file.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUploader;
