import Label from "../common/Label";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useLocalization from "../../hooks/useLocalization";
import Select from "../common/Select";
import { ClubLeagalFormFields } from "../../helpers/constants";


const validationSchema = Yup.object().shape({
  clubName: Yup.string().required("Club name is required"),
  address: Yup.string().required("Address is required"),
});

export function ClubLeagalSettings() {
  return (
    <div className="w-[50%]">
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
            <div className="">
              {ClubLeagalFormFields.map((group) => (
                <div key={group.groupName} className="flex flex-col mb-2">
                  <label className="text-base font-semibold mb-1">
                    {group.groupLabel}
                  </label>

                  {group?.question?.map(({ label, name, type }) => {
                    return (
                      <div key={name} className="flex flex-col gap-2">
                        {type === "text" && (
                          <>
                            <label className="text-sm mb-1">
                              {label}
                            </label>
                            <Field
                              name={name}
                              type={type}
                              className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"

                            />
                          </>
                        )}
                        {type === "yesNo" && (
                          <Select
                            heading={label}
                            options={["Yes", "No"]}
                            onChange={(e) =>
                              setFieldValue(name, e.target.value)
                            }
                          />
                        )}
                        <ErrorMessage
                          name={name}
                          component="div"
                          className="text-danger text-xs"
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
