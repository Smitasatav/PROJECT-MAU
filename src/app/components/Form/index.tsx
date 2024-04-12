import React from "react";

import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { userDef } from "@/app/components/types";
import { initValue } from "./config.js";

interface props {
  submitBtnLable: string;
  title?: string;
  user?: userDef;
  save: (user: userDef) => void; // Define the save function type
}

const SignupSchema = Yup.object().shape({
  //   location: Yup.string()
  //     .oneOf(["Pune", "PCMC"], "Please select a valid area")
  //     .required("Please select an area"),
  name: Yup.string().min(2).max(25).required("Please enter your name"),

  number: Yup.string()
    .matches(/^\d{10}$/, "Please enter a 10-digit number")
    .required("Please enter your phone number"),

  alt_number: Yup.string()
    .matches(/^\d{10}$/, "Please enter a 10-digit number")
    .required("Please enter your phone number"),

  email: Yup.string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address")
    .required("Please enter your email address"),

  house: Yup.string().min(5).max(25).required("Please enter valid address"),

  area: Yup.string().min(5).max(25).required("Please enter valid address"),

  landmark: Yup.string().min(5).max(25).required("Please enter valid address"),

  pincode: Yup.string().min(6).max(6).required("Please enter valid pincode"),

  adhar: Yup.string()
    .min(12)
    .max(12)
    .required("Please enter valid adhar number"),

  pan: Yup.string()
    .matches(/^([A-Z\d]){10}$/, "Please enter a valid PAN card number")
    .max(10, "PAN card number must not exceed 10 characters")
    .required("Please enter your PAN card number"),
});

export default function UserForm({ submitBtnLable, user, title, save }: props) {
  return (
    <main>
      <h3 className="text-center">REGISTER HERE</h3>

      <Formik
        initialValues={user ? user : initValue}
        validationSchema={SignupSchema}
        onSubmit={save}
      >
        {({ errors, touched, values }) => (
          <div className="container">
            <div className="d-flex justify-content-center">
              <Form
                className="row g-3 card mt-3 p-3 col-md-6"
                style={{ backgroundColor: "gainsboro" }}
              >
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
                      name="alt-number"
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
                        "is-invalid": touched.house && errors.house,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.house && touched.house && (
                      <div className="invalid-feedback">{errors.house}</div>
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
                        "is-invalid": touched.area && errors.area,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.area && touched.area && (
                      <div className="invalid-feedback">{errors.area}</div>
                    )}
                  </div>
                </div>

                <div className="d-flex">
                  {/* landmark */}
                  <div className="flex-grow-1 me-2">
                    <label className="col-sm-2-col-form-label">Landmark</label>
                    <Field
                      name="landmark"
                      placeholder="Enter Your Address"
                      className={classNames("form-control", {
                        "is-invalid": touched.house && errors.house,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.landmark && touched.landmark && (
                      <div className="invalid-feedback">{errors.landmark}</div>
                    )}
                  </div>

                  {/* area, street, sector */}
                  <div className="flex-grow-1 ms-2">
                    <label className="col-sm-2-col-form-label">Pincode</label>
                    <Field
                      name="pincode"
                      type="number"
                      placeholder="Enter Your Pincode"
                      className={classNames("form-control", {
                        "is-invalid": touched.pincode && errors.pincode,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.pincode && touched.pincode && (
                      <div className="invalid-feedback">{errors.area}</div>
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
                        "is-invalid": touched.gender && errors.gender,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.gender && touched.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
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
                      placeholder="Number of Cats"
                      className={classNames("form-control", {
                        "is-invalid": touched.gender && errors.gender,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.gender && touched.gender && (
                      <div className="invalid-feedback">{errors.gender}</div>
                    )}
                  </div>
                </div>

                {/* age of cat */}
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
                        vulnerable. Please click "Yes" only if you are not able
                        to take care of them.
                      </i>
                    </div>
                    {/* <i> (Only if Feral Cats are wary of People)</i> */}
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

                {/* for buttons */}

                <div className="buttons">
                  <div className="d-flex flex-row mb-3">
                    <div className=" p-3">
                      <button type="submit" className="btn btn-primary">
                        Submit
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
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </main>
  );
}

{
  /* for phone number */
}
//  <div>
//  <label className="col-sm-2-col-form-label">
//    <b>Phone Number</b>
//  </label>
//  <Field
//    name="number"
//    type="number"
//    placeholder="Enter Your Number"
//    className={classNames("form-control", {
//      "is-invalid": touched.number && errors.number,
//    })}
//  />
//  {errors.number && touched.number && (
//    <div className="invalid-feedback">{errors.number}</div>
//  )}
// </div>

{
  /* for  alternate phone number */
}
{
  /* <div>
 <label className="col-sm-2-col-form-label">
   <b>Alternate Phone Number</b>
 </label>
 <Field
   name="alt-number"
   type="number"
   placeholder="Enter Your Number"
   className={classNames("form-control", {
     "is-invalid": touched.alt_number && errors.alt_number,
   })}
 />
 {errors.alt_number && touched.alt_number && (
   <div className="invalid-feedback">{errors.alt_number}</div>
 )}
</div> */
}
