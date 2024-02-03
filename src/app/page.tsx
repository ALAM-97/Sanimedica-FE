"use client";

import Image from "next/image";
import logo from "@/img/Logo.png";
import Input from "@/components/input";
import Button from "@/components/button";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" flex flex-col justify-center px-6 py-12 bg-gray-200 rounded-lg w-3/12">
        <div className="">
          <Image
            src={logo}
            alt="Logo Sanimedica"
            width={200}
            className="mx-auto"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <form className="space-y-6" action="#" method="POST">
            <Input label="Email" name="email" type="email" />
            <Input
              label="Password"
              name="password"
              type="password"
              leftText="Hai dimenticato la password?"
            />
            <Button text="LOGIN" onClick={() => alert("ciao")} />
          </form>
        </div>
      </div>
    </div>
  );
}
