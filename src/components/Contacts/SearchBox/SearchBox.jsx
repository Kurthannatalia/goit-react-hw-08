import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../../redux/filters/selectors.js";
import { setStatusFilter } from "../../../redux/filters/slice.js";

const SearchBox = () => {
  const finedId = useId();
  const dispatch = useDispatch();
  const filterQuery = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const query = e.target.value.trim();
    dispatch(setStatusFilter(query));
  };
  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor={finedId}>
        Find contacts
      </label>
      <input
        className={css.filterInput}
        id={finedId}
        type="text"
        value={filterQuery}
        onChange={handleFilter}
        name="name"
        placeholder="Enter name or number..."
      />
    </div>
  );
};
export default SearchBox;