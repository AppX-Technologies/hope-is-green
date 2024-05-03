import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import useLocalization from "../../hooks/useLocalization";
import HorizontalProgress from "../common/HorizontalProgress";
import CircularImageUpload from "../common/circular-image-upload/CircularImageUpload";
import Button from "../common/Button";
import Select from "../common/Select";
import { ClubForm } from "./ClubForm";
// Yup validation schema
const validationSchema = Yup.object().shape({
  clubName: Yup.string().required("Please provide club name"),
  address: Yup.string().required("Please provide club address"),
});



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
      {({ isSubmitting, setFieldValue }) => (
        <Form noValidate className="p-2">
          <ClubForm 
            Field = {Field}
            ErrorMessage = {ErrorMessage}
            creatingClubError = {creatingClubError}
            isCreatingClub = {true}
            setFieldValue={setFieldValue}
          />
          <p className="p-0 m-0 my-1 text-sm">
            You can always update these settings later
          </p>
          <Button
            size="md"
            text={translate("next")}
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          />
        </Form>
      )}
    </Formik>
  );
};

export default CreateClubForm;
