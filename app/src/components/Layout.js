import React, {Link} from "react";
import LoadingIndicator from "./LoadingIndicator";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
import { IoIosArrowRoundForward } from "react-icons/io";

import { MdEqualizer } from "react-icons/md";

export default function Layout({ children }) {
  return (
    <div className="Background ">
      <div className="header bg-white text-dark py-4">
        <div className="container d-flex justify-content-between">
          <a href="/" className="logo">
            <MdEqualizer />
          </a>
          <div className="Title">Vote as a Service</div>
          <div className="user-management">
            <a
              href="/login"
              style={{ marginLeft: "20px" }}
              type="button"
              className="btn btn-info"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      <div className="main py-5 text-center">
        <div className="py-5">
          <h1>CREATE BEAUTIFUL & ENGAGING POLLS</h1>
        </div>
        <div className="container text-left">
          <React.Suspense
            fallback={
              <LoadingIndicator title="Loading the Page... please wait" />
            }
          >
            {children}
          </React.Suspense>
        </div>
      </div>

      <section className="More">
        <div class="container">
          <h3> Looking for more?</h3>
          <div class="More-jobs">
            <a href="https://jobs.johannesschwegler.de" target="_blank">Check out my jobs application <IoIosArrowRoundForward /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
