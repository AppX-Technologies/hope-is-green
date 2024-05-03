import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaUsersGear } from "react-icons/fa";
import Label from "../common/Label";
import InputField from "../common/form-controls/InputField";
import TextDropdownToggle from "../common/TextDropdownToggle";
import Button from "../common/Button";

import * as Yup from "yup";
import { ClubGeneralInfoForm } from "../forms/ClubGeneralInfoForm";

const validationSchema = Yup.object().shape({
  clubName: Yup.string().required("Club name is required"),
  address: Yup.string().required("Address is required"),
});

const GeneralInfo = () => {
  return (
      <div className="">
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
              <ClubGeneralInfoForm
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

export default GeneralInfo;
