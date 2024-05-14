import React from "react";
import classNames from "classnames";
import { Field } from "formik";

interface props {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  errors: { [key: string]: string };
  touched: { [key: string]: boolean };
}

export default function FormField({
  label,
  name,
  placeholder,
  type,
  errors,
  touched,
}: props) {
  return (
    <div>
      <label className="col-sm-2-col-form-label">
        <b>{label}</b>
      </label>
      <Field
        name={name}
        type={type}
        placeholder={placeholder}
        className={classNames("form-control", {
          "is-invalid": touched[name] && errors[name],
        })}
        style={{ fontStyle: "italic", fontSize: "small" }}
      />
      {errors[name] && touched[name] && (
        <div className="invalid-feedback">{errors[name]}</div>
      )}
    </div>
  );
}
