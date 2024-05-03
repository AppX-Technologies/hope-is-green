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
    <div className="w-full flex flex-wrap justify-between items-center">
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
        <Form noValidate className="p-4 w-full bg-white rounded-md shadow-md">
          <div className="">
            {ClubLeagalFormFields.map((group) => (
              <div key={group.groupName} className="flex flex-wrap items-center mb-4">
                <label className="text-lg font-semibold mb-2 w-full">
                  {group.groupLabel}
                </label>
  
                {group?.question?.map(({ label, name, type }) => {
                  return (
                    <div key={name} className="w-full md:w-1/3 px-2"> {/* Set width to 1/3 for three items in a row */}
                      <label className="text-sm mb-1">{label}</label>
                      <div className="relative">
                        {type === "text" && (
                          <Field
                            name={name}
                            type={type}
                            className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                          />
                        )}
                        {type === "textarea" && (
                          <Field
                            as="textarea"
                            name={name}
                            className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                          />
                        )}
                        {type === "yesNo" && (
                          <Select
                            options={["Yes", "No"]}
                            onChange={(e) =>
                              setFieldValue(name, e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                          />
                        )}
                        {type === "Written/Electronic" && (
                          <Select
                            options={["Written", "Electronic"]}
                            onChange={(e) =>
                              setFieldValue(name, e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                          />
                        )}
                        {type === "election/voting" && (
                          <Select
                            options={["Direct election", "Mail voting"]}
                            onChange={(e) =>
                              setFieldValue(name, e.target.value)
                            }
                            className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                          />
                        )}
                        <ErrorMessage
                          name={name}
                          component="div"
                          className="text-danger text-xs absolute bottom-0 left-0"
                        />
                      </div>
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
