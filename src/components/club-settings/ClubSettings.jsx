import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { ClubGeneralInfoForm } from "../forms/ClubGeneralInfoForm";
import Label from "../common/Label";

const validationSchema = Yup.object().shape({
  clubName: Yup.string().required("Club name is required"),
  address: Yup.string().required("Address is required"),
});

const ClubSettings = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <Label label={"Club Settings"} size={"xl"} className={"font-bold"} />
      <div className="bg-white grow p-4 rounded shadow-md mt-4 w-full">
        <div className="w-full lg:w-[50%] md:w-[60%]">
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
      </div>
    </div>
  );
};

export default ClubSettings;
