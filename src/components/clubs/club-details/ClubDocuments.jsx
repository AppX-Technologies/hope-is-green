import React, { useState } from "react";
import {
  FaFilePdf,
  FaImage,
  FaFilePowerpoint,
  FaFileExcel,
  FaQuestionCircle,
  FaFileDownload,
  FaEye,
} from "react-icons/fa";
import Button from "../../common/Button";

const ClubDocuments = () => {
  const dummyDocuments = [
    {
      id: 1,
      url: "https://example.com/document1.pdf",
      name: "Document 1",
      type: "pdf",
      uploadDate: "2022-04-20",
    },
    {
      id: 2,
      url: "https://example.com/document2.jpg",
      name: "Document 2",
      type: "image",
      uploadDate: "2022-04-21",
    },
    {
      id: 3,
      url: "https://example.com/document3.pptx",
      name: "Document 3",
      type: "ppt",
      uploadDate: "2022-04-22",
    },
    {
      id: 4,
      url: "https://example.com/document4.xlsx",
      name: "Document 4",
      type: "excel",
      uploadDate: "2022-04-23",
    },
    {
      id: 5,
      url: "https://example.com/document5.pdf",
      name: "Document 5",
      type: "pdf",
      uploadDate: "2022-04-24",
    },
    {
      id: 6,
      url: "https://example.com/document6.jpg",
      name: "Document 6",
      type: "image",
      uploadDate: "2022-04-25",
    },
    {
      id: 7,
      url: "https://example.com/document7.pptx",
      name: "Document 7",
      type: "ppt",
      uploadDate: "2022-04-26",
    },
    {
      id: 8,
      url: "https://example.com/document8.xlsx",
      name: "Document 8",
      type: "excel",
      uploadDate: "2022-04-27",
    },
  ];

  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="flex gap-3 flex-wrap mt-4 w-full items-center">
      {dummyDocuments.map((document) => {
        const documentType = getDocumentType(document.url);
        return (
          <div
            key={document.id}
            className="bg-white rounded-md aspect-square h-36 relative p-4 flex gap-2 flex-col justify-center items-center"
            onMouseEnter={() => setHoveredId(document.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {getDocumentIcon(documentType)}
            <div>
              <p className="font-semibold whitespace-nowrap">{document.name}</p>
              <p className="text-gray-500 text-sm">{document.uploadDate}</p>
            </div>

            {hoveredId === document.id && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 gap-2 rounded">
                <Button
                  text="Download"
                  size="lg"
                  className="!p-1 text-white text-sm"
                  rightIcon={FaFileDownload}
                  onClick={() => console.log("Download clicked")}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const getDocumentType = (documentUrl) => {
  if (documentUrl.toLowerCase().endsWith(".pdf")) {
    return "pdf";
  } else if (documentUrl.toLowerCase().match(/\.(jpeg|jpg|gif|png)$/)) {
    return "image";
  } else if (documentUrl.toLowerCase().match(/\.(ppt|pptx)$/)) {
    return "ppt";
  } else if (documentUrl.toLowerCase().match(/\.(xls|xlsx)$/)) {
    return "excel";
  } else {
    return "unknown";
  }
};

const getDocumentIcon = (documentType) => {
  switch (documentType) {
    case "pdf":
      return <FaFilePdf className="text-red-500 h-14 w-14" />;
    case "image":
      return <FaImage className="text-blue-500 h-14 w-14" />;
    case "ppt":
      return <FaFilePowerpoint className="text-orange-500 h-14 w-14" />;
    case "excel":
      return <FaFileExcel className="text-green-500 h-14 w-14" />;
    default:
      return <FaQuestionCircle className="text-gray-500 h-14 w-14" />;
  }
};

export default ClubDocuments;
