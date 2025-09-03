"use client";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { ChevronDown, ShoppingCart, UserRound, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  deleteActiveUser,
  getActiveUser,
  IuserType,
} from "@/utils/LocalStorage";
import { redirect, usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import Navigation from "./Navigation";
import { ModeToggle } from "./DropDown";
import SearchBar from "./Search";

const Navbar = () => {
  const { cart } = useCart();
  const [activeUser, setActiveUser] = useState<IuserType>();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const data = getActiveUser();
    setActiveUser(data);
  }, []);

  const handleLogOut = () => {
    deleteActiveUser();
    redirect("/login");
  };

  const hasCart = cart.length;

  return (
    <header className="sticky top-0 bg-white z-50 border-b dark:bg-gray-800">
      <nav className="px-4 lg:px-6 py-3 container">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          {/* Logo + Search */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
            </Link>
            <div className="hidden md:block">
              <SearchBar />
            </div>
          </div>

          {/* Hamburger for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <Navigation />
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center gap-4">
            <ModeToggle />
            <Link href="/cart" className="relative">
              <ShoppingCart />
              {hasCart > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {hasCart}
                </span>
              )}
            </Link>

            <div className="flex items-center gap-2">
              <UserRound />
              {activeUser ? (
                <>
                  <span>{activeUser.name}</span>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="p-2 cursor-pointer">
                      <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="start"
                      side="bottom"
                      sideOffset={8}
                    >
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogOut}
                          className="cursor-pointer"
                        >
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <Link href="/login">Login</Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <div className="block md:hidden px-2">
              <SearchBar />
            </div>
            <Navigation />
            <div className="flex items-center justify-between px-2">
              <Link href="/cart" className="relative flex items-center gap-2">
                <ShoppingCart />
                {hasCart > 0 && (
                  <span className="badge rounded-full bg-red-600 text-white text-xs px-2">
                    {hasCart}
                  </span>
                )}
              </Link>
              <ModeToggle />
              <div className="flex items-center gap-2">
                <UserRound />
                {activeUser ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild className="p-2 cursor-pointer">
                      <ChevronDown />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      className="w-56"
                      align="start"
                      side="bottom"
                      sideOffset={8}
                    >
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuGroup>
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={handleLogOut}
                          className="cursor-pointer"
                        >
                          Logout
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link href="/login">Login</Link>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
