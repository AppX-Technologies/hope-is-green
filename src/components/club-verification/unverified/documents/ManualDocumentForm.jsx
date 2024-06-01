import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Select from "../../../common/Select";
import { ClubLeagalFormFields } from "../../../../helpers/constants";
import FormButtons from "../../common/FormButtons";

const validationSchema = Yup.object().shape({});

const defaultValues = {};

export default function ManualDocumentForm({
  initialValues,
  onNextClick,
  nextButtonLabel,
  hideTitle = false,
}) {
  return (
    <div className="p-2">
      {!hideTitle && (
        <>
          <h6 className="font-normal text-xl">Provide Club Details</h6>
          <h6 className="text-sm font-light">
            Please provide us all the details related to your club. Please be as
            accurate as possible, we will use these details to legally register
            your club
          </h6>{" "}
        </>
      )}

      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => {
          if (onNextClick) {
            onNextClick(values);
          }
        }}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form noValidate>
              <div className="my-2 border-t pt-4">
                {ClubLeagalFormFields.map((group) => (
                  <div
                    key={group.groupName}
                    className="flex flex-col flex-wrap border shadow-sm bg-gray-100 bg-opacity-65 rounded-md p-3 mb-4"
                  >
                    <label className="text-lg font-medium mb-2">
                      {group.groupLabel}
                    </label>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 xs:grid-cols-1 lg:grid-cols-2 gap-2">
                      {group?.question?.map(({ label, name, type }) => {
                        return (
                          <div key={name}>
                            <label className="text-base font-light text-black mb-1">
                              {label}
                            </label>
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
                  </div>
                ))}
              </div>
              <FormButtons nextButtonLabel={nextButtonLabel} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
