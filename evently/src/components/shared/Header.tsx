import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";

export default function Header() {
  return (
    <>
      <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
          <Link href="/" className="w-36">
            <Image src="/assets/images/evently.svg" alt="Evently" width={128} height={38} />
          </Link>
          <SignedIn>
            <nav className="hidden md:flex-between w-full max-w-xs bg-red-700">
              <NavItems />
            </nav>
          </SignedIn>
          <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
              <NavItems />
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
