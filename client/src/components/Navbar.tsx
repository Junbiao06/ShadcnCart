import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import { Button } from "./ui/button";
import CustomModeToggle from "./ui/custom/CustomModeToggle";
import CustomShoppingCart from "./ui/custom/CustomShoppingCart";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center border-b border-gray-200  pb-4 sticky top-0 bg-background z-10 p-4 -mt-4">
      <div className="">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="ShadcnCart"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden md:block text-md font-medium tracking-wider font-playwrite">
            ShadcnCart.
          </p>
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <SearchBar />
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <Home className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <Bell className="h-[1.2rem] w-[1.2rem]" />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/cart">
            <CustomShoppingCart />
          </Link>
        </Button>
        <div className="hidden sm:block">
          <CustomModeToggle />
        </div>
        <Link href="/login">sign in</Link>
      </div>
    </nav>
  );
};

export default Navbar;
