import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
import { toast } from "react-toastify";

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

const LoginForm = () => {
  const emailId = useId();
  const passwordId = useId();
  const dispatch = useDispatch();

  const contactsSchema = Yup.object().shape({
    email: Yup.string()
      .min(7, "Too Short!")
      .max(30, "Too Long!")
      .required("Required!"),
    password: Yup.string()
      .min(7, "Too Short!")
      .max(30, "Too Long!")
      .required("Required!"),
  });

  const handleSubmit = (values, action) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => {
        showToast("Login successful!", "success");
      })
      .catch((error) => {
        console.log(error);
        showToast(`Login failed! ${error}`, "error");
      });
    action.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formContainer}>
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
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;