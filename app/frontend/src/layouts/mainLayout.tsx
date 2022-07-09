import { ComponentChildren, Fragment } from "preact";
import Footer from "../components/footer";
import Nav from "../components/nav";

type LayoutProps = {
  children: ComponentChildren
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Nav />
      <div class="container grid-xl">
        <div class="columns">
          <div class="column col-12">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;