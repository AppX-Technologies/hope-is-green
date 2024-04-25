import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useLocalization from "../../hooks/useLocalization";
import HorizontalProgress from "../common/HorizontalProgress";
import Button from "../common/Button";
import UnderlineButton from "../common/UnderlineButton";

// Yup validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please provide your email address"),
  password: Yup.string().required("Please provide your password"),
});

const LoginForm = ({ isLoggingIn, loginError, onSubmit }) => {
  const { translate } = useLocalization();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={onSubmit}
    >
      {({ submitForm }) => (
        <Form noValidate className="p-2">
          {[
            {
              name: "email",
              type: "email",
              label: "email",
            },
            {
              name: "password",
              type: "password",
              label: "password",
            },
          ].map((field) => (
            <div key={field.name} className="mb-2">
              <label className="mid mb-1 required">
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

          {loginError && (
            <div className="my-3">
              <div
                className="bg-red-100 border border-red-400 text-red-700 p-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline text-base">{loginError}</span>
              </div>
            </div>
          )}

          <div className="flex w-full my-2">
            <UnderlineButton
              text={translate("forgot_password")}
              className="text-sm hover:text-blue-600 cursor-pointer ms-auto"
              onClick={() => setIsOpen(true)}
            />
          </div>
          <Button
            variant="primary"
            size="md"
            loading={isLoggingIn}
            onClick={submitForm}
            loadingText="Logging in..."
            disabled={isLoggingIn}
            text={"Login"}
            className="w-full"
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
