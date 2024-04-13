import React, { useState } from "react";
import useLocalization from "../../hooks/useLocalization";

function ClubListItems({ clubs,setSelectedClub, selectedClub, setCurrentStep }) {
  const { translate } = useLocalization();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = clubs.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 px-3 py-1.5 border rounded-md focus:outline-none focus:ring-none focus:border-blue-300 w-full"
      />

      <div className="flex flex-col gap-4 w-full mx-auto h-fit overflow-y-auto max-h-[calc(100vh-460px)]">
        {filteredData.length === 0 ? (
          <div className="flex justify-center items-center h-10">
            <p>No results found.</p>
          </div>
        ) : (
          filteredData.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedClub(item.id)}
              className={`flex p-2 rounded shadow cursor-pointer text-start items-center ${
                selectedClub === item?.id
                  ? "bg-gray-200"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <img
                className="h-14 aspect-square rounded"
                src={`https://source.unsplash.com/random?${item.name}`}
                alt=""
              />
              <div className="ml-4 w-full">
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </button>
          ))
        )}
      </div>
      <button
        className="mt-auto w-full bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => setCurrentStep(2)}
        disabled={!selectedClub}
      >
        {translate("next")}
      </button>
    </>
  );
}


export default ClubListItems;
