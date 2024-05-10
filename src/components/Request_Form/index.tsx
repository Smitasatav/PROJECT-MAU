"use client";
import React, { useState } from "react";
import classNames from "classnames";
import { useTranslations } from "next-intl";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "@/i18n";
import { requestDef } from "@/components/types";
import initValue, { sitekey } from "./config";
import Image from "next/image";

interface props {
  submitBtnLable: string;
  title?: string;
  user?: requestDef;
  save: (user: requestDef) => void; // Define the save function type
}

const SignupSchema = Yup.object().shape({
  //   location: Yup.string()
  //     .oneOf(["Pune", "PCMC"], "Please select a valid area")
  //     .required("Please select an area"),
  name: Yup.string().min(4).max(25).required("Please enter your name"),

  number: Yup.string()
    .matches(/^\d{10}$/, "Please enter a 10-digit number")
    .required("Please enter your phone number"),

  alt_number: Yup.string()
    .matches(/^\d{10}$/, "Please enter a 10-digit number")
    .required("Please enter your phone number"),

  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .required("Please enter your email address"),

  house: Yup.string().min(5).max(50).required("Please enter valid address"),

  area: Yup.string().min(5).max(25).required("Please enter valid address"),

  landmark: Yup.string().min(5).max(25).required("Please enter valid address"),

  pincode: Yup.string()
    .min(6)
    .max(6)
    .required("Please enter your valid pincode"),

  adhar: Yup.string()
    .min(12)
    .max(12)
    .required("Please enter valid adhar number"),

  pan: Yup.string()
    .matches(/^([A-Z\d]){10}$/, "Please enter a valid PAN card number")
    .max(10, "PAN card number must not exceed 10 characters")
    .required("Please enter your PAN card number"),
});

const RequestForm: React.FC<props> = (props) => {
  let { submitBtnLable, user, save } = props;

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaVerify = () => {
    setIsCaptchaVerified(true);
  };

  const handleSubmitWithCaptcha = (values: requestDef) => {
    console.log(values);
    if (isCaptchaVerified) {
      save(values);
    } else {
      alert("Please verify reCAPTCHA.");
    }
  };

  return (
    <main>
      <h4 className="fw-bold text-center my-2">REGISTER HERE</h4>

      <Formik
        initialValues={user ? user : initValue}
        // validationSchema={SignupSchema}
        onSubmit={handleSubmitWithCaptcha}
      >
        {({ errors, touched, values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className="container">
              <div className="d-flex justify-content-center">
                <div
                  className="row g-3 card mt-3 p-3 col-md-6"
                  style={{ backgroundColor: "lightblue" }}
                  // gainboro
                >
                  {/* Image */}
                  <div>
                  <Image
                    src="/icons/cat.jpg"
                    alt=""
                    width={50}
                    height={50}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: "70px",
                      height: "70px",
                    }}
                  />
                </div>

                  {/* for location */}
                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>Area</b>
                    </label>
                    <div className="radio-group">
                      <div className="form-check form-check-inline">
                        <Field
                          type="radio"
                          name="location"
                          value="Pune"
                          className="form-check-input"
                        />
                        <label className="form-check-label">Pune</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <Field
                          type="radio"
                          name="location"
                          value="PCMC"
                          className="form-check-input"
                        />
                        <label className="form-check-label">PCMC</label>
                      </div>
                    </div>
                  </div>

                  {/* for name */}
                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>Full name</b>
                    </label>
                    <Field
                      name="name"
                      placeholder="Enter Your Name"
                      className={classNames("form-control", {
                        "is-invalid": touched.name && errors.name,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.name && touched.name && (
                      <div className="invalid-feedback">{errors["name"]}</div>
                    )}
                  </div>

                  {/* for phone number and alternate phone number */}
                  <div className="d-flex">
                    {/* Phone Number */}
                    <div className="flex-grow-1 me-2">
                      <label className="col-sm-2-col-form-label">
                        <b>Phone Number</b>
                      </label>
                      <Field
                        name="number"
                        type="number"
                        placeholder="Enter Your Number"
                        className={classNames("form-control", {
                          "is-invalid": touched.number && errors.number,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.number && touched.number && (
                        <div className="invalid-feedback">{errors.number}</div>
                      )}
                    </div>

                    {/* Alternate Phone Number */}
                    <div className="flex-grow-1 ms-2">
                      <label className="col-sm-2-col-form-label">
                        <b>Alternate Phone Number</b>
                      </label>
                      <Field
                        name="alt_number"
                        type="number"
                        placeholder="Enter Your Alternate Number"
                        className={classNames("form-control", {
                          "is-invalid": touched.alt_number && errors.alt_number,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.alt_number && touched.alt_number && (
                        <div className="invalid-feedback">
                          {errors.alt_number}
                        </div>
                      )}
                    </div>
                  </div>

                  {values.number === values.alt_number &&
                    values.number !== "" &&
                    values.alt_number !== "" && (
                      <div className="text-danger">
                        Phone numbers cannot be the same
                      </div>
                    )}

                  {/* for Email id */}
                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>Email ID</b>
                    </label>
                    <Field
                      name="email"
                      placeholder="Enter Your Email ID"
                      className={classNames("form-control", {
                        "is-invalid": touched.email && errors.email,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  {/* full address */}

                  <div className="d-flex">
                    {/* house, building, apartment */}
                    <div className="flex-grow-1 me-2">
                      {/* <h6>
                      <b>Full Address</b>
                    </h6> */}
                      <div>
                        <label className="col-sm-2-col-form-label">
                          <b>Full Address</b>
                        </label>
                      </div>
                      <label className="col-sm-2-col-form-label">
                        Flat, House, Building, Apartment
                      </label>
                      <Field
                        name="house"
                        placeholder="Enter Your Address"
                        className={classNames("form-control", {
                          "is-invalid":
                            touched.full_address &&
                            touched.full_address.house &&
                            errors.full_address &&
                            errors.full_address.house,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.full_address &&
                        errors.full_address.house &&
                        touched.full_address &&
                        touched.full_address.house && (
                          <div className="invalid-feedback">
                            {errors.full_address.house}
                          </div>
                        )}
                    </div>

                    {/* area, street, sector */}
                    <div className="flex-grow-1 ms-2">
                      <div>
                        <label className="col-sm-2-col-form-label"></label>
                      </div>
                      <label className="col-sm-2-col-form-label">
                        Area, street, Sector
                      </label>
                      <Field
                        name="area"
                        placeholder="Enter Your Address"
                        className={classNames("form-control", {
                          "is-invalid":
                            touched.full_address &&
                            touched.full_address.area &&
                            errors.full_address &&
                            errors.full_address.area,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.full_address &&
                        errors.full_address.area &&
                        touched.full_address &&
                        touched.full_address.area && (
                          <div className="invalid-feedback">
                            {errors.full_address.area}
                          </div>
                        )}
                    </div>
                  </div>

                  <div className="d-flex">
                    {/* landmark */}
                    <div className="flex-grow-1 me-2">
                      <label className="col-sm-2-col-form-label">
                        Landmark
                      </label>
                      <Field
                        name="landmark"
                        placeholder="Enter Your Address"
                        className={classNames("form-control", {
                          "is-invalid":
                            touched.full_address &&
                            touched.full_address.landmark &&
                            errors.full_address &&
                            errors.full_address.landmark,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.full_address &&
                        errors.full_address.landmark &&
                        touched.full_address &&
                        touched.full_address.landmark && (
                          <div className="invalid-feedback">
                            {errors.full_address.landmark}
                          </div>
                        )}
                    </div>

                    {/* pincode */}
                    <div className="flex-grow-1 ms-2">
                      <label className="col-sm-2-col-form-label">Pincode</label>
                      <Field
                        name="pincode"
                        type="number"
                        placeholder="Enter Your Pincode"
                        className={classNames("form-control", {
                          "is-invalid":
                            touched.full_address &&
                            touched.full_address.pincode &&
                            errors.full_address &&
                            errors.full_address.pincode,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.full_address &&
                        errors.full_address.pincode &&
                        touched.full_address &&
                        touched.full_address.pincode && (
                          <div className="invalid-feedback">
                            {errors.full_address.pincode}
                          </div>
                        )}
                    </div>
                  </div>

                  {/* no of cats with gender */}
                  <div className="d-flex">
                    <div className="flex-grow-1 me-2">
                      <div>
                        <label className="col-sm-2-col-form-label">
                          <b>Number of Cats with Gender</b>
                        </label>
                      </div>
                      {/* for male */}
                      <label className="col-sm-2-col-form-label">Male</label>
                      <Field
                        name="male"
                        type="number"
                        placeholder="Number of Cats"
                        className={classNames("form-control", {
                          "is-invalid":
                            touched.cats &&
                            touched.cats.male &&
                            errors.cats &&
                            errors.cats.male,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.cats &&
                        errors.cats.male &&
                        touched.cats &&
                        touched.cats.male && (
                          <div className="invalid-feedback">
                            {errors.cats.male}
                          </div>
                        )}
                    </div>

                    {/* for female */}
                    <div className="flex-grow-1 ms-2">
                      <div>
                        <label className="col-sm-2-col-form-label"></label>
                      </div>
                      <label className="col-sm-2-col-form-label">Female</label>
                      <Field
                        name="female"
                        type="number"
                        placeholder="Number of Cats"
                        className={classNames("form-control", {
                          "is-invalid":
                            touched.cats &&
                            touched.cats.female &&
                            errors.cats &&
                            errors.cats.female,
                        })}
                        style={{ fontStyle: "italic", fontSize: "small" }}
                      />
                      {errors.cats &&
                        errors.cats.female &&
                        touched.cats &&
                        touched.cats.female && (
                          <div className="invalid-feedback">
                            {errors.cats.female}
                          </div>
                        )}
                    </div>
                  </div>

                  {/* age of cat for below 1 yr */}
                  <div>
                    <label className="col-sm-2-col-form-label">
                      If any cat age below one year. Please mention here
                    </label>
                    <Field
                      name="age"
                      // className="form-control"
                      // placeholder="Enter Your Name"
                      className={classNames("form-control", {
                        "is-invalid": touched.age && errors.age,
                      })}
                    />
                  </div>

                  <div>
                    <label className="col-sm-2-col-form-label">
                      Any Previous Recent Surgery,Illness or Pregenancy?
                    </label>
                    <Field
                      name="illness"
                      // className="form-control"
                      // placeholder="Enter Your Name"
                      className={classNames("form-control", {
                        "is-invalid": touched.illness && errors.illness,
                      })}
                    />
                  </div>

                  {/* Picture upload field  */}
                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>Upload Pictures of Your Cats</b>
                    </label>

                    <div className="form-control d-flex align-items-center">
                      <input
                        type="file"
                        name="pictures"
                        accept="image/*"
                        className="form-control flex-grow-1"
                        multiple // Allow multiple picture uploads
                      />
                      <button type="button" className="btn btn-primary ms-3">
                        Upload
                      </button>
                    </div>
                  </div>

                  {/* for vaccination  */}

                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>Vaccination </b>(Tri-Cat)
                    </label>
                    <div
                      style={{
                        fontStyle: "italic",
                        fontSize: "small",
                        textAlign: "left",
                      }}
                    >
                      <i>
                        Vaccination is paid and won't be sponsered. Charges for
                        vaccine is 1000/- per cat.
                        <br /> "Bringing your cat without vaccination is at your
                        own risk."
                      </i>
                    </div>
                    <div className="radio-group">
                      <div className="form-check form-check-inline">
                        <Field
                          type="radio"
                          name="vaccine"
                          value="yes"
                          className="form-check-input"
                        />
                        <label className="form-check-label">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <Field
                          type="radio"
                          name="vaccine"
                          value="no"
                          className="form-check-input"
                        />
                        <label className="form-check-label">No</label>
                      </div>
                    </div>
                  </div>

                  {/* for adhar card number */}
                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>Adhar Card Number</b>
                    </label>
                    <Field
                      name="adhar"
                      type="number"
                      placeholder="Enter Your Adhar-Card Number"
                      className={classNames("form-control", {
                        "is-invalid": touched.adhar && errors.adhar,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.adhar && touched.adhar && (
                      <div className="invalid-feedback">{errors.adhar}</div>
                    )}
                  </div>

                  {/* for pan card number */}
                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>PAN Card Number </b> (If donating)
                    </label>
                    <Field
                      name="pan"
                      placeholder="Enter Your PAN Number"
                      className={classNames("form-control", {
                        "is-invalid": touched.pan && errors.pan,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.pan && touched.pan && (
                      <div className="invalid-feedback">{errors.pan}</div>
                    )}
                  </div>

                  {/* for transport */}

                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>Need of Transport</b>
                      <i> (It is paid & won't be sponsored)</i>
                    </label>
                    <div className="radio-group">
                      <div className="form-check form-check-inline">
                        <Field
                          type="radio"
                          name="transport"
                          value="yes"
                          className="form-check-input"
                        />
                        <label className="form-check-label">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <Field
                          type="radio"
                          name="transport"
                          value="no"
                          className="form-check-input"
                        />
                        <label className="form-check-label">No</label>
                      </div>
                    </div>
                  </div>

                  {/* for GPS location */}

                  {values.transport === "yes" && (
                    <>
                      <div>
                        <label className="col-sm-2-col-form-label">
                          <b>GPS Location</b>
                        </label>
                        <Field
                          name="gpsLocation"
                          placeholder="Paste your Google Location Here"
                          className={classNames("form-control", {
                            "is-invalid":
                              touched.gpsLocation && errors.gpsLocation,
                          })}
                          style={{ fontStyle: "italic", fontSize: "small" }}
                        />
                        {errors.gpsLocation && touched.gpsLocation && (
                          <div className="invalid-feedback">
                            {errors.gpsLocation}
                          </div>
                        )}
                      </div>

                      {/* for traps */}

                      <div>
                        <label className="col-sm-2-col-form-label">
                          <b>Need of Traps</b>
                          <i> (Only if Feral Cats are wary of People)</i>
                        </label>
                        <div className="radio-group">
                          <div className="form-check form-check-inline">
                            <Field
                              type="radio"
                              name="trap"
                              value="yes"
                              className="form-check-input"
                            />
                            <label className="form-check-label">Yes</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <Field
                              type="radio"
                              name="trap"
                              value="no"
                              className="form-check-input"
                            />
                            <label className="form-check-label">No</label>
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* for post-op */}

                  <div>
                    <label className="col-sm-2-col-form-label">
                      <b>Post Operative Care</b>
                      <div
                        style={{
                          fontStyle: "italic",
                          fontSize: "small",
                          textAlign: "left",
                        }}
                      >
                        <i>
                          Cats need post operative care after surgery to recover
                          from the effects of anesthesia and to keep them
                          vulnerable. Please click "Yes" only if you are not
                          able to take care of them.
                        </i>
                      </div>
                    </label>

                    <div className="radio-group">
                      <div className="form-check form-check-inline">
                        <Field
                          type="radio"
                          name="post-op"
                          value="yes"
                          className="form-check-input"
                        />
                        <label className="form-check-label">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <Field
                          type="radio"
                          name="post-op"
                          value="no"
                          className="form-check-input"
                        />
                        <label className="form-check-label">No</label>
                      </div>
                    </div>
                  </div>

                  {/* for recaptch */}

                  <ReCAPTCHA sitekey={sitekey} onChange={handleCaptchaVerify} />

                  {/* for buttons */}

                  <div className="buttons">
                    <div className="d-flex flex-row mb-3">
                      <div className=" p-3">
                        <button type="submit" className="btn btn-primary">
                          {submitBtnLable}
                        </button>
                      </div>
                      <div className="p-3">
                        <button
                          type="button"
                          className="btn btn-warning"
                          // onClick={clearForm}
                        >
                          Clear
                        </button>
                      </div>
                      <div className="p-3 ">
                        <Link href="/">
                          <button type="button" className="btn btn-danger">
                            Cancel
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </main>
  );
};

export default RequestForm;