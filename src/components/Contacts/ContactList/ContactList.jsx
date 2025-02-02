import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectLoading,
} from "../../../redux/contacts/selectors";
import Loading from "../../common/Loading/Loading";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <div className={css.container}>
      <div>{isLoading && <Loading />}</div>

      <ul className={css.list}>
        {contacts.map((contact) => {
          return (
            <li className={css.listItem} key={contact._id}>
              <Contact
                id={contact._id}
                name={contact.name}
                phoneNumber={contact.phoneNumber}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;