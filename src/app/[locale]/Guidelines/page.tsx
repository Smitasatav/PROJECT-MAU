"use client"
import { useTranslations } from "next-intl";
import { Link } from "@/i18n";
import { useState } from "react";

export default function Guidelines() {
  const [isChecked, setIsChecked] = useState(false);
  const t = useTranslations("Guidelines");

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className="container">
      <h5 className="fw-bold text-center my-3">{t("heading")}</h5>
      <ol className="list-group list-group-numbered my-2">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_1")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_2")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_3")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_4")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_5")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_6")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_7")} </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_8")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_9")} </div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_10")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_11")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_12")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_13")}</div>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">{t("step_14")}</div>
        </li>
      </ol>
      <div className="form-check mt-2">
      <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label className="form-check-label fw-bold" htmlFor="flexCheckChecked">
          {t("agree")}
        </label>
      </div>
      <div className="d-flex justify-content-between my-2">
        <div>
          <Link href="/">
            <button className="btn btn-primary" type="button">
              {t("back")}
            </button>
          </Link>
        </div>
        <div>
          <Link href={isChecked ? "/New-Request" : "#"}>
            <button
              className="btn btn-primary"
              type="button"
              disabled={!isChecked}
            >
              {t("next")}
            </button>
          </Link>
        </div>       
      </div>
    </div>
  );
}
