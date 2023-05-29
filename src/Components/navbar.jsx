import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container py-2">
      <Link to={"/"} className="text-decoration-none">
        <b className="fs-2">Jaloliddin.<span className="" >dev</span> </b>
      </Link>

      <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        <Link class="fs-5 me-3 py-2 link-body-emphasis text-decoration-none" to="/login">
          Login
        </Link>
        <Link class="fs-5 me-3 py-2 link-body-emphasis text-decoration-none" to="/register">
          Register
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
