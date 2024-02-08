"use client";

import Image from "next/image";
import logo from "@/img/logo.png";
import LoggedUser from "../logged-user";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const path = usePathname();

  // DON'T SHOW IN LOGIN PAGE
  if (path === "/") return null;
  return (
    <div className="flex justify-between py-5 cursor-pointer">
      <Link href={"/homepage"}>
        <Image src={logo} alt="Sanimedica Logo" width={200} />
      </Link>
      <LoggedUser />
    </div>
  );
};

export default Header;
