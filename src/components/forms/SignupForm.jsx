import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useLocalization from "../../hooks/useLocalization";
import HorizontalProgress from "../common/HorizontalProgress";
import CircularImageUpload from "../common/circular-image-upload/CircularImageUpload";
import PersonAvatar from "../../assets/person-avatar.png";
import Button from "../common/Button";
// Yup validation schema
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please provide your name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please provide your email address"),
  phone: Yup.string(),
  password: Yup.string().required("Please provide your password"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = ({
  initialValues,
  showProgress,
  errorMessage,
  onSubmit,
  submitButtonLabel = "register",
}) => {
  const { translate } = useLocalization();

  return (
    <Formik
      initialValues={initialValues || defaultValues}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {() => (
        <Form noValidate className="p-2">
          <div>
            <label className={`text-sm mb-1`}>Profile Picture</label>
            <div className="flex justify-center items-center">
              <CircularImageUpload
                height={100}
                width={100}
                onChange={(e) => console.log(e)}
                fallBackImage={PersonAvatar}
              />
            </div>
          </div>

          {[
            {
              name: "name",
              type: "name",
              label: "name",
            },
            {
              name: "email",
              type: "email",
              label: "email",
            },
            {
              name: "phone",
              type: "phone",
              label: "phone",
              notCompulsory: true,
            },
            {
              name: "password",
              type: "password",
              label: "password",
            },
            {
              name: "confirmPassword",
              type: "password",
              label: "confirm_password",
            },
          ].map((field) => (
            <div key={field.name} className="mb-2">
              <label
                className={`text-sm mb-1 ${
                  field?.notCompulsory ? "" : "required"
                }`}
              >
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
          <div className="flex items-center">
            <input
              id="checkbox"
              type="checkbox"
              value=""
              checked
              className="w-4 h-4"
            />
            <label for="checkbox" className="ms-2 text-sm">
              {translate("i_am_at_least_18_years_old")}
            </label>
          </div>

          {showProgress && (
            <HorizontalProgress text={`${translate("signing_up")}...`} />
          )}
          {errorMessage && (
            <div className="mt-3">
              <div
                className="bg-red-100 border border-red-400 text-red-700 p-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline text-base">{errorMessage}</span>
              </div>
            </div>
          )}
          <Button
            variant="primary"
            type="submit"
            size="md"
            text={translate(submitButtonLabel)}
            disabled={showProgress}
            className={`mt-4 w-full bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              showProgress ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
