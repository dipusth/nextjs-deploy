"use client";
import React, { useEffect, useState } from "react";

import { useForm, type SubmitHandler } from "react-hook-form";
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
import type { LoginType } from "@/types/PostType";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser, updateActiveUser } from "@/utils/LocalStorage";
import { LoginWapper } from "../Styles";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const [data, setData] = useState<LoginType>({
    username: "",
    password: "",
  });
  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log("Submitted data:", data);
    // send to API or further process
    if (data.username == "" || data.password == "") {
      alert("Please fill up the form");
      return;
    }

    const user = getUser(data.username, data.password);
    console.log("user", user);
    if (user == null) {
      alert("Username or password is not correct");
      return;
    }
    console.log("user", user);
    updateActiveUser(user);
    redirect("/");
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleInputChannge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.id;
    const value = event.target.value;
    setData({ ...data, [id]: value });
    console.log("handleInputChannge", event);
    console.log("handleInputChannge value", value);
    console.log("data value", data);
  };
  // const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   if (data.username == "" || data.password == "") {
  //     alert("Please fill up the form");
  //     return;
  //   }

  //   const user = getUser(data.username, data.password);
  //   console.log("user", user);
  //   if (user == null) {
  //     alert("Username or password is not correct");
  //     return;
  //   }
  //   console.log("user", user);
  //   updateActiveUser(user);
  //   navigate("/dashboard");
  // };
  return (
    <LoginWapper className="bg-wrapper bg-props bg-primary-400  h-full overflow-hidden ">
      <div className="flex items-center h-full">
        <div className="z-10 form-wrapper max-w-[400px] mx-auto relative">
          <Card className="border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Welcome</CardTitle>
              <CardDescription>
                Login with your Apple or Google account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="grid gap-6">
                  <div className="flex flex-col gap-4">
                    <Button variant="outline" className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                          fill="currentColor"
                        />
                      </svg>
                      Login with Apple
                    </Button>
                    <Button variant="outline" className="w-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                          fill="currentColor"
                        />
                      </svg>
                      Login with Google
                    </Button>
                  </div>
                  <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-card text-muted-foreground relative z-10 px-2">
                      Or continue with
                    </span>
                  </div>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="username">username</Label>
                      <Input
                        id="username"
                        type="email"
                        placeholder="admin@example.com"
                        {...register("username", {
                          onChange: handleInputChannge,
                          required: "Email is required",
                          pattern: {
                            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.username && (
                        <p style={{ color: "red" }}>
                          {errors.username.message}
                        </p>
                      )}
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                        <a
                          href="#"
                          className="ml-auto text-sm underline-offset-4 hover:underline"
                        >
                          Forgot your password?
                        </a>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                          onChange: handleInputChannge,
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                      />
                      {errors.password && (
                        <p style={{ color: "red" }}>
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                    <Button type="submit" className="w-full btn">
                      Login
                    </Button>
                  </div>
                  <div className="text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-primary">
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
          <div className="mt-1 text-white text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </LoginWapper>
  );
};

export default LoginPage;
