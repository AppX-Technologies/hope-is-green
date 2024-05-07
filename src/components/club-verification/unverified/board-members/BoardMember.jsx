import * as Yup from "yup";
import Select from "../../../common/Select";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BoardMemberFormField } from "../../../../helpers/constants";

const validationSchema = Yup.object().shape({
  clubName: Yup.string().required("Club name is required"),
  address: Yup.string().required("Address is required"),
});
export default function BoardMember() {
  return (
    <div className="pe-2 py-2">
      <h6 className="font-light text-xl mb-2">Board Members</h6>
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
          <Form noValidate>
            <div className="">
              {BoardMemberFormField.map((group) => (
                <div key={group.groupName} className="flex flex-wrap mb-4">
                  <label className="text-lg font-semibold mb-2 w-full">
                    {group.groupLabel}
                  </label>

                  {group?.question?.map(({ label, name, type }) => {
                    return (
                      <div key={name} className="w-full md:w-1/3 px-2">
                        {" "}
                        {/* Adjusted width to 1/3 for three items in a row */}
                        <label className="text-sm mb-1">{label}</label>
                        <div className="relative">
                          {type === "text" && (
                            <Field
                              name={name}
                              type={type}
                              className="w-full px-2 py-1 border rounded shadow-sm text-sm focus:outline-none focus:border-primary"
                            />
                          )}
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
