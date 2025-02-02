import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../../redux/auth/selectors.js";
import css from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Navigation from "../Navigation/Navigation.jsx";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <div className={css.container}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </header>
  );
};
export default AppBar;