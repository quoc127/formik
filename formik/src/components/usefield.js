import React from 'react';
import {Formik, Form, FormikProps, useField} from 'formik';

interface Values {
    firstName : string,
    lastName : string,
    email : string,
};

const MyTextField = ({ label, ...props}) => {
    const[field, meta, helpers] = useField(props);
    return(
        <>
            <label>
                {label}
                <input {...field} {...props} />
            </label>
            {meta.touched && meta.error ? (
                <div className='error'>{meta.error}</div>
            ) : null}
        </>
    );
};

const ExempleuseField = () => (
    <div>
        <h1>My useField</h1>
        <Formik
            initialValues={{
                email: "",
                firstName:"red",
                lastName: "",
            }}
            onSubmit= {(values, actions) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {(props: FormikProps<Values>) => (
                <Form>
                    <MyTextField name="firstName" type="text" label="firstName" />
                    <MyTextField name="lastName" type="text" label="lastName" />
                    <MyTextField name="email" type="email" label="email" />
                    <button type='submit'>Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);

export default ExempleuseField;

