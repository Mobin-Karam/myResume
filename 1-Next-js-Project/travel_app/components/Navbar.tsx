// import React from "react"
// ^ in Next.js we dont need Import React from react

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link)=>(
            <Link className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all font-bold" href={link.href} key={link.key}>
              {link.label}
            </Link>
          ))}
        </ul>
      </Link>
    </nav>
  );
};

export default Navbar;
