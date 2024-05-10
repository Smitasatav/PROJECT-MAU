"use client";
import React, { useState } from "react";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
} from "firebase/auth";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import OtpInput from "react-otp-input";
import "react-phone-input-2/lib/style.css";
import { app } from "@/components/firebase";

const auth = getAuth(app);

export default function PhoneSignIn() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

  const getOTP = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        `+${phoneNumber}`,
        recaptcha
      );
      setConfirmationResult(confirmation);
      console.log("OTP sent successfully!");
    } catch (error) {
      console.log("Error sending OTP:", error);
    }
  };

  const verifyOTP = async () => {
    try {
      if (confirmationResult) {
        const code = otp;
        await confirmationResult.confirm(code);
        console.log("User signed in successfully!");
      } else {
        throw new Error("Confirmation result is not available.");
      }
    } catch (error) {
      console.log("Error verifying OTP:", error);
    }
  };

  return (
    <div className="container">
      <h4 className="fw-bold text-center my-3">Login With Phone</h4>
      <div className="d-flex justify-content-center">
        <div
          className="row g-3 card my-2 p-2 col-md-6"
          style={{ backgroundColor: "lightblue" }}
        >
          <div className="row justify-content-center">
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
                  height: "65px",
                }}
              />
            </div>
            <div className="col-sm-6 p-2 mt-4">
              <label
                htmlFor="validationTextarea"
                className=" fw-bold form-label"
              >
                Mobile Number
              </label>
              <PhoneInput
                country={"in"}
                value={phoneNumber}
                onChange={(value) => setPhoneNumber(value)}
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div className="buttons">
            <div className="d-flex flex-row justify-content-center">
              <button
                type="submit"
                onClick={getOTP}
                className="btn btn-primary px-3"
              >
                Send OTP
              </button>
            </div>
          </div>
          <div
            id="recaptcha-container"
            className="d-flex justify-content-center mx-3"
          ></div>
          <div className="row justify-content-center">
            <div className="col-sm-6 p-3 mx-4">
              <label
                htmlFor="validationTextarea"
                className=" fw-bold form-label"
              >
                Enter OTP
              </label>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                inputType="tel"
                containerStyle={{ width: "120%" }}
                inputStyle={{ width: "100%", padding: "5px" }}
              />
            </div>
          </div>
          <div className="buttons">
            <div
              className="d-flex flex-row justify-content-center"
              style={{ marginTop: "-10px" }}
            >
              <button className="btn btn-primary px-3" onClick={verifyOTP}>
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
