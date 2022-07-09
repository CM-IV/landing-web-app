import { Fragment } from "preact";
import { Link } from "wouter-preact";

const Nav = () => {
  return (
    <Fragment>
      <nav class="navbar">
        <section class="navbar-section">
          <Link to="/" class="btn btn-link">Todos</Link>
          <Link to="#" class="btn btn-link">Links</Link>
        </section>
        <section class="navbar-center">
          <img
            src="https://ik.imagekit.io/xbkhabiqcy9/tr:w-224,h-56/img/theme-starter_vcp8Di1eWC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649347569890"
            class="image-responsive"
            width={112}
            height={28}
            alt="logo"
          />
        </section>
        <section class="navbar-section">
          <Link to="#" class="btn btn-link">GitHub</Link>
        </section>
      </nav>
    </Fragment>
  );
};

export default Nav;