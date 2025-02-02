import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";
import { selectIsLoggedIn } from "../../../redux/auth/selectors";
import clsx from "clsx";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  const isContactsActive = location.pathname === "/contacts";
  const isHomeActive = location.pathname === "/";

  return (
    <nav className={css.nav}>
      {!isLoggedIn && (
        <div className={clsx(css.linkBox, { [css.highlighted]: isHomeActive })}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>{" "}
        </div>
      )}

      {isLoggedIn && (
        <div
          className={clsx(css.linkBox, { [css.highlighted]: isContactsActive })}
        >
          <NavLink className={css.link}>Contacts</NavLink>
        </div>
      )}
    </nav>
  );
};
export default Navigation;