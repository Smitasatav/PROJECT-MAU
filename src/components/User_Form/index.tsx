import React, { useState } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { requestDef } from "@/components/types.js";
import { initValue } from "./config.js";
import Image from "next/image";
import FormField from "@/components/FormField";
import { useTranslations } from "next-intl";

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

const UserForm: React.FC<props> = ({ submitBtnLable, user, save }) => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleCaptchaVerify = () => {
    setIsCaptchaVerified(true);
  };

  const handleSubmit = (values: requestDef) => {
    if (isCaptchaVerified) {
      save(values);
    } else {
      alert("Please verify reCAPTCHA.");
    }
  };

  const t = useTranslations("Form");

  return (
    <main>
      <h4 className="fw-bold text-center my-2">{t("lable")}</h4>
      <Formik
        initialValues={user ? user : initValue}
        validationSchema={SignupSchema}
        onSubmit={save}
      >
        {({ errors, touched, values }) => (
          <div className="container">
            <div className="d-flex justify-content-center">
              <Form
                className="row g-3 card my-2 p-3 col-md-6"
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
                    <b>{t("area")}</b>
                  </label>
                  <div className="radio-group">
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="location"
                        value="Pune"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("pune")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="location"
                        value="PCMC"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("pcmc")}</label>
                    </div>
                  </div>
                </div>

                {/* for name */}
                <FormField
                  label={t("name_1")}
                  name="name"
                  placeholder={t("name_field")}
                  type="text"
                  errors={errors}
                  touched={touched}
                />

                {/* for phone number and alternate phone number */}
                <div className="d-flex">
                  {/* Phone Number */}
                  <div className="flex-grow-1 me-2">
                    <FormField
                      label={t("ph_1")}
                      name="number"
                      placeholder={t("phone_field")}
                      type="number"
                      errors={errors}
                      touched={touched}
                    />
                  </div>

                  {/* Alternate Phone Number */}
                  <div className="flex-grow-1 ms-2">
                    <FormField
                      label={t("ph_2")}
                      name="alt-number"
                      placeholder={t("phone_field_1")}
                      type="number"
                      errors={errors}
                      touched={touched}
                    />
                  </div>
                </div>

                {values.number === values.alt_number &&
                  values.number !== "" &&
                  values.alt_number !== "" && (
                    <div className="text-danger">
                     {t("ph_not_same")}
                    </div>
                  )}

                {/* for Email id */}
                <div>
                  <FormField
                    label={t("email")}
                    name="email"
                    placeholder={t("email_field")}
                    errors={errors}
                    touched={touched}
                  />
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
                        <b>{t("address_1")} </b>
                      </label>
                    </div>
                    <label className="col-sm-2-col-form-label">
                    {t("address_2")}
                    </label>
                    <Field
                      name="house"
                      placeholder={t("address_field")}
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
                    {t("address_3")}
                    </label>
                    <Field
                      name="area"
                      placeholder={t("address_field")}
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
                    <label className="col-sm-2-col-form-label"> {t("address_4")}</label>
                    <Field
                      name="landmark"
                      placeholder={t("address_field")}
                      className={classNames("form-control", {
                        "is-invalid": touched.house && errors.house,
                      })}
                      style={{ fontStyle: "italic", fontSize: "small" }}
                    />
                    {errors.landmark && touched.landmark && (
                      <div className="invalid-feedback">{errors.landmark}</div>
                    )}
                  </div>

                  {/* pincode */}
                  <div className="flex-grow-1 ms-2">
                    <label className="col-sm-2-col-form-label">{t("address_5")}</label>
                    <Field
                      name="pincode"
                      type="number"
                      placeholder={t("pincode_field")}
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
                        <b>{t("no-of-cat")}</b>
                      </label>
                    </div>
                    {/* for male */}
                    <label className="col-sm-2-col-form-label">{t("male")}</label>
                    <Field
                      name="male"
                      type="number"
                      placeholder={t("no_of_cat")}
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
                    <label className="col-sm-2-col-form-label">{t("female")}</label>
                    <Field
                      name="female"
                      type="number"
                      placeholder={t("no_of_cat")}
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
                  {t("instruction-1")}
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
                  {t("instruction-2")}
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
                    <b>{t("uplod_pics")}</b>
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
                    {t("upload")}
                    </button>
                  </div>
                </div>

                {/* for vaccination  */}

                <div>
                  <label className="col-sm-2-col-form-label">
                    <b> {t("vaccination-1")} </b> {t("vaccination-2")}
                  </label>
                  <div
                    style={{
                      fontStyle: "italic",
                      fontSize: "small",
                      textAlign: "left",
                    }}
                  >
                    <i>
                    {t("vaccination-inst-1")}
                      <br /> {t("vaccination-inst-2")}
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
                      <label className="form-check-label">{t("yes")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="vaccine"
                        value="no"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("no")}</label>
                    </div>
                  </div>
                </div>

                {/* for adhar card number */}
                <FormField
                  label={t("adhar")}
                  name="adhar"
                  type="number"
                  placeholder={t("adhar_field")}
                  errors={errors}
                  touched={touched}
                />

                {/* for pan card number */}
                <div>
                  <label className="col-sm-2-col-form-label">
                    <b>{t("pan_1")}</b>{t("pan_2")}
                  </label>
                  <Field
                    name="pan"
                    placeholder={t("pan_field")}
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
                    <b>{t("transport-1")}</b>
                    <i> {t("transport-2")}</i>
                  </label>
                  <div className="radio-group">
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="transport"
                        value="yes"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("yes")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="transport"
                        value="no"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("no")}</label>
                    </div>
                  </div>
                </div>

                {/* for GPS location */}

                {values.transport === "yes" && (
                  <>
                    <FormField
                      label={t("gps_1")}
                      name="gpsLocation"
                      placeholder={t("gps_2")}
                      errors={errors}
                      touched={touched}
                    />

                    {/* for traps */}
                    <div>
                      <label className="col-sm-2-col-form-label">
                        <b>{t("traps_1")}</b>
                        <i> {t("traps_2")}</i>
                      </label>
                      <div className="radio-group">
                        <div className="form-check form-check-inline">
                          <Field
                            type="radio"
                            name="trap"
                            value="yes"
                            className="form-check-input"
                          />
                          <label className="form-check-label">{t("yes")}</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <Field
                            type="radio"
                            name="trap"
                            value="no"
                            className="form-check-input"
                          />
                          <label className="form-check-label">{t("no")}</label>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {/* for post-op */}

                <div>
                  <label className="col-sm-2-col-form-label">
                    <b>{t("post-op-1")}</b>
                    <div
                      style={{
                        fontStyle: "italic",
                        fontSize: "small",
                        textAlign: "left",
                      }}
                    >
                      <i>
                      {t("post-op-2")}
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
                      <label className="form-check-label">{t("yes")}</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <Field
                        type="radio"
                        name="post-op"
                        value="no"
                        className="form-check-input"
                      />
                      <label className="form-check-label">{t("no")}</label>
                    </div>
                  </div>
                </div>

                {/* for recaptch */}
                <ReCAPTCHA
                  sitekey="6Ldku7spAAAAAIB1X6iEOfsmEQnYsx_SRj0yIrpg"
                  onChange={handleCaptchaVerify}
                />

                {/* for buttons */}

                <div className="buttons">
                  <div className="d-flex flex-row mb-3">
                    <div className=" p-3">
                      <button type="submit" className="btn btn-primary">
                      {t("submit")}
                      </button>
                    </div>
                    <div className="p-3">
                      <button
                        type="button"
                        className="btn btn-warning"
                        // onClick={clearForm}
                      >
                         {t("clear")}
                      </button>
                    </div>
                    <div className="p-3 ">
                      <Link href="/">
                        <button type="button" className="btn btn-danger">
                        {t("cancel")}
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
};

export default UserForm;