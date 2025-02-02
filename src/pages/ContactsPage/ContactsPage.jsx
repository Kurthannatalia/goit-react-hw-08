import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";
import DocumentTitle from "../../components/common/DocumentTitle/DocumentTitle";
import ContactForm from "../../components/Contacts/ContactForm/ContactForm";
import ContactList from "../../components/Contacts/ContactList/ContactList";
import SearchBox from "../../components/Contacts/SearchBox/SearchBox";
import showToast from "../../components/common/showToast";

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {})
      .catch(() => {
        showToast("Ups something went wrong!", "error");
      });
  }, [dispatch]);
  return (
    <>
      <DocumentTitle>Your Contacts</DocumentTitle>
      <section className={css.container}>
        <div>
          <ContactForm />
          <SearchBox />
        </div>

        <div className={css.contactsListContainer}>
          <ContactList />
        </div>
      </section>
    </>
  );
};
export default ContactsPage;