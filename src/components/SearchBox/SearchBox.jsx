import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";
export default function SearchBox() {
  const finedId = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilter = (e) => {
    const name = e.target.value.trim();
    dispatch(setStatusFilter(name));
  };
  return (
    <div className={css.filter}>
      <label htmlFor={finedId}>Find contacts by name</label>
      <input
        className={css.filterInput}
        id={finedId}
        type="text"
        value={filter}
        onChange={handleFilter}
        name="name"
      />
    </div>
  );
}