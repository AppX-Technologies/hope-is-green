import Label from "../../../common/Label";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import useLocalization from "../../../../hooks/useLocalization";
import Select from "../../../common/Select";
import { ClubLeagalFormFields } from "../../../../helpers/constants";
import Button from "../../../common/Button";

const validationSchema = Yup.object().shape({});

const defaultValues = {};

export default function ManualDocumentForm({ initialValues, onSubmit }) {
  return (
    <div className="pe-2 py-2">
      <h6 className="font-light text-xl mb-2">Please fill all the details</h6>
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values) => {
          if (onSubmit) {
            onSubmit(values);
          }
        }}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form noValidate>
              <div className="">
                {ClubLeagalFormFields.map((group) => (
                  <div
                    key={group.groupName}
                    className="flex flex-col flex-wrap border shadow-sm bg-gray-50 rounded-md p-3 mb-4"
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
              <div className="w-full flex justify-end p-2 bg-gray-100 ">
                <Button type="submit" text={"Next"} />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
