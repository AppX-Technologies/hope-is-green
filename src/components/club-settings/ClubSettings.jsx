import React, { useState } from "react";
import Label from "../common/Label";
import { FaUsersGear } from "react-icons/fa6";

function ClubSettings() {
  const [clubName, setClubName] = useState("");
  const [clubDescription, setClubDescription] = useState("");
  const [logo, setLogo] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const handleClubNameChange = (e) => {
    setClubName(e.target.value);
  };

  const handleClubDescriptionChange = (e) => {
    setClubDescription(e.target.value);
  };

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleBannerImageChange = (e) => {
    setBannerImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="p-2">
      <Label label={"Club Settings"} icon={FaUsersGear} size={"2xl"} />
      <div className="shadow-md overflow-hidden">
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
            <div className="mb-4">
              <label
                htmlFor="club-name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Club Name
              </label>
              <input
                type="text"
                id="club-name"
                name="club-name"
                value={clubName}
                onChange={handleClubNameChange}
                className="form-input w-full"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="club-description"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Description
              </label>
              <textarea
                id="club-description"
                name="club-description"
                value={clubDescription}
                onChange={handleClubDescriptionChange}
                className="form-textarea w-full"
                rows="3"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="club-logo"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Logo
              </label>
              <input
                type="file"
                id="club-logo"
                name="club-logo"
                onChange={handleLogoChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="club-banner-image"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Banner Image
              </label>
              <input
                type="file"
                id="club-banner-image"
                name="club-banner-image"
                onChange={handleBannerImageChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ClubSettings;
