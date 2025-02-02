import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";

import { IoPersonAddOutline } from "react-icons/io5";
import { selectUser } from "../../../redux/auth/selectors";
import { addContact } from "../../../redux/contacts/operations";
import showToast from "../../common/showToast";

export default function ContactForm() {
  const dispatch = useDispatch();
  const formNameId = useId();
  const formNumberId = useId();
  const { name } = useSelector(selectUser);

  const contactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .min(9, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const { name, phoneNumber } = values;
    dispatch(addContact({ name, phoneNumber }))
      .unwrap()
      .then(() => {
        showToast("Contact add successful!", "success");
        actions.resetForm();
      })
      .catch((error) => {
        showToast(`"Contact add failed! ${error}`, "error");
      });
  };

  return (
    //TODO Перенести це в окремий компонент
    <div className={css.container}>
      <p className={css.welcome}>Welcome {name}</p>

      <Formik
        className={css.contactForm}
        validationSchema={contactsSchema}
        onSubmit={handleSubmit}
        initialValues={{ name: "", phoneNumber: "" }}
      >
        <Form className={css.contactForm}>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={formNameId}>
              Name
            </label>
            <Field
              className={css.nameInput}
              id={formNameId}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={formNumberId}>
              Number
            </label>
            <Field
              className={css.nameInput}
              id={formNumberId}
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
            />
            <ErrorMessage
              className={css.error}
              name="phoneNumber"
              component="span"
            />
          </div>
          <button className={css.buttonSubmit} type="submit">
            <IoPersonAddOutline /> Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
}