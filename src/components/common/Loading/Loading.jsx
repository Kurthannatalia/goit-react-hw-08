import { RotatingLines } from "react-loader-spinner";
import css from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={css.loading}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loading;