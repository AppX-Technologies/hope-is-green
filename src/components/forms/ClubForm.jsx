import HorizontalProgress from "../common/HorizontalProgress";
import CircularImageUpload from "../common/circular-image-upload/CircularImageUpload";
import ClubAvatar from "../../assets/cannabis_club_avatar.jpg";
import useLocalization from "../../hooks/useLocalization";
import Select from "../common/Select";

export function ClubForm({
  Field,
  ErrorMessage,
  creatingClubError,
  isCreatingClub,
  setFieldValue,
}) {
  const options = ["Yes", "No"];
  const { translate } = useLocalization();
  return (
    <div>
      <div>
        <label className={`text-sm mb-1`}>Club Profile Picture</label>
        <div className="flex justify-center items-center">
          <CircularImageUpload
            height={100}
            width={100}
            onChange={(e) => console.log(e)}
            fallBackImage={ClubAvatar}
          />
        </div>
      </div>
      {[
        {
          name: "clubName",
          type: "name",
          label: "club_name",
        },
        {
          name: "address",
          type: "address",
          label: "address",
        },
        {
          name: "Date of Association",
          type: "date",
          label: "date",
        },
      ].map((field) => (
        <div key={field.name} className="mb-2">
          <label className="text-sm mb-1 required">
            {translate(field.label)}
          </label>

          <Field
            name={field.name}
            type={field.type}
            className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
            placeholder={translate(field.label)}
          />
          <ErrorMessage
            name={field.name}
            component="div"
            className="text-danger text-xs"
          />
        </div>
      ))}
      <div className="border rounded py-2">
        <label className="mid m-1 mb-1 mt-1">
          {translate("club_settings")}
        </label>

        <div className="flex flex-col gap-2 mt-2 mx-2">
          {[
            {
              heading:
                "Should your association be registered and carry the suffix 'e.V.'?",
              name: "eV",
            },
            {
              heading: "Do new members need to be approved before joining?",
              name: "newMembersApproval",
            },
            {
              heading: "Can people search your club when joining?",
              name: "clubSearch",
            },
            {
              heading:
                "Does new threads need to be approved by admins before publishing?",
              name: "threadApproval",
            },
          ].map((item, index) => (
            <Select
              key={index}
              heading={item.heading}
              options={options}
              onChange={(e) => setFieldValue(item.name, e.target.value)}
            />
          ))}
        </div>
      </div>

      {isCreatingClub && (
        <HorizontalProgress text={`${translate("signing_up")}...`} />
      )}
      {creatingClubError && (
        <div className="mt-3">
          <div
            className="bg-red-100 border border-red-400 text-red-700 p-3 rounded relative"
            role="alert"
          >
            <span className="block sm:inline text-base">
              {creatingClubError}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
