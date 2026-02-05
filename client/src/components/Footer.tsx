import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-8 xl:flex-row xl:items-start xl:justify-around md:gap-0 bg-primary-foreground p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center xl:items-start">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="ShadcnCart"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
          />
          <p className="hidden xl:block text-md font-medium tracking-wider font-playwrite">
            ShadcnCart.
          </p>
        </Link>
        <p className="text-sm text-gray-400">@ 2026 ShadcnCart.</p>
        <p className="text-sm text-gray-400">All rights reserved.</p>
      </div>
      <div className="flex flex-col gap-4 text-sm items-center xl:items-start">
        <p className="text-lg uppercase font-bold">Products</p>
        <Link href="/" className="text-gray-400 hover:underline">
          Shoes
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Clothing
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Accessories
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm items-center xl:items-start">
        <p className="text-lg uppercase font-bold">Categroy</p>
        <Link href="/" className="text-gray-400 hover:underline">
          Men
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Women
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Kids
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Outlet
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm items-center xl:items-start">
        <p className="text-lg uppercase font-bold">Company Info</p>
        <Link href="/" className="text-gray-400 hover:underline">
          About Us
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Careers
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Join The Club
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm items-center xl:items-start">
        <p className="text-lg uppercase font-bold">Support</p>
        <Link href="/" className="text-gray-400 hover:underline">
          Help
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Contact Us
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-sm items-center xl:items-start">
        <p className="text-lg uppercase font-bold">Links</p>
        <Link href="/" className="text-gray-400 hover:underline">
          Home
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Contact
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Terms of Service
        </Link>
        <Link href="/" className="text-gray-400 hover:underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Footer;
