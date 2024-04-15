"use client";
import React from "react";
import { userDef } from "@/components/types";
import UserForm from "@/components/User_Form";

export default function AddForm() {

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
