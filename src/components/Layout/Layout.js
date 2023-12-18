import MainNav from "./MainNav";
import AppRoutes from "./AppRoutes";
import { Fragment } from "react";

const Layout = () => {
  return (
    <Fragment>
      <header>
        <MainNav />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </Fragment>
  );
};

export default Layout;
