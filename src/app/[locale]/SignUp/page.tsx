"use client";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Image from "next/image";
import { app } from "@/components/firebase";

const auth = getAuth(app);
export default function signUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((value) => {
        // Handle successful login
        console.log(value);
        alert("Account Created");
      })
      .catch((error) => {
        // Handle errors
        console.error("Error signing up:", error.message);
        alert("Account already exist");
      });
  };
  return (
    <div className="container">
      <h4 className="fw-bold text-center my-3">SignUp Here</h4>
      <div className="d-flex justify-content-center">
        <form
          className="row g-3 card my-2 p-2 col-md-6"
          style={{ backgroundColor: "lightblue" }}
          // gainboro
          onSubmit={handleSubmit}
        >
          <div className="row g-3 justify-content-center my-1">
            <div>
              <Image
                src="/icons/cat.jpg"
                alt=""
                width={45}
                height={40}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "70px",
                  height: "70px",
                }}
              />
            </div>

            <div className="col-sm-2">
              <label
                htmlFor="exampleInputEmail1"
                className="fw-bold form-label py-2"
              >
                Email
              </label>
            </div>
            <div className="col-sm-6 ">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your email"
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="row g-3 justify-content-center my-1">
            <div className="col-sm-2">
              <label
                htmlFor="exampleInputPassword1"
                className="fw-bold form-label py-2"
              >
                Password
              </label>
            </div>
            <div className="col-sm-6">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your password"
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          <div className="buttons">
            <div className="d-flex flex-row mb-2 justify-content-center">
              <div className="p-2">
                <button type="submit" className="fw-bold btn btn-primary px-3">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}