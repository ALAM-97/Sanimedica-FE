"use client";

import { useState } from "react";
import Card from "@/components/card";
import Header from "@/components/header";
import Select from "@/components/select";
import Image from "next/image";
import { monthsOptions, yearsOptions } from "@/data";
import rendicontazione from "@/img/icons/rendicontazione.png";
import fatturazione from "@/img/icons/fatturazione.png";
import listaFatture from "@/img/icons/lista-fatture.png";

const Homepage = () => {
  const [period, setPeriod] = useState({ month: "", year: "" });

  const homepageSections = [
    {
      name: "Rendicontazione",
      img: rendicontazione,
      disabled: false,
    },
    {
      name: "Fatturazione",
      img: fatturazione,
      disabled: false,
    },
    {
      name: "Lista Fatture",
      img: listaFatture,
      disabled: true,
    },
  ];

  return (
    <>
      <Header />
      <div className="w-full h-5/6 flex flex-col justify-center items-center">
        <div className="flex gap-5 mb-10">
          <Select
            options={monthsOptions}
            name="month"
            label="Mese"
            className="w-96"
            onChange={(value, name) => setPeriod({ ...period, [name]: value })}
          />
          <Select
            options={yearsOptions}
            name="year"
            label="Anno"
            className="w-52"
            onChange={(value, name) => setPeriod({ ...period, [name]: value })}
          />
        </div>
        <div className="flex gap-5">
          {homepageSections.map((section) => (
            <Card
              className="opacity-50 hover:opacity-75"
              key={section.name}
              disabled={section.disabled}
            >
              <Image
                src={section.img}
                alt={section.name}
                width={200}
                className=""
              />
              <div className="pt-3 text-center font-bold text-2xl w-">
                {section.name}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homepage;
