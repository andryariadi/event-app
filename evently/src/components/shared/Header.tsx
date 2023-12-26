"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

export default function Header() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgrounColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgrounColor();
    window.addEventListener("scroll", changeBackgrounColor);
  });
  return (
    <>
      <header className={`w-full border-b fixed z-10 ${changeColor ? "bg-gradient-to-br from-white to-sky-100" : null} transition-all duration-300`}>
        <div className="wrapper flex items-center justify-between">
          <Link href="/" className="w-36">
            <Image src="/assets/images/evently.svg" alt="Evently" width={128} height={38} />
          </Link>
          <SignedIn>
            <nav className="hidden md:flex-between w-full max-w-xs">
              <NavItems />
            </nav>
          </SignedIn>
          <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <MobileNav />
            </SignedIn>
            <SignedOut>
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </header>
    </>
  );
}
