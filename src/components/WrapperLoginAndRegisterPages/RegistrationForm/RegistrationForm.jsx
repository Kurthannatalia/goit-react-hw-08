import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/auth/operations";
import * as Yup from "yup";
import css from "./RegistrationForm.module.css";
import { toast } from "react-toastify";
import WrapperLoginAndRegisterPages from "../WrapperLoginAndRegisterPages";

const showToast = (message, type) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: type === "success" ? "light" : "colored",
    type: type,
  });
};

const RegistrationForm = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const registerSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .min(7, "too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(7, "too Short!")
      .max(30, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, action) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        showToast("Registration successful!", "success");
      })
      .catch((error) => {
        showToast(`Registration failed! ${error}`, "error");
      });

    action.resetForm();
  };

  return (
    <WrapperLoginAndRegisterPages>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={registerSchema}
      >
        <Form className={css.form}>
          <div className={css.formContainer}>
            <div className={css.container}>
              <label htmlFor={nameId}> Username</label>
              <Field
                className={css.input}
                type="text"
                name="name"
                id={nameId}
                placeholder="Enter your name..."
              />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="p"
              />
            </div>
            <div className={css.container}>
              <label htmlFor={emailId}>Email</label>
              <Field
                className={css.input}
                type="email"
                name="email"
                id={emailId}
                placeholder="Enter your email..."
              />
              <ErrorMessage
                className={css.errorMessage}
                name="email"
                component="p"
              />
            </div>
            <div className={css.container}>
              <label htmlFor={passwordId}>Password</label>
              <Field
                className={css.input}
                type="password"
                name="password"
                id={passwordId}
                placeholder="Enter your password..."
              />
              <ErrorMessage
                className={css.errorMessage}
                name="password"
                component="p"
              />
            </div>
            <button className={css.buttonSub} type="submit">
              Register
            </button>
          </div>
        </Form>
      </Formik>
    </WrapperLoginAndRegisterPages>
  );
};
export default RegistrationForm;