import React, { useState } from "react";
import useLocalization from "../../hooks/useLocalization";

function ClubListItems({ setSelectedClub, selectedClub, setCurrentStep }) {
  const { translate } = useLocalization();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
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
          <p>No results found.</p>
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

const data = [
  {
    id: 1,
    name: "Golden Lions United",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    name: "Royal Falcons SC",
    description: "Consectetur adipiscing elit.",
  },
  {
    id: 3,
    name: "Dynamic Dragons FC",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    name: "Eagle Talons FC",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "Phoenix Rising SC",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    id: 6,
    name: "Titan Titans FC",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 7,
    name: "Mystic Mavericks SC",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
  },
  {
    id: 8,
    name: "Galactic Guardians FC",
    description:
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
  },
  {
    id: 9,
    name: "Diamond Dolphins SC",
    description:
      "Sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 10,
    name: "Supernova Spartans FC",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
  },
];

export default ClubListItems;
