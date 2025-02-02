import DocumentTitle from "../../components/common/DocumentTitle/DocumentTitle";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>
      <section className={css.welcomeText}>
        <h1 className={css.title}>Welcome to your phone book!</h1>
        <p className={css.desc}>
          After authorization you can add your contacts and save them in this
          web application..
        </p>
      </section>
    </>
  );
};
export default HomePage;