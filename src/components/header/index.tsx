import Image from "next/image";
import logo from "@/img/logo.png";
import LoggedUser from "../logged-user";

const Header = () => {
  return (
    <div className="flex justify-between py-5 cursor-pointer">
      <Image src={logo} alt="Sanimedica Logo" width={200} />
      <LoggedUser />
    </div>
  );
};

export default Header;
