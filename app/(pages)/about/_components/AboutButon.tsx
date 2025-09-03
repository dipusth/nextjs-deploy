"use client";
import React from "react";
import TestComponent from "./TestComponent";
import Link from "next/link";

const AboutButon = () => {
  console.log("this is about button");
  return (
    <div className="my-5">
      {/* <TestComponent /> */}
      <Link href={"/"} className="bg-primary text-white rounded-md py-2 px-5">
        Go Home
      </Link>
    </div>
  );
};

export default AboutButon;
