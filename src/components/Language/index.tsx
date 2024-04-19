"use client";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
// import "./style.css";

export default function Lang() {
  // const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (locale: string) => {
      router.replace(`/${locale}/Guidelines`);
  };

  return (
    <main>
      <div className="container">
        <h4 className="fw-bold text-center pt-2 mt-2">
          Please select your language
        </h4>
        <div className="d-flex flex-column align-items-center mt-3">
          <div className="my-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSelectChange("en")}
            >
              ENGLISH
            </button>
          </div>
          <div className="my-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSelectChange("hi")}
            >
              हिंदी
            </button>
          </div>
          <div className="my-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onSelectChange("mh")}
            >
              मराठी
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}