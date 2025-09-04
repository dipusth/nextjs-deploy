"use client";
import React, { useEffect, useState } from "react";

import {
  addNewUser,
  isUserAlreadyReistered,
  type IuserType,
} from "@/utils/LocalStorage";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { LoginWapper } from "../Styles";

export const Roles = {
  Superadmin: "SuperAdmin",
  Admin: "Admin",
  User: "User",
};

// export const Roles = {
//   Superadmin: "SuperAdmin",
//   Admin: "Admin",
//   User: "User",
// } as const;

// export type Roles = (typeof Roles)[keyof typeof Roles];
const RegisterPage = () => {
  const [data, setData] = useState<IuserType>({
    name: "",
    username: "",
    password: "",
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [message, setMessage] = useState<React.ReactNode>("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
    setMessage("");
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (data.name == "" || data.username == "" || data.password == "") {
      setMessage("Please fill the form");
      return;
    }
    // If emnail Id already exist
    if (isUserAlreadyReistered(data.username)) {
      setMessage(
        <>
          User already exist. Click to
          <Link href={"/login"} className="text-primary cursor-pointer pl-1">
            Login
          </Link>
          .
        </>
      );
      return;
    }

    addNewUser(data);
    if (data) {
      setMessage(
        <>
          User created successfully. Click on
          <Link href={"/login"} className="text-primary cursor-pointer pl-1">
            Login
          </Link>
          .
        </>
      );
    }
    setData({
      name: "",
      username: "",
      password: "",
    });
  };
  return (
    <LoginWapper className="bg-wrapper bg-props bg-primary-400  h-full overflow-hidden ">
      <div className="flex item-center h-full">
        <div className="form-wrapper py-20 max-w-[400px] mx-auto z-10 relative">
          <Card className="border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Register</CardTitle>
              <CardDescription>
                Please enter the form details below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit}>
                <div className="grid gap-6">
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter Full Name"
                        value={data.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="username">username</Label>
                      <Input
                        id="username"
                        type="email"
                        placeholder="m@example.com"
                        value={data.username}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        value={data.password}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full btn">
                      Sign up
                    </Button>
                  </div>
                  <div className="text-center text-sm">
                    {message ? (
                      <p>{message} </p>
                    ) : (
                      <>
                        Already have an account?
                        <Link href="/login" className="text-primary pl-1">
                          Log in
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="mt-1  text-white  *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </LoginWapper>
  );
};

export default RegisterPage;
