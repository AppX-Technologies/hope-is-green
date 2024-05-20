import * as Yup from "yup";
import Select from "../../../common/Select";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { BOARD_MEMBER_ROLES, BoardMemberFormField } from "../../../../helpers/constants";
import Button from "../../../common/Button";
import { BiTrash } from "react-icons/bi";
import FormButtons from "../../common/FormButtons";
import SelectField from "../../../common/form-controls/SelectField";

const validationSchema = Yup.object().shape({});

const defaultValues = {};

export default function BoardMember({
  initialValues,
  onPreviousClick,
  onNextClick,
}) {
  return (
    <div className="p-2">
      <h6 className="font-normal text-xl">Provide Board Member Details</h6>
      <h6 className="text-sm font-light">
        Please provide us all the board member details. Please be as accurate as
        possible, we will use these details to legally register your club
      </h6>{" "}
      <Formik
        initialValues={initialValues || defaultValues}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={async (values, { setSubmitting }) => {
          if (onNextClick) {
            onNextClick(values);
          }
        }}
      >
        {({ values, setFieldValue }) => {
          console.log(values, "values");
          return (
            <Form noValidate>
              <div className="my-2 border-t pt-4">
                {BoardMemberFormField.map((group) => (
                  <div
                    key={group.groupName}
                    className="flex flex-col flex-wrap border shadow-sm bg-gray-100 bg-opacity-65 rounded-md p-3 mb-4"
                  >
                    <label className="text-lg font-medium mb-2">
                      {group.groupLabel}
                    </label>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 xs:grid-cols-1 lg:grid-cols-3 gap-2">
                      {group?.details?.map(
                        ({ label, placeholder, name, type }) => {
                          return (
                            <div key={name} className="">
                              <label className="text-sm mb-1">{label}</label>
                              <div className="relative">
                                <Field
                                  name={name}
                                  type={type}
                                  placeholder={placeholder}
                                  className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                                />
                                {type === "selectedPosition" && (
                                  <Select
                                    options={[
                                      "Chairman",
                                      "Board administrator",
                                      "Board",
                                    ]}
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
                        }
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col flex-wrap border bg-gray-50 shadow-sm rounded-md p-3 mb-4">
                <label className="text-lg font-semibold mb-2 w-full">
                  Other members
                </label>{" "}
                <div>
                  <FieldArray
                    name="otherMembers"
                    render={(arrayHelpers) => (
                      <div className="flex flex-col gap-3">
                        {values.otherMembers &&
                          values.otherMembers.map((friend, index) => (
                            <div
                              key={index}
                              className="border p-2 shadow-md bg-gray-100"
                            >
                              {" "}
                              <div className="flex justify-between gap-2 items-center">
                                <h6 className="font-semibold">
                                  Member {index + 1}
                                </h6>
                                <Button
                                  type="button"
                                  variant="danger"
                                  text={"Remove"}
                                  onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                />
                              </div>
                              <div className="grow grid sm:grid-cols-1 md:grid-cols-4 xs:grid-cols-1 lg:grid-cols-4 gap-2">
                                <div className="relative">
                                  <label className="text-sm mb-1">Role</label>
                                  <SelectField
                                    isMulti={false}
                                    items={BOARD_MEMBER_ROLES?.map((r) => ({
                                      label: r,
                                      value: r,
                                    }))}
                                    selectedItems={values?.otherMembers?.[index]?.role}
                                    onChange={(role) => setFieldValue(`otherMembers.${index}.role`,role)}
                                    placeholder="Select role"
                                    closeMenuOnSelect
                                  />

                                  <ErrorMessage
                                    name={`otherMembers.${index}.name`}
                                    component="div"
                                    className="text-danger text-xs absolute bottom-0 left-0"
                                  />
                                </div>
                                <div className="relative">
                                  <label className="text-sm mb-1">Name</label>
                                  <Field
                                    name={`otherMembers.${index}.name`}
                                    placeholder="Enter member name"
                                    type={"text"}
                                    className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                                  />

                                  <ErrorMessage
                                    name={`otherMembers.${index}.name`}
                                    component="div"
                                    className="text-danger text-xs absolute bottom-0 left-0"
                                  />
                                </div>
                                <div className="relative">
                                  <label className="text-sm mb-1">
                                    Date of Birth
                                  </label>
                                  <Field
                                    name={`otherMembers.${index}.dateOfBirth`}
                                    type={"date"}
                                    className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                                  />

                                  <ErrorMessage
                                    name={`otherMembers.${index}.dateOfBirth`}
                                    component="div"
                                    className="text-danger text-xs absolute bottom-0 left-0"
                                  />
                                </div>
                                <div className="relative">
                                  <label className="text-sm mb-1">
                                    Address
                                  </label>
                                  <Field
                                    name={`otherMembers.${index}.address`}
                                    type={"text"}
                                    placeholder="Enter member address"
                                    className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                                  />

                                  <ErrorMessage
                                    name={`otherMembers.${index}.address`}
                                    component="div"
                                    className="text-danger text-xs absolute bottom-0 left-0"
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        <Button
                          className="mt-2 w-fit"
                          type="button"
                          text={"Add"}
                          onClick={() => arrayHelpers.push({})}
                        />
                      </div>
                    )}
                  />
                </div>
              </div>
              <FormButtons onPreviousClick={onPreviousClick} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
