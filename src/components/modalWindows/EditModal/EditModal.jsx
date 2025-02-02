import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../redux/modalWindow/slice";
import { changeContact } from "../../../redux/contacts/operations";
import css from "./EditModal.module.css";
import { selectIsEditModalOpen } from "../../../redux/modalWindow/selectors";
import { Field, Form, Formik } from "formik";
import { FaPhone, FaUser } from "react-icons/fa6";
import showToast from "../../common/showToast";

Modal.setAppElement("#root");

const EditModal = ({ contactId, name, phoneNumber }) => {
  const isModalOpen = useSelector(selectIsEditModalOpen);
  const dispatch = useDispatch();

  const handleChange = (values) => {
    const { name, phoneNumber } = values;
    dispatch(changeContact({ contactId: contactId, name, phoneNumber }))
      .unwrap()
      .then(() => {
        showToast("Edit success!", "success");
      })
      .catch(() => {
        showToast("Edit failed!", "error");
      });
    dispatch(closeModal());
  };

  const handleClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={handleClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalWindow}>
        <h2 className={css.title}>Edit contact.</h2>
        <Formik
          initialValues={{ name: name, phoneNumber: phoneNumber }}
          onSubmit={handleChange}
        >
          <Form className={css.listItemContainer}>
            <label className={css.listItemPice}>
              <FaUser className={css.icon} />
              <Field className={css.contactName} name="name" />
            </label>
            <label className={css.listItemPice}>
              <FaPhone className={css.icon} />
              <Field className={css.contactName} name="phoneNumber" />
            </label>
            <div className={css.buttonContainer}>
              <button className={css.buttonChange} type="submit">
                Update
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default EditModal;