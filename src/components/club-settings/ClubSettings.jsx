import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaUsersGear } from "react-icons/fa";
import Label from "../common/Label";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";
import Button from "../common/Button";
import { ClubForm } from "../forms/ClubForm";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  clubName: Yup.string().required("Club name is required"),
  address: Yup.string().required("Address is required"),
});

const ClubSettings = () => {
  return (
      <div className="w-[50%]">
        <Label label={"Club Settings"} className={"font-bold"} size={"xl"} />
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
          {({ isSubmitting, setFieldValue }) => (
            <Form noValidate className="p-2">
              <ClubForm
                Field={Field}
                ErrorMessage={ErrorMessage}
                // creatingClubError={creatingClubError}
                isCreatingClub={false}
                setFieldValue={setFieldValue}
              />
            </Form>
          )}
        </Formik>
      </div>
  );
};

export default ClubSettings;
