import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./navitems";
import MobileNav from "./mobilenav";

const Navbar = () => {
  return (
    <>
      <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
          <Link className="w-36" href="/">
            <Image
              src="/assets/images/logo.svg"
              width={128}
              height={38}
              alt="logo image"
            />
          </Link>
          <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
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
};

export default Navbar;
