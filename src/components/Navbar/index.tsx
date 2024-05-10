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
          <Image src="/icons/logo.png" width={65} height={45} alt="" />
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
                <Link className="fw-bold nav-link" href="/SignInWithPhone">
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
