"use client"
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
    // <ul className="nav bg-dark justify-content-center">
    //   <li className="nav-item">
    //     <a className="nav-link active" aria-current="page" href="/">
    //       <Image
    //         src="/icons/logo.png"
    //         width={70}
    //         height={50}
    //         alt=""
    //       />
    //     </a>
    //   </li>
    // </ul>
    <nav className="navbar bg-body-secondary ">
      <div className="container-fluid">
        <a className="nav-link active" aria-current="page" href="/">
          <Image src="/icons/logo.png" width={70} height={50} alt="" />
        </a>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={
            classNames('offcanvas offcanvas-end text-bg-white' ,{show: menuOpen})}
          tabIndex={-1}
        >
          <div className="offcanvas-header">
          <h5 className="fw-bold text-center my-3">PROJECT-MAU</h5>
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="offcanvas"
              onClick={toggleMenu}
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item" onClick={closeMenu}>
                <a className="fw-bold nav-link" aria-current="page" href="#">
                  ADMIN
                </a>
              </li>
              <li className="nav-item" onClick={closeMenu}>
                <a className="fw-bold nav-link" href="#">
                  USER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
