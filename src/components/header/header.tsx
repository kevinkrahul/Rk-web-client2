"use client";

import Image from "next/image";
import rasilogo from "../../../public/icons/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  // SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

const SHEET_SIDES = ["left"] as const;


export const Navigation = ["HOME", "ABOUT", "PRODUCT", "CONTACT"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
 
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 w-full border border-b z-50 p-4 md:pt-1 md:pb-3 flex justify-center items-center ${
        scrolled ? "bg-bag-fade shadow-md" : "bg-background"
      }`}
    >
      <a className="mr-2 md:hidden">
        <div className="">
          {SHEET_SIDES.map((side) => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant="outline">
                  <svg
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                  >
                    <path
                      d="M3 5H11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 12H16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M3 19H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Kv Mahal</SheetTitle>
                  <SheetDescription>
                    We are welcome you to make your day special
                  </SheetDescription>
                </SheetHeader>
                <div>
                  {Navigation.map((item, index) => (
                    <div key={index}>
                      <SheetClose asChild>
                      <Link
                        href={
                          item.toLowerCase() === "home"
                            ? `/`
                            : `/${item.toLowerCase()}`
                        }
                      >
                        <Button variant={"ghost"}>{item}</Button>
                      </Link>
                      </SheetClose>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </a>

      <Link href="/" className="w-full flex justify-start">
          <div className=" lg:ml-9 flex flex-col items-center justify-center">
              <Image src={rasilogo} alt={"Rasi logo"} width={100} height={100} />
              <span className="hidden lg:text-[11px] text-xs font-sans text-logo md:block">Rasi Kitchen Equipments</span>
              {/* <span className="hidden lg:text-sm text-xs text-header-grad font-normal md:block">Rasi Kitchen Equipments</span> */}
          </div>
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-6">
          {Navigation.map((items, index) => (
            <NavigationMenuItem key={index}>
              <Link
                href={
                  items.toLowerCase() === "home"
                    ? "/"
                    : `/${items.toLowerCase()}`
                }
                
                passHref
              >
                <NavigationMenuLink asChild className="bg-transparent text-lg font-medium hover:text-header-grad">
                  <span className={navigationMenuTriggerStyle()}>{items}</span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <aside className="flex w-[40vw] lg:w-full  justify-end">
      </aside>
    </header>
  );
};

export default Header;
