"use client";
import "bootstrap/dist/css/bootstrap.css";
import UserForm from "@/app/components/Form";
import { userDef } from "./components/types";
export default function Home() {
  return (
    <main>
      <UserForm
        submitBtnLable={""}
        save={function (user: userDef): void {
          throw new Error("Function not implemented.");
        }}
      />
    </main>
  );
}
