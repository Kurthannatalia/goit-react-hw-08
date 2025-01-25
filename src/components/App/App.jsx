import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className="mainContainer">
      <h1 className="headerText">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <Loading />}
      {error && <Error />}
      <ContactList />
    </div>
  );
}

export default App;