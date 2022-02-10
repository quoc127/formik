import React from "react";
import { Formik, Field, Form,  } from "formik";

const MyInput = ({field, form, ...props}) => {
    return <input {...field} {...props} />;
};

const Exemple = () => (
    <div>
        <h1>My Home</h1>
        <Formik initialValues={{email: "" , color: "red", firstName: "", lastName: ""}}
            onSubmit = {(value, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(value, null , 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {(props: FormikProps<any>) => (
                <Form>
                    {/*  Renders an HTML <input> by default */}
                    <Field type="email" name="email" placeholder="Email"></Field>

                    {/* Renders an HTML <select> */}
                    <Field as="select" name="color">
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </Field>

                    <Field name="firstName">
                        {({
                            field,
                            form: {touched, error},
                            meta,
                        }) => (
                            <div>
                                <input type="text" placeholder="firstName" {...field}></input>
                                {meta.touched && meta.error && (
                                    <div className="error">{meta.error}</div>
                                )}
                            </div>
                        )}
                    </Field>

                    {/* Renders a CustomInputComponent, MyInput */}
                    <Field name="lastName" placeholder="lastName" component={MyInput}></Field>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default Exemple;

