import { useDispatch } from "react-redux";

import css from "./UserMenu.module.css";
import { logOut } from "../../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
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