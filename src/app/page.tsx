"use client";

import Image from "next/image";
import logo from "@/img/logo.png";
import Input from "@/components/input";
import Button from "@/components/button";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const formIsEmpty = useMemo(() => {
    if (!!loginForm.email && !!loginForm.password) return false;
    return true;
  }, [loginForm]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center px-6 py-12 bg-gray-200 rounded-lg w-3/12">
        <div className="">
          <Image
            src={logo}
            alt="Logo Sanimedica"
            width={200}
            className="mx-auto"
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
          <div className="space-y-6">
            <Input
              label="Email"
              name="email"
              type="email"
              placeholer="Inserisci email"
              value={loginForm?.email}
              onChange={(value, name) =>
                setLoginForm({
                  ...loginForm,
                  [name]: value,
                })
              }
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholer="Inserisci password"
              leftText="Hai dimenticato la password?"
              value={loginForm?.password}
              onChange={(value, name) =>
                setLoginForm({
                  ...loginForm,
                  [name]: value,
                })
              }
            />
            <Button
              text="LOGIN"
              disabled={formIsEmpty}
              onClick={() => router.push("/homepage")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
