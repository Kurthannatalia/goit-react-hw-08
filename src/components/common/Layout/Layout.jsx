import { Suspense } from "react";
import css from "./Layout.module.css";
import AppBar from "../../Header/AppBar/AppBar";
import Loading from "../Loading/Loading";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <main className={css.main}>
        <Suspense fallback={<Loading />}> {children}</Suspense>
      </main>
    </div>
  );
};
export default Layout;