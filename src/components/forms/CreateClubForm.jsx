import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useLocalization from "../../hooks/useLocalization";
import HorizontalProgress from "../common/HorizontalProgress";
import Select from "../CustomSelect";

// Yup validation schema
const validationSchema = Yup.object().shape({
  clubName: Yup.string().required("Please provide club name"),
  address: Yup.string().required("Please provide club address"),
});

const options = ["Yes", "No"];

const CreateClubForm = ({
  isCreatingClub,
  creatingClubError,
  onSubmit,
  setCurrentStep,
}) => {
  const { translate } = useLocalization();

  return (
    <Formik
      initialValues={{
        clubName: "",
        address: "",
      }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await onSubmit(values);
          setCurrentStep(2);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form noValidate className="p-2">
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
          ].map((field) => (
            <div key={field.name} className="mb-2">
              <label className="mid mb-1">{translate(field.label)}</label>

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
                  onChange={(value) => setFieldValue(item.name, value)}
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
          <p className="p-0 m-0 my-1 text-sm">
            You can always update these settings later
          </p>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {translate("next")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateClubForm;
