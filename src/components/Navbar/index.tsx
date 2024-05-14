"use client";
import { Link } from "@/i18n";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className="navbar bg-body-secondary ">
      <div className="container-fluid-start d-flex flex-row ms-3">
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>
        <a className="nav-link active ms-3" href="/">
          <Image src="/images/logo.png" width={65} height={45} alt="" />
        </a>
        <div
          className={classNames("offcanvas offcanvas-start text-bg-white", {
            show: menuOpen,
          })}
          tabIndex={-1}
        >
          <div className="offcanvas-header">
            <h5 className="fw-bold text-center my-3">PROJECT-MAU</h5>
            <button type="button" className="btn-close " onClick={toggleMenu} />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item" onClick={closeMenu}>
                <Link className="fw-bold nav-link" href="/Admin_Login">
                  ADMIN
                </Link>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <Link className="fw-bold nav-link" href="#">
                  USER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

{
  /* <footer className="footer bg-body-secondary mt-auto py-3">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
              <ul className="list-unstyled d-flex justify-content-end">
                <li className="me-3">
                  <Link href="/about">
                    <i>Powered by Grahan Foundation</i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */
}
