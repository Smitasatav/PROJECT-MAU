"use client";
import React from "react";
import Form from "@/components/Request_Form";
import { requestDef } from "@/components/types";
import { insertDocument } from "@/components/firebase";
import Head from "next/head";

export default function NewRequest() {
  const save = async (user: requestDef) => {
    console.log("trying to save data");
    try {
      await insertDocument("requests", user);
      alert("Your Form Has Submitted successfully!");

      console.log("User data saved successfully!");
    } catch (error) {
      // Handle any errors that occur during the save process
      console.error("Error saving user data:", error);
    }
  };

  const pageTitle = "New Request";
  return (
    <main>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Form submitBtnLable="ADD" title="ADD USER" save={save} />
    </main>
  );
}