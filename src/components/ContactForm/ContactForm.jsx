import { Formik, ErrorMessage, Field, Form } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function ContactForm() {
  const dispatch = useDispatch();
  const formNameId = useId();
  const formNumberId = useId();
  const contactsSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(9, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    dispatch(addContact({ name, number }));
    actions.resetForm();
  };
  return (
    <Formik
      className={css.contactForm}
      validationSchema={contactsSchema}
      onSubmit={handleSubmit}
      initialValues={{ name: "", number: "" }}
    >
      <Form className={css.contactForm}>
        <div className={css.inputContainer}>
          <label htmlFor={formNameId}>Name</label>
          <Field
            className={css.nameInput}
            id={formNameId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor={formNumberId}>Number</label>
          <Field
            className={css.nameInput}
            id={formNumberId}
            type="tel"
            name="number"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.buttonSubmit} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}