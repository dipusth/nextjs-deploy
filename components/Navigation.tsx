"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
      {/* {navLinks.map((navLink, index) => (
        <Link
          key={index}
          href={navLink.route}
          className={
            pathname === navLink.route
              ? "font-bold text-primary  mr-4"
              : "mr-4"
          }
        >
          {navLink.label}
        </Link>
      ))} */}

      <Link
        href={"/"}
        className={pathname === "/" ? "font-bold text-primary  mr-4" : "mr-4"}
      >
        Home
      </Link>
      <Link
        href={"/products"}
        className={
          pathname === "/products" ? "font-bold text-primary  mr-4" : "mr-4"
        }
      >
        Products
      </Link>
      <Link
        href={"/about"}
        className={
          pathname === "/about" ? "font-bold text-primary  mr-4" : "mr-4"
        }
      >
        About
      </Link>
      <Link
        href={"/contact"}
        className={
          pathname === "/contact" ? "font-bold text-primary  mr-4" : "mr-4"
        }
      >
        Contact
      </Link>
    </div>
  );
};

export default Navigation;
