import CircularImageUpload from "../../common/circular-image-upload/CircularImageUpload";
import ClubAvatar from "../../../assets/cannabis_club_avatar.jpg";
import useLocalization from "../../../hooks/useLocalization";
import Select from "../../common/Select";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../../common/Button";

const validationSchema = Yup.object().shape({
  clubName: Yup.string().required("Club name is required"),
  address: Yup.string().required("Address is required"),
});

const defaultValues = {};

const options = ["Yes", "No"];

export default function ClubGeneralInfoForm({ initialValues, onSubmit }) {
  const { translate } = useLocalization();
  return (
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={(values) => {
        onSubmit(values);
      }}
    >
      {({ values, setFieldValue }) => (
        <Form noValidate className="p-2">
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
              label: "Club Name",
            },
            {
              name: "address",
              type: "address",
              label: "Address",
            },
            {
              name: "dateOfFoundation",
              type: "date",
              label: "Date of Foundation",
            },
          ].map((field) => (
            <div key={field.name} className="mb-2">
              <label className="text-sm mb-1">{field.label}</label>

              <Field
                name={field.name}
                type={field.type}
                className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                placeholder={field.label}
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

          <p className="p-0 m-0 my-1 text-sm">
            You can always update these settings later
          </p>
          <Button
            size="md"
            text={translate("next")}
            type="submit"
            className={`w-full bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
          />
        </Form>
      )}
    </Formik>
  );
}
