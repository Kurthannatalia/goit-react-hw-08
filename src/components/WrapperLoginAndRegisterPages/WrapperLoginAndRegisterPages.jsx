import css from "./WrapperLoginAndRegisterPages.module.css";

const WrapperLoginAndRegisterPages = ({ children }) => {
  return <section className={css.wrapper}>{children}</section>;
};
export default WrapperLoginAndRegisterPages;