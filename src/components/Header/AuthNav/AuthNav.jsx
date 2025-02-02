import { NavLink, useLocation } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";
const AuthNav = () => {
  const location = useLocation();

  const isRegisterActive = location.pathname === "/register";
  const isLoginActive = location.pathname === "/login";

  return (
    <div className={css.container}>
      <div
        className={clsx(css.linkBox, { [css.highlighted]: isRegisterActive })}
      >
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </div>
      <div className={clsx(css.linkBox, { [css.highlighted]: isLoginActive })}>
        <NavLink className={css.link} to="/login">
          Log In
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNav;