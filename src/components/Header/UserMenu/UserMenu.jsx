import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { logOut } from "../../../redux/auth/operations";
import { selectUser } from "../../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.container}>
      <span className={css.username}>{user.name}</span>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
