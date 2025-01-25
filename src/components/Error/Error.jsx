import css from "./Error.module.css";
const Error = () => {
  return (
    <div>
      <p className={`${css.error} animate`}>
        Sorry, something went wrong, try again later!
      </p>
    </div>
  );
};
export default Error;